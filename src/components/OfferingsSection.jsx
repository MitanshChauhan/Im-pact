import React, { useState } from 'react';
import { flagshipOfferings } from '../data/offeringData';
import ProgramDetailModal from './ProgramDetailModal';
import { useAcademy } from '../context/AcademyContext';

export default function OfferingsSection() {
  const [activeModalProgram, setActiveModalProgram] = useState(null);
  const { setIsBookingModalOpen, setSelectedProgram } = useAcademy();

  const handleOpenProgram = (program) => {
    setActiveModalProgram(program);
  };

  const handleBookDemo = (program) => {
    if (setSelectedProgram) {
      setSelectedProgram(program);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100" id="programs">
      <div className="w-[92%] max-w-[1240px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="eyebrow">
            OUR 6 FLAGSHIP OFFERINGS
          </div>
          
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.1] text-[#102f56] font-extrabold">
            Empowering Classrooms, Students <br className="hidden md:block" />
            <span className="text-[#0d9488]">& Educators Across India</span>
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Clean, modular communication programs designed to scale from school labs to college campus placement readiness. Click any card to view details.
          </p>
        </div>

        {/* 6 Offerings Grid (Exact match to reference image layout, uncluttered & spacious) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {flagshipOfferings.map((offering) => {
            const { id, title, subtitle, theme, image } = offering;

            return (
              <div
                key={id}
                onClick={() => handleOpenProgram(offering)}
                className={`group relative ${theme.bg} border ${theme.border} ${theme.hoverBorder} rounded-3xl p-6 md:p-7 flex flex-col justify-between cursor-pointer offering-card overflow-hidden shadow-sm`}
              >
                {/* Number Badge & Title Section */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    {/* Circle Number Badge */}
                    <span className={`w-10 h-10 rounded-full ${theme.badgeBg} ${theme.badgeText} font-display font-extrabold text-base grid place-items-center shadow-md group-hover:scale-110 transition-transform`}>
                      {id}
                    </span>

                    <span className={`text-[11px] font-bold uppercase tracking-wider ${theme.textColor} bg-white/70 px-3 py-1 rounded-full border border-white/80`}>
                      IM-PACT
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 group-hover:text-[#102f56] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Visual / Image Section */}
                <div className="my-6 relative z-10">
                  <div className="w-full h-40 md:h-44 rounded-2xl overflow-hidden shadow-md bg-white border border-white/80 group-hover:shadow-lg transition-shadow">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 relative z-10">
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    Explore Details
                  </span>
                  
                  <button
                    aria-label={`View details for ${title}`}
                    className={`w-9 h-9 rounded-full bg-white text-slate-700 ${theme.hoverBorder} group-hover:${theme.badgeBg} group-hover:text-white grid place-items-center font-bold text-base shadow-sm transition-all duration-300 group-hover:translate-x-1`}
                  >
                    →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Detail Popup Modal */}
      {activeModalProgram && (
        <ProgramDetailModal
          program={activeModalProgram}
          onClose={() => setActiveModalProgram(null)}
          onBookDemo={handleBookDemo}
        />
      )}
    </section>
  );
}
