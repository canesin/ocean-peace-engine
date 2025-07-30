import { Star, Users, Award } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import teamVideo from '@/assets/team.webm';

const TrustSection = () => {
  const { t } = useI18n();
  const testimonials = [
    {
      quote: t('trust.testimonial1'),
      name: "Carlos M.",
      boat: "Intermarine 600"
    },
    {
      quote: t('trust.testimonial2'),
      name: "Roberto S.",
      boat: "Azimut 54"
    },
    {
      quote: t('trust.testimonial3'),
      name: "Marina L.",
      boat: "Princess 45"
    }
  ];

  return (
    <section id="parceiros" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Testimonials */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">
            {t('trust.title')}{' '}
            <span className="text-primary">{t('trust.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="premium-card group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.boat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Case Study */}
        <div className="premium-card bg-gradient-to-r from-card to-muted/5 border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 heading">
              {t('trust.b2bTitle')}{' '}
              <span className="text-primary">{t('trust.b2bTitleHighlight')}</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="w-20 h-20 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">PS</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A <strong className="text-foreground">Prime Share</strong>, {t('trust.b2bDescription')}
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t('trust.b2bFeature1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t('trust.b2bFeature2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t('trust.b2bFeature3')}</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col items-center space-y-6">
                <div className="text-6xl font-bold text-primary">200+</div>
                <p className="text-xl text-muted-foreground">{t('trust.b2bStats')}</p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    "{t('trust.b2bQuote')}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-ghost">
              {t('trust.fleetSolutions')}
            </button>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-20 text-center relative rounded-2xl overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={teamVideo} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-background opacity-80 z-10"></div>
          <div className="relative z-20 p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 heading">
              {t('trust.expertiseTitle')}{' '}
              <span className="text-primary">{t('trust.expertiseTitleHighlight')}</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card text-center group hover:border-primary/50 transition-all duration-500 bg-card/20 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-bold text-xl">EN</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{t('trust.naval')}</h4>
                <p className="text-muted-foreground">{t('trust.navalDesc')}</p>
              </div>

              <div className="premium-card text-center group hover:border-primary/50 transition-all duration-500 bg-card/20 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="text-secondary font-bold text-xl">EE</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{t('trust.electrical')}</h4>
                <p className="text-muted-foreground">{t('trust.electricalDesc')}</p>
              </div>

              <div className="premium-card text-center group hover:border-primary/50 transition-all duration-500 bg-card/20 backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-bold text-xl">EL</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{t('trust.electronic')}</h4>
                <p className="text-muted-foreground">{t('trust.electronicDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
