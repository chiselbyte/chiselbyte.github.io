import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import workData from "@/data/work.json";
import LeadQualificationDiagram from "@/components/diagrams/LeadQualificationDiagram";

const caseStudyDiagrams: Record<string, () => JSX.Element> = {
  "lead-qualification-saas": LeadQualificationDiagram,
};

const pillarColorMap: Record<string, string> = {
  AI: "bg-emerald-100 text-emerald-700",
  Lending: "bg-indigo-100 text-indigo-700",
  WhatsApp: "bg-green-100 text-green-700",
  Automation: "bg-orange-100 text-orange-700",
};

export async function generateStaticParams() {
  return workData.caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = workData.caseStudies.find((s) => s.slug === params.slug);
  if (!study) {
    return { title: "Case study not found" };
  }
  const url = `/work/${study.slug}`;
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${study.title} | Chiselbyte`,
      description: study.summary,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Chiselbyte`,
      description: study.summary,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = workData.caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section className="py-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Link href="/work" className="text-green-600 font-semibold hover:text-green-700">
            ← Back to all work
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  let markdown = "Detailed write-up coming soon. In the meantime — interested in this kind of work? [Get in touch](/contact).";
  if (study.contentPath) {
    try {
      const filePath = path.join(process.cwd(), study.contentPath);
      markdown = fs.readFileSync(filePath, "utf8");
    } catch {
      // fall back to default
    }
  }
  const html = marked.parse(markdown);
  const Diagram = caseStudyDiagrams[study.slug];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                pillarColorMap[study.pillar] ?? "bg-gray-100 text-gray-700"
              }`}
            >
              {study.pillar}
            </span>
            <span className="text-xs text-gray-500">{study.date}</span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs text-gray-700 font-medium">{study.client}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {study.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {study.outcome}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {study.techBadges.map((badge) => (
              <span
                key={badge}
                className="text-sm font-medium px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-800"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      {Diagram ? (
        <section className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Architecture
          </h2>
          <Diagram />
        </section>
      ) : null}

      {/* Body */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <article
          className="prose prose-base max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Have a similar problem?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
            Tell us what you're trying to ship. We respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              Start a project
            </Link>
            <Link
              href={`/services/${study.pillarSlug}`}
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              More on {study.pillar}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
