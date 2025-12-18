import { useState } from 'react';
import { Star, Users, Award, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/useI18n';
import teamVideo from '@/assets/team.webm';

const TrustSection = () => {
  const { t } = useI18n();
  const [videoLoaded, setVideoLoaded] = useState(false);
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
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
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
              className="premium-card group hover:border-primary transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-8 leading-relaxed italic relative">
                <span className="absolute -top-4 -left-2 text-4xl text-primary/20 font-serif">"</span>
                {testimonial.quote}
                <span className="absolute -bottom-4 -right-2 text-4xl text-primary/20 font-serif">"</span>
              </blockquote>
              
              <div className="flex items-center space-x-4 border-t border-border/50 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                  <span className="text-primary font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{testimonial.boat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Case Study */}
        <div className="premium-card bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded border border-primary/20 uppercase tracking-tighter">
              Enterprise Case
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 heading">
              {t('trust.b2bTitle')}{' '}
              <span className="text-primary">{t('trust.b2bTitleHighlight')}</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg group">
                  <Users className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-primary font-black text-4xl tracking-tighter">
                  PRIME<span className="text-foreground/50">SHARE</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('trust.b2bDescription')}
              </p>

              <div className="grid sm:grid-cols-1 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {t(`trust.b2bFeature${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="premium-card bg-background/40 backdrop-blur-md border-primary/30 p-12 text-center group hover:border-primary transition-all duration-700">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 space-y-4">
                  <div className="text-7xl font-black text-primary tracking-tighter animate-float">200+</div>
                  <p className="text-xl uppercase tracking-widest font-bold text-muted-foreground">{t('trust.b2bStats')}</p>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8" />
                  
                  <p className="text-sm text-muted-foreground leading-relaxed italic max-w-xs mx-auto">
                    "{t('trust.b2bQuote')}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-ghost group">
              {t('trust.fleetSolutions')}
              <Smartphone className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-20 text-center relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center">
          <video
            className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={teamVideo} type="video/webm" />
          </video>
          {!videoLoaded && (
            <div className="absolute inset-0 bg-card/40 animate-pulse z-0" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10"></div>
          
          <div className="relative z-20 p-8 md:p-16 w-full">
            <h3 className="text-3xl md:text-5xl font-bold mb-16 heading">
              {t('trust.expertiseTitle')}{' '}
              <span className="text-primary">{t('trust.expertiseTitleHighlight')}</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { key: 'naval', icon: '⚓', colorClass: 'bg-primary/10 border-primary/20 hover:bg-primary/20' },
                { key: 'electrical', icon: '⚡', colorClass: 'bg-secondary/10 border-secondary/20 hover:bg-secondary/20' },
                { key: 'electronic', icon: '📟', colorClass: 'bg-primary/10 border-primary/20 hover:bg-primary/20' }
              ].map((item) => (
                <div 
                  key={item.key}
                  className="premium-card text-center group hover:border-primary/50 transition-all duration-500 bg-background/40 backdrop-blur-md border-border/30 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 border group-hover:rotate-12 ${item.colorClass}`}>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {t(`trust.${item.key}`)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`trust.${item.key}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
