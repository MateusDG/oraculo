import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Usado para motion.footer
// Para a funcionalidade real de exibição do User ID, descomente as linhas abaixo
// e a lógica dentro do useEffect.
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app from '../../utils/firebase'; // Assume que 'app' é o Firebase app inicializado

/**
 * Footer Component
 *
 * Exibe o rodapé da aplicação, incluindo informações de copyright e, futuramente,
 * o ID do usuário logado (atualmente simulado).
 * Utiliza `framer-motion` para uma animação de entrada suave.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Estado para armazenar o ID do usuário e o status de carregamento.
  // Estes são placeholders e a lógica real de autenticação do Firebase deve ser implementada.
  const [userId, setUserId] = useState(null); // Armazena o ID do usuário (ex: de Firebase Auth)
  const [isLoadingUserId, setIsLoadingUserId] = useState(true); // Controla a mensagem de "Carregando..."

  useEffect(() => {
    // === INÍCIO DA SIMULAÇÃO DE OBTENÇÃO DO USER ID ===
    // Esta seção simula a obtenção assíncrona do ID do usuário.
    // No uso real, você integraria com `onAuthStateChanged` do Firebase Auth.

    // Exemplo de como seria com Firebase Auth (MANTENHA COMENTADO POR ENQUANTO):
    // const auth = getAuth(app);
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   if (currentUser) {
    //     setUserId(currentUser.uid); // Define o ID do usuário se logado
    //   } else {
    //     setUserId(null); // Define como null se não houver usuário logado
    //   }
    //   setIsLoadingUserId(false); // Finaliza o estado de carregamento
    // });
    // return () => unsubscribe(); // Limpa o listener ao desmontar o componente

    // Simulação atual com setTimeout:
    const timer = setTimeout(() => {
      // Para testar a exibição do ID, você pode descomentar a linha abaixo:
      // setUserId("simulated-user-id-123abc");
      setUserId(null); // Atualmente simula nenhum usuário logado após o "carregamento".
      setIsLoadingUserId(false);
    }, 2500); // Simula um delay de 2.5 segundos para o carregamento.

    return () => clearTimeout(timer); // Limpa o timer ao desmontar.
    // === FIM DA SIMULAÇÃO ===
  }, []);

  // Variantes de animação para o footer.
  const footerVariants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial: invisível e deslocado para baixo.
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 1.5 }, // Delay para aparecer após outros elementos.
    },
  };

  return (
    <motion.footer
      className="w-full py-8 px-4 sm:px-6 bg-primary-dark/70 backdrop-blur-sm text-center border-t border-accent-gold/10"
      variants={footerVariants} // Aplica as variantes de animação.
      initial="hidden"         // Estado inicial da animação.
      animate="visible"        // Estado final da animação.
    >
      <div className="container mx-auto">
        <p className="font-body text-sm text-text-muted mb-2">
          &copy; {currentYear} Oráculo Vidente. Todos os direitos reservados.
        </p>
        {/* Seção para exibir o status de carregamento ou o ID do usuário. */}
        <div className="text-xs text-text-muted/70 font-body min-h-[20px]"> {/* min-h para evitar "pulo" de layout */}
          {isLoadingUserId ? (
            <span>Carregando informações do usuário...</span>
          ) : userId ? (
            <span>ID do Usuário (Debug): {userId}</span>
          ) : (
            <span>Usuário não autenticado.</span> // Mensagem se não houver usuário.
          )}
        </div>
        <p className="text-xs text-text-muted/60 mt-3">
          As leituras destinam-se a fins de introspecção e entretenimento.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
