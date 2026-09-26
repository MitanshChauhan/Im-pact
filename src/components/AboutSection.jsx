import React from 'react';
import { useAcademy } from '../context/AcademyContext';

export default function AboutSection() {
  const { setIsBookingModalOpen } = useAcademy();

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100" id="about">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 order-2 lg:order-1">
          <div className="p-6 rounded-3xl bg-[#f0f9ff] border border-[#bae6fd] space-y-2">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-[#0284c7]">
              120+
            </span>
            <p className="text-xs md:text-sm font-bold text-slate-700">
              Partner Schools Across India
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#fff7ed] border border-[#fed7aa] space-y-2">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-[#d97706]">
              25k+
            </span>
            <p className="text-xs md:text-sm font-bold text-slate-700">
              Students Empowered
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f3e8ff] border border-[#e9d5ff] space-y-2">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-[#7e22ce]">
              1,500+
            </span>
            <p className="text-xs md:text-sm font-bold text-slate-700">
              Certified Educators
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#ecfdf5] border border-[#a7f3d0] space-y-2">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-[#047857]">
              98%
            </span>
            <p className="text-xs md:text-sm font-bold text-slate-700">
              Confidence & Skill Gain
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
          <div className="eyebrow">
            ABOUT IM-PACT
          </div>

          <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.2rem)] leading-[1.1] text-[#102f56] font-extrabold">
            Building Lifelong Confidence & <br />
            <span className="text-[#0d9488]">Communication Excellence</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            At <strong>IM-PACT — The Center of Communication</strong>, we bridge the gap between classroom learning and real-world expression. From setting up public speaking labs in schools to preparing college graduates for high-stakes interviews, our goal is simple: ensure every word creates an impact.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs grid place-items-center">✓</span>
              <span className="text-xs md:text-sm font-semibold text-slate-800">Customized lab & curriculum integration for K-12 schools</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs grid place-items-center">✓</span>
              <span className="text-xs md:text-sm font-semibold text-slate-800">Experienced trainers working alongside existing faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs grid place-items-center">✓</span>
              <span className="text-xs md:text-sm font-semibold text-slate-800">Comprehensive career counseling & college readiness modules</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#102f56] text-white text-xs font-extrabold hover:bg-[#0d9488] transition-colors shadow-md"
            >
              Schedule Institutional Demo <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
