export async function generateStaticParams() {
  return [
    { category: 'java' },
    { category: 'springboot' },
    { category: 'python' },
    { category: 'devops' },
  ];
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const title = params.category.charAt(0).toUpperCase() + params.category.slice(1);
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
