import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Opinions on AI engineering, lending tech, WhatsApp Business API, and automation. Short, technical, unafraid to disagree with the consensus.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Writing | Chiselbyte',
    description:
      'Opinions we will defend, by the Chiselbyte team.',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing | Chiselbyte',
    description: 'Opinions we will defend, by the Chiselbyte team.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
