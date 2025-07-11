import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <motion.div
      className="flex flex-col items-center p-6 md:p-12 text-lightText min-h-[calc(100vh-200px)]" // Ajustar min-h conforme Header/Footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-title mb-8 text-goldAccent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Sobre o Oráculo Vidente
      </motion.h1>

      <motion.div
        className="max-w-2xl text-center space-y-6 font-body text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg">
          O Oráculo Vidente é uma aplicação mística projetada para oferecer insights e reflexões através da sabedoria atemporal do Tarot.
        </p>
        <p>
          Nossa missão é fornecer uma ferramenta elegante e intuitiva para aqueles que buscam autoconhecimento, orientação ou simplesmente um momento de introspecção.
        </p>
        <p>
          As cartas do tarot são um espelho da jornada da alma, refletindo arquétipos universais e situações da vida. Que suas leituras aqui tragam clareza, inspiração e paz.
        </p>
        <p className="text-sm text-goldAccent/80 pt-4">
          Lembre-se: o tarot oferece perspectivas, mas o poder da decisão e da ação reside sempre em você.
        </p>
      </motion.div>
    </motion.div>
  );
}
export default AboutPage;
