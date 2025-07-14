import { timesData } from '../data';

// Componente para uma linha de time (Acrônimo + Logo)
const TimeRow = ({ time }) => (
  <div className="flex items-center justify-start space-x-4">
    <span className="font-bold text-2xl w-16 text-left">{time.acronym}</span>
    <img src={time.logo} alt={time.nome} className="w-10 h-10 object-contain" />
  </div>
);

// Card de Partida com o novo design
export const PartidaCard = ({ partida }) => {
  const timeCasa = timesData.find(t => t.id === partida.timeCasaId);
  const timeFora = timesData.find(t => t.id === partida.timeForaId);
  const partidaFinalizada = partida.placarCasa !== null;

  return (
    // Container principal do card
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      {/* Informações da partida */}
      <div className="text-center text-sm text-gray-400 font-semibold border-b border-gray-700 pb-2 mb-4">
        {partida.data} - {partida.hora} BRA
      </div>

      {/* Container principal (Times + Placar) */}
      <div className="flex items-center justify-between">
        
        {/* Coluna dos Times */}
        <div className="space-y-4">
          <TimeRow time={timeCasa} />
          <TimeRow time={timeFora} />
        </div>

        {/* Coluna do Placar (condicional) */}
        {partidaFinalizada ? (
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <span className="text-2xl font-bold">{partida.placarCasa}</span>
            <span className="text-2xl font-bold">{partida.placarFora}</span>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center w-20 h-24">
             <span className="text-xl font-bold">VS</span>
          </div>
        )}
      </div>
    </div>
  );
};