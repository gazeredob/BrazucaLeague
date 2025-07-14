import { timesData } from '../data';

// Componente para o Card de cada partida
export const PartidaCard = ({ partida }) => {
  const timeCasa = timesData.find(t => t.id === partida.timeCasaId);
  const timeFora = timesData.find(t => t.id === partida.timeForaId);

  return (
    <div className="bg-brand-gray p-4 rounded-lg">
      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
        <span>{partida.local}</span>
        <span>{partida.data} • {partida.hora}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 w-2/5">
          <span className="font-semibold text-white truncate">{timeCasa.nome}</span>
          <img src={timeCasa.logo} alt={timeCasa.nome} className="w-8 h-8"/>
        </div>
        <span className="text-gray-500 font-bold">X</span>
        <div className="flex items-center space-x-3 justify-end w-2/5">
          <img src={timeFora.logo} alt={timeFora.nome} className="w-8 h-8"/>
          <span className="font-semibold text-white truncate">{timeFora.nome}</span>
        </div>
      </div>
       <div className="mt-4 bg-brand-green/20 text-brand-green text-center font-semibold text-sm py-2 rounded-md cursor-pointer hover:bg-brand-green/30">
        FIQUE POR DENTRO
      </div>
    </div>
  );
};