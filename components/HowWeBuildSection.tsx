"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { trackEvent } from "@/lib/analytics";

interface Principle {
  number: string;
  title: string;
  body: string;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "We ship the smallest stack that survives production.",
    body:
      "Most teams reach for Kubernetes, microservices, and an event bus before they have product-market fit. We pick PostgreSQL, a single deployable, and n8n until it actually breaks — then we change one thing at a time.",
  },
  {
    number: "02",
    title: "Schemas are non-negotiable, especially with LLMs.",
    body:
      "An LLM that returns free-form text is a bug surface. We make Pydantic schemas the contract, validate every output, and route validation failures to humans. If your AI feature can't be unit tested, it isn't a feature yet.",
  },
  {
    number: "03",
    title: "We don't build admin panels. We use n8n.",
    body:
      "Internal CRUD tools are where engineering time goes to die. n8n gives us forms, scheduled runs, and integrations for free — and your ops team can read the flow. Build admin panels only when you've outgrown n8n, not before.",
  },
  {
    number: "04",
    title: "No retainers without a scoped win first.",
    body:
      "Every relationship starts with a 1-2 week shipped deliverable. If we can't show value in two weeks, a 12-month retainer won't fix it. After that, monthly support is a yes.",
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 left-40 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-400">
              How we build
            </span>
            <div className="w-8 h-1 bg-green-400 rounded-full"></div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Four opinions we don't apologize for.
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We have a clear point of view about how to build software that survives contact with reality. If these resonate, we'll probably get along.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border border-gray-800 rounded-2xl p-6 sm:p-8 bg-gray-800/30 hover:bg-gray-800/60 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-2xl sm:text-3xl font-bold text-green-400 font-mono">
                  {principle.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/how-we-build"
            onClick={() => trackEvent("cta_read_manifesto", { location: "homepage" })}
            className="inline-flex items-center text-base font-semibold text-green-400 hover:text-green-300 transition-colors"
          >
            Read the full manifesto
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
