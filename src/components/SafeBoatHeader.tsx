import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const SafeBoatHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SB</span>
            </div>
            <span className="text-xl font-bold text-foreground">SAFEBOAT</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors story-link">
              A Solução
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors story-link">
              Como Funciona
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors story-link">
              Preços
            </a>
            <a href="#parceiros" className="text-muted-foreground hover:text-primary transition-colors story-link">
              Parceiros
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="btn-ghost hidden md:inline-flex">
              Soluções para Frotas
            </Button>
            <Button className="btn-hero">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SafeBoatHeader;