/**
 * tarotData.js
 *
 * Este arquivo contém os dados para as cartas de tarot.
 * No futuro, isso poderia ser carregado de um CMS ou de um banco de dados.
 * Para as imagens, estamos usando placeholders. Em um projeto real,
 * você substituiria os URLs por caminhos para seus assets locais
 * (ex: '/assets/images/cards/o-mago.jpg').
 */

export const tarotDeck = [
  // --- Arcanos Maiores ---
  {
    id: 'maj00',
    name: 'O Louco',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/8E44AD/FFFFFF?text=O+Louco',
    keywords: ['início', 'inocência', 'espontaneidade', 'salto de fé'],
    meaning: 'Representa novos começos, potencial ilimitado e a jornada desconhecida. É um convite para abraçar o inesperado e confiar no universo.',
  },
  {
    id: 'maj01',
    name: 'O Mago',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/3498DB/FFFFFF?text=O+Mago',
    keywords: ['manifestação', 'poder', 'recursos', 'habilidade'],
    meaning: 'Simboliza o poder da vontade e a manifestação. Você tem todas as ferramentas necessárias para criar sua realidade. É hora de agir.',
  },
  {
    id: 'maj02',
    name: 'A Sacerdotisa',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/2C3E50/FFFFFF?text=A+Sacerdotisa',
    keywords: ['intuição', 'subconsciente', 'mistério', 'sabedoria'],
    meaning: 'Representa a intuição, o conhecimento oculto e o subconsciente. Um convite para olhar para dentro e ouvir sua voz interior.',
  },
  {
    id: 'maj03',
    name: 'A Imperatriz',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/2ECC71/FFFFFF?text=A+Imperatriz',
    keywords: ['fertilidade', 'feminilidade', 'abundância', 'natureza'],
    meaning: 'Simboliza a criação, a abundância e a nutrição. É um momento de fertilidade em todas as áreas da vida e conexão com a natureza.',
  },
  {
    id: 'maj04',
    name: 'O Imperador',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/E74C3C/FFFFFF?text=O+Imperador',
    keywords: ['autoridade', 'estrutura', 'controle', 'paternidade'],
    meaning: 'Representa estrutura, ordem e autoridade. É um chamado para a disciplina, o planejamento e a liderança assertiva.',
  },

  // --- Arcanos Menores - Exemplo de cada naipe ---
  {
    id: 'wands01',
    name: 'Ás de Paus',
    arcana: 'Menor',
    suit: 'Paus',
    image: 'https://via.placeholder.com/240x400/E67E22/FFFFFF?text=Ás+de+Paus',
    keywords: ['inspiração', 'energia', 'criação', 'novos projetos'],
    meaning: 'Uma explosão de nova energia e inspiração. É o momento ideal para iniciar um novo projeto criativo ou seguir uma paixão.',
  },
  {
    id: 'cups01',
    name: 'Ás de Copas',
    arcana: 'Menor',
    suit: 'Copas',
    image: 'https://via.placeholder.com/240x400/3498DB/FFFFFF?text=Ás+de+Copas',
    keywords: ['emoções', 'amor', 'relacionamentos', 'criatividade'],
    meaning: 'O início de um novo amor, relacionamento ou um despertar emocional profundo. O coração está transbordando.',
  },
  {
    id: 'swords01',
    name: 'Ás de Espadas',
    arcana: 'Menor',
    suit: 'Espadas',
    image: 'https://via.placeholder.com/240x400/95A5A6/FFFFFF?text=Ás+de+Espadas',
    keywords: ['clareza', 'verdade', 'novas ideias', 'avanço'],
    meaning: 'Um momento de grande clareza mental e verdade. Uma nova ideia poderosa ou uma percepção que corta através da confusão.',
  },
  {
    id: 'pents01',
    name: 'Ás de Ouros',
    arcana: 'Menor',
    suit: 'Ouros',
    image: 'https://via.placeholder.com/240x400/F1C40F/FFFFFF?text=Ás+de+Ouros',
    keywords: ['oportunidade', 'prosperidade', 'manifestação', 'mundo material'],
    meaning: 'Uma nova oportunidade no mundo material. Pode ser um novo emprego, um investimento ou o início de um projeto próspero.',
  },
];
