import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { ArrowLeft } from "lucide-react";
import blogData from "@/data/blog.json";

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  blogData.categories.forEach((c) => {
    (c.posts ?? []).forEach((p) => {
      params.push({ category: c.slug, slug: p.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const category = blogData.categories.find((c) => c.slug === params.category);
  const post = category?.posts?.find((p) => p.slug === params.slug);
  if (!category || !post) {
    return { title: "Post not found" };
  }
  const url = `/blog/${category.slug}/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.title} | Chiselbyte`,
      description: post.description,
      url,
      publishedTime: post.date,
      tags: post.tags ?? [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Chiselbyte`,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { category: string; slug: string } }) {
  const category = blogData.categories.find((c) => c.slug === params.category);
  const post = category?.posts?.find((p) => p.slug === params.slug);

  if (!category || !post) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-green-700 font-semibold hover:text-green-700">
            ← Back to all writing
          </Link>
        </section>
      </main>
    );
  }

  let markdown = "Content coming soon.";
  if (post.contentPath) {
    try {
      const filePath = path.join(process.cwd(), post.contentPath);
      markdown = fs.readFileSync(filePath, "utf8");
    } catch {
      // fall back to default
    }
  }
  const html = marked.parse(markdown);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href={`/blog/${category.slug}`}
            className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            {category.name}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
              {category.name}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
            {(post.tags ?? []).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-gray-600"
              >
                · {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {post.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <article
          className="prose prose-base max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            If this resonated, we should talk.
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
            We respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              Start a project
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-base font-semibold rounded-lg transition-all"
            >
              More writing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
