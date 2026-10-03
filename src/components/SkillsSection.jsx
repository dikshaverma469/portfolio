import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Database, Cpu, Layers, Zap, Sparkles, CheckCircle, Terminal } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export default function SkillsSection() {
  const iconMap = {
    'data-driven': <Database size={16} className="text-[#f5f1e8]" />,
    'clean-code': <Terminal size={16} className="text-[#f5f1e8]" />,
    'end-to-end': <Layers size={16} className="text-[#f5f1e8]" />,
    'performance': <Zap size={16} className="text-[#f5f1e8]" />,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#ded6c8] bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

          {/* LEFT COLUMN (4 cols): SKILLS & EXPERTISE + Animated Progress Bars */}
          <div className="lg:col-span-4 space-y-8">
            {/* Header */}
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#6c645c] block mb-1">
                COMPETENCY MATRIX
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#161514] tracking-tight">
                SKILLS & <br />
                <span className="text-[#c1603e] italic">EXPERTISE</span>
              </h2>
              <div className="w-12 h-1 bg-[#c1603e] mt-3"></div>
            </div>

            {/* Horizontal Skill Bars */}
            <div className="space-y-5 pt-2">
              {skillsData.bars.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-baseline text-xs font-bold tracking-wider">
                    <span className="text-[#161514] uppercase">{skill.name}</span>
                    <span className="font-mono text-[#c1603e]">{skill.percentage}%</span>
                  </div>

                  {/* Bar Track */}
                  <div className="w-full h-2 bg-[#ded6c8] rounded-none overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-[#c1603e] relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#161514]" />
                    </motion.div>
                  </div>
                  
                  {/* Subtle Sub-label */}
                  <p className="text-[10px] text-[#8e857c] font-medium">
                    {skill.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN (4 cols): Decorative Quote Mark + Pull-Quote */}
          <div className="lg:col-span-4 h-full flex flex-col justify-between p-8 sm:p-10 bg-[#f5f1e8] border border-[#ded6c8] relative shadow-xs">
            
            {/* Top Corner Mark */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-[#8e857c] uppercase tracking-widest">
              EDITORIAL MANIFESTO
            </div>

            {/* Large Decorative Quote Icon */}
            <div className="pt-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fbeee8] border border-[#c1603e]/30 text-[#c1603e]">
                <Quote size={28} className="fill-current text-[#c1603e]" />
              </span>
            </div>

            {/* Italicized Pull-Quote */}
            <div className="my-8">
              <blockquote className="font-serif text-2xl sm:text-3xl text-[#161514] italic font-normal leading-snug">
                "{skillsData.pullQuote.quote}"
              </blockquote>
            </div>

            {/* Author Credit */}
            <div className="pt-6 border-t border-[#ded6c8] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold tracking-[0.2em] text-[#161514] uppercase">
                  {skillsData.pullQuote.author}
                </div>
                <div className="text-[11px] text-[#c1603e] font-medium tracking-wider uppercase mt-0.5">
                  {skillsData.pullQuote.role}
                </div>
              </div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#8e857c] uppercase">
                IGDTUW '27
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (4 cols): 4 Architectural Tenet Rows */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#6c645c] block mb-1">
                ENGINEERING PILLARS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#161514] tracking-tight">
                HOW I BUILD SYSTEMS
              </h3>
            </div>

            {/* 4 Rows */}
            <div className="space-y-4">
              {skillsData.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-4 bg-[#f9f6f0] border border-[#ded6c8] hover:border-[#c1603e] transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Small Circular Terracotta Icon */}
                    <div className="w-8 h-8 rounded-full bg-[#c1603e] flex items-center justify-center shrink-0 mt-0.5 shadow-xs group-hover:scale-110 transition-transform">
                      {iconMap[pillar.id] || <Sparkles size={16} className="text-[#f5f1e8]" />}
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold tracking-[0.15em] text-[#161514] uppercase group-hover:text-[#c1603e] transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-[9px] font-mono text-[#8e857c] uppercase">
                          {pillar.metric}
                        </span>
                      </div>
                      <p className="text-xs text-[#3a342f] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Technology Badges Strip */}
        <div className="mt-16 pt-8 border-t border-[#ded6c8]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#161514] uppercase">
              TOOLS & ECOSYSTEMS:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {skillsData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold tracking-wider text-[#3a342f] bg-[#f5f1e8] border border-[#ded6c8] px-3 py-1 hover:border-[#c1603e] hover:text-[#c1603e] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
