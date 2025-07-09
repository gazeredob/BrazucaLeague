const times = ["Estrelas do Sul", "Fúria Gaúcha", "Leões do Vale", "Tempestade Azul", "Panteras da Serra"];

export default function Times() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Times Participantes</h2>
      <ul className="space-y-2">
        {times.map((time, idx) => (
          <li key={idx} className="p-3 bg-blue-600 rounded shadow-md">{time}</li>
        ))}
      </ul>
    </div>
  );
}
