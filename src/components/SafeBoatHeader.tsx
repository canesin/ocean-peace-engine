import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/useI18n';
import LanguageSwitcher from './LanguageSwitcher';

const SafeBoatHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#solucao', label: t('header.solution') },
    { href: '#como-funciona', label: t('header.howItWorks') },
    { href: '#precos', label: t('header.pricing') },
    { href: '#parceiros', label: t('header.partners') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50'
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 shrink-0" onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} style={{ cursor: 'pointer' }}>
            <img src="logo.png" alt="SAFEBOAT Logo" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors story-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" className="btn-ghost hidden lg:inline-flex" onClick={scrollToForm}>
              {t('footer.navigation.fleetSolutions')}
            </Button>
            <Button className="btn-hero" onClick={scrollToForm}>
              {t('hero.getQuote')}
            </Button>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/50 text-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border/50">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/20"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 space-y-3">
              <Button className="btn-hero w-full" onClick={scrollToForm}>
                {t('hero.getQuote')}
              </Button>
              <Button variant="outline" className="btn-ghost w-full" onClick={scrollToForm}>
                {t('footer.navigation.fleetSolutions')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SafeBoatHeader;
