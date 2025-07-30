import SafeBoatHeader from '@/components/SafeBoatHeader';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TrustSection from '@/components/TrustSection';
import PricingSection from '@/components/PricingSection';
import SafeBoatFooter from '@/components/SafeBoatFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SafeBoatHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <PricingSection />
      <SafeBoatFooter />
    </div>
  );
};

export default Index;
