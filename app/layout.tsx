import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import logoImage from '@/assets/images/logo.png';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chiselbyte.com';

const DEFAULT_DESCRIPTION =
  'Chiselbyte builds production LLM systems, lending platforms, WhatsApp Business API portals, and n8n automations. A small senior team, Pune, India.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chiselbyte — Production LLM systems. Not chatbots.',
    template: '%s | Chiselbyte',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'Chiselbyte',
  authors: [{ name: 'Chiselbyte' }],
  creator: 'Chiselbyte',
  publisher: 'Chiselbyte',
  keywords: [
    'LLM development',
    'production AI',
    'Claude API',
    'lending software',
    'fintech development',
    'WhatsApp Business API',
    'Meta Embedded Signup',
    'n8n automation',
    'process automation',
    'software development',
    'Pune software team',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Chiselbyte',
    title: 'Chiselbyte — Production LLM systems. Not chatbots.',
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiselbyte — Production LLM systems. Not chatbots.',
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleSrc =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logoImage.src} />
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src={plausibleSrc}
            strategy="afterInteractive"
          />
        ) : null}
        {plausibleDomain ? (
          <Script id="plausible-init" strategy="afterInteractive">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>
        ) : null}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
