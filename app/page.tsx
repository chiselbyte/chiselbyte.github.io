import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CloudHostingSection from '@/components/CloudHostingSection';
import DesignDevelopmentSection from '@/components/DesignDevelopmentSection';
import OurFeaturesSection from '@/components/OurFeaturesSection';
import OurAwesomeTeamSection from '@/components/OurAwesomeTeamSection';
import StatisticsContactSection from '@/components/StatisticsContactSection';
import OurRecentWorksSection from '@/components/OurRecentWorksSection';
import PricingPlansSection from '@/components/PricingPlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReadyToTalkSection from '@/components/ReadyToTalkSection';
import BlogNewsSection from '@/components/BlogNewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CloudHostingSection />
      <DesignDevelopmentSection />
      <OurFeaturesSection />
      <OurAwesomeTeamSection />
      <StatisticsContactSection />
      <OurRecentWorksSection />
      <PricingPlansSection />
      <TestimonialsSection />
      <ReadyToTalkSection />
      <BlogNewsSection />
      <Footer />
    </main>
  );
}