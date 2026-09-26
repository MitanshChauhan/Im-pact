import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="py-[110px] bg-[#f2f8fc]" id="impact">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        
        {/* Section Top */}
        <div className="flex justify-between items-end mb-11">
          <div>
            <div className="eyebrow">SCHOOL STORIES</div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05] tracking-[-2px] text-[#102f56] font-bold">
              Real Impact. <span className="text-[#f6ae24]">Lasting Change.</span>
            </h2>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-[12px] font-bold text-[#164c88] hover:underline">
            View More Stories →
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* Featured Testimonial */}
          <article className="lg:col-span-6 bg-white rounded-[16px] overflow-hidden border border-[#e0e9f0] grid grid-cols-1 sm:grid-cols-2 shadow-sm">
            <div className="h-[240px] sm:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80"
                alt="Student presenting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex flex-col justify-between">
              <div>
                <div className="font-serif text-[45px] leading-[0.7] text-[#1670c7] font-bold">“</div>
                <p className="text-[13px] text-[#667b91] my-4 leading-relaxed">
                  The program has brought a remarkable change in our students. They are more confident, articulate and eager to participate in assemblies and inter-school debates.
                </p>
              </div>
              <div>
                <strong className="block text-[12px] font-display text-[#102f56]">Principal</strong>
                <span className="block text-[10px] text-[#8997a6]">Partner School</span>
              </div>
            </div>
          </article>

          {/* Testimonial 2 */}
          <article className="lg:col-span-3 bg-white rounded-[16px] border border-[#e0e9f0] p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="font-serif text-[45px] leading-[0.7] text-[#1670c7] font-bold">“</div>
              <p className="text-[13px] text-[#667b91] my-4 leading-relaxed">
                Our students now express their ideas with clarity and confidence. The sessions were well-structured and genuinely impactful.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-[38px] h-[38px] rounded-full bg-[#ffbd32] grid place-items-center font-extrabold text-[#102f56]">
                R
              </div>
              <div>
                <strong className="block text-[12px] font-display text-[#102f56]">School Principal</strong>
                <span className="block text-[10px] text-[#8997a6]">Partner School</span>
              </div>
            </div>
          </article>

          {/* Testimonial 3 (Dark Card) */}
          <article className="lg:col-span-3 bg-[#123f72] text-white rounded-[16px] p-7 flex flex-col justify-between shadow-lg">
            <div className="h-[130px] rounded-[12px] overflow-hidden mb-4 border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
                alt="Student speaking"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-serif text-[40px] leading-[0.7] text-[#ffbd32] font-bold">“</div>
              <p className="text-[12px] text-[#c8d8e9] my-3 leading-relaxed">
                I used to be shy. Now I can speak in front of a crowd and even lead the school assembly!
              </p>
              <strong className="block text-[12px] font-display text-white">Grade 8 Student</strong>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
