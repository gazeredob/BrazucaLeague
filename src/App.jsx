import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Times from './pages/Times';
import Jogadores from './pages/Jogadores';
import Votacao from './pages/Votacao';
import Classificacao from './pages/Classificacao';
import Transmissao from './pages/Transmissao';

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="bg-blue-800 w-full md:w-64 text-white p-4">
          <h1 className="text-2xl font-bold mb-6">Brazuca League</h1>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="hover:text-yellow-400">Início</Link>
            <Link to="/times" className="hover:text-yellow-400">Times</Link>
            <Link to="/jogadores" className="hover:text-yellow-400">Jogadores</Link>
            <Link to="/votacao" className="hover:text-yellow-400">Votação</Link>
            <Link to="/classificacao" className="hover:text-yellow-400">Classificação</Link>
            <Link to="/transmissao" className="hover:text-yellow-400">Transmissão</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-900 text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/times" element={<Times />} />
            <Route path="/jogadores" element={<Jogadores />} />
            <Route path="/votacao" element={<Votacao />} />
            <Route path="/classificacao" element={<Classificacao />} />
            <Route path="/transmissao" element={<Transmissao />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
