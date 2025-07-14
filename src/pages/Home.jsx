import { Link } from 'react-router-dom';
import { timesData, partidasData } from '../data';
import { PartidaCard } from '../components/PartidaCard'; // Importando o card reutilizável

const TimeCard = ({ time }) => (
  <Link to={`/times/${time.id}`} className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center bg-brand-gray rounded-lg p-4 text-center space-y-2 hover:bg-gray-700 transition-colors">
    <img src={time.logo} alt={time.nome} className="w-16 h-16 rounded-full object-cover" />
    <span className="font-semibold text-sm text-white">{time.nome}</span>
  </Link>
);

export default function Home() {
  // Pegando os 4 primeiros jogos para mostrar na home
  const ultimosJogos = partidasData.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Banner com imagem de fundo e overlay azul */}
      <section 
        className="relative p-8 rounded-lg shadow-lg text-white text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider">Bem-vindo à Brazuca League</h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Futebol com a ginga brasileira. Prepare-se para um novo campeonato!</p>
          <Link to="/classificacao" className="mt-8 inline-block bg-brand-green text-brand-dark font-bold px-8 py-3 rounded-lg uppercase hover:bg-green-400 transition-transform hover:scale-105">
            Veja a Classificação
          </Link>
        </div>
      </section>

      {/* NOVO: Listagem dos últimos jogos */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Últimos Jogos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ultimosJogos.map(partida => (
            <PartidaCard key={partida.id} partida={partida} />
          ))}
        </div>
      </section>

      {/* Transmissão Ao Vivo (agora abaixo dos últimos jogos) */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Assista em tempo real</h3>
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
      
      {/* VOTAÇÃO */}
      <section className="bg-brand-gray p-6 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2 text-white">Vote no Melhor da Partida!</h3>
        <p className="text-gray-400 mb-4">Partida: Fúria Gaúcha vs Estrelas do Sul</p>
        <Link to="/votacao" className="bg-brand-green text-brand-dark px-8 py-3 rounded-lg font-bold uppercase hover:bg-green-400 transition-transform hover:scale-105 inline-block">
            Votar Agora
        </Link>
      </section>

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