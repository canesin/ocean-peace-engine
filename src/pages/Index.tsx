import SafeBoatHeader from '@/components/SafeBoatHeader';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TrustSection from '@/components/TrustSection';
import InsuranceSection from '@/components/InsuranceSection';
import PricingSection from '@/components/PricingSection';
import SafeBoatFooter from '@/components/SafeBoatFooter';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SafeBoatHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <InsuranceSection />
      <PricingSection />
      <SafeBoatFooter />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=554891400063&text=Ol%C3%A1%20Marcelo!%20Quero%20saber%20mais%20sobre%20o%20aplicativo%20NAVALCARE%20SAFEBOAT."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[60] w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-border/50">
          Fale Conosco
        </span>
      </a>
    </div>
  );
};

export default Index;
