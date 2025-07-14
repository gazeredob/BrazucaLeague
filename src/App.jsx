import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Times from './pages/Times';
import Jogadores from './pages/Jogadores';
import Votacao from './pages/Votacao';
import Classificacao from './pages/Classificacao';
import TimeDetalhe from './pages/TimeDetalhe';
import JogadorDetalhe from './pages/JogadorDetalhe';

// NOVO: Componente do cabeçalho
const Header = () => {
  const linkStyle = "px-3 py-2 text-gray-300 rounded-md hover:bg-brand-gray hover:text-white transition-colors duration-200 font-semibold";
  const activeLinkStyle = { backgroundColor: '#1F2937', color: 'white' };

  return (
    <header className="bg-gray-900 border-b border-gray-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo como imagem */}
        <Link to="/">
          <img src="/img/logo-brazuca.png" alt="Brazuca League Logo" className="h-10" />
        </Link>
        
        {/* Navegação horizontal */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} end>Início</NavLink>
          <NavLink to="/classificacao" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Classificação</NavLink>
          <NavLink to="/times" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Times</NavLink>
          <NavLink to="/jogadores" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Jogadores</NavLink>
          <NavLink to="/votacao" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Votação</NavLink>
        </nav>
      </div>
    </header>
  );
};

function App() {
  return (
    <Router>
      {/* NOVO: Fundo escuro com imagem aplicado ao contêiner principal */}
      <div 
        className="min-h-screen bg-cover bg-fixed bg-center" 
        style={{ backgroundImage: "url('/img/background-dark.jpg')" }}
      >
        <div className="min-h-screen bg-brand-dark/90 backdrop-blur-sm">
          <Header />
          <main className="container mx-auto p-6 md:p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classificacao" element={<Classificacao />} />
              <Route path="/times" element={<Times />} />
              <Route path="/times/:timeId" element={<TimeDetalhe />} />
              <Route path="/jogadores" element={<Jogadores />} />
              <Route path="/jogadores/:jogadorId" element={<JogadorDetalhe />} />
              <Route path="/votacao" element={<Votacao />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;