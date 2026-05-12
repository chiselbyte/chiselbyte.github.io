import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Anonymized case studies across AI, lending, WhatsApp, and automation. Technical depth, architecture, and decisions — not logos.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Selected work | Chiselbyte',
    description:
      'Anonymized, technical, defensible. The architecture and decisions behind the systems we ship.',
    url: '/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
