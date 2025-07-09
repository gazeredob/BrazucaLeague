// src/App.jsx (CORRIGIDO)

import React from 'react';
// A correção está aqui: Adicionamos 'Link' à lista de imports
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import Times from './pages/Times';
import Jogadores from './pages/Jogadores';
import Votacao from './pages/Votacao';
import Classificacao from './pages/Classificacao';
import TimeDetalhe from './pages/TimeDetalhe';
import JogadorDetalhe from './pages/JogadorDetalhe';

const Logo = () => (
  <div className="text-center mb-10">
    <Link to="/" className="text-3xl font-extrabold text-white tracking-wider uppercase">
      <span className="text-brand-green">Brazuca</span> League
    </Link>
  </div>
);

function App() {
  const linkStyle = "flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-brand-gray hover:text-white transition-colors duration-200";
  const activeLinkStyle = { backgroundColor: '#1F2937', color: 'white', fontWeight: '600' };

  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-brand-dark">
        <aside className="bg-brand-dark md:bg-gray-900 w-full md:w-72 p-6 border-b md:border-b-0 md:border-r border-gray-700 flex-shrink-0">
          <Logo />
          <nav className="flex flex-col space-y-2">
            {/* O atributo 'end' no NavLink da Home garante que ele só fica ativo na página inicial exata */}
            <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined} end>Início</NavLink>
            <NavLink to="/classificacao" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Classificação</NavLink>
            <NavLink to="/times" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Times</NavLink>
            <NavLink to="/jogadores" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Jogadores</NavLink>
            <NavLink to="/votacao" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Votação</NavLink>
          </nav>
        </aside>
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
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
    </Router>
  );
}

export default App;
