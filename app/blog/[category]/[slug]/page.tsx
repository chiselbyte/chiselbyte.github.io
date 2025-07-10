import blogData from '@/data/blog.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  blogData.categories.forEach((c) => {
    if (c.subItems) {
      c.subItems.forEach((s: any) => {
        params.push({ category: c.slug, slug: s.slug });
      });
    }
  });
  return params;
}

export default function BlogPostPage({ params }: { params: { category: string; slug: string } }) {
  const category = blogData.categories.find((c) => c.slug === params.category);
  const post = category?.subItems?.find((p: any) => p.slug === params.slug);
  const title = post ? post.name : params.slug;
  const content = post?.content ?? 'Content coming soon.';
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{content}</p>
      </section>
      <Footer />
    </main>
  );
}
