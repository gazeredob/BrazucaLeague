// src/pages/JogadorDetalhe.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jogadoresData, timesData } from '../data';

// Componente para a barra de atributo
const AtributoBar = ({ label, value }) => (
  <div className="flex justify-between items-center text-white py-3 border-b border-gray-700">
    <span>{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default function JogadorDetalhe() {
  const { jogadorId } = useParams();
  const jogador = jogadoresData.find(j => j.id === parseInt(jogadorId));
  const time = timesData.find(t => t.id === jogador.timeId);

  if (!jogador) {
    return <div>Jogador não encontrado.</div>;
  }

  return (
    <div className="space-y-8">
      <Link to="/jogadores" className="text-gray-300 hover:text-white"> ← Voltar para Jogadores</Link>
      
      {/* Seção Principal */}
      <div className="bg-brand-gray rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center">
        <img src={jogador.imagem} alt={jogador.nome} className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg" />
        <div>
          <h1 className="text-4xl font-extrabold text-white">{jogador.nome}</h1>
          <p className="text-xl text-gray-400">{jogador.posicao}</p>
          <div className="flex items-center space-x-2 mt-4">
            <img src={time.logo} alt={time.nome} className="w-8 h-8"/>
            <p className="text-lg text-white">{time.nome}</p>
          </div>
        </div>
        <div className="ml-auto bg-yellow-400 text-black p-4 rounded-lg text-center">
          <p className="text-sm font-bold">MÉDIA</p>
          <p className="text-5xl font-extrabold">{jogador.media}</p>
        </div>
      </div>

      {/* Seção de Atributos */}
      <div className="bg-brand-gray rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Atributos</h2>
        <AtributoBar label="Físico" value={jogador.atributos.fisico} />
        <AtributoBar label="Duelos" value={jogador.atributos.duelos} />
        <AtributoBar label="Chute ao Gol" value={jogador.atributos.chute} />
        <AtributoBar label="Defesa" value={jogador.atributos.defesa} />
      </div>
    </div>
  );
}
