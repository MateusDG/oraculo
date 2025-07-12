import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Typography, Space, Divider, message as antMessage } from 'antd';
import { RedoOutlined, EyeOutlined } from '@ant-design/icons';
import { tarotDeck } from '../data/tarotData';
import TarotCard from '../components/cards/TarotCard';

const { Title, Paragraph, Text } = Typography;

/**
 * ReadingPage Component
 *
 * Página principal para a funcionalidade de leitura de tarot.
 * Permite ao usuário sortear cartas e ver suas interpretações.
 */
const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]); // Cartas sorteadas do baralho
  const [flippedStates, setFlippedStates] = useState([]); // Array de booleanos para controlar quais cartas estão viradas
  const [isRevealed, setIsRevealed] = useState(false); // Controla a exibição da área de interpretação

  const NUMBER_OF_CARDS_TO_DRAW = 3; // Leitura de 3 cartas

  // Função para embaralhar e sortear novas cartas
  const drawNewReading = useCallback(() => {
    setIsRevealed(false); // Esconde a interpretação ao sortear novas cartas

    // Animação de "saída" das cartas antigas antes de sortear novas
    setDrawnCards([]);

    // Pequeno delay para a animação de saída ser percebida
    setTimeout(() => {
      const deckCopy = [...tarotDeck];
      const newDrawnCards = [];
      for (let i = 0; i < NUMBER_OF_CARDS_TO_DRAW; i++) {
        if (deckCopy.length > 0) {
          const randomIndex = Math.floor(Math.random() * deckCopy.length);
          newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
        }
      }
      setDrawnCards(newDrawnCards);
      setFlippedStates(new Array(newDrawnCards.length).fill(false)); // Todas as cartas começam não viradas
    }, 500); // Atraso deve corresponder à animação de 'exit'
  }, []);

  // Sorteia a primeira leitura ao montar o componente
  useEffect(() => {
    drawNewReading();
  }, [drawNewReading]);

  // Função para virar uma carta específica
  const handleFlipCard = (index) => {
    setFlippedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Função para revelar todas as interpretações de uma vez
  const revealInterpretations = () => {
    if (drawnCards.length === 0 || flippedStates.every(f => f)) {
      antMessage.info('Todas as cartas já foram reveladas!');
      return;
    }
    // Vira todas as cartas que ainda não foram viradas
    setFlippedStates(new Array(drawnCards.length).fill(true));
    setIsRevealed(true);
  };

  // Variantes de animação para os containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Título e Controles */}
      <motion.div variants={itemVariants} className="text-center mb-10">
        <Title level={2} className="!font-heading !text-accent-gold">Sua Leitura de Tarot</Title>
        <Paragraph className="!text-text-muted !font-body max-w-lg mx-auto">
          Concentre-se em sua questão. Clique em uma carta para virá-la individualmente, ou revele todas de uma vez para ver a mensagem completa do oráculo.
        </Paragraph>
        <Space size="large" className="mt-4">
          <Button
            type="primary"
            icon={<RedoOutlined />}
            size="large"
            onClick={drawNewReading}
            className="font-heading"
          >
            Nova Leitura
          </Button>
          <Button
            ghost
            type="primary"
            icon={<EyeOutlined />}
            size="large"
            onClick={revealInterpretations}
            className="font-heading"
            disabled={drawnCards.length === 0}
          >
            Revelar Tudo
          </Button>
        </Space>
      </motion.div>

      {/* Área das Cartas de Tarot */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 min-h-[380px]">
        <AnimatePresence>
          {drawnCards.map((card, index) => (
            <motion.div key={card.id} variants={itemVariants} exit={{ opacity: 0, scale: 0.5 }}>
              <TarotCard
                cardData={card}
                isFlipped={flippedStates[index]}
                onClick={() => handleFlipCard(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Divider className="!border-accent-gold/30" />

      {/* Área de Interpretações */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div variants={itemVariants} className="mt-10">
            <Title level={3} className="!font-heading !text-accent-gold-light text-center mb-8">Interpretações das Cartas</Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {drawnCards.map((card) => ( // 'index' removido pois não era utilizado
                <motion.div key={card.id} variants={itemVariants}>
                  <Card
                    title={card.name}
                    className="bg-primary-dark/50 border border-accent-gold/20 shadow-lg text-left h-full"
                    headStyle={{ color: 'var(--ant-color-primary)', fontFamily: 'var(--ant-font-family-heading)' }}
                  >
                    <Paragraph className="!text-text-light !font-body">{card.meaning}</Paragraph>
                    <Divider className="!border-accent-gold/20 my-4" />
                    <Text strong className="!text-accent-gold-light !font-body">Palavras-chave:</Text>
                    <div className="mt-2">
                      {card.keywords.map(kw => <Tag key={kw} color="purple">{kw}</Tag>)}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReadingPage;
