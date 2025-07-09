// src/pages/Jogadores.jsx

const jogadores = [
  { nome: "João Silva", time: "Fúria Gaúcha", jogos: 5, gols: 3, assistencias: 2 },
  { nome: "Carlos Souza", time: "Estrelas do Sul", jogos: 5, gols: 5, assistencias: 1 },
  { nome: "Bruno Lima", time: "Leões do Vale", jogos: 5, gols: 1, assistencias: 4 },
];

export default function Jogadores() {
  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Estatísticas dos Jogadores</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-gray-700">
            <tr className="text-gray-400 uppercase text-sm">
              <th className="p-3">Jogador</th>
              <th className="p-3">Time</th>
              <th className="p-3 text-center">Jogos</th>
              <th className="p-3 text-center">Gols</th>
              <th className="p-3 text-center">Assist.</th>
            </tr>
          </thead>
          <tbody>
            {jogadores.map((j, idx) => (
              <tr key={idx} className="border-b border-gray-700 last:border-b-0">
                <td className="p-4 font-semibold">{j.nome}</td>
                <td className="p-4 text-gray-300">{j.time}</td>
                <td className="p-4 text-center">{j.jogos}</td>
                <td className="p-4 text-center">{j.gols}</td>
                <td className="p-4 text-center">{j.assistencias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
