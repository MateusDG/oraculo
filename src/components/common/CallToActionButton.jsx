import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Usado para motion.button
import confetti from 'canvas-confetti';   // Para o efeito visual de celebração no clique
import { GiMagicSwirl } from 'react-icons/gi'; // Ícone temático para o botão

/**
 * CallToActionButton Component
 *
 * Um botão de call-to-action proeminente, geralmente usado para a ação principal da página.
 * Inclui:
 * - Estilização atraente e alinhada com o tema.
 * - Animações de entrada, hover e clique com `framer-motion`.
 * - Efeito de confete no clique usando `canvas-confetti`.
 * - Um ícone para complementar o texto.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {Function} props.onClick - Função a ser chamada quando o botão é clicado,
 *                                   além do efeito de confete.
 */
const CallToActionButton = ({ onClick }) => {
  // Variantes de animação para o botão.
  const buttonVariants = {
    hidden: { scale: 0.5, opacity: 0 }, // Estado inicial: pequeno e invisível.
    visible: { // Estado final (entrada):
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring", // Animação tipo "mola" para um efeito mais natural.
        stiffness: 260,
        damping: 20,
        delay: 1.2, // Atraso para aparecer após outros elementos da página.
      },
    },
    hover: { // Efeito ao passar o mouse:
      scale: 1.08, // Aumenta ligeiramente a escala.
      // Simula um brilho dourado; pode ser substituído por uma classe Tailwind com `shadow-glow-gold`
      boxShadow: "0px 0px 25px 0px rgba(255,193,7,0.7)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { // Efeito ao clicar/tocar:
      scale: 0.95, // Diminui ligeiramente a escala para feedback tátil.
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  // Manipulador de clique que dispara o confete e chama a prop onClick.
  const handleConfetti = () => { // Parâmetro 'event' removido pois não estava sendo utilizado.
    // Obtém as coordenadas do clique para originar o confete do local do mouse, se possível.
    // Para simplificar, vamos usar uma origem fixa por enquanto.
    // Se precisar do evento: const handleConfetti = (event) => { ... }
    // const rect = event.target.getBoundingClientRect();
    // const x = (event.clientX - rect.left) / rect.width;
    // const y = (event.clientY - rect.top) / rect.height;

    confetti({
      particleCount: 150, // Número de partículas de confete.
      spread: 90,         // Ângulo de dispersão.
      origin: { y: 0.6 }, // Origem vertical do efeito (0.6 = 60% de cima para baixo).
      colors: ['#FFC107', '#FFD54F', '#4A00E0', '#F0E6FF', '#2C005E'] // Cores da paleta da aplicação.
    });

    // Chama a função onClick original passada como prop, se existir.
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className="inline-flex items-center justify-center px-8 py-4
                 bg-accent-gold text-primary-dark
                 font-bold font-heading text-lg md:text-xl tracking-wide
                 rounded-xl shadow-lg
                 border-2 border-accent-gold-light/50
                 focus:outline-none focus:ring-4 focus:ring-accent-gold-light/50" // Estilos para acessibilidade do foco.
      variants={buttonVariants} // Aplica as variantes de animação.
      initial="hidden"         // Estado inicial da animação.
      animate="visible"        // Estado final da animação de entrada.
      whileHover="hover"       // Animação ao passar o mouse.
      whileTap="tap"           // Animação ao clicar/tocar.
      onClick={handleConfetti} // Adiciona o manipulador de clique com confete.
    >
      <GiMagicSwirl className="mr-3 h-6 w-6 md:h-7 md:w-7" /> {/* Ícone temático. */}
      Iniciar Leitura Agora
    </motion.button>
  );
};

export default CallToActionButton;
