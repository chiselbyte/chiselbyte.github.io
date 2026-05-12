import PillarPageLayout from "@/components/PillarPageLayout";
import AIArchDiagram from "@/components/diagrams/AIArchDiagram";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development",
  description:
    "Production LLM systems for classification, extraction, and decision support — schema-validated and observable. Not chatbots.",
  alternates: { canonical: "/services/ai-development" },
  openGraph: {
    title: "AI Development | Chiselbyte",
    description:
      "Production LLM systems. Not chatbots. Schema-validated outputs with Pydantic, Anthropic Claude API, MCP, FastAPI, and n8n.",
    url: "/services/ai-development",
  },
};

export default function AIServicePage() {
  return (
    <PillarPageLayout
      eyebrow="AI Development"
      title="Production LLM systems. Not chatbots."
      intro="We build LLM-powered software that goes into production and stays there — structured outputs, validated schemas, observable pipelines, real cost controls."
      positioning="Most teams ship LLM demos. We ship LLM systems. Lead qualification that classifies prospects into warm / lukewarm / cold from long-form content. Document extraction with audit trails. Decision-support workflows with human-in-the-loop fallbacks. The chat window, where it exists at all, is a fallback — not the product."
      whatWeBuild={[
        "Content classifiers (warm / cold / qualified / disqualified)",
        "Structured extraction from documents and long-form text",
        "Decision-support and routing workflows with human-in-the-loop",
        "MCP servers exposing business systems to AI assistants",
        "Claude Skills that codify domain expertise",
        "AI agents that automate multi-step workflows across tools",
      ]}
      diagram={<AIArchDiagram />}
      diagramTitle="The reference architecture"
      howItWorks={{
        title: "How an LLM feature actually ships",
        description:
          "Every LLM call we put into production runs through the same scaffolding. The model is one node in a pipeline that mostly looks like normal software.",
        steps: [
          {
            label: "Inputs are normalized and bounded",
            description:
              "We fetch, clean, and trim inputs to known token budgets. Cost and behavior are predictable before the model ever runs.",
          },
          {
            label: "Prompt is assembled deterministically",
            description:
              "Rubric, schema definition, and few-shot examples are composed from versioned config — not free text living in an SDK file somewhere.",
          },
          {
            label: "Model call with pinned versions",
            description:
              "Anthropic Claude with model version pinned and temperature low. Same input produces the same output, modulo controlled stochasticity.",
          },
          {
            label: "Output is schema-validated",
            description:
              "Pydantic validates every response. Invalid output gets one fix-it retry; still invalid goes to a human review queue. It never silently coerces.",
          },
          {
            label: "Audit trail to Postgres",
            description:
              "Verdict, reasoning, source excerpts, model version, prompt version, and timestamp are written for every call. Reproducible, defensible.",
          },
          {
            label: "Orchestration via n8n",
            description:
              "Scheduling, retries, CRM sync, and human-fallback notifications all live in n8n. The LLM is one node in a workflow.",
          },
        ],
      }}
      extraSections={[
        {
          title: "What we explicitly don't do",
          description:
            "We get asked about these often. We say no on purpose.",
          items: [
            {
              label: "Chatbots as the product",
              description:
                "Chat dumps the cognitive load on the user and the reliability burden on the model. We use chat only as a fallback for ambiguous cases.",
            },
            {
              label: "Fine-tuning for tasks Claude already does well",
              description:
                "A well-engineered prompt with few-shot examples almost always beats fine-tuning on cost, iteration speed, and maintainability.",
            },
            {
              label: "RAG for the sake of RAG",
              description:
                "Most \"chat-with-your-docs\" projects don't need RAG. They need extraction, classification, or a normal search index with a small LLM layer on top.",
            },
            {
              label: "Free-form text outputs in pipelines",
              description:
                "If a downstream system has to parse what the LLM said, the parse will eventually break. Schemas are the contract.",
            },
          ],
        },
      ]}
      featuredCaseStudy={{
        pillar: "AI",
        pillarColor: "bg-emerald-100 text-emerald-700",
        title: "Lead qualification for a B2B SaaS",
        outcome:
          "Schema-validated warm / lukewarm / cold classification from long-form prospect content, with structured reasoning fields and audit logs.",
        techBadges: ["Claude", "FastAPI", "Pydantic"],
        href: "/work/lead-qualification-saas",
      }}
      techStack={[
        "Anthropic Claude API",
        "MCP",
        "Pydantic",
        "FastAPI",
        "Python",
        "n8n + LLM nodes",
        "Node.js",
        "PostgreSQL",
      ]}
      opinion={{
        quote:
          "An LLM that returns free-form text is a bug surface. We make schemas the contract, validate every output, and route failures to humans. If your AI feature can't be unit tested, it isn't a feature yet.",
        href: "/blog/opinions/llm-apps-fail-in-production",
        linkLabel: "Why most LLM apps fail in production",
      }}
    />
  );
}
