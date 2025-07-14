import { classificacaoData, timesData, partidasData } from '../data';
import { PartidaCard } from '../components/PartidaCard'; // Importando o card

// Componente para a bolinha de V/E/D
const UltimosJogos = ({ resultados }) => {
  const getDotColor = (result) => {
    switch (result) {
      case 'V': return 'bg-green-500';
      case 'E': return 'bg-gray-500';
      case 'D': return 'bg-red-500';
      default: return 'bg-gray-700';
    }
  };

  return (
    <div className="flex space-x-1">
      {resultados.map((res, index) => (
        <div key={index} className={`w-3 h-3 rounded-full ${getDotColor(res)}`}></div>
      ))}
    </div>
  );
};

export default function Classificacao() {
  const tabelaCompleta = classificacaoData.map(item => {
    const timeInfo = timesData.find(t => t.id === item.timeId);
    return { ...item, ...timeInfo };
  });

  // NOVO: Agrupando os jogos por rodada para exibição
  const jogosPorRodada = partidasData.reduce((acc, partida) => {
    const rodada = `RODADA ${partida.rodada}`;
    if (!acc[rodada]) {
      acc[rodada] = [];
    }
    acc[rodada].push(partida);
    return acc;
  }, {});

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
      
      {/* Coluna da Esquerda: Tabela de Classificação */}
      <div className="flex-grow">
        <div className="bg-brand-gray p-4 md:p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-white">Tabela</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              {/* Cabeçalho da tabela... */}
              <thead className="border-b-2 border-gray-700">
                <tr className="text-gray-400 uppercase text-xs">
                  <th className="p-3"></th>
                  <th className="p-3">Time</th>
                  <th className="p-3 text-center">P</th><th className="p-3 text-center">J</th>
                  <th className="p-3 text-center">V</th><th className="p-3 text-center">E</th>
                  <th className="p-3 text-center">D</th><th className="p-3 text-center">GP</th>
                  <th className="p-3 text-center">GC</th><th className="p-3 text-center">SG</th>
                  <th className="p-3">Últ. Jogos</th>
                </tr>
              </thead>
              <tbody>
                {tabelaCompleta.map((c) => (
                  <tr key={c.pos} className="border-b border-gray-700 last:border-b-0">
                    <td className="p-3 font-bold">{c.pos}</td>
                    <td className="p-3 flex items-center space-x-3"><img src={c.logo} alt={c.nome} className="w-6 h-6" /><span>{c.nome}</span></td>
                    <td className="p-3 text-center font-bold text-white">{c.p}</td>
                    <td className="p-3 text-center text-gray-300">{c.j}</td><td className="p-3 text-center text-gray-300">{c.v}</td>
                    <td className="p-3 text-center text-gray-300">{c.e}</td><td className="p-3 text-center text-gray-300">{c.d}</td>
                    <td className="p-3 text-center text-gray-300">{c.gp}</td><td className="p-3 text-center text-gray-300">{c.gc}</td>
                    <td className="p-3 text-center text-gray-300">{c.sg}</td>
                    <td className="p-3"><UltimosJogos resultados={c.ultimos} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Coluna da Direita: Jogos por Rodada (CORRIGIDO) */}
      <div className="lg:w-1/3 flex-shrink-0">
         <h2 className="text-3xl font-bold mb-6 text-white">Jogos</h2>
         <div className="space-y-6">
            {Object.keys(jogosPorRodada).map(rodada => (
              <div key={rodada}>
                <div className='text-center text-gray-300 font-bold mb-4 text-xl uppercase'>{rodada.replace('RODADA ', 'ª RODADA')}</div>
                <div className="space-y-4">
                  {jogosPorRodada[rodada].map(partida => (
                    // Agora estamos passando a 'partida' completa, COM placar, para o card.
                    <PartidaCard key={partida.id} partida={partida} />
                  ))}
                </div>
              </div>
            ))}
         </div>
      </div>

    </div>
  );
}