import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from 'antd'; // Importa o Button do AntD
import { RollbackOutlined } from '@ant-design/icons'; // Ícone para "Voltar"

// Placeholder para a página "Sobre". Similar ao ReadingPagePlaceholder em termos de animação e estrutura.
const AboutPagePlaceholder = () => (
  <motion.div
    className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-primary-dark/30 backdrop-blur-md border border-accent-gold/20 shadow-xl w-full max-w-2xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-heading text-accent-gold mb-4">Sobre o Oráculo Vidente</h2>
    <p className="text-text-muted font-body">Informações sobre o oráculo e sua missão em breve...</p>
    <RouterLink to="/" className="mt-8"> {/* Adicionado um pouco mais de margem ao Link */}
      <Button
        type="primary" // Usará o tema primário (dourado)
        size="large"
        icon={<RollbackOutlined />}
        className="font-heading" // Para aplicar a fonte de título ao texto do botão
      >
        Voltar ao Início
      </Button>
    </RouterLink>
  </motion.div>
);

export default AboutPagePlaceholder;
