import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import TarotCard from '../../components/cards/TarotCard'; // Caminho atualizado
import { playingCardDeck } from '../../data/deckData'; // Importando o novo baralho
import { FiRefreshCw, FiHome } from 'react-icons/fi'; // Ícones para os botões

const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState(new Set());

  const numberOfCardsToDraw = 3;

  const drawCards = () => {
    const deckCopy = [...playingCardDeck];
    const newDrawnCards = [];
    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const randomIndex = Math.floor(Math.random() * deckCopy.length);
      newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
    }
    setDrawnCards(newDrawnCards);
    setFlippedIndexes(new Set());
  };

  useEffect(() => {
    drawCards();
  }, []);

  const handleFlipCard = (index) => {
    setFlippedIndexes(prevFlipped => {
      const newFlipped = new Set(prevFlipped);
      if (newFlipped.has(index)) {
        newFlipped.delete(index); // Permite virar a carta de volta
      } else {
        newFlipped.add(index);
      }
      return newFlipped;
    });
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-heading text-center text-accent-gold mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Tire suas Cartas
      </motion.h1>

      {/* Área das Cartas */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-4 mb-8">
        {drawnCards.length === 0 && (
          <p className="font-body text-text-muted text-lg">Embaralhando as cartas...</p>
        )}
        {drawnCards.map((card, index) => (
          <TarotCard
            key={card.id}
            cardData={card}
            isFlipped={flippedIndexes.has(index)}
            onClick={() => handleFlipCard(index)}
          />
        ))}
      </div>

      {/* Seção Inferior: Botões de Ação */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
