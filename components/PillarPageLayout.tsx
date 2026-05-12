"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackEvent } from "@/lib/analytics";

interface ExtraSection {
  title: string;
  description?: string;
  bullets?: string[];
  items?: { label: string; description: string }[];
}

interface HowItWorks {
  title?: string;
  description?: string;
  steps: { label: string; description: string }[];
}

interface FeaturedCaseStudy {
  pillar: string;
  pillarColor: string;
  title: string;
  outcome: string;
  techBadges: string[];
  href: string;
}

interface PillarPageLayoutProps {
  eyebrow: string;
  title: string;
  intro: string;
  positioning: string;
  whatWeBuild: string[];
  diagram?: ReactNode;
  diagramTitle?: string;
  howItWorks?: HowItWorks;
  extraSections?: ExtraSection[];
  featuredCaseStudy?: FeaturedCaseStudy;
  techStack: string[];
  opinion: {
    quote: string;
    href?: string;
    linkLabel?: string;
  };
}

export default function PillarPageLayout({
  eyebrow,
  title,
  intro,
  positioning,
  whatWeBuild,
  diagram,
  diagramTitle,
  howItWorks,
  extraSections,
  featuredCaseStudy,
  techStack,
  opinion,
}: PillarPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-600">
              {eyebrow}
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {intro}
          </p>
        </div>
      </section>

      {/* Positioning paragraph */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          {positioning}
        </p>
      </section>

      {/* What we build */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
          What we actually build
        </h2>
        <ul className="space-y-3">
          {whatWeBuild.map((item) => (
            <li key={item} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700">
              <span className="text-green-500 mt-1 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Architecture diagram */}
      {diagram ? (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {diagramTitle ?? "Architecture at a glance"}
          </h2>
          {diagram}
        </section>
      ) : null}

      {/* How it works */}
      {howItWorks ? (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {howItWorks.title ?? "How it works"}
          </h2>
          {howItWorks.description ? (
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
              {howItWorks.description}
            </p>
          ) : null}
          <ol className="space-y-6">
            {howItWorks.steps.map((step, idx) => (
              <li key={step.label} className="flex items-start gap-4 sm:gap-6">
                <span className="text-xl sm:text-2xl font-bold text-green-500 font-mono flex-shrink-0 w-10 text-right">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{step.label}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Extra pillar-specific sections */}
      {extraSections?.map((section) => (
        <section
          key={section.title}
          className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {section.title}
          </h2>
          {section.description ? (
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              {section.description}
            </p>
          ) : null}
          {section.bullets ? (
            <ul className="space-y-3">
              {section.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start space-x-3 text-sm sm:text-base text-gray-700"
                >
                  <span className="text-green-500 mt-1 flex-shrink-0">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {section.items ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 sm:p-6"
                >
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {/* Featured case study */}
      {featuredCaseStudy ? (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Featured case study
          </h2>
          <Link
            href={featuredCaseStudy.href}
            onClick={() => trackEvent("cta_read_case_study", { slug: featuredCaseStudy.href, location: "pillar_page", pillar: eyebrow })}
            className="group block bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-4">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${featuredCaseStudy.pillarColor}`}
              >
                {featuredCaseStudy.pillar}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                {featuredCaseStudy.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                {featuredCaseStudy.outcome}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {featuredCaseStudy.techBadges.map((badge) => (
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
        </section>
      ) : null}

      {/* Tech */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Tech we use here
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium px-3 py-1.5 rounded-md bg-gray-100 border border-gray-200 text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Opinion callout */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10">
          <p className="text-base sm:text-lg font-semibold leading-relaxed mb-4">
            "{opinion.quote}"
          </p>
          {opinion.href ? (
            <Link
              href={opinion.href}
              className="inline-flex items-center text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
            >
              {opinion.linkLabel ?? "Read more"}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Have a problem in this space?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
            Tell us what you're trying to ship. We respond within one business day.
          </p>
          <Link
            href="/contact"
            onClick={() => trackEvent("cta_start_project", { location: "pillar_page", pillar: eyebrow })}
            className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
          >
            Start a project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
