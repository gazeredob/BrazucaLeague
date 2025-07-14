import { timesData } from '../data';

const TimeRow = ({ time }) => (
  <div className="flex items-center justify-start space-x-4">
    <span className="font-bold text-2xl w-16 text-left">{time ? time.acronym : 'N/A'}</span>
    {time && <img src={time.logo} alt={time.nome} className="w-10 h-10 object-contain" />}
  </div>
);

export const PartidaCard = ({ partida }) => {
  // Verificação de segurança: Se 'partida' não for um objeto válido, não faz nada.
  if (!partida) {
    return null; 
  }

  const timeCasa = timesData.find(t => t.id === partida.timeCasaId);
  const timeFora = timesData.find(t => t.id === partida.timeForaId);

  // A LÓGICA CORRETA E MAIS SEGURA
  // Usamos typeof para garantir que são números, evitando problemas com "0" sendo falso.
  const partidaFinalizada = typeof partida.placarCasa === 'number' && typeof partida.placarFora === 'number';

  return (
    <div className="bg-brand-dark/50 p-4 rounded-lg text-white">
      <div className="text-center text-sm text-gray-400 font-semibold border-b border-gray-700 pb-2 mb-4">
        {partida.data} - {partida.hora} BRA
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <TimeRow time={timeCasa} />
          <TimeRow time={timeFora} />
        </div>
        
        {/* RENDERIZAÇÃO CONDICIONAL FINAL */}
        <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center space-y-2 w-20 h-24">
          {partidaFinalizada ? (
            <>
              <span className="text-2xl font-bold">{partida.placarCasa}</span>
              <span className="text-2xl font-bold">{partida.placarFora}</span>
            </>
          ) : (
            <span className="text-xl font-bold">VS</span>
          )}
        </div>
      </div>
    </div>
  );
};