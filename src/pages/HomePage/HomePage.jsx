import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animações sutis
import { GiMagicSwirl } from 'react-icons/gi'; // Ícone para o botão

function HomePage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-br from-darkBg via-deepPurple to-mysticBlue text-lightText"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Duração da transição de entrada/saída da página
    >
      <motion.h1
        className="text-5xl md:text-7xl font-title mb-6 text-goldAccent"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oráculo Vidente
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl font-body mb-10 max-w-2xl text-secondary"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Desvende os mistérios do seu caminho. Permita que as cartas revelem insights profundos e guiem suas decisões com sabedoria ancestral.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/reading"
          className="inline-flex items-center justify-center px-8 py-4 bg-goldAccent text-darkBg font-bold font-title text-xl rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 button-ripple"
        >
          <GiMagicSwirl className="mr-3 text-2xl" />
          Iniciar Leitura Mística
        </Link>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link to="/about" className="font-body text-secondary hover:text-goldAccent transition-colors">
          Sobre o Oráculo
        </Link>
      </motion.div>
    </motion.div>
  );
}
export default HomePage;
