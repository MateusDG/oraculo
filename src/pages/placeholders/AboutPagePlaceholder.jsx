import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Placeholder para a página "Sobre". Similar ao ReadingPagePlaceholder em termos de animação.
const AboutPagePlaceholder = () => (
  <motion.div
    className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-primary-dark/30 backdrop-blur-md border border-accent-gold/20 shadow-xl w-full max-w-2xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-heading text-accent-gold mb-4">Sobre o Oráculo Vidente</h2>
    <p className="text-text-muted">Informações sobre o oráculo e sua missão em breve...</p>
    <RouterLink to="/" className="mt-6 px-6 py-2 bg-accent-gold text-primary-dark font-bold font-heading rounded-lg hover:bg-accent-gold-light transition-colors">
      Voltar ao Início
    </RouterLink>
  </motion.div>
);

export default AboutPagePlaceholder;
