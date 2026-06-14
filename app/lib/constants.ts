const WA = "https://wa.me/5591985413408";
const IG = "https://www.instagram.com/orionos.tech/";

export const NAV = {
  logo: "/logo.png",
  links: [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ],
  cta: {
    label: "Falar no WhatsApp",
    href: WA,
  },
};

export const HERO = {
  badge: "Tecnologia que trabalha por você",
  headline: ["Sites que vendem.", "Sistemas que funcionam.", "IA que responde."],
  subheadline:
    "Desenvolvemos presença digital de alto nível e automações com IA — para empresas que não têm tempo a perder.",
  cta: {
    primary: { label: "Ver nossos serviços", href: "#servicos" },
    secondary: { label: "Falar com a gente", href: WA },
  },
};

export const SERVICES = {
  heading: "O que entregamos",
  subheading: "Três soluções. Zero enrolação.",
  items: [
    {
      icon: "Monitor",
      title: "Sites Premium",
      description:
        "Design sofisticado, animações fluidas e código limpo. Sites que comunicam profissionalismo antes mesmo do cliente ler uma palavra.",
      tags: ["Next.js", "Animações", "SEO"],
    },
    {
      icon: "MessageSquare",
      title: "Agente de IA no WhatsApp",
      description:
        "Um agente que atende, qualifica e responde clientes 24h por dia — integrado ao seu CRM e com linguagem no seu tom de voz.",
      tags: ["IA", "WhatsApp", "CRM"],
    },
  ],
};

export const ABOUT = {
  heading: "Tecnologia com propósito",
  paragraphs: [
    "A OrionOS nasceu da frustração com soluções genéricas. Sites que parecem todos iguais. Sistemas complicados demais para usar. Ferramentas de IA que prometem tudo e entregam pouco.",
    "Construímos o contrário disso: tecnologia sob medida, com acabamento premium e foco total no resultado do cliente.",
  ],
  differentials: [
    {
      icon: "Zap",
      title: "Entrega rápida",
      description: "Projetos com prazo real e comunicação direta. Sem surpresas no meio do caminho.",
    },
    {
      icon: "Layers",
      title: "Design que converte",
      description: "Cada decisão visual tem um propósito. Não fazemos bonito por fazer.",
    },
    {
      icon: "Bot",
      title: "IA integrada",
      description: "Automações que funcionam de verdade, conectadas ao seu negócio real.",
    },
    {
      icon: "Headphones",
      title: "Suporte contínuo",
      description: "Não sumimos após a entrega. Evoluímos o produto junto com você.",
    },
  ],
};

export const CASES = {
  heading: "O que já entregamos",
  subheading: "Projetos reais, resultados concretos.",
  items: [
    {
      tag: "Sistema",
      title: "Sistema de Cobrança",
      description:
        "Painel completo para gestão de cobranças recorrentes com notificações automáticas, relatórios e CRM integrado. Reduziu o tempo de gestão financeira em 60%.",
      tech: ["Dashboard", "CRM", "Automação"],
      color: "#4f8ef7",
      // URL-encoded paths for filenames with spaces
      images: [
        "/cases/Sistema%20de%20cobranca/Captura%20de%20tela%202026-06-06%20153204.png",
        "/cases/Sistema%20de%20cobranca/Captura%20de%20tela%202026-06-06%20153238.png",
        "/cases/Sistema%20de%20cobranca/Captura%20de%20tela%202026-06-06%20153253.png",
        "/cases/Sistema%20de%20cobranca/Captura%20de%20tela%202026-06-06%20153313.png",
        "/cases/Sistema%20de%20cobranca/Captura%20de%20tela%202026-06-06%20153328.png",
      ],
    },
    {
      tag: "IA no WhatsApp",
      title: "Agente de Atendimento OrionOS",
      description:
        "Agente de IA que qualifica leads, responde dúvidas frequentes e agenda reuniões direto no WhatsApp — funcionando 24h com linguagem personalizada.",
      tech: ["IA", "WhatsApp", "Leads"],
      color: "#7c3aed",
      images: [
        "/cases/Agente%20whatsapp/Agente-OrionOS.png",
        "/cases/Agente%20whatsapp/Aba%20agentes%2C%20para%20personalizar%20e%20criar.png",
        "/cases/Agente%20whatsapp/Aba%20canais%2C%20para%20integrar%20ao%20Wpp.png",
        "/cases/Agente%20whatsapp/Aba%20de%20uso%2C%20para%20ver%20o%20gasto.png",
        "/cases/Agente%20whatsapp/Tela%20de%20login%2C%20personalizada.png",
      ],
    },
  ],
};

export const CONTACT = {
  heading: "Vamos conversar",
  subheading: "Descreva o que você precisa. A gente faz o projeto rodar.",
  fields: {
    name: "Seu nome",
    company: "Empresa",
    whatsapp: "WhatsApp",
    message: "O que você precisa?",
  },
  submit: "Enviar mensagem",
  whatsapp: {
    label: "Prefere pelo WhatsApp?",
    href: WA,
    text: "Chamar no WhatsApp",
  },
  email: "contato@orionos.com.br",
};

export const FOOTER = {
  logo: "/logo.png",
  tagline: "Sua marca no universo digital.",
  links: [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ],
  social: {
    whatsapp: WA,
    instagram: IG,
  },
  copyright: "© 2025 OrionOS. Todos os direitos reservados.",
};

export const SOCIAL = {
  whatsapp: WA,
  instagram: IG,
};
