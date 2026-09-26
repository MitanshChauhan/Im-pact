import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0a2e38] text-white pt-16 pb-12 border-t border-teal-900" id="contact">
      <div className="w-[92%] max-w-[1240px] mx-auto space-y-12">
        
        {/* Top Banner Text */}
        <div className="text-center pb-8 border-b border-teal-800/60">
          <p className="font-display text-2xl md:text-4xl font-extrabold text-amber-300 tracking-tight select-none">
            Empowering Voices. Shaping Futures.
          </p>
        </div>

        {/* Footer Navigation & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-3 md:p-4 rounded-2xl inline-block shadow-md">
              <Logo size="large" />
            </div>

            <p className="text-teal-100/80 text-xs md:text-sm max-w-md leading-relaxed">
              IM-PACT is dedicated to cultivating articulate, empathetic, and confident communicators from classrooms to careers through specialized curriculums, school lab setups, and teacher empowerment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-amber-300 font-semibold">
              <span>📍 Ambegaon Pune-411046</span>
              <span>•</span>
              <span>📧 impactcommcenter@gmail.com</span>
              <span>•</span>
              <span>📞 9225159637 / 9225168519</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300">
              6 Flagship Offerings
            </h4>
            <ul className="space-y-2 text-xs text-teal-100/80">
              <li><a href="#programs" className="hover:text-white transition-colors">01. New School Setup</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">02. Existing School Enhancement</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">03. Public Speaking Curriculum</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">04. Career Readiness for College</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">05. Career Counseling</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">06. Teacher Training Program</a></li>
            </ul>
          </div>

          {/* Mission Pillars */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300">
              Core Pillars
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/80 text-teal-100 font-medium">
                👥 Stronger Schools
              </div>
              <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/80 text-teal-100 font-medium">
                🎓 Confident Students
              </div>
              <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/80 text-teal-100 font-medium">
                📊 Better Opportunities
              </div>
              <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/80 text-teal-100 font-medium">
                ❤️ Brighter Tomorrow
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Subtitle */}
        <div className="pt-8 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/60">
          <p>© {new Date().getFullYear()} IM-PACT — THE CENTER OF COMMUNICATION. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-white">Terms of Partnership</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
