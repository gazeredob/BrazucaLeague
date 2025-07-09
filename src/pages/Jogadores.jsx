// src/pages/Jogadores.jsx
import { Link } from 'react-router-dom';
import { jogadoresData, timesData } from '../data';

// Card de Jogador
const JogadorCard = ({ jogador }) => {
  const time = timesData.find(t => t.id === jogador.timeId);

  return (
    <Link to={`/jogadores/${jogador.id}`}>
      <div className="bg-brand-gray rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-green/20">
        <div className="relative p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://kingsleague.pro/img/bg-card-players.png')"}}>
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
            Média {jogador.media}
          </div>
          <img src={jogador.imagem} alt={jogador.nome} className="w-full h-56 object-contain drop-shadow-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{jogador.nome}</h3>
          <p className="text-gray-400">{jogador.posicao}</p>
        </div>
        <div className="grid grid-cols-5 text-center p-2 bg-gray-900/50">
          <div className="text-xs text-gray-400">J<p className="font-bold text-base text-white">{jogador.stats.jogos}</p></div>
          <div className="text-xs text-gray-400">G<p className="font-bold text-base text-white">{jogador.stats.gols}</p></div>
          <div className="text-xs text-gray-400">A<p className="font-bold text-base text-white">{jogador.stats.assist}</p></div>
          <div className="text-xs text-gray-400">CA<p className="font-bold text-base text-white">{jogador.stats.amarelos}</p></div>
          <div className="text-xs text-gray-400">CV<p className="font-bold text-base text-white">{jogador.stats.vermelhos}</p></div>
        </div>
      </div>
    </Link>
  );
};

export default function Jogadores() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Jogadores da Liga</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jogadoresData.map(jogador => (
          <JogadorCard key={jogador.id} jogador={jogador} />
        ))}
      </div>
    </div>
  );
}
