import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import TarotCard from '../../components/common/TarotCard';
import { tarotDeck } from '../../data/tarotData'; // Importando nosso baralho mockado
import { FiRefreshCw, FiHome } from 'react-icons/fi'; // Ícones para os botões

const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedStates, setFlippedStates] = useState([]); // Array de booleanos para cada carta

  // Número de cartas a serem sorteadas para esta leitura (ex: 3)
  const numberOfCardsToDraw = 3;

  // Função para sortear cartas
  const drawCards = () => {
    const deckCopy = [...tarotDeck];
    const newDrawnCards = [];
    const newFlippedStates = [];

    if (deckCopy.length < numberOfCardsToDraw) {
      console.error("Não há cartas suficientes no baralho para sortear.");
      // Poderia adicionar um estado para mostrar essa mensagem ao usuário
      setDrawnCards([]);
      setFlippedStates([]);
      return;
    }

    for (let i = 0; i < numberOfCardsToDraw; i++) {
      const randomIndex = Math.floor(Math.random() * deckCopy.length);
      newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
      newFlippedStates.push(false); // Todas as cartas começam viradas para baixo
    }
    setDrawnCards(newDrawnCards);
    setFlippedStates(newFlippedStates);
  };

  // Sorteia as cartas quando o componente é montado pela primeira vez
  useEffect(() => {
    drawCards();
  }, []);

  // Função para virar uma carta
  const handleFlipCard = (index) => {
    setFlippedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
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

      {/* Área de Interpretação (aparece quando as cartas estão viradas) */}
      {drawnCards.length > 0 && flippedStates.some(isFlipped => isFlipped) && (
        <motion.div
          className="w-full max-w-3xl bg-secondary/10 backdrop-blur-md p-6 rounded-lg shadow-xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="font-title text-3xl text-goldAccent mb-4 text-center">Interpretações</h2>
          {drawnCards.map((card, index) => (
            flippedStates[index] && (
              <motion.div
                key={card.id + '-interpretation'}
                className="p-4 bg-deepPurple/50 rounded shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-title text-xl text-goldAccent">{card.name}</h3>
                <p className="font-body text-lightText mt-1">{card.meaning}</p>
              </motion.div>
            )
          ))}
        </motion.div>
      )}

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
