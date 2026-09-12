
import type { Tech } from '../types';

interface YourStackProps {
  selectedStack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ selectedStack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm">
      <div className="mb-6 pb-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-slate-900 text-sm mt-1">
          {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {selectedStack.length === 0 ? (
        <div className="py-12 text-center text-slate-900">
          <p className="text-sm">No technologies selected yet.</p>
          <p className="text-xs mt-1 text-slate-900">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="text-white font-medium text-sm">{tech.name}</h4>
                    <span className="text-slate-900 text-xs">{tech.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-slate-900 hover:text-red-400 p-1 text-lg transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl font-semibold text-sm transition-all"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;