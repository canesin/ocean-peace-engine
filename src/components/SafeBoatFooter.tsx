import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import galleryImg1 from '@/assets/IMG_20250724_122735270_HDR.jpg';
import galleryImg2 from '@/assets/IMG_20250724_122945059_HDR.jpg';
import galleryImg3 from '@/assets/IMG_20250724_123017972_HDR.jpg';
import galleryImg4 from '@/assets/IMG_20250724_123035394_HDR.jpg';

const SafeBoatFooter = () => {
  const { t } = useI18n();
  const images = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-tech)] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Identity */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img src="logo.png" alt="SAFEBOAT Logo" className="h-12 w-auto group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/safeboat.tech/" },
                { 
                  icon: Phone, 
                  href: "https://api.whatsapp.com/send?phone=554891400063&text=Ol%C3%A1%20Marcelo!%20Quero%20saber%20mais%20sobre%20o%20aplicativo%20NAVALCARE%20SAFEBOAT.",
                  isWhatsApp: true 
                }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.isWhatsApp ? 'hover:border-green-500 hover:bg-green-500/10' : ''}`}
                >
                  <social.icon className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ${social.isWhatsApp ? 'group-hover:text-green-500' : ''}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-widest">{t('footer.navigation.title')}</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#solucao" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.navigation.solution')}
              </a>
              <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.navigation.howItWorks')}
              </a>
              <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.navigation.pricing')}
              </a>
              <a href="#parceiros" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.navigation.partners')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.navigation.fleetSolutions')}
              </a>
            </nav>
          </div>

          {/* Legal & Corporate */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-widest">{t('footer.legal')}</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors story-link inline-block w-fit">
                {t('footer.terms')}
              </a>
              <div className="pt-6 border-t border-border/50 mt-4">
                <p className="text-xs font-black text-foreground/50 uppercase tracking-tighter mb-1">
                  SAFEBOAT TECNOLOGIA
                </p>
                <p className="text-xs text-muted-foreground">
                  CNPJ: 52.998.441/0001-28
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-widest">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p className="text-foreground font-medium">Florianópolis, SC</p>
                  <p>Rua Silva Jardim 838, sala 04</p>
                  <p>Centro - Brasil</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a 
                  href="mailto:marcelo@navalcare.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  marcelo@navalcare.com
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a 
                  href="tel:+5548991400063" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +55 48 99140-0063
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
            <h4 className="text-xs font-black text-foreground/30 uppercase tracking-[0.3em] mx-8">Behind the Scenes</h4>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="w-full h-40 rounded-2xl overflow-hidden group relative border border-border/50">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs font-medium text-muted-foreground tracking-wide">
            {t('footer.copyright')}
          </p>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping absolute inset-0" />
                <div className="w-2 h-2 bg-primary rounded-full relative z-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                {t('footer.monitoring')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SafeBoatFooter;