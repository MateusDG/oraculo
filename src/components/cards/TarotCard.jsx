import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

/**
 * TarotCard Component
 *
 * Componente visual para uma única carta de tarot.
 * Responsável por exibir a frente e o verso da carta e pela animação de virar.
 * É um componente "burro", controlado por props.
 *
 * @param {Object} props
 * @param {Object} props.cardData - Dados da carta (id, name, image).
 * @param {boolean} props.isFlipped - Controla se a carta está virada.
 * @param {Function} props.onClick - Função a ser chamada no clique.
 */
const TarotCard = ({ cardData, isFlipped, onClick }) => {
  const {
    name = 'Carta Desconhecida',
    image = 'https://via.placeholder.com/240x400/CCCCCC/FFFFFF?text=Carta',
  } = cardData || {};

  const cardVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  const hoverEffect = {
    y: -10,
    scale: 1.05,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
    transition: { type: "spring", stiffness: 250, damping: 15 },
  };

  const backImage = '/src/assets/images/playing-cards/card_back.png';

  return (
    <motion.div
      className="w-[180px] h-[246px] md:w-[200px] md:h-[273px] cursor-pointer relative"
      onClick={onClick}
      whileHover={hoverEffect}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        variants={cardVariants}
        animate={isFlipped ? 'flipped' : 'unflipped'}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Verso da Carta */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden border-2 border-accent-gold/50"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={backImage} alt="Verso da Carta de Tarot" className="w-full h-full object-cover" />
        </div>

        {/* Frente da Carta */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden border-2 border-accent-gold-light/80 bg-primary-dark"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img src={image} alt={`Carta: ${name}`} className="w-full h-full object-cover" />
          {/* Opcional: Adicionar o nome da carta sobreposto na imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-center font-heading text-text-light text-md tracking-wider">
              {name}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
