import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: "Understand your school's goals and needs.",
      icon: '⌕',
      bgClass: 'bg-[#edf6ff]'
    },
    {
      num: '02',
      title: 'Train',
      desc: 'Our expert facilitators deliver engaging sessions.',
      icon: '⚙',
      bgClass: 'bg-[#fff1cf]'
    },
    {
      num: '03',
      title: 'Practice',
      desc: 'Students apply their skills through activities.',
      icon: '♧',
      bgClass: 'bg-[#f0e9ff]'
    },
    {
      num: '04',
      title: 'Measure',
      desc: 'Track progress and share detailed reports.',
      icon: '▥',
      bgClass: 'bg-[#e0f6eb]'
    }
  ];

  return (
    <section className="py-[110px]" id="schools">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Process Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="eyebrow">HOW IT WORKS</div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] tracking-[-2px] text-[#102f56] font-bold">
              A Simple Process, <br />
              <span className="text-[#f6ae24]">Lasting Impact.</span>
            </h2>
          </div>
          <p className="max-w-[350px] text-[#71839a] text-sm leading-relaxed">
            We partner with schools to deliver structured, engaging and measurable public speaking & career programs.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group relative">
              <div className="text-[#2d78c6] font-extrabold text-[12px] mb-3">
                {step.num}
              </div>
              <div className={`w-[65px] h-[65px] mx-auto rounded-full grid place-items-center text-[25px] ${step.bgClass} group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="font-display font-bold text-[14px] text-[#102f56] mt-4 mb-1">
                {step.title}
              </h3>
              <p className="text-[11px] text-[#8391a2] max-w-[140px] mx-auto leading-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
