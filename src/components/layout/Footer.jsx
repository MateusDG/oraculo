import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CopyrightOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app from '../../utils/firebase';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [userId, setUserId] = useState(null);
  const [isLoadingUserId, setIsLoadingUserId] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserId(null); // Simula nenhum usuário logado
      setIsLoadingUserId(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1.5 } },
  };

  return (
    <motion.footer
      className="w-full py-8 px-4 sm:px-6 bg-primary-dark/70 backdrop-blur-sm text-center border-t border-accent-gold/10"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto space-y-4">
        <div className="flex items-center justify-center text-xs text-text-muted/70 font-body min-h-[20px]">
          <UserOutlined className="mr-2" />
          {isLoadingUserId ? (
            <span>Carregando sessão...</span>
          ) : userId ? (
            <span>ID do Usuário (Debug): {userId}</span>
          ) : (
            <span>Para uma experiência personalizada, faça login.</span>
          )}
        </div>
        <div className="flex items-center justify-center text-sm text-text-muted">
          <CopyrightOutlined className="mr-2" />
          <span>{currentYear} Oráculo Vidente. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center justify-center text-xs text-text-muted/60 italic">
          <InfoCircleOutlined className="mr-2" />
          <span>As leituras destinam-se a fins de introspecção e entretenimento.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
