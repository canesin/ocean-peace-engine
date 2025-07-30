import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';

const SafeBoatHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50' 
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }}>
            <img src="/logo.png" alt="SAFEBOAT Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors story-link">
              {t('header.solution')}
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors story-link">
              {t('header.howItWorks')}
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors story-link">
              {t('header.pricing')}
            </a>
            <a href="#parceiros" className="text-muted-foreground hover:text-primary transition-colors story-link">
              {t('header.partners')}
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" className="btn-ghost hidden lg:inline-flex">
              {t('footer.navigation.fleetSolutions')}
            </Button>
            <Button className="btn-hero">
              {t('hero.getQuote')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SafeBoatHeader;