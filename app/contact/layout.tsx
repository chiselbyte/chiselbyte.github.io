import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us what you are trying to ship. We respond within one business day. If we are not the right fit, we will say so.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Chiselbyte',
    description:
      'Have a scoped problem? Let us pick the smallest thing that ships.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
