import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext';
import Logo from './Logo';

export default function Navbar() {
  const { setIsBookingModalOpen } = useAcademy();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 min-h-[96px] py-3 flex items-center bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="w-[92%] max-w-[1240px] mx-auto flex items-center justify-between">
        
        {/* Brand Logo (Exact official iM-PACT logo) */}
        <a href="#home" className="flex items-center py-1 group">
          <Logo size="medium" />
        </a>

        {/* Center Pill Navigation Container */}
        <nav className="hidden md:flex items-center bg-slate-100/90 border border-slate-200 p-1.5 rounded-full shadow-inner text-xs font-bold text-[#102f56]">
          <a
            href="#home"
            className="px-5 py-2 rounded-full bg-[#102f56] text-white shadow-xs transition-colors"
          >
            Home
          </a>
          <a
            href="#programs"
            className="px-5 py-2 rounded-full hover:text-[#0d9488] transition-colors"
          >
            Offerings
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full hover:text-[#0d9488] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button (Partner With Us ->) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102f56] text-white text-xs font-extrabold shadow-md hover:bg-[#0d9488] hover:-translate-y-0.5 transition-all duration-300"
          >
            Partner With Us <span className="text-sm">→</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl p-2 text-[#102f56] hover:text-[#0d9488]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Nav Links Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[96px] left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 text-sm font-semibold shadow-2xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0d9488] font-bold flex items-center justify-between"
          >
            <span>Home</span>
            <span>→</span>
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#102f56] hover:text-[#0d9488]"
          >
            6 Flagship Offerings
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#102f56] hover:text-[#0d9488]"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full py-3.5 rounded-full bg-[#102f56] text-white font-extrabold text-xs text-center shadow-md flex items-center justify-center gap-2"
            >
              Partner With Us <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
