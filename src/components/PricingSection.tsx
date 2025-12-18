import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Check, Info, Shield, Zap, Clock, Users } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

const PricingSection = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    tamanhoBarco: '',
    relacao: ''
  });

  const boatSizes = [
    { value: 's20', label: t('pricing.cta.boatSizes.s20') },
    { value: 's21', label: t('pricing.cta.boatSizes.s21') },
    { value: 's31', label: t('pricing.cta.boatSizes.s31') },
    { value: 's41', label: t('pricing.cta.boatSizes.s41') },
    { value: 's51', label: t('pricing.cta.boatSizes.s51') },
    { value: 's61', label: t('pricing.cta.boatSizes.s61') },
    { value: 's80', label: t('pricing.cta.boatSizes.s80') },
  ];

  const relations = [
    { value: 'owner', label: t('pricing.cta.relations.owner') },
    { value: 'crew', label: t('pricing.cta.relations.crew') },
    { value: 'company', label: t('pricing.cta.relations.company') },
    { value: 'marina', label: t('pricing.cta.relations.marina') },
    { value: 'insurer', label: t('pricing.cta.relations.insurer') },
    { value: 'enthusiast', label: t('pricing.cta.relations.enthusiast') },
  ];

  const benefits = [
    t('pricing.benefits.monitoring'),
    t('pricing.benefits.alerts'),
    t('pricing.benefits.costs'),
    t('pricing.benefits.time')
  ];

  const scrollToForm = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openFleetWhatsApp = () => {
    const message = encodeURIComponent(t('pricing.fleetMessage'));
    window.open(`https://api.whatsapp.com/send?phone=554891400063&text=${message}`, '_blank');
  };

  const faqs = [
    {
      question: t('pricing.faq.q1'),
      answer: t('pricing.faq.a1')
    },
    {
      question: t('pricing.faq.q2'),
      answer: t('pricing.faq.a2')
    },
    {
      question: t('pricing.faq.q3'),
      answer: t('pricing.faq.a3')
    },
    {
      question: t('pricing.faq.q4'),
      answer: t('pricing.faq.a4')
    },
    {
      question: t('pricing.faq.q5'),
      answer: t('pricing.faq.a5')
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="precos" className="py-24 bg-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">
            {t('pricing.title')}{' '}
            <span className="text-primary">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="premium-card border-primary/30 relative overflow-hidden group hover:border-primary transition-all duration-700">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">{t('pricing.fullPlan')}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-6xl md:text-8xl font-black text-primary tracking-tighter transition-all duration-500">
                    R$ 2.500
                    <span className="text-2xl text-muted-foreground ml-2">
                      {t('pricing.perYear')}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium text-lg pt-2">
                    {t('pricing.paymentInfo')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 group/item">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-colors">
                      <Check className="w-3 h-3 text-primary group-hover/item:text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="btn-hero min-w-[200px]" onClick={scrollToForm}>
                  {t('pricing.getQuote')}
                </Button>
                <Button variant="outline" size="lg" className="btn-ghost min-w-[200px]" onClick={openFleetWhatsApp}>
                  {t('footer.navigation.fleetSolutions')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 heading">
            {t('pricing.faq.title')}{' '}
            <span className="text-primary">{t('pricing.faq.titleHighlight')}</span>
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="premium-card border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed border-t border-border/20 pt-4 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div id="final-cta" className="premium-card border-primary/30 bg-gradient-to-r from-card via-card to-primary/5 relative overflow-hidden group">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-1000" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 heading">
                {t('pricing.cta.title')}{' '}
                <span className="text-primary">{t('pricing.cta.titleHighlight')}</span>
              </h3>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => {
                  const icons = [Shield, Zap, Clock, Users];
                  const IconComponent = icons[index];
                  
                  return (
                    <div key={index} className="flex items-center space-x-4 group/list">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/list:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg text-muted-foreground group-hover/list:text-foreground transition-colors">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="premium-card bg-background/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium ml-1">{t('pricing.cta.formName')}</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    placeholder="João Silva"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium ml-1">{t('pricing.cta.formEmail')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="joao@exemplo.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-foreground font-medium ml-1">{t('pricing.cta.formPhone')}</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary h-12"
                      placeholder="+55 (11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tamanho" className="text-foreground font-medium ml-1">{t('pricing.cta.formBoatSize')}</Label>
                    <Select onValueChange={(value) => handleInputChange('tamanhoBarco', value)}>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary h-12">
                        <SelectValue placeholder={t('pricing.cta.formSelectType')} />
                      </SelectTrigger>
                      <SelectContent>
                        {boatSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relacao" className="text-foreground font-medium ml-1">{t('pricing.cta.formRelation')}</Label>
                    <Select onValueChange={(value) => handleInputChange('relacao', value)}>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary h-12">
                        <SelectValue placeholder={t('pricing.cta.formSelectType')} />
                      </SelectTrigger>
                      <SelectContent>
                        {relations.map((rel) => (
                          <SelectItem key={rel.value} value={rel.value}>{rel.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero h-14 text-lg mt-4 group">
                  {t('pricing.cta.formSubmit')}
                  <Zap className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
