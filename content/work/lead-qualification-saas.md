## The problem

A B2B SaaS company was burning SDR hours grading inbound leads by hand. Their qualification rubric required reading whatever the prospect had published — long-form articles, blog posts, company web pages — and forming a verdict: **warm**, **lukewarm**, or **cold**. Each SDR did it slightly differently. Verdicts weren't reproducible. By the time a lead reached an account executive, no one could explain *why* it was rated the way it was.

Three problems compounded:

1. **Throughput.** SDRs could grade maybe twenty long-form sources a day. New leads were piling up faster than they could be read.
2. **Drift.** Two SDRs reading the same blog post often disagreed on the tier. The rubric was tribal knowledge, not a system.
3. **No audit trail.** When a lead got reassigned or escalated, the *reasoning* behind the grade was gone. AEs were re-reading the same articles to figure out what the SDR saw.

They didn't want a chatbot. They wanted the grading to be deterministic enough to defend in a Monday pipeline review.

## What we built

A pipeline. Not a chat window.

The system ingests a prospect record with one or more long-form content URLs, fetches and cleans the content, sends it to the LLM with a context-rich prompt that encodes the company's qualification rubric, and forces the response into a strict Pydantic schema. Every output includes:

- A tier: `warm` | `lukewarm` | `cold`
- A confidence score
- Structured reasoning fields tied to each rubric criterion (so AEs can see *why*)
- The exact source excerpts that drove each criterion
- A model version, prompt version, and timestamp for the audit trail

Each call writes to Postgres. Validation failures — outputs that don't parse against the schema — are caught, retried with a fix-it prompt, and if still invalid, routed to a human review queue. They are never silently dropped or coerced.

## How the pipeline runs

The pipeline runs in FastAPI with an n8n wrapper that handles scheduling, retries, and CRM sync. The LLM is one node in a workflow — not the workflow itself. The architecture diagram above shows the full path: content fetch, prompt assembly, model call, schema validation, retry-or-queue on failure, durable Postgres write, and downstream CRM sync via n8n.

## Hard decisions

**We forced structured output instead of letting the model "decide."**
The temptation with LLMs is to let them write a paragraph. We rejected that. Every output is a Pydantic model. If the LLM can't fit its answer into the schema, the answer doesn't ship. This made the system unit-testable for the first time in its lifecycle.

**We didn't fine-tune.**
Claude with a well-engineered prompt — including few-shot examples of borderline lukewarm-vs-cold cases — outperformed our first fine-tuning experiments and was orders of magnitude cheaper to maintain. The cost of fine-tuning isn't compute; it's the engineering process of curating, evaluating, and redeploying. The schema-and-prompt approach lets the SDR lead change the rubric in a config file without retraining anything.

**We did not build a "review and override" UI.**
Instead, we wrote validation failures to a Postgres queue and gave the ops team an n8n form view. Total UI engineering: zero. Total time to ship the review loop: an afternoon. This is exactly the kind of internal tool [we'd never build an admin panel for](/blog/opinions/n8n-vs-admin-panels).

## Result

- SDR throughput on long-form qualification went from ~20 leads/day to "as many as the pipeline can fetch" — the bottleneck is now content fetching, not human reading.
- Every verdict is reproducible. The same lead, run twice, produces the same tier with the same reasoning structure (modulo LLM nondeterminism, which we control with low temperature and pinned model versions).
- AEs can see *why* a lead was tiered without re-reading the source material — the structured reasoning is in the CRM record.
- Validation failure rate sits below 2%. Those go to human review, not the customer.

## Tech stack

- **LLM**: Anthropic Claude (Sonnet for cost/quality balance, pinned version)
- **Schema**: Pydantic
- **API**: FastAPI
- **Orchestration**: n8n (scheduling, retries, CRM sync)
- **Database**: PostgreSQL (verdicts, audit log, review queue)
- **Language**: Python 3.11

## Why this is a good fit for our shop

This project is the canonical example of [why we build LLM systems instead of LLM demos](/blog/opinions/llm-apps-fail-in-production). The hard parts weren't the model — they were the schema, the validation, the audit trail, the human-fallback queue, and the operational scaffolding. The "AI" is one node in a pipeline that mostly looks like normal software, because that's what production-grade AI actually is.
