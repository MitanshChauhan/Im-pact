import React from 'react';

export default function SkillsSection() {
  const pillars = [
    {
      letter: 'iM',
      color: '#175475',
      title: 'Confidence & Voice',
      desc: 'Overcome hesitation and express thoughts clearly and authentically.',
      icon: '✦',
      topBorder: 'border-t-[#175475]',
      badgeBg: 'bg-[#175475]/10 text-[#175475]'
    },
    {
      letter: 'P',
      color: '#f1a823',
      title: 'Public Speaking',
      desc: 'Master stage presence, vocal modulation, and podium delivery.',
      icon: '🎙',
      topBorder: 'border-t-[#f1a823]',
      badgeBg: 'bg-[#f1a823]/15 text-[#b87c0e]'
    },
    {
      letter: 'A',
      color: '#884e9d',
      title: 'Critical Thinking',
      desc: 'Develop structured logic, active debate techniques, and quick reasoning.',
      icon: '◉',
      topBorder: 'border-t-[#884e9d]',
      badgeBg: 'bg-[#884e9d]/10 text-[#884e9d]'
    },
    {
      letter: 'C',
      color: '#48a053',
      title: 'Leadership Presence',
      desc: 'Lead team discussions, collaborate with empathy, and inspire peers.',
      icon: '♟',
      topBorder: 'border-t-[#48a053]',
      badgeBg: 'bg-[#48a053]/10 text-[#48a053]'
    },
    {
      letter: 'T',
      color: '#dc3c39',
      title: 'Storytelling & Impact',
      desc: 'Craft powerful narratives that engage audiences and create lasting influence.',
      icon: '📖',
      topBorder: 'border-t-[#dc3c39]',
      badgeBg: 'bg-[#dc3c39]/10 text-[#dc3c39]'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="w-[92%] max-w-[1240px] mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-[650px] mx-auto text-center mb-14 space-y-3">
          <div className="eyebrow mx-auto">
            THE IM-PACT FRAMEWORK
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-tight text-[#102f56] font-extrabold">
            5 Pillars of <span className="text-[#175475]">Communication</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Essential life skills for students — built around our official IM-PACT framework.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl simple-card border-t-4 ${pillar.topBorder} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`w-10 h-10 rounded-xl grid place-items-center font-black text-base ${pillar.badgeBg}`}>
                    {pillar.letter}
                  </span>
                  <span className="text-xl text-slate-400">{pillar.icon}</span>
                </div>

                <h3 className="font-display font-bold text-base text-[#102f56] mb-2">
                  {pillar.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span style={{ color: pillar.color }}>Pillar {index + 1}</span>
                <span className="text-slate-400">IM-PACT</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
