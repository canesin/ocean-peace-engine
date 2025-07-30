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
    telefone: '',
    tipoEmbarcacao: ''
  });

  const benefits = [
    "Monitoramento 24/7",
    "Alertas Preditivos",
    "Redução de Custos",
    "Mais Tempo na Água"
  ];

  const faqs = [
    {
      question: "Como a instalação é realizada?",
      answer: "Nossa equipe técnica especializada realiza a instalação em sua embarcação, geralmente em 2-4 horas. O processo é não-invasivo e não afeta a garantia da embarcação."
    },
    {
      question: "Minha embarcação é compatível?",
      answer: "O SAFEBOAT é compatível com a maioria das embarcações com sistema elétrico 12V ou 24V. Nossa equipe faz uma avaliação prévia para garantir total compatibilidade."
    },
    {
      question: "O que acontece se eu vender minha embarcação?",
      answer: "O hardware pode ser transferido para uma nova embarcação ou você pode cancelar o serviço. O dispositivo permanece como comodato durante todo o período de uso."
    },
    {
      question: "Como meus dados de navegação são protegidos?",
      answer: "Utilizamos criptografia de ponta a ponta e servidores seguros em nuvem. Seus dados são privados e nunca compartilhados com terceiros."
    },
    {
      question: "Qual a garantia do hardware?",
      answer: "O hardware tem vida útil estimada de 10 anos e fica em regime de comodato. Qualquer defeito ou problema é coberto integralmente pelo serviço."
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
            Um Investimento na sua{' '}
            <span className="text-primary">Tranquilidade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Valor transparente para total peace of mind no mar.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="premium-card border-primary/30 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-20" />
            
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Plano Completo</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-6xl md:text-7xl font-bold text-primary">
                    R$ 189
                    <span className="text-2xl text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-muted-foreground">por embarcação</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-8">
                <span className="text-lg text-muted-foreground">+</span>
                <span className="text-2xl font-bold text-foreground">R$ 1.100</span>
                <span className="text-muted-foreground">taxa de implementação</span>
                <div className="group relative">
                  <Info className="w-4 h-4 text-muted-foreground cursor-help ml-1" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card border border-border rounded-lg p-3 text-sm text-muted-foreground w-64 z-10">
                    Este valor único cobre o custo de fabricação e a instalação do hardware, 
                    que é fornecido em regime de comodato com vida útil estimada de 10 anos.
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Solicitar Orçamento
                </Button>
                <Button variant="outline" size="lg" className="btn-ghost">
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 heading">
            Perguntas{' '}
            <span className="text-primary">Frequentes</span>
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="premium-card border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="premium-card border-primary/30 bg-gradient-to-r from-card via-card to-primary/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 heading">
                Pronto para navegar com{' '}
                <span className="text-primary">total segurança?</span>
              </h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const icons = [Shield, Zap, Clock, Users];
                  const IconComponent = icons[index];
                  
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-foreground">Nome Completo</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="mt-2 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="tipo" className="text-foreground">Tipo de Embarcação (Opcional)</Label>
                  <Select onValueChange={(value) => handleInputChange('tipoEmbarcacao', value)}>
                    <SelectTrigger className="mt-2 bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione o tipo..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lancha">Lancha</SelectItem>
                      <SelectItem value="iate">Iate</SelectItem>
                      <SelectItem value="veleiro">Veleiro</SelectItem>
                      <SelectItem value="catamara">Catamarã</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero">
                  Solicitar Orçamento e Contato
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