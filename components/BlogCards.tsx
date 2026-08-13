import Link from "next/link";
import { ArrowRight } from "lucide-react";
import blogData from "@/data/blog.json";

export interface FlatPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  categoryName: string;
  categorySlug: string;
  href: string;
}

/** Every post across every category, newest first. */
export const allPosts: FlatPost[] = blogData.categories
  .flatMap((category) =>
    (category.posts ?? []).map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags ?? [],
      categoryName: category.name,
      categorySlug: category.slug,
      href: `/blog/${category.slug}/${post.slug}`,
    })),
  )
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const blogFilters = ["All", ...blogData.categories.map((c) => c.name)];

/**
 * Presentational grid, shared by the interactive filtered list and by the
 * server-rendered fallback, so the prerendered HTML for /blog always contains
 * every post link even though the filter only comes alive after hydration.
 */
export default function BlogCards({ posts }: { posts: FlatPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-gray-600">No posts in this category yet. Check back soon.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {posts.map((post) => (
        <Link
          key={post.href}
          href={post.href}
          className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold tracking-wide uppercase text-green-700">
              {post.categoryName}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-3">
            {post.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm flex-grow">
            {post.description}
          </p>

          <div className="flex items-center text-sm font-semibold text-gray-900 pt-4 group-hover:text-green-700 transition-colors">
            Read
            <ArrowRight className="w-4 h-4 ml-1 motion-safe:group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  );
}
