// src/pages/Times.jsx
import { Link } from 'react-router-dom';
import { timesData } from '../data';

const TimeCard = ({ time }) => (
  <Link to={`/times/${time.id}`} className="block bg-brand-gray rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-blue/30">
    <div className="relative h-32 bg-cover bg-center" style={{ backgroundImage: `url(${time.banner})`}}>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <img src={time.logo} alt={time.nome} className="w-20 h-20 object-contain drop-shadow-lg" />
      </div>
    </div>
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold text-white">{time.nome}</h3>
    </div>
  </Link>
);

export default function Times() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-white">Times da Liga</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {timesData.map(time => (
          <TimeCard key={time.id} time={time} />
        ))}
      </div>
    </div>
  );
}
