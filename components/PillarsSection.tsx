"use client";

import Link from "next/link";
import { Brain, Landmark, MessageSquare, Workflow, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { trackEvent } from "@/lib/analytics";

interface Pillar {
  icon: typeof Brain;
  title: string;
  positioning: string;
  capabilities: string[];
  href: string;
  iconColor: string;
  iconBg: string;
}

const pillars: Pillar[] = [
  {
    icon: Brain,
    title: "AI-Powered Software Development",
    positioning:
      "Production LLM systems for classification, extraction, and decision support — not chat windows. Schema-validated outputs with Pydantic, Anthropic Claude, MCP, FastAPI, and n8n.",
    capabilities: [
      "Lead qualification: warm / lukewarm / cold from long-form content",
      "Document extraction with audit trails",
      "Decision-support workflows with human-in-the-loop",
    ],
    href: "/services/ai-development",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    icon: Landmark,
    title: "Custom Software for Lending & Financial Services",
    positioning:
      "Onboarding, KYC routing, credit decisioning, and disbursement tracking. State-machine workflows, PostgreSQL, n8n orchestration — built by people who've shipped fintech.",
    capabilities: [
      "Multi-bureau credit dashboards (CIBIL / CRIF / Equifax)",
      "KYC + document collection pipelines",
      "Disbursement and collections tracking",
    ],
    href: "/services/lending",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business API Integration & Portal",
    positioning:
      "Multi-tenant WABA portals via Meta Embedded Signup — from app review to template approval. We handle the Graph API mess so your customers don't see it.",
    capabilities: [
      "Embedded Signup + OAuth / System User tokens",
      "Template approval, phone verification, webhooks",
      "Next.js + Express portal infrastructure",
    ],
    href: "/services/whatsapp",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
  },
  {
    icon: Workflow,
    title: "Business Process Automation with n8n",
    positioning:
      "Self-hosted n8n automations that replace manual coordination. Scoped in a week, shipped in two, supported on a monthly retainer.",
    capabilities: [
      "Cross-system orchestration (CRM, sheets, email, WhatsApp)",
      "Internal tools without admin panels",
      "Observable, recoverable, auditable",
    ],
    href: "/services/automation",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
  },
];

export default function PillarsSection() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-20 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="What we do"
          title="Four things. Done seriously."
          subtitle="We don't dabble. Every engagement falls into one of these four pillars — and the depth shows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                onClick={() => trackEvent("pillar_card_clicked", { pillar: pillar.title, location: "homepage" })}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4 sm:space-y-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${pillar.iconBg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {pillar.positioning}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {pillar.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-700">
                        <span className="text-green-500 mt-1 flex-shrink-0">→</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-sm font-semibold text-gray-900 pt-2 group-hover:text-green-600 transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
