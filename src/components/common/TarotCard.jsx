import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Supondo que você tenha ícones, por exemplo, de react-icons
// import { RiCopperCoinLine } from 'react-icons/ri'; // Exemplo para um naipe

const TarotCard = ({ cardData, isFlipped, onClick }) => {
  const {
    // id foi removido da desestruturação pois não é usado diretamente no componente
    name = 'Carta Desconhecida',
    imageFront = 'https://via.placeholder.com/240x400/f3e8ff/5c4d7d?text=Frente+Carta', // Usando cores da paleta (secondary, primary)
    imageBack = 'https://via.placeholder.com/240x400/483D8B/FFD700?text=Oráculo', // Usando (deepPurple, goldAccent)
    // meaning, keywords, arcanaType, etc., podem ser usados em outro lugar
  } = cardData || {};

  const cardAnimationVariants = {
    initial: { // Não usado explicitamente se animate é definido diretamente, mas bom para referência
      rotateY: 0,
    },
    flipped: {
      rotateY: 180,
      transition: { duration: 0.7, ease: "circOut" } // Animação de virar refinada
    },
    unflipped: {
      rotateY: 0,
      transition: { duration: 0.7, ease: "circOut" } // Animação de desvirar refinada
    },
  };

  const hoverEffect = {
    scale: 1.04, // Aumentei um pouco a escala para ser mais perceptível
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.3)", // Sombra um pouco mais pronunciada
    transition: { type: "spring", stiffness: 280, damping: 18 } // Ajuste na física da mola
  };

  const cardFaceBaseStyle = "absolute w-full h-full rounded-lg shadow-md overflow-hidden border-2 flex flex-col";
  const cardFrontStyle = `${cardFaceBaseStyle} bg-secondary border-goldAccent/60 items-center justify-between p-3`;
  const cardBackStyle = `${cardFaceBaseStyle} bg-gradient-to-tr from-deepPurple via-mysticBlue to-darkBg border-goldAccent/80 items-center justify-center p-4`;

  return (
    <motion.div
      className="w-[150px] h-[262px] md:w-[180px] md:h-[315px] rounded-lg cursor-pointer" // Proporção ~1.75, com responsividade básica
      onClick={onClick}
      whileHover={hoverEffect}
      style={{ perspective: '1000px' }} // Perspective para o efeito 3D
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        initial="initial"
        animate={isFlipped ? 'flipped' : 'unflipped'}
        variants={cardAnimationVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Face da Frente */}
        <div
          className={cardFrontStyle}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-[70%] mb-2 overflow-hidden rounded-sm">
            <img
              src={imageFront}
              alt={`Ilustração da carta ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center h-[30%] flex flex-col justify-center">
            <h3 className="font-title text-primary text-xs md:text-sm font-semibold tracking-tight leading-tight">
              {name.toUpperCase()}
            </h3>
            {/* Exemplo de como poderia adicionar um ícone de naipe ou número do arcano */}
            {/* <RiCopperCoinLine className="text-accent mx-auto mt-1 text-sm md:text-base" /> */}
          </div>
        </div>

        {/* Face de Trás */}
        <div
          className={cardBackStyle}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', // Garante que o verso comece virado
          }}
        >
          {/* Conteúdo do Verso - usando a imagem de placeholder definida em cardData */}
          <img
            src={imageBack}
            alt="Verso da carta do tarot"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Alternativa: um design fixo para o verso */}
          {/* <div className="text-center">
            <SomeIconOrLogo className="text-goldAccent text-5xl md:text-7xl opacity-70" />
            <p className="font-title text-goldAccent/80 mt-3 text-md md:text-lg">
              Oráculo Vidente
            </p>
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
