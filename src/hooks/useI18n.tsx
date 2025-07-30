import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = {
  pt: {
    // Header
    'header.solution': 'A Solução',
    'header.howItWorks': 'Como Funciona',
    'header.pricing': 'Preços',
    'header.partners': 'Parceiros',
    'header.getStarted': 'Começar Agora',
    
    // Hero Section
    'hero.title': 'No mar, não há',
    'hero.titleHighlight': 'acostamento',
    'hero.subtitle': 'Proteja seu investimento com tecnologia preditiva que prevê falhas antes que se tornem desastres. Navegue com tranquilidade sabendo que sua embarcação está sempre sob controle.',
    'hero.getQuote': 'Solicitar Orçamento',
    'hero.watchDemo': 'Ver Demonstração',
    'hero.liveStats': 'embarcações monitoradas em tempo real',
    
    // Problem Section
    'problems.title': 'Sua paixão não deveria ser uma',
    'problems.titleHighlight': 'dor de cabeça',
    'problems.subtitle': 'Proprietários de embarcações enfrentam desafios únicos que podem transformar momentos de lazer em fonte de ansiedade.',
    'problems.unpredictableFailures.title': 'Falhas Imprevisíveis',
    'problems.unpredictableFailures.stat': 'Falhas críticas podem custar vidas.',
    'problems.unpredictableFailures.description': 'Problemas mecânicos inesperados em alto mar representam riscos extremos para tripulação e passageiros.',
    'problems.highCosts.title': 'Custos Elevados',
    'problems.highCosts.stat': 'Altos custos de manutenção corretiva.',
    'problems.highCosts.description': 'Reparos de emergência custam até 5x mais que manutenção preventiva programada.',
    'problems.timeLost.title': 'Tempo Perdido',
    'problems.timeLost.stat': 'Alta taxa de indisponibilidade.',
    'problems.timeLost.description': 'Viagens canceladas e tempo de lazer perdido devido a falhas não detectadas antecipadamente.',
    'problems.complexManagement.title': 'Gestão Complexa',
    'problems.complexManagement.stat': 'A dor real de gerenciar seu patrimônio.',
    'problems.complexManagement.description': 'Controle de múltiplos sistemas, agendamento de manutenções e monitoramento constante geram stress.',
    'problems.bottomStat': 'milhões de embarcações operam sem inteligência preditiva',
    
    // Solution Section
    'solution.title': 'Tranquilidade em',
    'solution.titleHighlight': 'Três Passos',
    'solution.subtitle': 'Nossa solução transforma dados em conhecimento, ansiedade em confiança.',
    'solution.step1.title': 'Instalação Robusta',
    'solution.step1.description': 'Um hardware robusto é instalado em pontos chave da sua embarcação, monitorando os sistemas vitais 24/7.',
    'solution.step2.title': 'Conexão Inteligente',
    'solution.step2.description': 'O dispositivo se conecta a uma plataforma SaaS com inteligência embarcada, enviando dados em tempo real para a nuvem.',
    'solution.step3.title': 'Alertas Preditivos',
    'solution.step3.description': 'Receba alertas que preveem falhas antes que se tornem desastres, permitindo uma manutenção proativa e inteligente.',
    'solution.appTitle': 'Controle Total na',
    'solution.appTitleHighlight': 'Palma da Sua Mão',
    'solution.batteryMonitoring.title': 'Monitoramento de Bateria',
    'solution.batteryMonitoring.description': 'Monitore a voltagem e o status de carregamento das baterias, evitando a principal causa de saídas frustradas.',
    'solution.bilgePump.title': 'Atividade da Bomba de Porão',
    'solution.bilgePump.description': 'Saiba quantas vezes a bomba de porão foi acionada. Nossa plataforma alerta sobre atividade incomum que pode indicar vazamentos.',
    'solution.fuelManagement.title': 'Gestão de Combustível',
    'solution.fuelManagement.description': 'Planeje suas viagens com precisão e navegue com confiança. Chega de surpresas sobre a autonomia do seu barco.',
    'solution.hardwareTitle': 'Hardware de',
    'solution.hardwareTitleHighlight': 'Grau Industrial',
    'solution.hardwareSubtitle': 'Projetado para o Ambiente Marinho',
    'solution.hardware.feature1': 'Gabinete selado IP67 - Proteção total contra água e poeira',
    'solution.hardware.feature2': 'Múltiplos portos de sensor para monitoramento completo',
    'solution.hardware.feature3': 'Conectividade 4G/WiFi para dados em tempo real',
    'solution.hardware.feature4': 'Vida útil estimada de 10 anos',
    
    // Pricing Section
    'pricing.title': 'Planos que Se Adaptam ao',
    'pricing.titleHighlight': 'Seu Perfil',
    'pricing.subtitle': 'Escolha o plano ideal para proteger sua embarcação e navegar com tranquilidade.',
    'pricing.starter.title': 'Starter',
    'pricing.starter.subtitle': 'Para embarcações menores',
    'pricing.starter.features.1': 'Monitoramento básico de bateria',
    'pricing.starter.features.2': 'Alertas via aplicativo',
    'pricing.starter.features.3': 'Relatórios mensais',
    'pricing.starter.features.4': 'Suporte via email',
    'pricing.pro.title': 'Pro',
    'pricing.pro.subtitle': 'Para navegadores experientes',
    'pricing.pro.badge': 'Mais Popular',
    'pricing.pro.features.1': 'Monitoramento completo de sistemas',
    'pricing.pro.features.2': 'Alertas preditivos avançados',
    'pricing.pro.features.3': 'Dashboard web completo',
    'pricing.pro.features.4': 'Relatórios detalhados',
    'pricing.pro.features.5': 'Suporte prioritário',
    'pricing.pro.features.6': 'Integração com marinas',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.subtitle': 'Para frotas comerciais',
    'pricing.enterprise.features.1': 'Gestão centralizada de frota',
    'pricing.enterprise.features.2': 'API personalizada',
    'pricing.enterprise.features.3': 'Suporte 24/7 dedicado',
    'pricing.enterprise.features.4': 'Treinamento da equipe',
    'pricing.enterprise.features.5': 'SLA garantido',
    'pricing.contact': 'Falar com Vendas',
    'pricing.getStarted': 'Começar Agora',
    'pricing.perMonth': '/mês',
    'pricing.perBoat': 'por embarcação',
    
    // Trust Section
    'trust.title': 'Elogiada por',
    'trust.titleHighlight': 'Usuários Reais',
    'trust.subtitle': 'Proprietários de embarcações de médio e alto padrão confiam no SAFEBOAT para proteger seus investimentos.',
    'trust.testimonial1': 'O SAFEBOAT me deu a tranquilidade que eu precisava. Detectou um problema na bomba de combustível antes mesmo que eu percebesse.',
    'trust.testimonial2': 'Desde que instalei o sistema, nunca mais tive surpresas desagradáveis. Vale cada centavo investido.',
    'trust.testimonial3': 'A tecnologia é impressionante. Recebo alertas antes mesmo dos problemas acontecerem.',
    'trust.b2bTitle': 'Tecnologia Confiável para as',
    'trust.b2bTitleHighlight': 'Maiores Frotas',
    'trust.b2bDescription': 'A Prime Share, empresa de gestão de embarcações com uma frota de cerca de 200 barcos, confia na tecnologia SAFEBOAT para otimizar a manutenção, aumentar a segurança e garantir a disponibilidade de seus ativos.',
    'trust.b2bFeature1': 'Redução de 40% nos custos de manutenção',
    'trust.b2bFeature2': '95% de disponibilidade da frota',
    'trust.b2bFeature3': 'Monitoramento 24/7 de 200+ embarcações',
    'trust.b2bStats': 'Embarcações Monitoradas',
    'trust.b2bQuote': 'Se uma tecnologia é confiável o suficiente para gerenciar 200 embarcações comerciais, imagine o que pode fazer pela sua.',
    'trust.fleetSolutions': 'Conheça nossas Soluções para Frotas',
    'trust.expertiseTitle': 'Desenvolvido por',
    'trust.expertiseTitleHighlight': 'Especialistas',
    'trust.naval': 'Engenheiros Navais',
    'trust.navalDesc': 'Especialistas em sistemas marítimos e segurança náutica',
    'trust.electrical': 'Engenheiros Eletricistas',
    'trust.electricalDesc': 'Expertise em sistemas elétricos e automação embarcada',
    'trust.electronic': 'Engenheiros Eletrônicos',
    'trust.electronicDesc': 'Desenvolvimento de hardware e sistemas de comunicação',
    
    // Footer
    'footer.description': 'Conectando embarcações e proprietários através de tecnologia preditiva para um novo padrão de segurança e tranquilidade no mar.',
    'footer.navigation': 'Navegação',
    'footer.navigation.solution': 'A Solução',
    'footer.navigation.howItWorks': 'Como Funciona',
    'footer.navigation.pricing': 'Preços',
    'footer.navigation.partners': 'Parceiros',
    'footer.navigation.fleetSolutions': 'Soluções para Frotas',
    'footer.legal': 'Legal & Corporativo',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.contact': 'Contato',
    'footer.copyright': '2024 SAFEBOAT. Todos os direitos reservados.',
    'footer.monitoring': 'Monitorando embarcações 24/7',
  },
  en: {
    // Header
    'header.solution': 'The Solution',
    'header.howItWorks': 'How It Works',
    'header.pricing': 'Pricing',
    'header.partners': 'Partners',
    'header.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'The sea has no',
    'hero.titleHighlight': 'emergency lane',
    'hero.subtitle': 'Protect your investment with predictive technology that forecasts failures before they become disasters. Navigate with peace of mind knowing your vessel is always under control.',
    'hero.getQuote': 'Get Quote',
    'hero.watchDemo': 'Watch Demo',
    'hero.liveStats': 'vessels monitored in real time',
    
    // Problem Section
    'problems.title': 'Your passion shouldn\'t be a',
    'problems.titleHighlight': 'headache',
    'problems.subtitle': 'Vessel owners face unique challenges that can turn leisure moments into sources of anxiety.',
    'problems.unpredictableFailures.title': 'Unpredictable Failures',
    'problems.unpredictableFailures.stat': 'Critical failures can cost lives.',
    'problems.unpredictableFailures.description': 'Unexpected mechanical problems at sea pose extreme risks to crew and passengers.',
    'problems.highCosts.title': 'High Costs',
    'problems.highCosts.stat': 'High corrective maintenance costs.',
    'problems.highCosts.description': 'Emergency repairs cost up to 5x more than scheduled preventive maintenance.',
    'problems.timeLost.title': 'Time Lost',
    'problems.timeLost.stat': 'High unavailability rate.',
    'problems.timeLost.description': 'Cancelled trips and lost leisure time due to undetected failures in advance.',
    'problems.complexManagement.title': 'Complex Management',
    'problems.complexManagement.stat': 'The real pain of managing your asset.',
    'problems.complexManagement.description': 'Control of multiple systems, maintenance scheduling and constant monitoring create stress.',
    'problems.bottomStat': 'million vessels operate without predictive intelligence',
    
    // Solution Section
    'solution.title': 'Peace of Mind in',
    'solution.titleHighlight': 'Three Steps',
    'solution.subtitle': 'Our solution transforms data into knowledge, anxiety into confidence.',
    'solution.step1.title': 'Robust Installation',
    'solution.step1.description': 'Robust hardware is installed at key points of your vessel, monitoring vital systems 24/7.',
    'solution.step2.title': 'Intelligent Connection',
    'solution.step2.description': 'The device connects to a SaaS platform with embedded intelligence, sending real-time data to the cloud.',
    'solution.step3.title': 'Predictive Alerts',
    'solution.step3.description': 'Receive alerts that predict failures before they become disasters, enabling proactive and intelligent maintenance.',
    'solution.appTitle': 'Total Control in the',
    'solution.appTitleHighlight': 'Palm of Your Hand',
    'solution.batteryMonitoring.title': 'Battery Monitoring',
    'solution.batteryMonitoring.description': 'Monitor voltage and battery charging status, avoiding the main cause of frustrated outings.',
    'solution.bilgePump.title': 'Bilge Pump Activity',
    'solution.bilgePump.description': 'Know how many times the bilge pump was activated. Our platform alerts about unusual activity that may indicate leaks.',
    'solution.fuelManagement.title': 'Fuel Management',
    'solution.fuelManagement.description': 'Plan your trips with precision and navigate with confidence. No more surprises about your boat\'s range.',
    'solution.hardwareTitle': 'Industrial Grade',
    'solution.hardwareTitleHighlight': 'Hardware',
    'solution.hardwareSubtitle': 'Designed for Marine Environment',
    'solution.hardware.feature1': 'IP67 sealed enclosure - Complete protection against water and dust',
    'solution.hardware.feature2': 'Multiple sensor ports for complete monitoring',
    'solution.hardware.feature3': '4G/WiFi connectivity for real-time data',
    'solution.hardware.feature4': 'Estimated 10-year lifespan',
    
    // Pricing Section
    'pricing.title': 'Plans That Adapt to',
    'pricing.titleHighlight': 'Your Profile',
    'pricing.subtitle': 'Choose the ideal plan to protect your vessel and navigate with peace of mind.',
    'pricing.starter.title': 'Starter',
    'pricing.starter.subtitle': 'For smaller vessels',
    'pricing.starter.features.1': 'Basic battery monitoring',
    'pricing.starter.features.2': 'App alerts',
    'pricing.starter.features.3': 'Monthly reports',
    'pricing.starter.features.4': 'Email support',
    'pricing.pro.title': 'Pro',
    'pricing.pro.subtitle': 'For experienced navigators',
    'pricing.pro.badge': 'Most Popular',
    'pricing.pro.features.1': 'Complete system monitoring',
    'pricing.pro.features.2': 'Advanced predictive alerts',
    'pricing.pro.features.3': 'Complete web dashboard',
    'pricing.pro.features.4': 'Detailed reports',
    'pricing.pro.features.5': 'Priority support',
    'pricing.pro.features.6': 'Marina integration',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.subtitle': 'For commercial fleets',
    'pricing.enterprise.features.1': 'Centralized fleet management',
    'pricing.enterprise.features.2': 'Custom API',
    'pricing.enterprise.features.3': 'Dedicated 24/7 support',
    'pricing.enterprise.features.4': 'Team training',
    'pricing.enterprise.features.5': 'Guaranteed SLA',
    'pricing.contact': 'Contact Sales',
    'pricing.getStarted': 'Get Started',
    'pricing.perMonth': '/month',
    'pricing.perBoat': 'per vessel',
    
    // Trust Section
    'trust.title': 'Praised by',
    'trust.titleHighlight': 'Real Users',
    'trust.subtitle': 'Medium and high-end vessel owners trust SAFEBOAT to protect their investments.',
    'trust.testimonial1': 'SAFEBOAT gave me the peace of mind I needed. It detected a fuel pump problem before I even noticed.',
    'trust.testimonial2': 'Since I installed the system, I never had unpleasant surprises again. Worth every penny invested.',
    'trust.testimonial3': 'The technology is impressive. I receive alerts even before problems happen.',
    'trust.b2bTitle': 'Reliable Technology for the',
    'trust.b2bTitleHighlight': 'Largest Fleets',
    'trust.b2bDescription': 'Prime Share, a vessel management company with a fleet of about 200 boats, trusts SAFEBOAT technology to optimize maintenance, increase safety and ensure asset availability.',
    'trust.b2bFeature1': '40% reduction in maintenance costs',
    'trust.b2bFeature2': '95% fleet availability',
    'trust.b2bFeature3': '24/7 monitoring of 200+ vessels',
    'trust.b2bStats': 'Monitored Vessels',
    'trust.b2bQuote': 'If a technology is reliable enough to manage 200 commercial vessels, imagine what it can do for yours.',
    'trust.fleetSolutions': 'Learn about our Fleet Solutions',
    'trust.expertiseTitle': 'Developed by',
    'trust.expertiseTitleHighlight': 'Experts',
    'trust.naval': 'Naval Engineers',
    'trust.navalDesc': 'Specialists in maritime systems and nautical safety',
    'trust.electrical': 'Electrical Engineers',
    'trust.electricalDesc': 'Expertise in electrical systems and embedded automation',
    'trust.electronic': 'Electronic Engineers',
    'trust.electronicDesc': 'Hardware development and communication systems',
    
    // Footer
    'footer.description': 'Connecting vessels and owners through predictive technology for a new standard of safety and peace of mind at sea.',
    'footer.navigation': 'Navigation',
    'footer.navigation.solution': 'The Solution',
    'footer.navigation.howItWorks': 'How It Works',
    'footer.navigation.pricing': 'Pricing',
    'footer.navigation.partners': 'Partners',
    'footer.navigation.fleetSolutions': 'Fleet Solutions',
    'footer.legal': 'Legal & Corporate',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.copyright': '2024 SAFEBOAT. All rights reserved.',
    'footer.monitoring': 'Monitoring vessels 24/7',
  },
  es: {
    // Header
    'header.solution': 'La Solución',
    'header.howItWorks': 'Cómo Funciona',
    'header.pricing': 'Precios',
    'header.partners': 'Socios',
    'header.getStarted': 'Comenzar',
    
    // Hero Section
    'hero.title': 'El mar no tiene',
    'hero.titleHighlight': 'carril de emergencia',
    'hero.subtitle': 'Proteja su inversión con tecnología predictiva que prevé fallas antes de que se conviertan en desastres. Navegue con tranquilidad sabiendo que su embarcación está siempre bajo control.',
    'hero.getQuote': 'Solicitar Cotización',
    'hero.watchDemo': 'Ver Demostración',
    'hero.liveStats': 'embarcaciones monitoreadas en tiempo real',
    
    // Problem Section
    'problems.title': 'Su pasión no debería ser un',
    'problems.titleHighlight': 'dolor de cabeza',
    'problems.subtitle': 'Los propietarios de embarcaciones enfrentan desafíos únicos que pueden transformar momentos de ocio en fuentes de ansiedad.',
    'problems.unpredictableFailures.title': 'Fallas Impredecibles',
    'problems.unpredictableFailures.stat': 'Las fallas críticas pueden costar vidas.',
    'problems.unpredictableFailures.description': 'Problemas mecánicos inesperados en alta mar representan riesgos extremos para tripulación y pasajeros.',
    'problems.highCosts.title': 'Costos Elevados',
    'problems.highCosts.stat': 'Altos costos de mantenimiento correctivo.',
    'problems.highCosts.description': 'Las reparaciones de emergencia cuestan hasta 5 veces más que el mantenimiento preventivo programado.',
    'problems.timeLost.title': 'Tiempo Perdido',
    'problems.timeLost.stat': 'Alta tasa de indisponibilidad.',
    'problems.timeLost.description': 'Viajes cancelados y tiempo de ocio perdido debido a fallas no detectadas con anticipación.',
    'problems.complexManagement.title': 'Gestión Compleja',
    'problems.complexManagement.stat': 'El dolor real de gestionar su patrimonio.',
    'problems.complexManagement.description': 'Control de múltiples sistemas, programación de mantenimiento y monitoreo constante generan estrés.',
    'problems.bottomStat': 'millones de embarcaciones operan sin inteligencia predictiva',
    
    // Solution Section
    'solution.title': 'Tranquilidad en',
    'solution.titleHighlight': 'Tres Pasos',
    'solution.subtitle': 'Nuestra solución transforma datos en conocimiento, ansiedad en confianza.',
    'solution.step1.title': 'Instalación Robusta',
    'solution.step1.description': 'Hardware robusto se instala en puntos clave de su embarcación, monitoreando sistemas vitales 24/7.',
    'solution.step2.title': 'Conexión Inteligente',
    'solution.step2.description': 'El dispositivo se conecta a una plataforma SaaS con inteligencia embebida, enviando datos en tiempo real a la nube.',
    'solution.step3.title': 'Alertas Predictivas',
    'solution.step3.description': 'Reciba alertas que predicen fallas antes de que se conviertan en desastres, permitiendo mantenimiento proactivo e inteligente.',
    'solution.appTitle': 'Control Total en la',
    'solution.appTitleHighlight': 'Palma de Su Mano',
    'solution.batteryMonitoring.title': 'Monitoreo de Batería',
    'solution.batteryMonitoring.description': 'Monitoree el voltaje y estado de carga de las baterías, evitando la principal causa de salidas frustradas.',
    'solution.bilgePump.title': 'Actividad de Bomba de Achique',
    'solution.bilgePump.description': 'Sepa cuántas veces se activó la bomba de achique. Nuestra plataforma alerta sobre actividad inusual que puede indicar filtraciones.',
    'solution.fuelManagement.title': 'Gestión de Combustible',
    'solution.fuelManagement.description': 'Planifique sus viajes con precisión y navegue con confianza. No más sorpresas sobre la autonomía de su barco.',
    'solution.hardwareTitle': 'Hardware de',
    'solution.hardwareTitleHighlight': 'Grado Industrial',
    'solution.hardwareSubtitle': 'Diseñado para el Ambiente Marino',
    'solution.hardware.feature1': 'Gabinete sellado IP67 - Protección completa contra agua y polvo',
    'solution.hardware.feature2': 'Múltiples puertos de sensor para monitoreo completo',
    'solution.hardware.feature3': 'Conectividad 4G/WiFi para datos en tiempo real',
    'solution.hardware.feature4': 'Vida útil estimada de 10 años',
    
    // Pricing Section
    'pricing.title': 'Planes que Se Adaptan a',
    'pricing.titleHighlight': 'Su Perfil',
    'pricing.subtitle': 'Elija el plan ideal para proteger su embarcación y navegar con tranquilidad.',
    'pricing.starter.title': 'Starter',
    'pricing.starter.subtitle': 'Para embarcaciones menores',
    'pricing.starter.features.1': 'Monitoreo básico de batería',
    'pricing.starter.features.2': 'Alertas vía aplicación',
    'pricing.starter.features.3': 'Informes mensuales',
    'pricing.starter.features.4': 'Soporte vía email',
    'pricing.pro.title': 'Pro',
    'pricing.pro.subtitle': 'Para navegantes experimentados',
    'pricing.pro.badge': 'Más Popular',
    'pricing.pro.features.1': 'Monitoreo completo de sistemas',
    'pricing.pro.features.2': 'Alertas predictivas avanzadas',
    'pricing.pro.features.3': 'Dashboard web completo',
    'pricing.pro.features.4': 'Informes detallados',
    'pricing.pro.features.5': 'Soporte prioritario',
    'pricing.pro.features.6': 'Integración con marinas',
    'pricing.enterprise.title': 'Enterprise',
    'pricing.enterprise.subtitle': 'Para flotas comerciales',
    'pricing.enterprise.features.1': 'Gestión centralizada de flota',
    'pricing.enterprise.features.2': 'API personalizada',
    'pricing.enterprise.features.3': 'Soporte 24/7 dedicado',
    'pricing.enterprise.features.4': 'Entrenamiento del equipo',
    'pricing.enterprise.features.5': 'SLA garantizado',
    'pricing.contact': 'Contactar Ventas',
    'pricing.getStarted': 'Comenzar',
    'pricing.perMonth': '/mes',
    'pricing.perBoat': 'por embarcación',
    
    // Trust Section
    'trust.title': 'Elogiada por',
    'trust.titleHighlight': 'Usuarios Reales',
    'trust.subtitle': 'Propietarios de embarcaciones de medio y alto estándar confían en SAFEBOAT para proteger sus inversiones.',
    'trust.testimonial1': 'SAFEBOAT me dio la tranquilidad que necesitaba. Detectó un problema en la bomba de combustible antes de que me diera cuenta.',
    'trust.testimonial2': 'Desde que instalé el sistema, nunca más tuve sorpresas desagradables. Vale cada centavo invertido.',
    'trust.testimonial3': 'La tecnología es impresionante. Recibo alertas antes de que sucedan los problemas.',
    'trust.b2bTitle': 'Tecnología Confiable para las',
    'trust.b2bTitleHighlight': 'Flotas Más Grandes',
    'trust.b2bDescription': 'Prime Share, empresa de gestión de embarcaciones con una flota de cerca de 200 barcos, confía en la tecnología SAFEBOAT para optimizar mantenimiento, aumentar seguridad y garantizar disponibilidad de activos.',
    'trust.b2bFeature1': 'Reducción del 40% en costos de mantenimiento',
    'trust.b2bFeature2': '95% de disponibilidad de flota',
    'trust.b2bFeature3': 'Monitoreo 24/7 de 200+ embarcaciones',
    'trust.b2bStats': 'Embarcaciones Monitoreadas',
    'trust.b2bQuote': 'Si una tecnología es confiable para gestionar 200 embarcaciones comerciales, imagine lo que puede hacer por la suya.',
    'trust.fleetSolutions': 'Conozca nuestras Soluciones para Flotas',
    'trust.expertiseTitle': 'Desarrollado por',
    'trust.expertiseTitleHighlight': 'Expertos',
    'trust.naval': 'Ingenieros Navales',
    'trust.navalDesc': 'Especialistas en sistemas marítimos y seguridad náutica',
    'trust.electrical': 'Ingenieros Electricistas',
    'trust.electricalDesc': 'Experiencia en sistemas eléctricos y automatización embarcada',
    'trust.electronic': 'Ingenieros Electrónicos',
    'trust.electronicDesc': 'Desarrollo de hardware y sistemas de comunicación',
    
    // Footer
    'footer.description': 'Conectando embarcaciones y propietarios a través de tecnología predictiva para un nuevo estándar de seguridad y tranquilidad en el mar.',
    'footer.navigation': 'Navegación',
    'footer.navigation.solution': 'La Solución',
    'footer.navigation.howItWorks': 'Cómo Funciona',
    'footer.navigation.pricing': 'Precios',
    'footer.navigation.partners': 'Socios',
    'footer.navigation.fleetSolutions': 'Soluciones para Flotas',
    'footer.legal': 'Legal y Corporativo',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contacto',
    'footer.copyright': '2024 SAFEBOAT. Todos los derechos reservados.',
    'footer.monitoring': 'Monitoreando embarcaciones 24/7',
  }
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const langTranslations = translations[language];
    if (key in langTranslations) {
      return langTranslations[key as keyof typeof langTranslations];
    }
    return key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};