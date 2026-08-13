import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import QuemSouPage from '@/pages/QuemSouPage';
import SolucoesPage from '@/pages/SolucoesPage';
import BlogPage from '@/pages/BlogPage';
import ContatoPage from '@/pages/ContatoPage';
import Article1 from '@/pages/Article1';
import Article2 from '@/pages/Article2';
import Article3 from '@/pages/Article3';
import Article4 from '@/pages/Article4';
import Article5 from '@/pages/Article5';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-sou" element={<QuemSouPage />} />
        <Route path="/solucoes" element={<SolucoesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        
        {/* Blog Articles Routes */}
        <Route path="/blog/empresas-precisam-enxergar-alem-do-cracha" element={<Article1 />} />
        <Route path="/blog/comunicacao-nao-violenta-jamais-vai-ser-perfumaria" element={<Article2 />} />
        <Route path="/blog/a-clickzacao-da-vida" element={<Article3 />} />
        <Route path="/blog/a-reuniao-fantasma-voce-esta-presente-ou-apenas-conectado" element={<Article4 />} />
        <Route path="/blog/a-engenharia-do-prejuizo" element={<Article5 />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;