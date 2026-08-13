import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        {/* Favicons come from app/icon.png + app/apple-icon.png (file-based
            metadata). Previously this pointed at the 1024x1024, 1.2 MB
            assets/images/logo.png, which every page load had to download. */}
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
      <body className={inter.className}>
        {/*
          Skip link: first thing in the tab order, invisible until focused.
          Without it, every keyboard user pays the full nav (11 links plus the
          Services disclosure) on every single page before reaching content.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        {/* tabIndex={-1} makes this a programmatic focus target so the skip
            link actually moves focus, not just the scroll position. */}
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
