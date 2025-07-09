// src/pages/Classificacao.jsx

const classificacao = [
  { pos: 1, time: "Fúria Gaúcha", pts: 25, pj: 9, sg: 24 },
  { pos: 2, time: "G3X FC", pts: 21, pj: 9, sg: 24 },
  { pos: 3, time: "Nyvelados FC", pts: 18, pj: 9, sg: 3 },
  { pos: 4, time: "Desimpedidos Goti", pts: 16, pj: 9, sg: 0 },
  { pos: 5, time: "Capim FC", pts: 12, pj: 9, sg: -3 },
];

export default function Classificacao() {
  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Tabela de Classificação</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-gray-700">
            <tr className="text-gray-400 uppercase text-sm">
              <th className="p-3">Pos</th>
              <th className="p-3">Time</th>
              <th className="p-3 text-center">PJ</th>
              <th className="p-3 text-center">SG</th>
              <th className="p-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((c) => (
              <tr key={c.pos} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50">
                <td className="p-4 font-bold text-lg">{c.pos}</td>
                <td className="p-4 flex items-center space-x-4">
                  {}
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex-shrink-0"></div>
                  <span className="font-semibold">{c.time}</span>
                </td>
                <td className="p-4 text-center">{c.pj}</td>
                <td className="p-4 text-center">{c.sg}</td>
                <td className="p-4 text-center font-bold text-brand-green">{c.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
