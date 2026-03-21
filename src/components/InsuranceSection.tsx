import { Shield, TrendingDown, Eye, Zap, FileCheck, Heart, Clock, BarChart3 } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const InsuranceSection = () => {
  const { t } = useI18n();

  const insurerBenefits = [
    { icon: TrendingDown, key: 'benefit1' },
    { icon: BarChart3, key: 'benefit2' },
    { icon: Eye, key: 'benefit3' },
    { icon: Zap, key: 'benefit4' },
  ];

  const insuredBenefits = [
    { icon: TrendingDown, key: 'benefit1' },
    { icon: FileCheck, key: 'benefit2' },
    { icon: Heart, key: 'benefit3' },
    { icon: Clock, key: 'benefit4' },
  ];

  const stats = [
    { value: t('insurance.stat1Value'), label: t('insurance.stat1Label') },
    { value: t('insurance.stat2Value'), label: t('insurance.stat2Label') },
    { value: t('insurance.stat3Value'), label: t('insurance.stat3Label') },
  ];

  return (
    <section id="seguros" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Insurance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">
            {t('insurance.title')}{' '}
            <span className="text-secondary">{t('insurance.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('insurance.subtitle')}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-2xl bg-card/50 border border-border/30">
              <div className="text-3xl md:text-4xl font-black text-secondary tracking-tighter">{stat.value}</div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two Columns: Insurers & Insured */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Insurers */}
          <div className="premium-card border-secondary/20 hover:border-secondary/40 transition-all duration-500 group">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('insurance.insurer.label')}</h3>
            </div>

            <div className="space-y-5">
              {insurerBenefits.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {t(`insurance.insurer.${item.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Insured */}
          <div className="premium-card border-primary/20 hover:border-primary/40 transition-all duration-500 group">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t('insurance.insured.label')}</h3>
            </div>

            <div className="space-y-5">
              {insuredBenefits.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group/item p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                      {t(`insurance.insured.${item.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="premium-card bg-gradient-to-r from-secondary/5 via-card to-primary/5 border-border/30">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed italic">
              "{t('insurance.cta')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
