import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import TarotCard from '../../components/common/TarotCard';
import { tarotDeck } from '../../data/tarotData'; // Importando nosso baralho mockado
import { FiRefreshCw, FiHome } from 'react-icons/fi'; // Ícones para os botões

const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedStates, setFlippedStates] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(null); // Novo estado para a carta ativa

  const numberOfCardsToDraw = 3;

  const drawCards = () => {
    const deckCopy = [...tarotDeck];
    const newDrawnCards = [];
    const newFlippedStates = [];

    if (deckCopy.length < numberOfCardsToDraw) {
      console.error("Não há cartas suficientes no baralho para sortear.");
      setDrawnCards([]);
      setFlippedStates([]);
      return;
    }

    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const randomIndex = Math.floor(Math.random() * deckCopy.length);
      newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
      newFlippedStates.push(false);
    }
    setDrawnCards(newDrawnCards);
    setFlippedStates(newFlippedStates);
    setActiveCardIndex(null); // Reseta a carta ativa ao sortear novas cartas
  };

  useEffect(() => {
    drawCards();
  }, []);

  const handleFlipCard = (index) => {
    // Vira a carta se ainda não estiver virada
    if (!flippedStates[index]) {
      setFlippedStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = true;
        return newStates;
      });
    }
    // Define a carta clicada como a ativa
    setActiveCardIndex(index);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-darkBg via-mysticBlue to-deepPurple text-lightText p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-title mb-8 text-goldAccent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sua Leitura Mística
      </motion.h1>

      {drawnCards.length === 0 && (
        <p className="font-body text-secondary text-lg">Embaralhando as cartas...</p>
      )}

      {/* Área das Cartas */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {drawnCards.map((card, index) => (
          <TarotCard
            key={card.id}
            cardData={card}
            isFlipped={flippedStates[index]}
            onClick={() => handleFlipCard(index)}
          />
        ))}
      </div>

      {/* Área de Interpretação */}
      <div className="w-full max-w-4xl mt-12 min-h-[180px] flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {activeCardIndex !== null && (
            <motion.div
              key={activeCardIndex} // Chave para forçar a re-renderização com animação
              className="w-full bg-primary-dark/30 backdrop-blur-xl shadow-2xl border-accent-gold/20 rounded-2xl p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <h2 className="font-heading text-3xl text-accent-gold mb-3">
                {drawnCards[activeCardIndex].name}
              </h2>
              <p className="font-body text-text-light text-lg leading-relaxed">
                {drawnCards[activeCardIndex].meaning}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {activeCardIndex === null && (
          <div className="text-center text-text-muted italic">
            <p className="text-lg">Vire uma carta para revelar sua mensagem.</p>
          </div>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
        <button
          onClick={drawCards}
          className="inline-flex items-center justify-center px-6 py-3 bg-goldAccent text-darkBg font-bold font-title rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 button-ripple w-full sm:w-auto"
        >
          <FiRefreshCw className="mr-2" />
          Nova Leitura
        </button>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold font-title rounded-lg shadow-lg hover:bg-purple-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
        >
          <FiHome className="mr-2" />
          Página Inicial
        </Link>
      </div>
    </motion.div>
  );
};

export default ReadingPage;
