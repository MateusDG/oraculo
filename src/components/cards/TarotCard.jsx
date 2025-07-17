import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const ScrollDownIndicator = () => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 10, opacity: 0 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    className="absolute bottom-2 left-1/2 -translate-x-1/2"
  >
    <FiChevronDown className="w-6 h-6 text-white" />
  </motion.div>
);

const TarotCard = ({ cardData, isFlipped, onClick, showMessage }) => {
  const {
    name = 'Carta Desconhecida',
    image = 'https://via.placeholder.com/240x400/CCCCCC/FFFFFF?text=Carta',
    message = 'Nenhuma mensagem para esta carta.',
  } = cardData || {};

  const messageRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (messageRef.current) {
        const { scrollHeight, clientHeight } = messageRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    if (showMessage) {
      // Pequeno timeout para garantir que o DOM foi atualizado
      setTimeout(checkScrollable, 100);
    } else {
      setIsScrollable(false);
    }
  }, [showMessage, message]);

  const cardVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  const hoverEffect = {
    y: -10,
    scale: 1.05,
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.4)',
    transition: { type: 'spring', stiffness: 250, damping: 15 },
  };

  const backImage = 'src/assets/images/playing-cards/card_black.png';

  return (
    <motion.div
      className="w-[180px] h-[246px] md:w-[200px] md:h-[273px] cursor-pointer relative"
      onClick={onClick}
      whileHover={!isFlipped ? hoverEffect : {}}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        variants={cardVariants}
        animate={isFlipped ? 'flipped' : 'unflipped'}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
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
          <AnimatePresence>
            {showMessage ? (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm p-4 flex flex-col justify-center items-center"
              >
                <div ref={messageRef} className="relative w-full h-full overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-accent-gold/50 scrollbar-track-transparent">
                  <h3 className="font-heading text-lg text-accent-gold text-center mb-2">{name}</h3>
                  <p className="font-body text-sm text-text-light text-center">{message}</p>
                </div>
                {isScrollable && <ScrollDownIndicator />}
              </motion.div>
            ) : (
              <motion.div key="image" className="w-full h-full">
                <img src={image} alt={`Carta: ${name}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-center font-heading text-text-light text-md tracking-wider">{name}</h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
