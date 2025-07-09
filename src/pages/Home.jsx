// src/pages/Home.jsx

// Dados fictícios dos times para o slider
const times = [
  { nome: "Fúria Gaúcha", logo: "logo_placeholder.png" },
  { nome: "Estrelas do Sul", logo: "logo_placeholder.png" },
  { nome: "Leões do Vale", logo: "logo_placeholder.png" },
  { nome: "Tempestade Azul", logo: "logo_placeholder.png" },
  { nome: "Panteras da Serra", logo: "logo_placeholder.png" },
  { nome: "Guerreiros do Asfalto", logo: "logo_placeholder.png" },
  { nome: "Titãs do Pampa", logo: "logo_placeholder.png" },
];

// Componente para um Card de Time
const TimeCard = ({ nome, logo }) => (
  <div className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center bg-brand-gray rounded-lg p-4 text-center space-y-2 hover:bg-gray-700 transition-colors">
    {}
    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-brand-green font-bold text-lg">
      {nome.charAt(0)}
    </div>
    <span className="font-semibold text-sm text-white">{nome}</span>
  </div>
);


export default function Home() {
  return (
    <div className="space-y-12">
      {}
      <section className="bg-brand-blue p-8 rounded-lg shadow-lg text-white text-center" style={{ backgroundImage: `url('caminho/para/uma/textura.svg')` }}>
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider">Bem-vindo à Brazuca League</h2>
        <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Futebol com a ginga brasileira. De 23 a 26/09, prepare-se para um novo campeonato no estilo Kings League.</p>
        <button className="mt-8 bg-brand-green text-brand-dark font-bold px-8 py-3 rounded-lg uppercase hover:bg-green-400 transition-transform hover:scale-105">
          Veja a Classificação
        </button>
      </section>

      {}
      <section>
        <h3 className="text-2xl font-bold mb-4 text-white">Times Participantes</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {times.map((time, idx) => (
            <TimeCard key={idx} nome={time.nome} logo={time.logo} />
          ))}
        </div>
      </section>

       {}
       <section>
        <div className="bg-brand-gray p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Vote no Melhor da Partida!</h3>
          <p className="text-gray-400 mb-4">Partida: Estrelas do Sul vs Fúria Gaúcha</p>
          <button className="bg-brand-green text-brand-dark px-6 py-2 rounded-lg font-semibold hover:bg-green-400">Votar Agora</button>
        </div>
      </section>
    </div>
  );
}
