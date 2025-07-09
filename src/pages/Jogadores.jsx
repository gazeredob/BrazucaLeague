const jogadores = [
  { nome: "João Silva", jogos: 5, gols: 3, assistencias: 2 },
  { nome: "Carlos Souza", jogos: 5, gols: 5, assistencias: 1 },
  { nome: "Bruno Lima", jogos: 5, gols: 1, assistencias: 4 },
];

export default function Jogadores() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Conheça os Jogadores</h2>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th>Nome</th><th>Jogos</th><th>Gols</th><th>Assistências</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map((j, idx) => (
            <tr key={idx} className="bg-blue-700 p-2 rounded">
              <td>{j.nome}</td><td>{j.jogos}</td><td>{j.gols}</td><td>{j.assistencias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
