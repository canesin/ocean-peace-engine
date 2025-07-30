import { useState, useEffect, useRef } from 'react';
import { Shield, Smartphone, Zap } from 'lucide-react';
import hardwareImage from '@/assets/safeboat-hardware.jpg';
import appMockup from '@/assets/app-mockup.jpg';

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Shield,
      title: "Instalação Robusta",
      description: "Um hardware robusto é instalado em pontos chave da sua embarcação, monitorando os sistemas vitais 24/7.",
      highlight: "bateria"
    },
    {
      icon: Smartphone,
      title: "Conexão Inteligente",
      description: "O dispositivo se conecta a uma plataforma SaaS com inteligência embarcada, enviando dados em tempo real para a nuvem.",
      highlight: "bomba"
    },
    {
      icon: Zap,
      title: "Alertas Preditivos",
      description: "Receba alertas que preveem falhas antes que se tornem desastres, permitindo uma manutenção proativa e inteligente.",
      highlight: "combustivel"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY - (rect.top + window.scrollY);
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, scrolled / (totalHeight * 0.8)));
      
      const newStep = Math.floor(progress * steps.length);
      setActiveStep(Math.min(newStep, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="solucao" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">
            Tranquilidade em{' '}
            <span className="text-primary">Três Passos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa solução transforma dados em conhecimento, ansiedade em confiança.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index <= activeStep;
            
            return (
              <div 
                key={index}
                className={`premium-card text-center transition-all duration-700 ${
                  isActive ? 'border-primary/50 shadow-[var(--shadow-glow)]' : 'opacity-50'
                }`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    PASSO {index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive App Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold heading">
              Controle Total na{' '}
              <span className="text-primary">Palma da Sua Mão</span>
            </h3>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl border transition-all duration-500 ${
                activeStep === 0 ? 'border-primary bg-primary/5' : 'border-border/50'
              }`}>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Monitoramento de Bateria
                </h4>
                <p className="text-muted-foreground">
                  Monitore a voltagem e o status de carregamento das baterias, evitando a principal causa de saídas frustradas.
                </p>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-500 ${
                activeStep === 1 ? 'border-primary bg-primary/5' : 'border-border/50'
              }`}>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Atividade da Bomba de Porão
                </h4>
                <p className="text-muted-foreground">
                  Saiba quantas vezes a bomba de porão foi acionada. Nossa plataforma alerta sobre atividade incomum que pode indicar vazamentos.
                </p>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-500 ${
                activeStep === 2 ? 'border-primary bg-primary/5' : 'border-border/50'
              }`}>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Gestão de Combustível
                </h4>
                <p className="text-muted-foreground">
                  Planeje suas viagens com precisão e navegue com confiança. Chega de surpresas sobre a autonomia do seu barco.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="SAFEBOAT App Interface" 
                className="w-full max-w-md mx-auto hover-scale"
              />
              <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30 rounded-3xl animate-glow-pulse" />
            </div>
          </div>
        </div>

        {/* Hardware Spotlight */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 heading">
            Hardware de{' '}
            <span className="text-primary">Grau Industrial</span>
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="premium-card">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                  <h4 className="text-2xl font-bold text-foreground">
                    Projetado para o Ambiente Marinho
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Gabinete selado IP67 - Proteção total contra água e poeira</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Múltiplos portos de sensor para monitoramento completo</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Conectividade 4G/WiFi para dados em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">Vida útil estimada de 10 anos</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <img 
                    src={hardwareImage} 
                    alt="SAFEBOAT Hardware Device" 
                    className="w-full rounded-xl hover-scale"
                  />
                  <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-20 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;