import { Suspense } from "react";
import workData from "@/data/work.json";
import WorkCards from "@/components/WorkCards";
import WorkFilteredList from "@/components/WorkFilteredList";

export default function WorkIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gray-200 rounded-full opacity-60"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-700">
              Work
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full" aria-hidden="true"></div>
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
        {/* The list reads its filter from the query string, so it needs a
            Suspense boundary to keep the rest of this page statically
            rendered instead of dragging the whole route client-side. The
            fallback is the full unfiltered grid, so the prerendered HTML
            still carries every case study link for crawlers and for the
            moment before hydration. */}
        <Suspense fallback={<WorkCards studies={workData.caseStudies} />}>
          <WorkFilteredList />
        </Suspense>
      </section>
    </main>
  );
}
