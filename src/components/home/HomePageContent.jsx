import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Usado para motion.div, motion.h1, motion.p

/**
 * HomePageContent Component
 *
 * Renderiza o conteúdo principal da página inicial, incluindo o título H1
 * e um parágrafo introdutório.
 * Utiliza `framer-motion` para animar a entrada desses elementos de forma escalonada.
 */
const HomePageContent = () => {
  // Variantes para o container que orquestra a animação dos elementos filhos.
  const containerVariants = {
    hidden: { opacity: 0 }, // Estado inicial: invisível.
    visible: {
      opacity: 1, // Estado final: totalmente visível.
      transition: {
        staggerChildren: 0.3, // Define um atraso entre a animação de cada filho.
        delayChildren: 0.5,   // Atraso inicial antes que os filhos comecem a animar.
                              // Este valor deve ser coordenado com a animação do Header.
      },
    },
  };

  // Variantes para os itens individuais (H1 e P) dentro do container.
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Estado inicial: deslocado para baixo e invisível.
    visible: {
      y: 0,                         // Estado final: na posição Y original.
      opacity: 1,                   // Estado final: totalmente visível.
      transition: { duration: 0.7, ease: "easeOut" }, // Configurações da transição.
    },
  };

  return (
    // Container animado para o conteúdo da página inicial.
    <motion.div
      className="text-center max-w-3xl mx-auto" // Estilização para centralizar e limitar largura.
      variants={containerVariants} // Aplica as variantes do container.
      initial="hidden"             // Define o estado inicial da animação.
      animate="visible"            // Define o estado final da animação.
    >
      {/* Título principal H1, animado individualmente. */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-accent-gold mb-6 md:mb-8 leading-tight"
        variants={itemVariants} // Aplica as variantes de item.
      >
        Desvende os Véus do Destino
      </motion.h1>

      {/* Parágrafo introdutório, animado individualmente. */}
      <motion.p
        className="text-md sm:text-lg md:text-xl font-body text-text-muted mb-10 md:mb-12"
        variants={itemVariants} // Aplica as variantes de item.
      >
        Permita que a sabedoria ancestral do tarot ilumine seu caminho,
        oferecendo clareza, introspecção e uma nova perspectiva sobre as
        jornadas da vida. O futuro não é um mapa fixo, mas um mar de
        potencialidades que você pode navegar com consciência.
      </motion.p>
    </motion.div>
  );
};

export default HomePageContent;
