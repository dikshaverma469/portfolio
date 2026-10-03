import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal, FileText, Check, Copy, GraduationCap, Award, MapPin } from 'lucide-react';

export default function Hero({ onCopyEmail, copied }) {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pb-20 overflow-hidden border-b border-[#ded6c8] bg-[#f5f1e8]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Hero Top Masthead Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-[#ded6c8]">
          {/* Top-Left Stacked Labels */}
          <div className="flex items-start gap-3.5">
            <div className="w-1.5 h-9 bg-[#c1603e] hidden sm:block"></div>
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-[#161514] uppercase">
                SOFTWARE ENGINEER & AI RESEARCHER
              </div>
              <div className="text-[11px] font-medium tracking-[0.2em] text-[#6c645c] uppercase flex items-center gap-2 mt-0.5">
                <span>IGDTUW DELHI '27</span>
                <span>•</span>
                <span>MERN STACK</span>
                <span>•</span>
                <span>AI DEMAND FORECASTING</span>
              </div>
            </div>
          </div>

          {/* Top-Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#c1603e] hover:text-[#a54b2d] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c1603e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c1603e]"></span>
              </span>
              AVAILABLE FOR HIRE
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Crisp, Full-Width Magazine Title: PORTFOLIO */}
        <div className="py-4 my-6 border-y-2 border-[#161514] select-none text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-black tracking-normal sm:tracking-tight text-[#161514] text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] leading-none uppercase"
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* Hero Editorial Main Body (Without Photo, Clean & Elegant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 max-w-4xl space-y-6"
        >
          {/* Small Greeting & Issue Label */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#6c645c] bg-[#e8e0d2] px-3 py-1 border border-[#ded6c8]">
              HELLO, I'M
            </span>
            <div className="h-[1px] w-8 bg-[#ded6c8]"></div>
            <span className="text-[10px] font-mono tracking-widest text-[#8e857c] uppercase">
              VOL. 2026 // ISSUE 01
            </span>
          </div>

          {/* Diksha Verma Display Name */}
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#161514] tracking-tight leading-[0.95]">
              DIKSHA <br />
              <span className="italic font-normal text-[#161514]/90">VERMA</span>
            </h2>
          </div>

          {/* Tagline in Terracotta */}
          <div className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-[#c1603e] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c1603e]"></span>
            <span>FULL-STACK DEVELOPER & AI RESEARCHER</span>
          </div>

          {/* Bio Line */}
          <p className="text-base sm:text-lg text-[#3a342f] font-normal leading-relaxed max-w-2xl">
            B.Tech in Electronics and Communication Engineering at <strong className="font-bold text-[#161514]">IGDTUW Delhi</strong>. I design and build production-ready MERN web applications, conduct ML research in demand forecasting under faculty guidance, and solve algorithmic challenges.
          </p>

          {/* Clean Editorial Author & Stack Metadata (Normal Typography, No Script Signature) */}
          <div className="pt-2 pb-2 flex flex-wrap items-center gap-6 text-xs text-[#6c645c]">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-[#161514] uppercase bg-[#e8e0d2] px-3 py-1.5 border border-[#ded6c8]">
              <MapPin size={13} className="text-[#c1603e]" />
              <span>NEW DELHI, INDIA • IGDTUW '27</span>
            </div>
            <div className="h-6 w-[1px] bg-[#ded6c8] hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#161514] uppercase tracking-wider">CORE STACK:</span>
              <span className="font-medium text-[#3a342f]">React.js • Node.js • FastAPI • XGBoost • C++</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#161514] text-[#f5f1e8] hover:bg-[#c1603e] transition-all duration-200 text-xs font-bold tracking-[0.2em] uppercase shadow-sm group"
            >
              VIEW WORK & RESEARCH
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#161514] text-[#161514] hover:bg-[#161514] hover:text-[#f5f1e8] transition-all duration-200 text-xs font-bold tracking-[0.2em] uppercase"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[#c1603e]" />
                  <span>EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Hero Bottom Editorial Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-[#ded6c8] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="border-l-2 border-[#c1603e] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#161514]">7.943</div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#6c645c] uppercase mt-0.5">IGDTUW B.Tech ECE CGPA</div>
          </div>
          <div className="border-l-2 border-[#ded6c8] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#161514]">350+</div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#6c645c] uppercase mt-0.5">DSA Problems Solved</div>
          </div>
          <div className="border-l-2 border-[#ded6c8] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#161514]">2-Star ★</div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#6c645c] uppercase mt-0.5">CodeChef Rating</div>
          </div>
          <div className="border-l-2 border-[#ded6c8] pl-4">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#c1603e]">2026/27</div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#6c645c] uppercase mt-0.5">SDE / ML Roles Ready</div>
          </div>
        </div>

      </div>
    </section>
  );
}
