import React from 'react';

export default function ProgramDetailModal({ program, onClose, onBookDemo }) {
  if (!program) return null;

  const { id, title, subtitle, category, theme, image, description, highlights } = program;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Program Theme Color */}
        <div className={`p-6 md:p-8 ${theme.bg} border-b ${theme.border} relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 text-slate-600 hover:text-slate-900 hover:bg-white grid place-items-center font-bold text-lg transition-colors shadow-sm"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="flex items-center gap-3 mb-3">
            <span className={`w-8 h-8 rounded-full ${theme.badgeBg} text-white font-extrabold text-sm grid place-items-center shadow-sm`}>
              {id}
            </span>
            <span className={`text-xs font-extrabold uppercase tracking-wider ${theme.textColor}`}>
              {category}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm mt-1 font-medium">
            {subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {image && (
            <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          )}

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
              Overview & Objectives
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              Key Program Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className={`text-sm ${theme.textColor} font-bold`}>✓</span>
                  <span className="text-xs font-semibold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBookDemo(program);
            }}
            className={`px-7 py-3 rounded-full ${theme.badgeBg} text-white font-extrabold text-xs shadow-md hover:opacity-90 transition-opacity flex items-center gap-2`}
          >
            Book Demo / Consultation <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
