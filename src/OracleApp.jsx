import React from 'react';
// BrowserRouter foi removido daqui, pois está em main.jsx
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Specific Components
import HomePageContent from './components/home/HomePageContent';
import CallToActionButton from './components/common/CallToActionButton';

// Page Components
import ReadingPage from './pages/ReadingPage'; // Nova página de Leitura
import AboutPage from './pages/AboutPage';   // Nova página Sobre
import CosmicPortalPage from './pages/CosmicPortalPage'; // Importa a página do Portal


// Componente para o layout da Página Inicial
const HomePageLayout = () => {
  const handleStartReading = () => {
    console.log("Botão 'Iniciar Leitura' clicado, efeito de confete ativado.");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center flex-grow py-10 md:py-16 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
       <div className="bg-primary-dark/20 backdrop-blur-lg p-8 sm:p-10 md:p-16 rounded-3xl shadow-2xl border border-accent-gold/10 max-w-4xl w-full">
        <HomePageContent />
        <div className="mt-10 md:mt-12">
          <RouterLink to="/reading">
            <CallToActionButton onClick={handleStartReading} />
          </RouterLink>
        </div>
      </div>
    </motion.div>
  );
};

// NOVO Componente Wrapper para Rotas Animadas
const AnimatedRoutes = () => {
  const location = useLocation(); // useLocation é chamado aqui, dentro do contexto do BrowserRouter
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/reading" element={<ReadingPage />} /> {/* Substituído placeholder */}
        <Route path="/portal-cosmico" element={<CosmicPortalPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Substituído placeholder */}
        {/* Adicionar uma rota Not Found no futuro */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

// Componente raiz da aplicação.
// Configura o layout principal (Header, main content area, Footer),
// e renderiza o AnimatedRoutes que lida com o roteamento e transições de página.
const OracleApp = () => {
  // useLocation NÃO é mais chamado aqui
  return (
    // BrowserRouter foi movido para main.jsx
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark-bg via-primary-dark to-dark-bg text-text-light font-body selection:bg-accent-gold selection:text-primary-dark">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto p-4 sm:p-6 md:p-8">
        <AnimatedRoutes /> {/* Renderiza o novo wrapper para rotas animadas */}
      </main>
      <Footer />
    </div>
  );
};

export default OracleApp;
