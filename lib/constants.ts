export const NAV_LINKS = [
  { label: 'A Arena', href: '/#about' },
  { label: 'Professores', href: '/coaches' },
  { label: 'Torneios', href: '/tournaments' },
  { label: 'Aprenda', href: '/learn' },
  { label: 'Quadras', href: '/#courts' },
  { label: 'Planos', href: '/#plans' },
  { label: 'Notícias', href: '/news' },
  { label: 'Agenda', href: '/#booking' },
  { label: 'Contato', href: '/#location' },
];

export const STATS = [
  { value: 6, suffix: '', label: 'Quadras Premium' },
  { value: 2400, suffix: 'm²', label: 'Área Total' },
  { value: 1200, prefix: '+', suffix: '', label: 'Membros Ativos' },
  { value: 7, suffix: '', label: 'Dias por Semana' },
];

export const COURTS = [
  { name: 'Quadra Alpha', features: ['Piso emborrachado profissional', 'Iluminação LED 4K', 'Câmeras de análise de jogo'], gradient: 'from-teal-900 to-charcoal' },
  { name: 'Quadra Beta', features: ['Rede regulamentada', 'Sistema de ventilação', 'Arquibancada lateral'], gradient: 'from-indigo-900 to-charcoal' },
  { name: 'Quadra Sigma', features: ['Piso emborrachado profissional', 'Iluminação LED 4K', 'Sistema de ventilação'], gradient: 'from-purple-900 to-charcoal' },
  { name: 'Quadra Pro', features: ['Câmeras de análise de jogo', 'Rede regulamentada', 'Arquibancada lateral'], gradient: 'from-orange-900 to-charcoal' },
];

export const EXPERIENCE_ITEMS = [
  { icon: 'Dumbbell', title: 'Equipamentos Profissionais', description: 'Raquetes e bolas de alta performance disponíveis.' },
  { icon: 'Smartphone', title: 'App de Agendamento', description: 'Reserve sua quadra em segundos pelo nosso app.' },
  { icon: 'Award', title: 'Coaches Certificados', description: 'Aulas com profissionais experientes e qualificados.' },
  { icon: 'Coffee', title: 'Lounge & Café', description: 'Espaço para relaxar e socializar antes ou depois do jogo.' },
  { icon: 'Activity', title: 'Análise de Performance', description: 'Câmeras e software para analisar e melhorar seu jogo.' },
  { icon: 'Trophy', title: 'Torneios Exclusivos', description: 'Competições regulares para todos os níveis de habilidade.' },
];

export const PLANS = [
  { name: 'Starter', price: '199', features: ['4 reservas/mês', 'Acesso ao app', 'Área de aquecimento'], highlight: false },
  { name: 'Pro', price: '349', features: ['8 reservas/mês', 'Aulas em grupo', 'Lounge access', 'Análise básica'], highlight: true },
  { name: 'Elite', price: '599', features: ['Reservas ilimitadas', 'Coaching mensal', 'Análise de vídeo', 'Acesso VIP'], highlight: false },
];
