// src/pages/Votacao.jsx
import React, { useState } from 'react';
import { jogadoresData } from '../data';

// Pegar 4 jogadores aleatórios para a votação
const jogadoresParaVotar = jogadoresData.slice(0, 4);

export default function Votacao() {
  const [voto, setVoto] = useState(null);
  const [votado, setVotado] = useState(false);

  const handleVote = (jogadorId) => {
    setVoto(jogadorId);
    setVotado(true);
  }

  return (
    <div className="bg-brand-gray p-6 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-white">MVP da Partida</h2>
      <p className="text-gray-400 mb-6">Fúria Gaúcha vs Estrelas do Sul</p>

      {votado ? (
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold text-brand-green">Obrigado pelo seu voto!</h3>
          <p className="text-gray-300 mt-2">O resultado será revelado ao final da transmissão.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jogadoresParaVotar.map(jogador => (
            <div key={jogador.id} className="flex items-center justify-between bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={jogador.imagem} alt={jogador.nome} className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-bold text-white">{jogador.nome}</p>
                  <p className="text-sm text-gray-400">{jogador.posicao}</p>
                </div>
              </div>
              <button 
                onClick={() => handleVote(jogador.id)}
                className="bg-brand-green text-brand-dark font-bold px-6 py-2 rounded-lg hover:bg-green-400 transition-colors"
              >
                Votar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
