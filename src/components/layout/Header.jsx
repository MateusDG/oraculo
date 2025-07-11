import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Usado para motion.header
import { FaHome } from 'react-icons/fa';        // Ícone para "Início"
import { GiScrollQuill } from 'react-icons/gi'; // Ícone para "Leitura", mais temático
import { FiInfo } from 'react-icons/fi';        // Ícone para "Sobre", mais neutro e informativo

/**
 * Header Component
 *
 * Responsável por exibir o cabeçalho da aplicação, incluindo o título/logo
 * e os links de navegação principais.
 * Utiliza `framer-motion` para uma animação de entrada suave.
 * `NavLink` do `react-router-dom` é usado para estilizar o link ativo.
 */
const Header = () => {
  // Classes base para todos os links de navegação, promovendo consistência.
  const navLinkBaseClasses = "inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg";
  // Classes adicionais para um link de navegação ATIVO.
  const activeNavLinkClasses = "bg-accent-gold text-primary-dark shadow-md scale-105";
  // Classes adicionais para um link de navegação INATIVO, incluindo estilos de hover.
  const inactiveNavLinkClasses = "text-text-muted hover:text-text-light hover:bg-primary-medium/40";

  // Função para determinar dinamicamente as classes do NavLink com base no estado 'isActive'.
  const navLinkClasses = ({ isActive }) =>
    `${navLinkBaseClasses} ${isActive ? activeNavLinkClasses : inactiveNavLinkClasses}`;

  return (
    // O elemento header é animado usando framer-motion.
    <motion.header
      className="w-full py-5 px-4 sm:px-6 bg-primary-dark/80 backdrop-blur-md shadow-2xl sticky top-0 z-[1000] border-b border-accent-gold/20"
      // Animação de entrada: desliza de cima e aparece gradualmente.
      initial={{ y: -100, opacity: 0 }} // Estado inicial: acima da tela e invisível.
      animate={{ y: 0, opacity: 1 }}     // Estado final: na posição Y correta e totalmente visível.
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Configurações da transição.
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Link para a página inicial, contendo o título da aplicação. */}
        <Link to="/" className="flex items-center group">
          {/* Placeholder para um futuro logo SVG. */}
          {/* <YourOracleLogoSvg className="h-10 w-10 mr-2 text-accent-gold group-hover:text-accent-gold-light transition-colors" /> */}
          <h1 className="text-2xl sm:text-3xl font-heading text-accent-gold group-hover:text-accent-gold-light transition-colors duration-300 tracking-wider">
            Oráculo Vidente
          </h1>
        </Link>

        {/* Navegação principal com links para diferentes seções da aplicação. */}
        <nav className="space-x-2 sm:space-x-3 md:space-x-4">
          {/* NavLink para "Início". A prop 'end' garante que só esteja ativo na rota raiz exata. */}
          <NavLink to="/" end className={navLinkClasses}>
            <FaHome className="h-4 w-4 sm:h-5 sm:w-5" /> {/* Ícone */}
            <span className="ml-2 hidden sm:inline">Início</span> {/* Texto do link, oculto em telas pequenas */}
          </NavLink>
          {/* NavLink para "Leitura". */}
          <NavLink to="/reading" className={navLinkClasses}>
            <GiScrollQuill className="h-4 w-4 sm:h-5 sm:w-5" /> {/* Ícone */}
            <span className="ml-2 hidden sm:inline">Leitura</span> {/* Texto do link */}
          </NavLink>
          {/* NavLink para "Sobre". */}
          <NavLink to="/about" className={navLinkClasses}>
            <FiInfo className="h-4 w-4 sm:h-5 sm:w-5" /> {/* Ícone */}
            <span className="ml-2 hidden sm:inline">Sobre</span> {/* Texto do link */}
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
