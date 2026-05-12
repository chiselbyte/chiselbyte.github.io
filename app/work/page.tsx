"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import workData from "@/data/work.json";

const pillarColorMap: Record<string, string> = {
  AI: "bg-emerald-100 text-emerald-700",
  Lending: "bg-indigo-100 text-indigo-700",
  WhatsApp: "bg-green-100 text-green-700",
  Automation: "bg-orange-100 text-orange-700",
};

const filters = ["All", "AI", "Lending", "WhatsApp", "Automation"];

export default function WorkIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const studies = workData.caseStudies.filter(
    (study) => activeFilter === "All" || study.pillar === activeFilter,
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-600">
              Work
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Anonymized, technical, defensible.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            We don't show logos. We show architecture, decisions, and outcomes — because that's what tells you whether we can do the work.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                activeFilter === filter
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {studies.length === 0 ? (
          <p className="text-gray-600">No case studies in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {studies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        pillarColorMap[study.pillar] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {study.pillar}
                    </span>
                    <span className="text-xs text-gray-500">{study.date}</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                    {study.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700"
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
        )}
      </section>

      <Footer />
    </main>
  );
}
