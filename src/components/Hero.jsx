import React, { useState, useEffect } from 'react';
import { useAcademy } from '../context/AcademyContext';

export default function Hero() {
  const { setIsBookingModalOpen } = useAcademy();

  const badgeSlides = [
    "Public Speaking & Communication for Schools",
    "Interactive School Labs & Teacher Workshops",
    "Empowering 25,000+ Students Across India",
    "College Placement & Career Readiness Modules",
    "Empathetic & Articulate Young Leaders"
  ];

  const heroImageSlides = [
    {
      src: "/images/hero_student.jpg",
      title: "IM-PACT Public Speaking Lab",
      subtitle: "Every Word Creates an Impact.",
      icon: "🎙️"
    },
    {
      src: "/images/child_speaker.jpg",
      title: "Student Oratory & Debates",
      subtitle: "Building Lifelong Confidence & Expression.",
      icon: "🌱"
    },
    {
      src: "/images/school_building.jpg",
      title: "Pan-India Institutional Setup",
      subtitle: "Partnering with 120+ Top Schools Across India.",
      icon: "🏫"
    }
  ];

  const [activeBadge, setActiveBadge] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  // Auto-play badge slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % badgeSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [badgeSlides.length]);

  // Auto-play image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImageSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImageSlides.length]);

  const handlePrevBadge = (e) => {
    e.stopPropagation();
    setActiveBadge((prev) => (prev === 0 ? badgeSlides.length - 1 : prev - 1));
  };

  const handleNextBadge = (e) => {
    e.stopPropagation();
    setActiveBadge((prev) => (prev + 1) % badgeSlides.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev === 0 ? heroImageSlides.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % heroImageSlides.length);
  };

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] py-14 lg:py-20 border-b border-slate-100 overflow-hidden" id="home">
      <div className="w-[92%] max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* Left Column: Hero Text & Interactive Blue Badge Slider */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Functional Blue Highlighted Badge Slider */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f0f7fb] border border-[#d0e4f0] text-[11px] font-extrabold uppercase tracking-wider text-[#175475] shadow-xs hover:border-[#175475] transition-all group max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#0d9488] animate-pulse shrink-0"></span>
            
            {/* Slide Content */}
            <span className="truncate min-w-0 transition-all duration-300">
              {badgeSlides[activeBadge]}
            </span>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1 pl-2 border-l border-[#d0e4f0] shrink-0">
              <button
                onClick={handlePrevBadge}
                aria-label="Previous highlight"
                className="w-5 h-5 rounded-full bg-white hover:bg-[#175475] hover:text-white text-[#175475] grid place-items-center text-[10px] font-bold shadow-2xs transition-colors"
              >
                ‹
              </button>
              <button
                onClick={handleNextBadge}
                aria-label="Next highlight"
                className="w-5 h-5 rounded-full bg-white hover:bg-[#175475] hover:text-white text-[#175475] grid place-items-center text-[10px] font-bold shadow-2xs transition-colors"
              >
                ›
              </button>
            </div>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-[1.06] tracking-tight text-[#102f56] font-extrabold">
            Confident Communicators <br />
            <span className="text-[#0d9488]">Brighter Tomorrow</span>
          </h1>

          <p className="max-w-[580px] text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            From Classrooms to Careers – We Build Skills for Life. We empower young minds with confidence, public speaking, debate, and articulate expression.
          </p>

          {/* 3 Micro-Feature Badges */}
          <div className="flex flex-wrap gap-4 pt-1">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#102f56] shadow-xs">
              <span className="text-emerald-600 text-base">🌱</span>
              <span>Communicate <span className="font-normal text-slate-500">with Clarity</span></span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#102f56] shadow-xs">
              <span className="text-teal-600 text-base">👥</span>
              <span>Grow <span className="font-normal text-slate-500">with Confidence</span></span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-[#102f56] shadow-xs">
              <span className="text-amber-500 text-base">⭐</span>
              <span>Succeed <span className="font-normal text-slate-500">to Make an Impact</span></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#102f56] text-white text-xs font-extrabold hover:bg-[#0d9488] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Partner With Us <span className="text-sm">→</span>
            </button>

            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#102f56] text-[#102f56] text-xs font-extrabold hover:bg-[#102f56] hover:text-white transition-all duration-300"
            >
              Explore 6 Offerings
            </a>
          </div>

          {/* Color accent bar */}
          <div className="pt-2 flex items-center gap-2">
            <div className="h-1.5 w-10 rounded-full bg-[#102f56]"></div>
            <div className="h-1.5 w-10 rounded-full bg-[#0d9488]"></div>
            <div className="h-1.5 w-10 rounded-full bg-[#f1a823]"></div>
            <div className="h-1.5 w-10 rounded-full bg-[#9333ea]"></div>
            <div className="h-1.5 w-10 rounded-full bg-[#e11d48]"></div>
            <span className="ml-2 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
              The Center of Communication
            </span>
          </div>

        </div>

        {/* Right Column: Visual Hero Card Slider */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">

          {/* Clean Accent Badge */}
          <div className="absolute -top-6 -right-2 md:right-2 z-20 font-display text-xs md:text-sm font-extrabold text-[#102f56] uppercase tracking-wider bg-amber-100/90 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-sm border border-amber-200 pointer-events-none select-none">
            Speak • Express • Lead • Succeed
          </div>

          {/* Main Hero Card Slider */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
            
            <img
              src={heroImageSlides[activeImage].src}
              alt={heroImageSlides[activeImage].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#102f56]/85 via-[#102f56]/20 to-transparent" />

            {/* Slider Arrow Navigation Controls on Card */}
            <button
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs text-[#102f56] font-extrabold text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all shadow-md z-30"
            >
              ‹
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs text-[#102f56] font-extrabold text-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all shadow-md z-30"
            >
              ›
            </button>

            {/* Dot Indicators floating overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/20 z-20">
              {heroImageSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${activeImage === idx ? 'w-5 bg-[#0d9488]' : 'w-1.5 bg-white/60'}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
