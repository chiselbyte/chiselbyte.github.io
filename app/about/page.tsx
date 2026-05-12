"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-600">
              About
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            A small senior team. Pune, India. Boring software, on purpose.
          </h1>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Who we are</h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                Chiselbyte is a small, senior software team based in Pune. We build production-grade LLM systems, custom lending and fintech software, multi-tenant WhatsApp Business API portals, and n8n-powered process automations.
              </p>
              <p>
                We aren't an agency, and we don't pretend to do everything. Our work falls into four pillars — and the depth shows on every engagement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">What we believe</h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 flex-shrink-0">→</span>
                <span><strong className="text-gray-900">Smallest stack that survives production.</strong> Postgres, one deployable, n8n. Change one thing at a time when it breaks.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 flex-shrink-0">→</span>
                <span><strong className="text-gray-900">Schemas over vibes.</strong> Especially with LLMs. If a feature can't be unit-tested, it isn't a feature yet.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 flex-shrink-0">→</span>
                <span><strong className="text-gray-900">Ship the scoped win first.</strong> Every relationship starts with a 1-2 week deliverable. After that, monthly support is a yes.</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/how-we-build"
                className="inline-flex items-center text-base font-semibold text-gray-900 hover:text-green-600 transition-colors"
              >
                Read the full manifesto
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">How we work</h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                We start every engagement by scoping the smallest piece of work that demonstrably moves your business. Typically 1-2 weeks. We ship it, you see whether we deliver, and only then do we discuss longer-term retainers.
              </p>
              <p>
                For automations and AI workflows, we usually move onto a monthly retainer covering hosting, monitoring, and incremental additions. For larger custom software builds, we work in 2-week milestones with continuous delivery to a staging environment.
              </p>
              <p>
                What we don't do: discovery decks, 12-week kickoff phases, or proposals padded with services we don't operate.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Who we work with</h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                We work with lending startups, B2B SaaS companies, agencies that resell WhatsApp services to their clients, and financial services firms with manual ops processes that should be automated.
              </p>
              <p>
                Our case studies are anonymized because we ship for serious clients who don't want their stack on a marketing page. The technical depth on those pages is the proof, not the logo.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Have a scoped problem?</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              We respond within one business day. If we're not the right fit, we'll say so.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
