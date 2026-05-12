import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Chiselbyte is a small senior software team in Pune, India. Production LLM systems, lending software, WhatsApp Business API portals, and n8n automations.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Chiselbyte',
    description:
      'A small senior team. Pune, India. Boring software, on purpose.',
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
