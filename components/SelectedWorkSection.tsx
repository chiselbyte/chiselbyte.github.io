"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import workData from "@/data/work.json";
import { trackEvent } from "@/lib/analytics";

const pillarColorMap: Record<string, string> = {
  AI: "bg-emerald-100 text-emerald-700",
  Lending: "bg-indigo-100 text-indigo-700",
  WhatsApp: "bg-green-100 text-green-700",
  Automation: "bg-orange-100 text-orange-700",
};

export default function SelectedWorkSection() {
  const featured = workData.caseStudies.slice(0, 4);

  return (
    <section id="work" className="relative py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Selected work"
          title="Proof, not pitch decks."
          subtitle="Client names are anonymized because we ship for serious clients. The technical depth is the credibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              onClick={() => trackEvent("cta_read_case_study", { slug: study.slug, location: "homepage" })}
              className="group bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    pillarColorMap[study.pillar] ?? "bg-gray-100 text-gray-700"
                  }`}
                >
                  {study.pillar}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                  {study.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {study.outcome}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-semibold text-gray-900 pt-2 group-hover:text-green-600 transition-colors">
                  Read case study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/work"
            onClick={() => trackEvent("cta_see_our_work", { location: "selected_work_section" })}
            className="inline-flex items-center text-base font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            See all work
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
