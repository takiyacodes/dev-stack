import type { Tech } from "../types";

interface TechCardProps {
  tech: Tech;
  onAddToStack: (tech: Tech) => void;
  isSelected: boolean;
}

const TechCard = ({ tech, onAddToStack, isSelected }: TechCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-full hover:border-pink-500/50 transition-all duration-300 shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <span className="bg-pink-500/10 text-pink-500 text-xs px-2.5 sm:px-3 py-1 rounded-full border border-pink-500/20 font-medium">
            {tech.badge}
          </span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-black">{tech.name}</h3>
          <span className="text-yellow-500 text-sm font-semibold flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md font-medium">
            {tech.category}
          </span>
          <span className="text-slate-600 text-xs">• {tech.difficulty}</span>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-6">
          {tech.description}
        </p>
      </div>

      <button
        onClick={() => onAddToStack(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
          isSelected
            ? 'bg-slate-200 text-slate-500 cursor-not-allowed border border-slate-300'
            : 'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90 shadow-md shadow-pink-500/20'
        }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;