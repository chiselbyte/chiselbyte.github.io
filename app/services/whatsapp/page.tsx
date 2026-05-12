import PillarPageLayout from "@/components/PillarPageLayout";
import WhatsAppArchDiagram from "@/components/diagrams/WhatsAppArchDiagram";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Business API & Portal",
  description:
    "Multi-tenant WhatsApp Business API portals via Meta Embedded Signup. We handle the Graph API mess so your customers don't see it.",
  alternates: { canonical: "/services/whatsapp" },
  openGraph: {
    title: "WhatsApp Business API & Portal | Chiselbyte",
    description:
      "Multi-tenant WABA portals via Meta Embedded Signup — from app review to template approval. Without BSP markup.",
    url: "/services/whatsapp",
  },
};

export default function WhatsAppServicePage() {
  return (
    <PillarPageLayout
      eyebrow="WhatsApp Business API"
      title="Multi-tenant WhatsApp portals — without BSP markup."
      intro="We build multi-tenant WhatsApp Business API portals end-to-end: Embedded Signup, template lifecycle, broadcast infrastructure, and the Meta app review process."
      positioning="Most agencies pay BSPs per message and lose margin on every campaign. We build the portal infrastructure that lets you onboard your own tenants directly via Meta's Embedded Signup — Graph API tokens, webhook subscription, template approval, phone verification, and the policy answers Meta asks during app review. We've shipped it. We can ship it for you."
      whatWeBuild={[
        "Multi-tenant WABA portals with Meta Embedded Signup",
        "OAuth + System User token generation and refresh",
        "Webhook subscription and verification",
        "Template lifecycle (creation, approval, versioning)",
        "Phone number registration and verification flows",
        "Two-way conversation management and routing",
        "Broadcast campaign tooling",
        "Meta app review policy and compliance answers",
      ]}
      diagram={<WhatsAppArchDiagram />}
      diagramTitle="How tenant onboarding actually works"
      howItWorks={{
        title: "How tenant onboarding actually works",
        description:
          "What looks like \"click a button to connect WhatsApp\" is actually six or seven moving parts. We've shipped them all.",
        steps: [
          {
            label: "Meta App configured + reviewed",
            description:
              "We handle the App Dashboard setup, permissions, webhook URLs, and the policy / use-case answers Meta asks during app review.",
          },
          {
            label: "Tenant clicks Embedded Signup",
            description:
              "Meta's Embedded Signup launches in a modal. Tenant authorizes your app, picks a WABA, and assigns phone numbers.",
          },
          {
            label: "Token exchange + System User assignment",
            description:
              "We exchange the temporary code for a long-lived access token, generate a System User token for the WABA, and store both encrypted in your DB.",
          },
          {
            label: "Webhook subscription per tenant",
            description:
              "We subscribe to message + status webhooks scoped to that WABA. Inbound messages route to the correct tenant automatically.",
          },
          {
            label: "Phone verification + template approval",
            description:
              "Tenant verifies their phone number through Meta. Templates are submitted for approval and status-tracked.",
          },
          {
            label: "Send + receive at scale",
            description:
              "Tenant can now send broadcasts, handle inbound conversations, and manage templates from your portal — without paying a BSP per message.",
          },
        ],
      }}
      extraSections={[
        {
          title: "The Meta gauntlet (what we handle)",
          description:
            "These are the parts everyone underestimates. We've done them. Their existence as a list on this page is the proof.",
          bullets: [
            "Meta App Dashboard configuration: permissions, webhook subscriptions, redirect URIs",
            "App review with use-case and data-handling answers Meta will actually accept",
            "Embedded Signup flow with WABA scoping",
            "OAuth code → long-lived access token exchange",
            "System User token generation for per-WABA programmatic access",
            "Token storage, encryption, and refresh handling",
            "Webhook subscription per WABA + verification flow",
            "Per-tenant webhook routing (one Meta endpoint, many tenants)",
            "Template creation, submission for approval, status tracking",
            "Phone number registration, verification, and registration completion",
            "Partner-assigned account setup (when tenants come pre-assigned)",
            "Rate limit awareness and broadcast queue management",
          ],
        },
      ]}
      featuredCaseStudy={{
        pillar: "WhatsApp",
        pillarColor: "bg-green-100 text-green-700",
        title: "Multi-tenant WhatsApp portal for an agency",
        outcome:
          "Embedded Signup, template lifecycle, and broadcast infrastructure serving dozens of merchant tenants — no per-message BSP markup.",
        techBadges: ["Next.js", "Express", "Meta Graph API"],
        href: "/work/whatsapp-portal-agency",
      }}
      techStack={[
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Meta Graph API",
        "Railway",
        "Webhooks",
      ]}
      opinion={{
        quote:
          "The Meta integration is hard once. We've done it. Pay us instead of paying a BSP per message for the next ten years.",
      }}
    />
  );
}
