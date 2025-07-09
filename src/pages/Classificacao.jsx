const classificacao = [
  { time: "Fúria Gaúcha", pontos: 9 },
  { time: "Estrelas do Sul", pontos: 6 },
  { time: "Leões do Vale", pontos: 3 },
];

export default function Classificacao() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Classificação</h2>
      <ul className="space-y-2">
        {classificacao.map((c, idx) => (
          <li key={idx} className="p-3 bg-blue-600 rounded shadow-md">{c.time} - {c.pontos} pts</li>
        ))}
      </ul>
    </div>
  );
}
