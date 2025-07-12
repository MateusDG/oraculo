import React from 'react';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { Card } from 'antd'; // Importa o Card do AntD

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Specific Components
import HomePageContent from './components/home/HomePageContent';
import CallToActionButton from './components/common/CallToActionButton';

// Page Components
import ReadingPage from './pages/ReadingPage';
import AboutPage from './pages/AboutPage';
import CosmicPortalPage from './pages/CosmicPortalPage';

// Componente para o layout da Página Inicial, agora usando AntD Card
const HomePageLayout = () => {
  const handleStartReading = () => {
    console.log("Botão 'Revelar Meu Caminho' clicado, efeito de confete ativado.");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center flex-grow py-10 md:py-16 w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* O container principal da home agora é um Card do AntD com estilo customizado */}
      <Card
        className="bg-primary-dark/30 backdrop-blur-xl shadow-2xl border-accent-gold/20 max-w-4xl w-full"
        bordered={false} // Remove a borda padrão do Card
        style={{ borderRadius: '24px' }} // Adiciona um raio de borda mais pronunciado
      >
        <div className="p-4 sm:p-6 md:p-8">
          <HomePageContent />
          <div className="mt-10 md:mt-12">
            <RouterLink to="/reading">
              {/* Passando o novo texto para o botão CTA */}
              <CallToActionButton onClick={handleStartReading} text="Desvende os Mistérios" />
            </RouterLink>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Wrapper para as rotas, necessário para AnimatePresence funcionar com useLocation
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/portal-cosmico" element={<CosmicPortalPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

// Componente Raiz da Aplicação
const OracleApp = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-dark-bg text-text-light font-body selection:bg-accent-gold selection:text-primary-dark"
      style={{
        backgroundImage: `
          radial-gradient(at 20% 80%, hsla(260, 50%, 20%, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 20%, hsla(280, 60%, 30%, 0.3) 0px, transparent 50%),
          url('https://www.transparenttextures.com/patterns/stardust.png'),
          linear-gradient(135deg, #12002b, #2C005E)
        `,
      }}
    >
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto p-4 sm:p-6 md:p-8">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default OracleApp;
