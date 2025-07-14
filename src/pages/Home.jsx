import { Link } from 'react-router-dom';
import { timesData, partidasData } from '../data';
import { PartidaCard } from '../components/PartidaCard';

const TimeCard = ({ time }) => (
  <Link to={`/times/${time.id}`} className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center bg-brand-gray rounded-lg p-4 text-center space-y-2 hover:bg-gray-700 transition-colors">
    <img src={time.logo} alt={time.nome} className="w-16 h-16 rounded-full object-cover" />
    <span className="font-semibold text-sm text-white">{time.nome}</span>
  </Link>
);

export default function Home() {
  // Pegando os 3 primeiros jogos com placar para mostrar na home
  const ultimosResultados = partidasData.filter(p => p.placarCasa !== null).slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Banner */}
      <section 
        className="relative p-8 rounded-lg shadow-lg text-white text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider">Bem-vindo à Brazuca League</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Futebol com a ginga brasileira. Prepare-se para um novo campeonato no estilo Kings League.</p>
          <Link to="/classificacao" className="mt-8 inline-block bg-brand-green text-brand-dark font-bold px-8 py-3 rounded-lg uppercase hover:bg-green-400 transition-transform hover:scale-105">
            Veja a Classificação
          </Link>
        </div>
      </section>

      {/* Resultados da Rodada */}
      <section>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Resultados da Rodada</h3>
            <span className="text-sm border border-gray-600 px-3 py-1 rounded-full text-gray-300">Quartas-de-final</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {ultimosResultados.map(partida => (
            <PartidaCard key={partida.id} partida={partida} />
          ))}
        </div>
      </section>

      {/* NOVO LAYOUT: Transmissão e Votação lado a lado em telas grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Coluna da Esquerda: Transmissão */}
        <section>
          <h3 className="text-2xl font-bold mb-4 text-white">Ao Vivo Agora</h3>
          <div className="aspect-video bg-brand-gray rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
              title="Transmissão ao vivo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </section>
        
        {/* Coluna da Direita: Votação */}
        <section className="bg-brand-gray p-6 rounded-lg text-center lg:mt-12">
          <h3 className="text-2xl font-bold mb-2 text-white">Vote no Melhor da Partida!</h3>
          <p className="text-gray-400 mb-4">Partida: Fúria Gaúcha vs Estrelas do Sul</p>
          <Link to="/votacao" className="bg-brand-green text-brand-dark px-8 py-3 rounded-lg font-bold uppercase hover:bg-green-400 transition-transform hover:scale-105 inline-block">
              Votar Agora
          </Link>
        </section>
      </div>

      {/* Lista de Times */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Times Participantes</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {timesData.map((time) => (
            <TimeCard key={time.id} time={time} />
          ))}
        </div>
      </section>
    </div>
  );
}