import blogData from '@/data/blog.json';

export async function generateStaticParams() {
  return blogData.categories.map((c) => ({ category: c.slug }));
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = blogData.categories.find((c) => c.slug === params.category);
  const title = category ? category.name : params.category;
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{title} Articles Coming Soon</h1>
        <p className="text-gray-600 mt-4">Stay tuned for updates in our {title} section.</p>
      </section>
      <Footer />
    </main>
  );
}
