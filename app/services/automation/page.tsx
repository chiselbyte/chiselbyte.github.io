import PillarPageLayout from "@/components/PillarPageLayout";
import AutomationArchDiagram from "@/components/diagrams/AutomationArchDiagram";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Process Automation (n8n)",
  description:
    "Self-hosted n8n automations that replace manual coordination. Scoped in a week, shipped in two, supported on a monthly retainer.",
  alternates: { canonical: "/services/automation" },
  openGraph: {
    title: "Business Process Automation (n8n) | Chiselbyte",
    description:
      "Self-hosted n8n flows that replace manual coordination, document chasing, and Excel-based ops tracking.",
    url: "/services/automation",
  },
};

export default function AutomationServicePage() {
  return (
    <PillarPageLayout
      eyebrow="Automation"
      title="Workflows that replace headcount."
      intro="Self-hosted n8n automations that replace manual coordination, document chasing, and Excel-based ops tracking — observable, recoverable, auditable."
      positioning="We use n8n as our automation backbone — self-hosted, full data control, no per-execution SaaS fees. Typical engagement: we scope one automation tightly, ship it in 1-2 weeks, then move you onto a monthly retainer covering hosting, monitoring, and incremental workflow additions. It's the engine behind a lot of our client deliverables — including lending operations, customer onboarding flows, and internal team notifications."
      whatWeBuild={[
        "Case routing and assignment automations",
        "Document collection and chasing workflows (WhatsApp / SMS / email)",
        "Notification and alert pipelines",
        "Multi-tool data syncing (CRMs, sheets, custom APIs)",
        "Internal team dashboards and forms without admin panels",
        "LLM-powered decision nodes inside automation flows",
        "Scheduled reports and reconciliation jobs",
      ]}
      diagram={<AutomationArchDiagram />}
      diagramTitle="The shape of an n8n flow"
      extraSections={[
        {
          title: "Our engagement model",
          description:
            "We lead with engagement model on this pillar because it's where the real differentiation lives. Most automation work fails because it's scoped wrong, not because the tools are wrong.",
          items: [
            {
              label: "Week 1: Scope and design",
              description:
                "We pick one workflow tightly. Map current state, define what done looks like, identify the integrations, and surface the edge cases the ops team has been quietly absorbing.",
            },
            {
              label: "Weeks 1-2: Build and ship",
              description:
                "We build the workflow in n8n on infrastructure we set up (self-hosted on Railway or your VPS). Ship it into production. Watch it run for a few days under real traffic.",
            },
            {
              label: "Monthly retainer: Operate and extend",
              description:
                "Hosting, monitoring, incident response, and incremental flow additions. We don't disappear after launch. Most clients add one or two new workflows per month.",
            },
            {
              label: "What we don't do",
              description:
                "We don't sell six-month \"automation strategy\" decks. We don't pad scope. We don't ship a workflow we wouldn't want to maintain ourselves.",
            },
          ],
        },
        {
          title: "Why self-hosted n8n, not SaaS automation tools",
          bullets: [
            "Full data control — no third party reading your customer data or PII as it flows through",
            "No per-execution pricing — automation cost stays flat as you scale, not linear with traffic",
            "Self-hosted on Railway, Hetzner, or your own VPS — your call",
            "Open source — you're not locked in if we ever disappear",
            "Integration with LLM nodes — Claude / OpenAI calls fit naturally inside flows",
          ],
        },
      ]}
      featuredCaseStudy={{
        pillar: "Automation",
        pillarColor: "bg-orange-100 text-orange-700",
        title: "Ops automation for a financial services firm",
        outcome:
          "n8n flows replaced manual onboarding coordination, document-chasing spreadsheets, and Slack-handoff Excel files — without a custom admin panel.",
        techBadges: ["n8n", "WhatsApp API", "Postgres"],
        href: "/work/ops-automation-financial-firm",
      }}
      techStack={[
        "n8n (self-hosted)",
        "Webhooks",
        "WhatsApp Business API",
        "Google Sheets API",
        "Claude API",
        "Railway / VPS",
        "PostgreSQL",
      ]}
      opinion={{
        quote:
          "Most internal tools are forms wired to databases — exactly what n8n already is. Build admin panels only when you've outgrown n8n. Not before.",
        href: "/blog/opinions/n8n-vs-admin-panels",
        linkLabel: "Why we use n8n instead of admin panels",
      }}
    />
  );
}
