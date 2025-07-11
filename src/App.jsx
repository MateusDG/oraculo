import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // Para transições de página se necessário

// Layout Components
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Page Components
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ReadingPage from './pages/ReadingPage/ReadingPage.jsx'; // Nova página de leitura

// Removidos imports não utilizados diretamente em App.jsx:
// DeckSelector, CardReader, History, CardOfDay, decks, db, TestList
// A lógica de 'Home' interna foi removida em favor de páginas dedicadas e roteamento.

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-darkBg"> {/* Fundo base escuro */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* AnimatePresence pode ser usado aqui para animar transições de rota */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Adicionar uma rota catch-all para Not Found se desejar */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}