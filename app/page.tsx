import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import SelectedWorkSection from '@/components/SelectedWorkSection';
import HowWeBuildSection from '@/components/HowWeBuildSection';
import TechStackSection from '@/components/TechStackSection';
import WritingSection from '@/components/WritingSection';
import ReadyToTalkSection from '@/components/ReadyToTalkSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chiselbyte — Production LLM systems. Not chatbots.',
  description:
    'A small senior team building production LLM systems, custom lending software, multi-tenant WhatsApp Business API portals, and n8n process automations.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Chiselbyte — Production LLM systems. Not chatbots.',
    description:
      'A small senior team building production LLM systems, custom lending software, multi-tenant WhatsApp Business API portals, and n8n process automations.',
    url: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PillarsSection />
      <SelectedWorkSection />
      <HowWeBuildSection />
      <TechStackSection />
      <WritingSection />
      <ReadyToTalkSection />
      <Footer />
    </main>
  );
}
