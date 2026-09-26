import React from 'react';

export default function TrustStats() {
  return (
    <section className="relative z-20 -mt-[20px] mb-12">
      <div className="w-[92%] max-w-[1180px] mx-auto bg-[#f2f8fc] border border-[#e1edf5] rounded-[20px] min-h-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center p-5 md:px-[30px] gap-6">
        
        <div className="space-y-0.5">
          <span className="block text-[11px] font-extrabold tracking-wider text-[#164c88] uppercase">
            TRUSTED BY SCHOOLS
          </span>
          <strong className="block text-[17px] font-display text-[#102f56]">
            Across India
          </strong>
        </div>

        <div className="lg:border-l border-[#d8e3ec] lg:pl-[30px]">
          <strong className="font-display text-[24px] block text-[#102f56]">50+</strong>
          <span className="text-[11px] text-[#77889c] font-medium">Schools Partnered</span>
        </div>

        <div className="lg:border-l border-[#d8e3ec] lg:pl-[30px]">
          <strong className="font-display text-[24px] block text-[#102f56]">10K+</strong>
          <span className="text-[11px] text-[#77889c] font-medium">Students Trained</span>
        </div>

        <div className="lg:border-l border-[#d8e3ec] lg:pl-[30px]">
          <strong className="font-display text-[24px] block text-[#102f56]">500+</strong>
          <span className="text-[11px] text-[#77889c] font-medium">Workshops Conducted</span>
        </div>

      </div>
    </section>
  );
}
