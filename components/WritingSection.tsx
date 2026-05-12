"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import blogData from "@/data/blog.json";
import { trackEvent } from "@/lib/analytics";

interface FlatPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  categoryName: string;
  categorySlug: string;
  href: string;
}

const latestPosts: FlatPost[] = blogData.categories
  .flatMap((category) =>
    (category.posts ?? []).map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      categoryName: category.name,
      categorySlug: category.slug,
      href: `/blog/${category.slug}/${post.slug}`,
    })),
  )
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 3);

export default function WritingSection() {
  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Writing"
          title="Opinions we'll defend."
          subtitle="Short, technical, and unafraid to disagree with the consensus."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              onClick={() => trackEvent("cta_read_post", { slug: post.slug, category: post.categorySlug, location: "homepage" })}
              className="group bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wide uppercase text-green-600">
                  {post.categoryName}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm flex-grow">
                {post.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-gray-900 pt-4 group-hover:text-green-600 transition-colors">
                Read
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/blog"
            onClick={() => trackEvent("cta_all_writing", { location: "writing_section" })}
            className="inline-flex items-center text-base font-semibold text-gray-900 hover:text-green-600 transition-colors"
          >
            All writing
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
