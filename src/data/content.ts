import type { FAQItem, PortfolioItem, Testimonial } from '@/types/site';

export const portfolio: PortfolioItem[] = [
 { title: 'Sala com acabamento acetinado', category: 'Pintura interna', location: 'Residencial', image: '/images/portfolio/projeto-1.svg', alt: 'Ambiente residencial pintado em tons claros', description: 'Renovação de sala com preparo de paredes e pintura em tom neutro.' },
 { title: 'Fachada renovada', category: 'Pintura externa', location: 'Casa térrea', image: '/images/portfolio/projeto-2.svg', alt: 'Fachada com pintura externa renovada', description: 'Correção de pontos desgastados e aplicação de tinta para área externa.' },
 { title: 'Parede com textura', category: 'Textura', location: 'Comercial', image: '/images/portfolio/projeto-3.svg', alt: 'Parede decorativa com textura', description: 'Textura decorativa em parede de destaque para recepção comercial.' },
];
export const testimonials: Testimonial[] = [
 { name: 'Cliente residencial', city: 'Região atendida', text: 'Atendimento pontual, ambiente protegido e acabamento muito caprichado.', rating: 5 },
 { name: 'Proprietário de loja', city: 'Região atendida', text: 'O serviço foi organizado e ajudou a renovar a imagem do espaço.', rating: 5 },
 { name: 'Cliente de apartamento', city: 'Região atendida', text: 'Recebi orientação clara sobre materiais e o resultado ficou excelente.', rating: 5 },
];
export const faqs: FAQItem[] = [
 { question: 'O orçamento é gratuito?', answer: 'A primeira solicitação pelo WhatsApp organiza as informações. A visita técnica pode ser combinada conforme a região e o tipo de serviço.' },
 { question: 'As fotos são suficientes para fechar o preço?', answer: 'As fotos ajudam muito, mas valores definitivos dependem de avaliação das medidas, preparo necessário e materiais.' },
 { question: 'O profissional fornece material?', answer: 'O formulário permite indicar se deseja material incluso ou apenas mão de obra. A combinação é feita caso a caso.' },
 { question: 'Atende serviços pequenos?', answer: 'Sim. Pequenos reparos, cômodos avulsos e renovações completas podem ser avaliados.' },
];
export const serviceAreas = ['[CIDADE E REGIÃO]', 'Bairros próximos', 'Condomínios residenciais', 'Salas e lojas comerciais'];
