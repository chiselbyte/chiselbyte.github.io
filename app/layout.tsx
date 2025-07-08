import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import logoImage from '@/assets/images/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chiselbyte Softwares',
};

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );}