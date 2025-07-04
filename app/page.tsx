import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DigitalMarketingSection from '@/components/DigitalMarketingSection';
import DesignDevelopmentSection from '@/components/DesignDevelopmentSection';
import OurRecentWorksSection from '@/components/OurRecentWorksSection';
import ReadyToTalkSection from '@/components/ReadyToTalkSection';
import BlogNewsSection from '@/components/BlogNewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DigitalMarketingSection />
      <DesignDevelopmentSection />
      <FeaturesSection />
      <OurRecentWorksSection />
      <BlogNewsSection />
      <ReadyToTalkSection />
      <Footer />
    </main>
  );
}