/**
 * tarotData.js
 *
 * Contém dados elaborados para as cartas de tarot.
 * Cada carta inclui uma interpretação detalhada para fornecer insights mais profundos.
 * Imagens são placeholders e devem ser substituídas por assets reais.
 */

export const tarotDeck = [
  // --- Arcanos Maiores ---
  {
    id: 'maj00',
    name: 'O Louco',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/8E44AD/FFFFFF?text=O+Louco',
    keywords: ['início', 'potencial', 'espontaneidade', 'salto de fé', 'inocência'],
    meaning: 'O Louco representa o início de uma jornada, cheio de potencial infinito e possibilidades. Ele caminha à beira de um penhasco, não por ignorância, mas por pura fé no universo e em si mesmo. Esta carta convida você a abraçar o desconhecido, a seguir seus impulsos e a dar aquele "salto de fé" em direção a um novo capítulo. É um lembrete para manter a mente aberta e o coração leve, pois as maiores aventuras começam com um único passo destemido.',
  },
  {
    id: 'maj01',
    name: 'O Mago',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/3498DB/FFFFFF?text=O+Mago',
    keywords: ['manifestação', 'poder de vontade', 'recursos', 'habilidade', 'ação'],
    meaning: 'O Mago é o mestre da manifestação e do poder pessoal. Com uma mão apontada para o céu e outra para a terra, ele canaliza a energia divina para o plano material. Ele possui todas as ferramentas (os quatro naipes) à sua disposição. Esta carta indica que você tem os recursos, a habilidade e a determinação para realizar seus desejos. É um sinal para agir, focar sua intenção e transformar suas ideias em realidade tangível.',
  },
  {
    id: 'maj02',
    name: 'A Sacerdotisa',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/2C3E50/FFFFFF?text=A+Sacerdotisa',
    keywords: ['intuição', 'subconsciente', 'mistério', 'sabedoria oculta', 'passividade'],
    meaning: 'A Sacerdotisa é a guardiã do subconsciente e dos mistérios não revelados. Ela senta-se entre os pilares da escuridão e da luz, simbolizando o equilíbrio e o acesso ao conhecimento intuitivo. Esta carta sugere que as respostas que você procura não estão no mundo exterior, mas dentro de você. É um convite para a introspecção, meditação e para confiar na sua intuição. O silêncio e a paciência revelarão a verdade.',
  },
  {
    id: 'maj03',
    name: 'A Imperatriz',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/2ECC71/FFFFFF?text=A+Imperatriz',
    keywords: ['fertilidade', 'abundância', 'criatividade', 'natureza', 'nutrição'],
    meaning: 'A Imperatriz é a personificação da feminilidade, da criação e da abundância. Rodeada pela natureza, ela simboliza a fertilidade em todas as suas formas: seja na concepção de uma criança, de um projeto artístico ou de uma nova fase de vida. Ela nutre e cuida, trazendo conforto e crescimento. Esta carta anuncia um período de grande criatividade, sensualidade e conexão com o mundo natural. Permita-se criar e receber a abundância que o universo oferece.',
  },
  {
    id: 'maj04',
    name: 'O Imperador',
    arcana: 'Maior',
    image: 'https://via.placeholder.com/240x400/E74C3C/FFFFFF?text=O+Imperador',
    keywords: ['autoridade', 'estrutura', 'controle', 'estabilidade', 'liderança'],
    meaning: 'O Imperador representa a autoridade, a estrutura e a ordem. Ele é a contraparte da Imperatriz, trazendo estabilidade e controle através da lógica e da disciplina. Sentado em seu trono de pedra, ele governa com firmeza e visão estratégica. Esta carta indica a necessidade de organização, planejamento e liderança em sua vida. É um momento para assumir o controle, estabelecer limites e construir bases sólidas para o futuro.',
  },

  // --- Arcanos Menores - Exemplos ---
  {
    id: 'wands01',
    name: 'Ás de Paus',
    arcana: 'Menor',
    suit: 'Paus',
    image: 'https://via.placeholder.com/240x400/E67E22/FFFFFF?text=Ás+de+Paus',
    keywords: ['inspiração', 'energia', 'crescimento', 'novos projetos', 'paixão'],
    meaning: 'O Ás de Paus é uma centelha de inspiração divina. É a semente da criatividade, da paixão e da ambição. Esta carta representa o surgimento de uma nova ideia ou oportunidade que te enche de energia e entusiasmo. É um sinal verde do universo para seguir em frente com um novo projeto, hobby ou empreendimento. Agarre esta energia e veja o que pode florescer a partir dela.',
  },
  {
    id: 'cups01',
    name: 'Ás de Copas',
    arcana: 'Menor',
    suit: 'Copas',
    image: 'https://via.placeholder.com/240x400/5DADE2/FFFFFF?text=Ás+de+Copas',
    keywords: ['emoções', 'amor', 'compaixão', 'novos relacionamentos', 'criatividade'],
    meaning: 'O Ás de Copas simboliza o início de uma nova jornada emocional. Pode ser o começo de um novo amor, uma amizade profunda ou um despertar espiritual que abre seu coração. A taça transborda, representando a abundância de amor e compaixão disponíveis para você. Esteja aberto para dar e receber amor incondicionalmente. É um momento de grande potencial para a felicidade e a conexão emocional.',
  },
  {
    id: 'swords01',
    name: 'Ás de Espadas',
    arcana: 'Menor',
    suit: 'Espadas',
    image: 'https://via.placeholder.com/240x400/BDC3C7/FFFFFF?text=Ás+de+Espadas',
    keywords: ['clareza mental', 'verdade', 'justiça', 'avanço', 'intelecto'],
    meaning: 'O Ás de Espadas corta através da confusão para revelar a verdade. Representa um momento de grande clareza mental, uma nova ideia brilhante ou uma percepção que muda tudo. A coroa simboliza o sucesso alcançado através do intelecto e da verdade. Esta carta te encoraja a usar sua mente afiada para superar desafios, tomar decisões justas e comunicar suas ideias com precisão e honestidade.',
  },
  {
    id: 'pents01',
    name: 'Ás de Ouros',
    arcana: 'Menor',
    suit: 'Ouros',
    image: 'https://via.placeholder.com/240x400/F1C40F/FFFFFF?text=Ás+de+Ouros',
    keywords: ['oportunidade material', 'prosperidade', 'manifestação', 'segurança', 'novos negócios'],
    meaning: 'O Ás de Ouros representa uma nova oportunidade tangível no mundo material. É uma semente de prosperidade que pode se manifestar como um novo emprego, um investimento sólido, um presente ou o início de um projeto lucrativo. Esta carta te convida a aproveitar esta oportunidade com planejamento e trabalho diligente para garantir um futuro seguro e abundante. É um sinal de que seus esforços podem gerar resultados concretos e duradouros.',
  },
];
