import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full py-6 px-6 bg-darkBg/70 backdrop-blur-sm text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }} // Delay para aparecer após o conteúdo principal
    >
      <p className="font-body text-sm text-secondary/70">
        &copy; {currentYear} Oráculo Vidente. Todos os direitos reservados.
      </p>
      <p className="font-body text-xs text-secondary/50 mt-1">
        As leituras são para fins de entretenimento e reflexão pessoal.
      </p>
    </motion.footer>
  );
};

export default Footer;
