import React from 'react';
import { useAcademy } from '../context/AcademyContext';

export default function ProgramsSection() {
  const { programs, setIsBookingModalOpen } = useAcademy();

  return (
    <section className="py-24 bg-[#f8fafc] border-t border-slate-100" id="programs">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Program Intro */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
          <div className="eyebrow">OUR CURRICULUM & PROGRAMS</div>
          
          <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.2rem)] leading-[1.08] text-[#102f56] font-extrabold">
            Comprehensive & <br />
            <span className="text-[#175475]">Engaging Programs</span>
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed max-w-[350px]">
            Age-appropriate, activity-based programs aligned with school goals — public speaking, debate, career readiness, business communication, and student leadership.
          </p>

          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#175475] text-white text-xs font-extrabold hover:bg-[#0e3a52] transition-colors"
          >
            Explore All Programs →
          </button>
        </div>

        {/* Right Program Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {programs.map((program) => (
            <div
              key={program._id || program.title}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#175475] hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              onClick={() => setIsBookingModalOpen(true)}
            >
              <div>
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {program.icon || '🎙'}
                </div>
                <h3 className="font-display font-bold text-sm text-[#102f56] group-hover:text-[#175475] transition-colors leading-snug">
                  {program.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {program.duration && (
                <span className="text-[10px] font-bold text-[#175475] bg-[#f0f7fb] border border-[#d0e4f0] px-2.5 py-1 rounded-md self-start mt-4">
                  {program.duration}
                </span>
              )}
            </div>
          ))}

          {/* Custom Program Highlight Card */}
          <div className="bg-[#175475] text-white rounded-2xl p-6 sm:col-span-2 md:col-span-1 flex flex-col justify-between shadow-md">
            <div>
              <div className="text-[#f1a823] text-2xl font-bold mb-1">☆</div>
              <h3 className="font-display font-bold text-base my-2 leading-tight text-white">
                Customized <br /> School Programs
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                Tailored specifically to your school's curriculum, grade levels, and institutional goals.
              </p>
            </div>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="mt-4 text-xs font-bold text-[#f1a823] hover:underline flex items-center gap-1 self-start"
            >
              Customize Program <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
