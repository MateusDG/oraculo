import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Typography, Space, Divider, Tag, message as antMessage } from 'antd';
import { RedoOutlined, EyeOutlined } from '@ant-design/icons';
import { playingCardTarot } from '../data/decks';
import TarotCard from '../components/cards/TarotCard';

const { Title, Paragraph, Text } = Typography;

const ReadingPage = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedStates, setFlippedStates] = useState([]);
  const [revealedInterpretations, setRevealedInterpretations] = useState([]);

  const NUMBER_OF_CARDS_TO_DRAW = 3;

  const drawNewReading = useCallback(() => {
    setRevealedInterpretations([]);
    setFlippedStates([]);
    setDrawnCards([]);

    setTimeout(() => {
      const deckCopy = [...playingCardTarot];
      const newDrawnCards = [];
      for (let i = 0; i < NUMBER_OF_CARDS_TO_DRAW; i++) {
        if (deckCopy.length > 0) {
          const randomIndex = Math.floor(Math.random() * deckCopy.length);
          newDrawnCards.push(deckCopy.splice(randomIndex, 1)[0]);
        }
      }
      setDrawnCards(newDrawnCards);
      setFlippedStates(new Array(newDrawnCards.length).fill(false));
    }, 400);
  }, []);

  useEffect(() => {
    drawNewReading();
  }, [drawNewReading]);

  const handleFlipCard = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);

    setRevealedInterpretations(prev => {
      const isRevealed = prev.includes(index);
      if (isRevealed) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const revealAll = () => {
    if (drawnCards.length === 0 || revealedInterpretations.length === NUMBER_OF_CARDS_TO_DRAW) {
      antMessage.info('Todas as interpretações já estão reveladas.');
      return;
    }
    setFlippedStates(new Array(drawnCards.length).fill(true));
    setRevealedInterpretations(drawnCards.map((_, index) => index));
  };

  const pageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <motion.div className="w-full" variants={pageVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="text-center mb-10">
        <Title level={2} className="font-heading text-accent-gold">Sua Leitura de Tarot</Title>
        <Paragraph className="text-text-muted font-body max-w-lg mx-auto">Concentre-se, respire fundo e vire as cartas para revelar a mensagem do oráculo.</Paragraph>
        <Space size="large" className="mt-4">
          <Button type="primary" icon={<RedoOutlined />} size="large" onClick={drawNewReading} className="font-heading">Nova Leitura</Button>
          <Button ghost type="primary" icon={<EyeOutlined />} size="large" onClick={revealAll} className="font-heading" disabled={drawnCards.length === 0}>Revelar Tudo</Button>
        </Space>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 min-h-[380px] md:min-h-[400px]">
        <AnimatePresence>
          {drawnCards.map((card, index) => {
            console.log('Rendering TarotCard with data:', card); // LOG PARA DEBUG
            return (
              <motion.div key={card ? card.id : `card-${index}`} variants={itemVariants} exit={{ opacity: 0, scale: 0.5, transition: {duration: 0.3} }}>
                <TarotCard cardData={card} isFlipped={flippedStates[index]} onClick={() => handleFlipCard(index)} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <Divider className="border-accent-gold/30" />

      <div className="mt-10">
        <AnimatePresence>
          {revealedInterpretations.length > 0 && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {drawnCards.map((card, index) => (
                revealedInterpretations.includes(index) ? (
                  <motion.div key={card.id} variants={itemVariants} layout>
                    <Card
                      title={card.name}
                      className="bg-primary-dark/50 border border-accent-gold/20 shadow-lg text-left h-full"
                      headStyle={{ color: 'var(--ant-color-primary)', fontFamily: 'var(--ant-font-family-heading)', borderBottom: '1px solid var(--ant-color-border-secondary)' }}
                    >
                      <Paragraph className="text-text-light font-body text-base">{card.meaning}</Paragraph>
                      <Divider className="border-accent-gold/20 my-4" />
                      <Text strong className="text-accent-gold-light font-body">Frase-chave:</Text>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Tag color="purple">{card.phrase}</Tag>
                      </div>
                    </Card>
                  </motion.div>
                ) : (
                  <div key={`placeholder-${index}`} className="hidden lg:block" />
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ReadingPage;
