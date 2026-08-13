"use client";

import { useSearchParams } from "next/navigation";
import FilterChips, { resolveFilter } from "@/components/FilterChips";
import BlogCards, { allPosts, blogFilters } from "@/components/BlogCards";

export default function BlogFilteredList() {
  const searchParams = useSearchParams();
  const activeFilter = resolveFilter(blogFilters, searchParams.get("category"));

  const posts = allPosts.filter(
    (p) => activeFilter === "All" || p.categoryName === activeFilter,
  );

  return (
    <>
      <FilterChips
        filters={blogFilters}
        paramName="category"
        active={activeFilter}
        label="Filter posts by category"
      />

      {/* Announces the new count when a chip changes the list — otherwise the
          result of pressing a filter is invisible to a screen reader. */}
      <p role="status" aria-live="polite" className="mt-4 mb-10 text-sm text-gray-600">
        {posts.length === 1 ? "1 post" : `${posts.length} posts`}
        {activeFilter === "All" ? "" : ` in ${activeFilter}`}
      </p>

      <BlogCards posts={posts} />
    </>
  );
}
