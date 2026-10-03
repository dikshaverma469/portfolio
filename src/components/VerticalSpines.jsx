import React from 'react';

export default function VerticalSpines() {
  return (
    <>
      {/* Left Edge Magazine Spine (Desktop Only) */}
      <aside 
        aria-hidden="true" 
        className="hidden 2xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-none select-none"
      >
        <div className="w-[1px] h-16 bg-[#ded6c8]" />
        <span className="text-[10px] font-semibold tracking-[0.35em] text-[#8e857c] uppercase [writing-mode:vertical-rl] rotate-180">
          MERN FULL-STACK
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#c1603e]" />
        <span className="text-[10px] font-semibold tracking-[0.35em] text-[#8e857c] uppercase [writing-mode:vertical-rl] rotate-180">
          AI & ML RESEARCH
        </span>
        <div className="w-[1px] h-16 bg-[#ded6c8]" />
      </aside>

      {/* Right Edge Magazine Spine (Desktop Only) */}
      <aside 
        aria-hidden="true" 
        className="hidden 2xl:flex fixed right-3 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-none select-none"
      >
        <div className="w-[1px] h-16 bg-[#ded6c8]" />
        <span className="text-[10px] font-semibold tracking-[0.35em] text-[#8e857c] uppercase [writing-mode:vertical-rl]">
          IGDTUW DELHI '27
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#c1603e]" />
        <span className="text-[10px] font-semibold tracking-[0.35em] text-[#8e857c] uppercase [writing-mode:vertical-rl]">
          GSSoC & OSCG
        </span>
        <div className="w-[1px] h-16 bg-[#ded6c8]" />
      </aside>
    </>
  );
}
