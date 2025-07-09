// src/pages/TimeDetalhe.jsx (CORRIGIDO)

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { timesData, jogadoresData } from '../data';

const JogadorElencoCard = ({ jogador }) => (
  <Link to={`/jogadores/${jogador.id}`} className="flex items-center space-x-4 bg-gray-900/50 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
    <img src={jogador.imagem} alt={jogador.nome} className="w-12 h-12 object-contain" />
    <div>
      <p className="font-bold text-white">{jogador.nome}</p>
      <p className="text-sm text-gray-400">{jogador.posicao}</p>
    </div>
    <div className="ml-auto bg-yellow-400 text-black text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full">
      {jogador.media}
    </div>
  </Link>
);

const StatBox = ({ label, value }) => (
    <div className="bg-gray-900/50 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs uppercase text-gray-400">{label}</p>
    </div>
);


export default function TimeDetalhe() {
  const { timeId } = useParams();
  const time = timesData.find(t => t.id === parseInt(timeId));
  // A correção está aqui: mudamos 'j.id' para 'j.timeId' para filtrar corretamente o elenco
  const elenco = jogadoresData.filter(j => j.timeId === parseInt(timeId));

  if (!time) {
    return <div>Time não encontrado.</div>;
  }

  return (
    <div className="space-y-8">
      <Link to="/times" className="text-gray-300 hover:text-white"> ← Voltar para Times</Link>
      
      <div className="h-48 md:h-64 rounded-lg bg-cover bg-center flex items-center justify-center p-4" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${time.banner})`}}>
        <div className='text-center'>
            <img src={time.logo} alt={time.nome} className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain drop-shadow-lg" />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">{time.nome}</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatBox label="Vitórias" value={time.vitorias} />
        <StatBox label="Derrotas" value={time.derrotas} />
        <StatBox label="Gols Pró" value={time.gp} />
        <StatBox label="Gols Contra" value={time.gc} />
        <StatBox label="Saldo de Gols" value={time.sg} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Elenco</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {elenco.map(jogador => (
                <JogadorElencoCard key={jogador.id} jogador={jogador} />
            ))}
        </div>
      </div>
    </div>
  );
}
