import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu } from 'antd';
import { HomeOutlined, ReadOutlined, InfoCircleOutlined, SendOutlined, UserOutlined } from '@ant-design/icons'; // Ícones do Ant Design, adicionado UserOutlined

/**
 * Header Component
 *
 * Utiliza o componente Menu do Ant Design para a navegação principal,
 * estilizado através do ConfigProvider global.
 * Mantém o título da aplicação e a animação de entrada com Framer Motion.
 */
const Header = () => {
  const location = useLocation(); // Para definir a chave do item de menu ativo

  // Define os itens do menu. A chave deve corresponder ao path da rota.
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined style={{ fontSize: '1.1rem' }} />,
      label: <Link to="/">Início</Link>,
    },
    {
      key: '/portal-cosmico',
      icon: <SendOutlined style={{ fontSize: '1.1rem' }} />, // Ícone para o portal
      label: <Link to="/portal-cosmico">Portal</Link>,
    },
    {
      key: '/reading',
      icon: <ReadOutlined style={{ fontSize: '1.1rem' }} />, // ReadOutlined é mais temático
      label: <Link to="/reading">Leitura</Link>,
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined style={{ fontSize: '1.1rem' }} />,
      label: <Link to="/about">Sobre</Link>,
    }
  ];

  // Determina a chave do item de menu selecionado com base na rota atual.
  // Isso é importante para o Menu do AntD destacar o item correto.
  // Para rotas aninhadas, pode ser necessário uma lógica mais complexa, mas para rotas simples isso funciona.
  let selectedKey = location.pathname;
  if (location.pathname === "/" || location.pathname === "") {
    selectedKey = "/";
  } else if (!menuItems.find(item => item.key === location.pathname)) {
    // Se a rota atual não corresponder exatamente a nenhuma chave, podemos tentar encontrar uma correspondência parcial
    // ou simplesmente não selecionar nenhum item. Para este caso, vamos manter simples.
    // Ou, se /reading/alguma-coisa, queremos que /reading seja o ativo.
    const matchedParent = menuItems.find(item => location.pathname.startsWith(item.key) && item.key !== "/");
    if (matchedParent) selectedKey = matchedParent.key;
  }


  return (
    <motion.header
      className="w-full py-3 px-4 sm:px-6 bg-primary-dark/80 backdrop-blur-lg shadow-2xl sticky top-0 z-[1000] border-b border-accent-gold/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <h1 className="text-2xl sm:text-3xl font-heading text-accent-gold group-hover:text-accent-gold-light transition-colors duration-300 tracking-wider">
            Oráculo Vidente
          </h1>
        </Link>

        <div className="flex items-center">
          {/* Menu de Navegação do Ant Design */}
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]} // Chave do item ativo
            items={menuItems}
            className="bg-transparent border-none leading-none mr-4" // Adicionado margin-right
          />
          {/* Ícone de Login/Usuário */}
          <Link to="/login" className="text-text-muted hover:text-accent-gold transition-colors duration-300">
            <UserOutlined style={{ fontSize: '1.5rem' }} />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
