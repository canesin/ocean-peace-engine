import { useState, useEffect, useRef } from 'react';
import { Shield, Smartphone, Zap } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import hardwareImage from '@/assets/safeboat-hardware.jpg';
import appMockup from '@/assets/app-mockup.jpg';

const SolutionSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const steps = [
    {
      icon: Shield,
      title: t('solution.step1.title'),
      description: t('solution.step1.description'),
    },
    {
      icon: Smartphone,
      title: t('solution.step2.title'),
      description: t('solution.step2.description'),
    },
    {
      icon: Zap,
      title: t('solution.step3.title'),
      description: t('solution.step3.description'),
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY - (rect.top + window.scrollY);
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, scrolled / (totalHeight * 0.8)));
      
      const newStep = Math.floor(progress * (steps.length + 1));
      setActiveStep(Math.min(newStep, steps.length));
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
            {t('solution.title')}{' '}
            <span className="text-primary">{t('solution.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('solution.subtitle')}
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
                  isActive ? 'border-primary shadow-[var(--shadow-glow)] scale-105 z-10' : 'opacity-40 grayscale blur-[1px]'
                }`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive ? 'bg-primary text-primary-foreground pulse-glow' : 'bg-muted text-muted-foreground'
                }`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {t('header.howItWorks')} {index + 1}
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
              {t('solution.appTitle')}{' '}
              <span className="text-primary">{t('solution.appTitleHighlight')}</span>
            </h3>

            <div className="space-y-6">
              {[
                { key: 'batteryMonitoring', step: 0 },
                { key: 'bilgePump', step: 1 },
                { key: 'fuelManagement', step: 2 }
              ].map((item) => (
                <div 
                  key={item.key}
                  className={`p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                    activeStep === item.step ? 'border-primary bg-primary/10 shadow-lg translate-x-4' : 'border-border/50 hover:border-primary/30'
                  }`}
                  onClick={() => setActiveStep(item.step)}
                >
                  <h4 className="text-xl font-semibold mb-2 text-foreground flex items-center">
                    {activeStep === item.step && <Zap className="w-5 h-5 text-primary mr-2 animate-pulse" />}
                    {t(`solution.${item.key}.title`)}
                  </h4>
                  <p className="text-muted-foreground">
                    {t(`solution.${item.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <img 
                src={appMockup} 
                alt="SAFEBOAT App Interface" 
                className="w-full max-w-md mx-auto hover-scale relative z-10"
              />
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30 rounded-3xl animate-glow-pulse" />
            </div>
          </div>
        </div>

        {/* Hardware Spotlight */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 heading">
            {t('solution.hardwareTitle')}{' '}
            <span className="text-primary">{t('solution.hardwareTitleHighlight')}</span>
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="premium-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary animate-tech-scan" />
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6 relative z-10">
                  <h4 className="text-2xl font-bold text-foreground">
                    {t('solution.hardwareSubtitle')}
                  </h4>
                  <ul className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start space-x-3 group">
                        <div className="mt-1.5 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {t(`solution.hardware.feature${i}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative">
                  <img 
                    src={hardwareImage} 
                    alt="SAFEBOAT Hardware Device" 
                    className="w-full rounded-xl hover-scale shadow-2xl relative z-10"
                  />
                  <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl opacity-50" />
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