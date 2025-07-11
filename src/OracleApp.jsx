import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'; // motion é usado implicitamente pelos componentes motion.div

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Specific Components
import HomePageContent from './components/home/HomePageContent';
import CallToActionButton from './components/common/CallToActionButton';

// Placeholder Page Components (agora importados)
import ReadingPagePlaceholder from './pages/placeholders/ReadingPagePlaceholder';
import AboutPagePlaceholder from './pages/placeholders/AboutPagePlaceholder';
import CosmicPortalPage from './pages/CosmicPortalPage'; // Importa a nova página


// Componente para o layout da Página Inicial
// Este componente estrutura a página inicial, combinando o conteúdo textual e o botão de ação.
// Também gerencia a animação de entrada para a página como um todo.
const HomePageLayout = () => {
  // Função de callback para o CallToActionButton.
  // Embora a navegação principal seja feita pelo RouterLink, esta função é chamada
  // permitindo ações adicionais no clique (como o efeito de confete).
  const handleStartReading = () => {
    console.log("Botão 'Iniciar Leitura' clicado, efeito de confete ativado.");
    // Se precisasse de navegação programática, seria algo como:
    // const navigate = useNavigate(); navigate('/reading');
    // Mas para este caso, RouterLink é mais direto.
  };

  return (
    // Container principal da HomePageLayout com animação de entrada/saída para transições de página.
    <motion.div
      className="flex flex-col items-center justify-center text-center flex-grow py-10 md:py-16 w-full"
      initial={{ opacity: 0, y: 20 }} // Começa invisível e um pouco abaixo
      animate={{ opacity: 1, y: 0 }}   // Anima para visível e na posição Y correta
      exit={{ opacity: 0, y: -20 }}    // Anima para invisível e um pouco acima ao sair
      transition={{ duration: 0.5 }}   // Duração da transição
    >
      {/* Card/Container interno para o conteúdo da página inicial, com efeitos visuais. */}
       <div className="bg-primary-dark/20 backdrop-blur-lg p-8 sm:p-10 md:p-16 rounded-3xl shadow-2xl border border-accent-gold/10 max-w-4xl w-full">
        {/* Componente que renderiza o título e o parágrafo introdutório. */}
        <HomePageContent />
        <div className="mt-10 md:mt-12">
          {/* O CallToActionButton é envolvido por um RouterLink para navegação. */}
          {/* A prop onClick no CallToActionButton ainda é chamada para o efeito de confete. */}
          <RouterLink to="/reading">
            <CallToActionButton onClick={handleStartReading} />
          </RouterLink>
        </div>
      </div>
    </motion.div>
  );
};

// Componente raiz da aplicação.
// Configura o BrowserRouter, o layout principal (Header, main content area, Footer),
// e o sistema de roteamento com AnimatePresence para transições de página.
const OracleApp = () => {
  const location = useLocation(); // Hook para obter o objeto location atual.

  return (
    <BrowserRouter>
      {/* Container principal da aplicação com estilos de fundo e fonte globais. */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark-bg via-primary-dark to-dark-bg text-text-light font-body selection:bg-accent-gold selection:text-primary-dark">
        {/* Componente Header, persistente em todas as páginas. */}
        <Header />
        {/* Área de conteúdo principal que muda com a rota. */}
        <main className="flex-grow flex flex-col items-center justify-center container mx-auto p-4 sm:p-6 md:p-8">
          {/* AnimatePresence gerencia as animações de entrada/saída dos componentes de rota. */}
          {/* mode="wait" garante que a animação de saída termine antes da de entrada começar. */}
          {/* A prop 'key' em Routes (ou no componente filho direto de AnimatePresence) é crucial. */}
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePageLayout />} />
              <Route path="/reading" element={<ReadingPagePlaceholder />} />
              <Route path="/portal-cosmico" element={<CosmicPortalPage />} /> {/* Nova rota adicionada */}
              <Route path="/about" element={<AboutPagePlaceholder />} />
              {/* Uma rota catch-all para páginas não encontradas pode ser adicionada aqui. */}
              {/* Exemplo: <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </AnimatePresence>
        </main>
        {/* Componente Footer, persistente em todas as páginas. */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default OracleApp;
