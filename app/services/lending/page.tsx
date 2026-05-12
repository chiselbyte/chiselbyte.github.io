import PillarPageLayout from "@/components/PillarPageLayout";
import LendingArchDiagram from "@/components/diagrams/LendingArchDiagram";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lending & Fintech Software",
  description:
    "Custom software for lending businesses — onboarding, KYC, credit decisioning, disbursement tracking. Built in weeks, not quarters.",
  alternates: { canonical: "/services/lending" },
  openGraph: {
    title: "Lending & Fintech Software | Chiselbyte",
    description:
      "Onboarding, KYC, credit decisioning, multi-bureau credit dashboards (CIBIL / CRIF / Equifax). Pragmatic stack, shipped fast.",
    url: "/services/lending",
  },
};

export default function LendingServicePage() {
  return (
    <PillarPageLayout
      eyebrow="Lending & Fintech"
      title="Lending software built in weeks. Not quarters."
      intro="Onboarding, KYC routing, credit decisioning, disbursement tracking, and bureau report rendering — designed pragmatically, shipped fast."
      positioning="We build lending software the way operators actually need it: lightweight state-machine workflows, PostgreSQL, n8n orchestration, and WhatsApp for customer touchpoints. Not Salesforce. Not a 12-quarter enterprise platform. We cover the full credit bureau stack — CIBIL, CRIF, Equifax, consumer and commercial — and the derived insight layer that makes those reports actually useful."
      whatWeBuild={[
        "Customer onboarding and KYC verification routing",
        "Document collection pipelines with WhatsApp / SMS chasing",
        "Credit decisioning workflows (rule-based + LLM-assisted)",
        "Multi-bureau credit report dashboards (CIBIL / CRIF / Equifax)",
        "Derived insights: capital utilization, account tenure, DPD bucketing, year-on-year trends",
        "Disbursement and collections tracking",
        "Operational dashboards without custom admin panels",
      ]}
      diagram={<LendingArchDiagram />}
      diagramTitle="The reference architecture"
      howItWorks={{
        title: "Our reference architecture for lending",
        description:
          "A lightweight stack that handles the actual complexity of lending operations without dragging an enterprise platform along.",
        steps: [
          {
            label: "Customer application + KYC",
            description:
              "Web or WhatsApp-initiated application. KYC verification routed through whichever provider you use. State persisted in PostgreSQL with a state-machine model.",
          },
          {
            label: "Document collection",
            description:
              "n8n flows chase missing documents over WhatsApp and SMS — automatically, with backoff and SLA awareness. Ops doesn't manually follow up.",
          },
          {
            label: "Bureau fetch + normalization",
            description:
              "CIBIL / CRIF / Equifax responses are ingested, schema-normalized, and stored. Derived insights computed on top: utilization, tenure, DPD, year-on-year trends.",
          },
          {
            label: "Credit decisioning",
            description:
              "Rule-based decision tree, optionally augmented with LLM-assisted reasoning for borderline cases. Every decision is auditable.",
          },
          {
            label: "Disbursement + tracking",
            description:
              "Disbursement triggered programmatically. Collections, repayment, and DPD tracking flow back into the same model.",
          },
        ],
      }}
      extraSections={[
        {
          title: "Credit bureau coverage",
          description:
            "We've shipped against all three Indian bureaus, in both consumer and commercial flavors, and we know where each one lies about itself.",
          items: [
            {
              label: "CIBIL",
              description:
                "Consumer (CIR) and Commercial (CCR). We map account history, enquiries, and DPD into a normalized model your team can actually query.",
            },
            {
              label: "CRIF High Mark",
              description:
                "Consumer and Commercial. We've handled the response variants, microfinance segments, and the historical enquiry quirks.",
            },
            {
              label: "Equifax",
              description:
                "Consumer and Commercial. Different XML/JSON shape, same destination — our internal normalized credit model.",
            },
            {
              label: "The derived insight layer",
              description:
                "On top of normalized data: capital utilization, account tenure distribution, DPD bucketing, year-on-year credit trend curves. Branded dashboards your team can hand to a borrower.",
            },
          ],
        },
      ]}
      featuredCaseStudy={{
        pillar: "Lending",
        pillarColor: "bg-indigo-100 text-indigo-700",
        title: "Multi-bureau credit dashboards for a lending startup",
        outcome:
          "Unified CIBIL, CRIF, and Equifax responses (consumer + commercial) into branded dashboards with derived utilization, tenure, and DPD insights.",
        techBadges: ["Node.js", "Postgres", "React"],
        href: "/work/multi-bureau-credit-dashboard",
      }}
      techStack={[
        "Java / Spring Boot",
        "Node.js / Express",
        "React",
        "PostgreSQL",
        "n8n",
        "WhatsApp Business API",
        "Railway",
      ]}
      opinion={{
        quote:
          "Most lending platforms are overbuilt. We pick the smallest stack that survives production — and let you replace one piece at a time when you actually outgrow it.",
        href: "/how-we-build",
        linkLabel: "How we build",
      }}
    />
  );
}
