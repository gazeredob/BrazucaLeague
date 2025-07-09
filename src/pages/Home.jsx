// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { timesData } from '../data'; // Importar dados

const TimeCard = ({ time }) => (
  <Link to={`/times/${time.id}`} className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center bg-brand-gray rounded-lg p-4 text-center space-y-2 hover:bg-gray-700 transition-colors">
    <img src={time.logo} alt={time.nome} className="w-16 h-16 rounded-full object-cover" />
    <span className="font-semibold text-sm text-white">{time.nome}</span>
  </Link>
);

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Banner */}
      <section className="bg-brand-blue p-8 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider">Bem-vindo à Brazuca League</h2>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Futebol com a ginga brasileira. Prepare-se para um novo campeonato no estilo Kings League.</p>
        <Link to="/classificacao" className="mt-8 inline-block bg-brand-green text-brand-dark font-bold px-8 py-3 rounded-lg uppercase hover:bg-green-400 transition-transform hover:scale-105">
          Veja a Classificação
        </Link>
      </section>

      {/* Transmissão Ao Vivo */}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Ao Vivo Agora</h3>
        <div className="aspect-video bg-brand-gray rounded-lg overflow-hidden">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" // Link de exemplo (sim, é esse mesmo)
            title="Transmissão ao vivo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
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
