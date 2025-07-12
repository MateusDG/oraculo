import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Para animação de entrada e hover/tap no wrapper
import { Button } from 'antd'; // Importa o componente Button do Ant Design
import confetti from 'canvas-confetti';
import { GiMagicSwirl } from 'react-icons/gi'; // Ícone temático
// Ou, para usar um ícone do AntD:
// import { RocketOutlined } from '@ant-design/icons';

/**
 * CallToActionButton Component
 *
 * Utiliza o Button do Ant Design com tema customizado e Framer Motion para animações.
 * Dispara um efeito de confete ao ser clicado.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {Function} props.onClick - Função a ser chamada quando o botão é clicado.
 * @param {string} props.text - O texto a ser exibido no botão.
 */
const CallToActionButton = ({ onClick, text = "Iniciar Leitura Agora" }) => {
  // Variantes de animação para o wrapper do botão (motion.div).
  const wrapperVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2, // Mantém o delay para aparecer após o conteúdo.
      },
    },
    hover: { // Efeito de hover no wrapper, pode ser sutil ou complementar ao do botão AntD.
      scale: 1.05, // Leve aumento de escala no hover.
      // A sombra pode ser controlada pelo tema do AntD ou Tailwind no próprio botão.
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    tap: { // Efeito de clique no wrapper.
      scale: 0.98,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  const handleButtonClick = () => {
    // Efeito de confete "místico"
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      // Dispara de ambos os lados
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FFC107', '#FFD54F', '#F0E6FF'] }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#4A00E0', '#2C005E', '#7F00FF'] }));
    }, 250);

    if (onClick) {
      onClick();
    }
  };

  return (
    // Envolve o botão AntD com motion.div para controlar a animação de entrada e interações de hover/tap.
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="inline-block" // Para que o motion.div não ocupe a largura total por padrão.
    >
      <Button
        type="primary" // Isso usará os tokens colorPrimary, colorTextPrimary do tema AntD.
        size="large"   // Botão grande para destaque.
        icon={<GiMagicSwirl style={{ fontSize: '1.2em', marginRight: '8px' }} />} // Ícone com estilo.
        onClick={handleButtonClick}
        // Adicionando classes de hover para o efeito de brilho (glow) e transição.
        className="font-heading tracking-wide flex items-center justify-center
                   !text-primary-dark hover:!text-primary-dark focus:!text-primary-dark
                   active:!text-primary-dark
                   transition-all duration-300 ease-in-out
                   hover:shadow-lg hover:shadow-accent-gold/30"
        // O uso de ! (important) é para garantir que as classes Tailwind para texto
        // sobrescrevam o tema do AntD se houver conflito direto na cor do texto do botão primário.
        // O tema do AntD para Button.colorTextPrimary já está definido como '#2C005E'.
      >
        {text}
      </Button>
    </motion.div>
  );
};

export default CallToActionButton;
