Most LLM features die quietly.

They ship to a small percentage of users with a feature flag, look impressive in the demo, and then a few months later someone notices the team has slowly turned them off — first for enterprise accounts, then for everyone. The roadmap moves on. No one wants to do a retro on why the AI feature didn't work, because the answer is uncomfortable: the model was fine. The system around it wasn't.

We've watched this pattern enough times to have an opinion about it. It boils down to one mistake.

## The mistake: treating LLM output like a string

The default mental model when you start integrating an LLM is: "I'll send the model some text, get text back, and show it to the user." That mental model is fine for chat demos. It is catastrophic for anything you want to put in a pipeline.

The instant LLM output flows into another system — a database write, a downstream API call, a workflow branch, a rendered email — that text becomes a runtime input to your code. Runtime inputs that are unstructured strings have a name in normal software: they're called bugs.

Three failure modes, all from real codebases we've seen:

1. **Silent format drift.** A prompt that returned reliable JSON last week starts returning JSON wrapped in markdown code fences this week, because OpenAI shipped a model update. The string parser fails. The downstream system writes empty values into the database. Nobody notices for two weeks until a customer asks why a field is blank.
2. **Plausible nonsense.** The model hallucinates a field value that *looks* correct, parses fine, and writes to the database. Three months later you discover that 4% of records reference an account ID that has never existed. Now you have to figure out how to clean it up.
3. **Behavior that can't be tested.** Your AI feature has no unit tests because "you can't unit test an LLM." So you can't refactor. So you can't change the prompt without manual QA. So the prompt becomes load-bearing legacy code that nobody wants to touch.

All three of these have the same root cause: free-form text outputs.

## The fix: schemas as the contract

Boring software has known interfaces between components. We treat the LLM exactly like any other component. The interface is a schema.

In our pipelines, every LLM call:

1. **Specifies the output schema** in the prompt — a Pydantic model definition, sometimes with a few-shot example of the populated JSON.
2. **Validates the output** against that schema the moment it comes back. We use Pydantic. The model parses or it raises.
3. **Retries on validation failure** with a fix-it prompt that includes the validation error.
4. **Routes still-failed outputs to a human queue** — they don't get coerced, dropped, or guessed at.
5. **Logs the model version, prompt version, and validation outcome** alongside every call. So six months from now you can answer "why did this verdict get rendered the way it did?"

That's it. That's the whole thing. Nothing exotic. Nothing AI-flavored. It's how we'd structure any boundary between a stochastic process and a deterministic system.

## Three things this unlocks

**It becomes unit-testable.** You can write tests that assert "given input X, the output should validate against schema Y and have field `tier` in {warm, lukewarm, cold}." You can run those tests in CI. You can refactor the prompt and know within seconds whether you broke anything. This single thing is worth more than any model upgrade.

**The retry loop becomes real.** When the model returns garbage, you actually know it returned garbage. You can retry with the validation error appended to the prompt. About 80% of the time, the second attempt succeeds. The remaining 20% goes to a queue your ops team can clear. None of it goes into your database silently.

**Costs become predictable.** When inputs and outputs are bounded by schema and prompt template, you can compute the token cost per call with reasonable accuracy. You can budget. You can decide that this particular feature isn't worth 80 cents per invocation and redesign it. Free-form text outputs make all of this impossible.

## What this requires you to give up

You give up the illusion of magic. The output your model produces is no longer an open-ended response that could be anything; it's a structured value that fits a defined shape. That feels less impressive in a demo.

We don't care. Demos aren't production. Production is what your team has to keep alive at 2am when something is on fire.

## When this is worth doing

For anything that flows into another system. Classification, extraction, decision support, routing, content generation that feeds a template — anything where what the LLM produces becomes input to a deterministic process. The schema layer is non-negotiable.

For pure-output features where a human is the consumer — like a chat assistant where the user sees the raw text — you have more latitude. Even then, our default is to constrain output structure where we can, because users have opinions about consistency too.

## The boring future

The most useful LLM systems we've built look almost identical to normal software. There's an input. There's a deterministic transformation. There's a schema-validated output. There's logging, retries, and human fallbacks. The LLM is one node in a workflow. It's not the workflow.

That's the future we're building toward, and we think most of the AI-feature graveyard is going to be filled with systems that didn't make this jump in time.

If your team is shipping LLM features that you're worried about, [tell us about it](/contact). The pattern is fixable. You just have to stop treating the model like it's anywhere close to magic.
