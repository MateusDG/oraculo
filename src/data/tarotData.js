// Imagens placeholder - substitua pelos caminhos reais em src/assets/images/tarot-cards/
const IMAGE_BACK_PLACEHOLDER = 'https://via.placeholder.com/160x256/483D8B/FFFFFF?text=Verso'; // Roxo
const IMAGE_FRONT_PLACEHOLDER_1 = 'https://via.placeholder.com/160x256/FFD700/000000?text=O+Louco'; // Dourado
const IMAGE_FRONT_PLACEHOLDER_2 = 'https://via.placeholder.com/160x256/DAA520/FFFFFF?text=O+Mago'; // Dourado mais escuro
const IMAGE_FRONT_PLACEHOLDER_3 = 'https://via.placeholder.com/160x256/B8860B/FFFFFF?text=A+Sacerdotisa'; // Dourado ainda mais escuro

export const tarotDeck = [
  {
    id: 'arc00',
    name: 'O Louco',
    imageFront: IMAGE_FRONT_PLACEHOLDER_1,
    imageBack: IMAGE_BACK_PLACEHOLDER,
    meaning: 'Novos começos, inocência, espontaneidade, um salto de fé. O Louco representa o potencial ilimitado e a jornada desconhecida à frente.',
    keywords: ['início', 'fé', 'potencial', 'espontaneidade'],
    type: 'Arcano Maior',
  },
  {
    id: 'arc01',
    name: 'O Mago',
    imageFront: IMAGE_FRONT_PLACEHOLDER_2,
    imageBack: IMAGE_BACK_PLACEHOLDER,
    meaning: 'Manifestação, poder pessoal, recursos, habilidade. O Mago utiliza as ferramentas disponíveis para criar a realidade desejada.',
    keywords: ['poder', 'habilidade', 'manifestação', 'recursos'],
    type: 'Arcano Maior',
  },
  {
    id: 'arc02',
    name: 'A Sacerdotisa',
    imageFront: IMAGE_FRONT_PLACEHOLDER_3,
    imageBack: IMAGE_BACK_PLACEHOLDER,
    meaning: 'Intuição, mistério, subconsciente, sabedoria interior. A Sacerdotisa guarda os segredos e o conhecimento oculto.',
    keywords: ['intuição', 'mistério', 'sabedoria', 'subconsciente'],
    type: 'Arcano Maior',
  },
  // Adicione mais cartas conforme necessário para testes
  // Exemplo de Arcano Menor
  {
    id: 'cups01',
    name: 'Ás de Copas',
    imageFront: 'https://via.placeholder.com/160x256/ADD8E6/000000?text=Ás+de+Copas', // Azul claro
    imageBack: IMAGE_BACK_PLACEHOLDER,
    meaning: 'Novo amor, compaixão, criatividade emocional, relacionamentos. O início de uma profunda conexão emocional ou despertar espiritual.',
    keywords: ['amor', 'emoção', 'compaixão', 'novos sentimentos'],
    type: 'Arcano Menor - Copas',
  },
  {
    id: 'swords01',
    name: 'Ás de Espadas',
    imageFront: 'https://via.placeholder.com/160x256/D3D3D3/000000?text=Ás+de+Espadas', // Cinza claro
    imageBack: IMAGE_BACK_PLACEHOLDER,
    meaning: 'Clareza mental, verdade, avanço, nova ideia. Um momento de grande discernimento ou uma nova forma de pensar.',
    keywords: ['clareza', 'verdade', 'justiça', 'intelecto'],
    type: 'Arcano Menor - Espadas',
  },
];

// Você pode querer exportar também os baralhos que já existiam, se forem ser usados
// ou integrar esta estrutura com a de `decks.js` que já existia.
// Por enquanto, focarei neste `tarotDeck` para o `CardReader`.

// A estrutura original de decks.js era:
// export const decks = [ { id: 'amor', name: 'Tarot do Amor', cards: [...] } ];
// Se precisar unificar, podemos fazer isso.
// Para o TarotCard, ele espera cardData com { id, name, imageFront, imageBack, meaning }
// o que este `tarotDeck` fornece.
