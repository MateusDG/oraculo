const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

export const playingCardDeck = suits.flatMap(suit =>
  values.map((value, index) => {
    const name = `${value.charAt(0).toUpperCase() + value.slice(1)} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
    const image_name = `${value.charAt(0).toUpperCase() + value.slice(1)} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`;
    return {
      id: `${suit}-${value}`,
      name: name,
      suit: suit,
      value: index + 1,
      image: `src/assets/images/playing-cards/${suit}/${image_name}.png`
    };
  })
);

// Adicionar um verso para o baralho
export const cardBackImage = 'src/assets/images/playing-cards/card_back.png';

// Criar o placeholder para o verso da carta
// (Este passo é conceitual, o arquivo precisa ser criado de fato)
/*
create_file_with_block
src/assets/images/playing-cards/card_back.png
This is a placeholder for the card back image.
*/
