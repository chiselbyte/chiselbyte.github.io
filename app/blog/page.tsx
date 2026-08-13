import { Suspense } from "react";
import BlogCards, { allPosts } from "@/components/BlogCards";
import BlogFilteredList from "@/components/BlogFilteredList";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block" aria-hidden="true">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-700">
              Writing
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full" aria-hidden="true"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Opinions we'll defend.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            Short, technical, and unafraid to disagree with the consensus. Mostly about how we build software — and why most teams build it wrong.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* The list reads its filter from the query string, so it needs a
            Suspense boundary to keep the rest of this page statically
            rendered instead of dragging the whole route client-side. The
            fallback is the full unfiltered grid, so the prerendered HTML
            still carries every post link for crawlers and for the moment
            before hydration. */}
        <Suspense fallback={<BlogCards posts={allPosts} />}>
          <BlogFilteredList />
        </Suspense>
      </section>
    </main>
  );
}
