"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blogData from "@/data/blog.json";

interface FlatPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  categoryName: string;
  categorySlug: string;
  href: string;
}

const allPosts: FlatPost[] = blogData.categories
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

const filters = ["All", ...blogData.categories.map((c) => c.name)];

export default function BlogIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const posts = allPosts.filter(
    (p) => activeFilter === "All" || p.categoryName === activeFilter,
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
              Writing
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
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

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts in this category yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wide uppercase text-green-600">
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

                <div className="flex items-center text-sm font-semibold text-gray-900 pt-4 group-hover:text-green-600 transition-colors">
                  Read
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
