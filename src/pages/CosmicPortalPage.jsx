import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CosmicMessageForm from '../components/firebase/CosmicMessageForm';
import CosmicMessagesList from '../components/firebase/CosmicMessagesList'; // Import que estava faltando

/**
 * CosmicPortalPage Component
 *
 * Página dedicada a interações com o "Portal Cósmico", onde usuários podem
 * deixar mensagens e ver mensagens de outros.
 */
const CosmicPortalPage = () => {
  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full py-8" // py-8 para dar espaço acima e abaixo
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Título da Página */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-heading text-accent-gold mb-10 md:mb-12 text-center"
        initial={{ opacity:0, y: -30 }}
        animate={{ opacity:1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Portal das Mensagens Cósmicas
      </motion.h1>

      {/* Formulário para enviar mensagens */}
      <div className="mb-12 md:mb-16 w-full flex justify-center">
        <CosmicMessageForm />
      </div>

      {/* Lista de Mensagens Cósmicas */}
      <div className="w-full max-w-4xl xl:max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-heading text-accent-gold-light mb-8 text-center"
          initial={{ opacity:0, y: -20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delay para aparecer após o formulário
        >
          Ecos Recentes do Universo
        </motion.h2>
        <CosmicMessagesList />
      </div>
    </motion.div>
  );
};

export default CosmicPortalPage;
