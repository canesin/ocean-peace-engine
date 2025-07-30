import { AlertTriangle, DollarSign, Clock, Settings } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const ProblemSection = () => {
  const { t } = useI18n();
  
  const problems = [
    {
      icon: AlertTriangle,
      titleKey: "problems.unpredictableFailures.title",
      statKey: "problems.unpredictableFailures.stat",
      descriptionKey: "problems.unpredictableFailures.description"
    },
    {
      icon: DollarSign,
      titleKey: "problems.highCosts.title",
      statKey: "problems.highCosts.stat",
      descriptionKey: "problems.highCosts.description"
    },
    {
      icon: Clock,
      titleKey: "problems.timeLost.title",
      statKey: "problems.timeLost.stat",
      descriptionKey: "problems.timeLost.description"
    },
    {
      icon: Settings,
      titleKey: "problems.complexManagement.title",
      statKey: "problems.complexManagement.stat",
      descriptionKey: "problems.complexManagement.description"
    }
  ];

  return (
    <section id="problemas" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">
            {t('problems.title')}{' '}
            <span className="text-primary">{t('problems.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('problems.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="premium-card group hover:border-primary/50 transition-all duration-500 hover:scale-105 tech-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {t(problem.titleKey)}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-4 text-lg">
                    {t(problem.statKey)}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {t(problem.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 rounded-full px-6 py-3 border border-border/50">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              <span className="text-primary font-semibold">30</span> {t('problems.bottomStat')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;