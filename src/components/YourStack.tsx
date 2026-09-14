import type { Tech } from '../types';

interface YourStackProps {
  selectedStack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ selectedStack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 lg:sticky lg:top-24 shadow-sm w-full">
      <div className="mb-4 sm:mb-6 pb-4 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {selectedStack.length === 0 ? (
        <div className="py-8 sm:py-12 text-center text-slate-500">
          <p className="text-sm font-medium">No technologies selected yet.</p>
          <p className="text-xs mt-1 text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="text-slate-900 font-semibold text-sm">{tech.name}</h4>
                    <span className="text-slate-500 text-xs">{tech.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-slate-400 hover:text-red-500 p-1 text-base sm:text-lg transition-colors"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl font-semibold text-xs sm:text-sm transition-all"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
