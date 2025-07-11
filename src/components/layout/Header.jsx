import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Usando NavLink para active states
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// import { GiCrystalBall } from 'react-icons/gi'; // Exemplo de ícone

const Header = () => {
  const activeLinkStyle = "text-goldAccent scale-110";
  const inactiveLinkStyle = "text-lightText hover:text-goldAccent transition-colors duration-300";

  return (
    <motion.header
      className="w-full py-4 px-6 bg-darkBg/90 backdrop-blur-lg shadow-xl sticky top-0 z-[1000]" // z-index alto
      initial={{ y: -120, opacity: 0 }} // Animação de entrada do topo
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          {/* <GiCrystalBall className="text-4xl text-goldAccent group-hover:text-yellow-300 transition-colors duration-300 transform group-hover:rotate-12" /> */}
          <h1 className="text-2xl md:text-3xl font-title text-goldAccent group-hover:text-yellow-300 transition-colors duration-300">
            Oráculo Vidente
          </h1>
        </Link>
        <nav className="space-x-4 md:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} font-body text-sm md:text-base p-2`}
          >
            Início
          </NavLink>
          <NavLink
            to="/reading"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} font-body text-sm md:text-base p-2`}
          >
            Leitura de Tarot
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} font-body text-sm md:text-base p-2`}
          >
            Sobre
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
