import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Este componente simula uma página de leitura, permitindo testar a navegação e transições.
const ReadingPagePlaceholder = () => (
  <motion.div
    className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-primary-dark/30 backdrop-blur-md border border-accent-gold/20 shadow-xl w-full max-w-2xl"
    // Animações para entrada e saída da página, coordenadas pelo AnimatePresence no componente pai.
    initial={{ opacity: 0, y: 20 }} // Estado inicial: invisível e levemente abaixo.
    animate={{ opacity: 1, y: 0 }}   // Estado de animação: totalmente visível e na posição Y original.
    exit={{ opacity: 0, y: -20 }}    // Estado de saída: invisível e levemente acima.
    transition={{ duration: 0.5 }}   // Duração da transição.
  >
    <h2 className="text-3xl font-heading text-accent-gold mb-4">Página de Leitura de Tarot</h2>
    <p className="text-text-muted">Conteúdo da leitura de tarot em breve...</p>
    <RouterLink to="/" className="mt-6 px-6 py-2 bg-accent-gold text-primary-dark font-bold font-heading rounded-lg hover:bg-accent-gold-light transition-colors">
      Voltar ao Início
    </RouterLink>
  </motion.div>
);

export default ReadingPagePlaceholder;
