import { timesData, partidasData } from '../data'; // Importamos AMBOS os dados aqui

// O componente TimeRow permanece o mesmo
const TimeRow = ({ time }) => (
  <div className="flex items-center justify-start space-x-4">
    <span className="font-bold text-2xl w-16 text-left">{time ? time.acronym : 'N/A'}</span>
    {time && <img src={time.logo} alt={time.nome} className="w-10 h-10 object-contain" />}
  </div>
);

export const PartidaCard = ({ partida }) => {
  // Se por algum motivo o card for chamado sem uma partida ou sem um ID, ele não quebra a página.
  if (!partida || !partida.id) {
    return null;
  }

  // ====================================================================================
  // ===== A MUDANÇA FUNDAMENTAL ESTÁ AQUI =====
  // 1. IGNORAMOS os dados que vieram no objeto 'partida' (exceto o ID).
  // 2. Usamos o ID para buscar os dados COMPLETOS e CORRETOS na fonte original 'partidasData'.
  const partidaCompleta = partidasData.find(p => p.id === partida.id);
  // ====================================================================================

  // Se o ID for inválido e não encontrarmos a partida, também não quebramos a página.
  if (!partidaCompleta) {
    console.error(`Partida com ID ${partida.id} não foi encontrada no arquivo de dados.`);
    return null;
  }

  // A partir daqui, usamos SEMPRE o nosso objeto 'partidaCompleta', que sabemos ser confiável.
  const timeCasa = timesData.find(t => t.id === partidaCompleta.timeCasaId);
  const timeFora = timesData.find(t => t.id === partidaCompleta.timeForaId);

  // A lógica para verificar se o jogo terminou agora usa a nossa fonte segura de dados.
  const partidaFinalizada = typeof partidaCompleta.placarCasa === 'number' && typeof partidaCompleta.placarFora === 'number';

  return (
    <div className="bg-brand-dark/50 p-4 rounded-lg text-white">
      {/* Usamos 'partidaCompleta' para data e hora */}
      <div className="text-center text-sm text-gray-400 font-semibold border-b border-gray-700 pb-2 mb-4">
        {partidaCompleta.data} - {partidaCompleta.hora} BRA
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <TimeRow time={timeCasa} />
          <TimeRow time={timeFora} />
        </div>
        
        <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center space-y-2 w-20 h-24">
          {partidaFinalizada ? (
            <>
              {/* Usamos 'partidaCompleta' para os placares */}
              <span className="text-2xl font-bold">{partidaCompleta.placarCasa}</span>
              <span className="text-2xl font-bold">{partidaCompleta.placarFora}</span>
            </>
          ) : (
            <span className="text-xl font-bold">VS</span>
          )}
        </div>
      </div>
    </div>
  );
};