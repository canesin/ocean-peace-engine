import { Button } from '@/components/ui/button';
import heroYacht from '@/assets/hero-yacht.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroYacht} 
          alt="Luxury yacht sailing on open ocean" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        <div className="absolute inset-0 bg-[var(--gradient-ocean)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          <span className="block mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            No mar,
          </span>
          <span className="block text-foreground">
            não há acostamentos.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
          A primeira plataforma de monitoramento preditivo que garante a sua tranquilidade.
        </p>

        <div className="animate-fade-in animation-delay-600">
          <Button 
            size="lg" 
            className="btn-hero text-xl px-12 py-6 mb-8"
          >
            Solicitar Orçamento
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Tecnologia confiável • Monitoramento 24/7 • Alertas preditivos
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;