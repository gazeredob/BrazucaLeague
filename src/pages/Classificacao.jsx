// src/pages/Classificacao.jsx
import { classificacaoData, timesData } from '../data';

// Componente para renderizar os pontinhos de V/E/D
const UltimosJogos = ({ resultados }) => (
  <div className="flex space-x-1">
    {resultados.map((res, index) => (
      <div key={index} className={`w-3 h-3 rounded-full 
        ${res === 'V' ? 'bg-green-500' : ''}
        ${res === 'E' ? 'bg-gray-500' : ''}
        ${res === 'D' ? 'bg-red-500' : ''}`}
      ></div>
    ))}
  </div>
);

export default function Classificacao() {
  // Combinar dados da classificação com dados dos times para pegar nome e logo
  const tabelaCompleta = classificacaoData.map(item => {
    const timeInfo = timesData.find(t => t.id === item.timeId);
    return { ...item, ...timeInfo };
  });

  return (
    <div className="bg-brand-gray p-4 md:p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Tabela de Classificação</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead className="border-b-2 border-gray-700">
            <tr className="text-gray-400 uppercase text-xs">
              <th className="p-3"></th>
              <th className="p-3">Time</th>
              <th className="p-3 text-center">P</th>
              <th className="p-3 text-center">J</th>
              <th className="p-3 text-center">V</th>
              <th className="p-3 text-center">E</th>
              <th className="p-3 text-center">D</th>
              <th className="p-3 text-center">GP</th>
              <th className="p-3 text-center">GC</th>
              <th className="p-3 text-center">SG</th>
              <th className="p-3">Últ. Jogos</th>
            </tr>
          </thead>
          <tbody>
            {tabelaCompleta.map((c) => (
              <tr key={c.pos} className="border-b border-gray-700 last:border-b-0">
                <td className="p-3 font-bold">{c.pos}</td>
                <td className="p-3 flex items-center space-x-3">
                  <img src={c.logo} alt={c.nome} className="w-6 h-6" />
                  <span className="font-semibold">{c.nome}</span>
                </td>
                <td className="p-3 text-center font-bold text-white">{c.p}</td>
                <td className="p-3 text-center text-gray-300">{c.j}</td>
                <td className="p-3 text-center text-gray-300">{c.v}</td>
                <td className="p-3 text-center text-gray-300">{c.e}</td>
                <td className="p-3 text-center text-gray-300">{c.d}</td>
                <td className="p-3 text-center text-gray-300">{c.gp}</td>
                <td className="p-3 text-center text-gray-300">{c.gc}</td>
                <td className="p-3 text-center text-gray-300">{c.sg}</td>
                <td className="p-3"><UltimosJogos resultados={c.ultimos} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
