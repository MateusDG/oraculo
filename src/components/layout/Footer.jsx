import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CopyrightOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      <div className="container mx-auto space-y-6">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors duration-300">
            <GithubOutlined style={{ fontSize: '1.8rem' }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors duration-300">
            <LinkedinOutlined style={{ fontSize: '1.8rem' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors duration-300">
            <TwitterOutlined style={{ fontSize: '1.8rem' }} />
          </a>
        </div>
        <div className="flex items-center justify-center text-sm text-text-muted">
          <CopyrightOutlined className="mr-2" />
          <span>{currentYear} Oráculo Vidente. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center justify-center text-xs text-text-muted/60 italic">
          <InfoCircleOutlined className="mr-2" />
          <span>As leituras destinam-se a fins de introspecção e entretenimento. Confie na sua jornada.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
