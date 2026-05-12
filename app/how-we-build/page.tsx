import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Build",
  description:
    "Four opinions about software we don't apologize for. Our manifesto on the smallest stack, schemas, n8n vs admin panels, and scoped wins before retainers.",
  alternates: { canonical: "/how-we-build" },
  openGraph: {
    title: "How We Build | Chiselbyte",
    description:
      "Four opinions we don't apologize for. The smallest stack. Schemas over vibes. n8n over admin panels. Scoped wins before retainers.",
    url: "/how-we-build",
  },
};

interface Principle {
  number: string;
  title: string;
  paragraphs: string[];
  inAction?: {
    label: string;
    href: string;
  };
}

const principles: Principle[] = [
  {
    number: "01",
    title: "We ship the smallest stack that survives production.",
    paragraphs: [
      "Most teams introduce Kubernetes, microservices, and an event bus before they have product-market fit. Then they spend the next two years operating infrastructure they don't need. We pick PostgreSQL, a single deployable, and n8n until it actually breaks — and only then change one thing at a time.",
      "The hidden cost of \"future-proof\" architecture is that it eats engineering capacity you'd otherwise spend shipping features. A well-instrumented monolith on a managed Postgres handles more load than most companies will ever see. We default to that. We add complexity only after we've watched something specific fail under measured production traffic.",
      "This isn't a religious commitment to simplicity. It's a calibration: the cost of removing complexity later is high; the cost of adding it later is low. So we add it later.",
    ],
    inAction: {
      label: "See this in action: ops automation for a financial services firm",
      href: "/work/ops-automation-financial-firm",
    },
  },
  {
    number: "02",
    title: "Schemas are non-negotiable, especially with LLMs.",
    paragraphs: [
      "An LLM that returns free-form text is a bug surface. You can't unit test it. You can't reason about it. You can't safely build downstream features on top of it. Every \"interesting LLM feature\" we've seen ship into production and then quietly disappear had this shape.",
      "Our default is the opposite. Pydantic schemas are the contract. Every LLM call validates its output against a schema before anything downstream runs. Invalid outputs get a single retry with a fix-it prompt; if they're still invalid, they go to a human review queue. They never silently coerce.",
      "If an AI feature can't be unit-tested, it isn't a feature yet. It's a research project. We treat the boundary between those two states with discipline.",
    ],
    inAction: {
      label: "See this in action: lead qualification for a B2B SaaS",
      href: "/work/lead-qualification-saas",
    },
  },
  {
    number: "03",
    title: "We don't build admin panels. We use n8n.",
    paragraphs: [
      "Internal CRUD tools are where engineering time goes to die. Every internal admin panel starts as \"a quick form\" and ends as a Frankenstein of half-implemented permissions, stale dropdowns, and the one person who knows how to deploy it.",
      "n8n gives us forms, scheduled runs, retries, integrations, and an audit log for free. Better still, the ops team can *read* the n8n flow — they can see exactly what happens to their data. That transparency is worth more than any admin panel UX.",
      "We do build admin panels eventually — when the workflow has stabilized, the ops team has outgrown n8n's form ergonomics, and the requirements are stable enough to justify the engineering cost. Almost always, that point is much later than people assume.",
    ],
    inAction: {
      label: "Read more: Why we build with n8n instead of writing admin panels",
      href: "/blog/opinions/n8n-vs-admin-panels",
    },
  },
  {
    number: "04",
    title: "No retainers without a scoped win first.",
    paragraphs: [
      "Every relationship we have starts with a 1-2 week shipped deliverable. We scope it tightly, ship it, and then both sides decide whether to continue. We don't pitch six-month engagements to people who haven't seen us ship anything yet — and we don't sign clients who aren't comfortable evaluating us on output rather than slides.",
      "If we can't show value in two weeks, a twelve-month retainer won't fix it. After that initial deliverable, monthly support for hosting, monitoring, and incremental additions is a yes.",
      "This is partly self-protection: the work we want is the work we'd want to maintain, and you can only assess that by doing the first piece. It's also a filter on which clients we're a good fit for. The clients who say \"prove yourself first\" tend to be the clients we do our best work with.",
    ],
  },
];

export default function HowWeBuildPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 left-40 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 right-32 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-400">
              How we build
            </span>
            <div className="w-8 h-1 bg-green-400 rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Four opinions we don't apologize for.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
            We have a clear point of view about how to build software that survives contact with reality. None of these are controversial inside our team. Some of them are controversial outside it. That's fine.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-16 sm:space-y-24">
          {principles.map((principle) => (
            <div key={principle.number}>
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-green-500 font-mono flex-shrink-0">
                  {principle.number}
                </span>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight pt-1">
                  {principle.title}
                </h2>
              </div>

              <div className="space-y-4 ml-0 sm:ml-16">
                {principle.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {principle.inAction ? (
                  <div className="pt-2">
                    <Link
                      href={principle.inAction.href}
                      className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                    >
                      {principle.inAction.label}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            If these resonate, we'll probably get along.
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
            Tell us what you're trying to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
