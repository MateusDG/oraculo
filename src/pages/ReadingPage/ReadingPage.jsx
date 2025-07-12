import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import TarotCard from '../../components/common/TarotCard';
import { tarotDeck } from '../../data/tarotData'; // Importando nosso baralho mockado
import { FiRefreshCw, FiHome } from 'react-icons/fi'; // Ícones para os botões

const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState(new Set());
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const numberOfCardsToDraw = 3;

  const drawCards = () => {
    const deckCopy = [...tarotDeck];
    const newDrawnCards = [];
    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const randomIndex = Math.floor(Math.random() * deckCopy.length);
      newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
    }
    setDrawnCards(newDrawnCards);
    setFlippedIndexes(new Set()); // Reseta o Set de cartas viradas
    setActiveCardIndex(null);   // Reseta a carta ativa
  };

  useEffect(() => {
    drawCards();
  }, []);

  const handleFlipCard = (index) => {
    // Atualiza ambos os estados de forma síncrona
    setActiveCardIndex(index);
    if (!flippedIndexes.has(index)) {
      setFlippedIndexes(prevFlipped => {
        const newFlipped = new Set(prevFlipped);
        newFlipped.add(index);
        return newFlipped;
      });
    }
  };

  return (
    <motion.div
      className="h-screen w-full flex flex-col p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Seção Superior: Título e Controles */}
      <div className="flex-shrink-0">
        <motion.h1
          className="text-4xl md:text-5xl font-heading text-center text-accent-gold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sua Leitura Mística
        </motion.h1>
      </div>

      {/* Seção Principal: Cartas e Interpretação */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-6 w-full overflow-hidden">
        {/* Área das Cartas */}
        <div className="flex-shrink-0 flex flex-wrap justify-center items-center gap-4 md:gap-6 py-4">
          {drawnCards.length === 0 && (
            <p className="font-body text-text-muted text-lg">Embaralhando as cartas...</p>
          )}
          {drawnCards.map((card, index) => (
            <TarotCard
              key={card.id}
              cardData={card}
              isFlipped={flippedIndexes.has(index)}
              isActive={activeCardIndex === index}
              onClick={() => handleFlipCard(index)}
            />
          ))}
        </div>

        {/* Área de Interpretação (agora com altura controlada) */}
        <div className="w-full md:max-w-md lg:max-w-lg h-auto md:h-[calc(100%-2rem)] flex flex-col justify-center items-center p-4 rounded-2xl bg-primary-dark/20 backdrop-blur-lg border border-accent-gold/10">
          <AnimatePresence mode="wait">
            {activeCardIndex !== null ? (
              <motion.div
                key={activeCardIndex}
                className="w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'circOut' }}
              >
                <h2 className="font-heading text-3xl lg:text-4xl text-accent-gold mb-3">
                  {drawnCards[activeCardIndex].name}
                </h2>
                <p className="font-body text-text-light text-base lg:text-lg leading-relaxed max-h-[250px] md:max-h-[300px] overflow-y-auto px-2">
                  {drawnCards[activeCardIndex].meaning}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                className="text-center text-text-muted italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-lg">Vire uma carta para revelar sua mensagem.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Seção Inferior: Botões de Ação */}
      <div className="flex-shrink-0 mt-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button
          onClick={drawCards}
          className="inline-flex items-center justify-center px-6 py-3 bg-accent-gold text-primary-dark font-bold font-heading rounded-lg shadow-lg hover:bg-accent-gold-light transition-all duration-300 transform hover:scale-105"
        >
          <FiRefreshCw className="mr-2" />
          Nova Leitura
        </button>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-medium text-text-light font-bold font-heading rounded-lg shadow-lg hover:bg-mid-purple transition-all duration-300 transform hover:scale-105"
        >
          <FiHome className="mr-2" />
          Página Inicial
        </Link>
      </div>
    </motion.div>
  );
};

export default ReadingPage;
