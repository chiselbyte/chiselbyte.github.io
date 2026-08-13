import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blogData from "@/data/blog.json";

export async function generateStaticParams() {
  return blogData.categories.map((c) => ({ category: c.slug }));
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = blogData.categories.find((c) => c.slug === params.category);

  if (!category) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section className="py-20 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category not found</h1>
          <Link href="/blog" className="text-green-700 font-semibold hover:text-green-700">
            ← Back to all writing
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const posts = [...(category.posts ?? [])].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-20 right-20 w-6 h-6 border-2 border-green-400 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All writing
          </Link>

          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-green-700">
              {category.name}
            </span>
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {category.name}
          </h1>

          {category.description ? (
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {category.description}
            </p>
          ) : null}
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {posts.length === 0 ? (
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10 text-center">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              We haven't shipped anything in this category yet. We will.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-green-700 transition-colors"
            >
              Read what we have published
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${category.slug}/${post.slug}`}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wide uppercase text-green-700">
                    {category.name}
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
