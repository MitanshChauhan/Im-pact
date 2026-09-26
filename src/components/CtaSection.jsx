import React from 'react';
import { useAcademy } from '../context/AcademyContext';

export default function CtaSection() {
  const { setIsBookingModalOpen } = useAcademy();

  return (
    <section className="py-16 bg-[#175475] text-white relative overflow-hidden" id="contact">
      
      <div className="w-[92%] max-w-[1240px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        
        <div className="space-y-3 max-w-2xl">
          <div className="text-[11px] font-extrabold tracking-widest text-[#f1a823] uppercase">
            IM-PACT — THE CENTER OF COMMUNICATION
          </div>
          
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white leading-tight">
            Where Every Voice Matters & <br />
            <span className="text-[#f1a823]">Every Word Creates an Impact.</span>
          </h2>

          <p className="text-slate-200 text-xs md:text-sm max-w-lg">
            Ready to empower your students with confidence, public speaking, and debate? Schedule a consultation today.
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f1a823] text-[#102f56] text-xs font-extrabold shadow-button-simple hover:bg-[#e29c1b] transition-all duration-300"
          >
            Schedule a Consultation →
          </button>
        </div>

      </div>
    </section>
  );
}
