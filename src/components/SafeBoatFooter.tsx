import { MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const SafeBoatFooter = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SB</span>
              </div>
              <span className="text-xl font-bold text-foreground">SAFEBOAT</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Conectando embarcações e proprietários através de tecnologia preditiva para um novo padrão de segurança e tranquilidade no mar.
            </p>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted/20 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Navegação</h4>
            <nav className="space-y-3">
              <a href="#solucao" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                A Solução
              </a>
              <a href="#como-funciona" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Como Funciona
              </a>
              <a href="#precos" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Preços
              </a>
              <a href="#parceiros" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Parceiros
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Soluções para Frotas
              </a>
            </nav>
          </div>

          {/* Legal & Corporate */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Legal & Corporativo</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Política de Privacidade
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors story-link">
                Termos de Serviço
              </a>
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">SAFEBOAT TECNOLOGIA</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  CNPJ: 52.998.441/0001-28
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Rua Silva Jardim 838, sala 04</p>
                  <p>Centro, Florianópolis-SC</p>
                  <p>Brasil</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:marcelo@navalcare.com" 
                  className="text-muted-foreground hover:text-primary transition-colors story-link"
                >
                  marcelo@navalcare.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+5548991400063" 
                  className="text-muted-foreground hover:text-primary transition-colors story-link"
                >
                  +55 48 99140-0063
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 SAFEBOAT. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Monitorando embarcações 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SafeBoatFooter;