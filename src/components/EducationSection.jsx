import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Trophy, ExternalLink, CheckCircle2 } from 'lucide-react';
import { educationData, achievementsData, certificationsData } from '../data/educationData';
import { CodeChefIcon, CodolioIcon } from './Icons';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 border-b border-[#ded6c8] bg-[#f9f6f0] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pb-12 border-b border-[#ded6c8]">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#6c645c] mb-1">
              ACADEMIC & COMMUNITY IMPACT
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#161514] tracking-tight leading-none">
              EDUCATION & <br />
              <span className="text-[#c1603e] italic font-normal">LEADERSHIP</span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-sm sm:text-base text-[#3a342f] leading-relaxed">
            Formal engineering education at IGDTUW Delhi, combined with competitive programming discipline, open source contributions, and volunteer STEM mentorship.
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="p-3 bg-[#f5f1e8] border border-[#ded6c8] text-xs font-mono text-[#161514] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c1603e]"></span>
              <span>B.TECH ECE 2023–2027</span>
            </div>
          </div>
        </div>

        {/* Two-Column Spread: Left Education / Right Achievements & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">

          {/* Left Column (6 cols): Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#ded6c8]">
              <GraduationCap size={18} className="text-[#c1603e]" />
              <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514]">
                ACADEMIC CREDENTIALS
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#f5f1e8] border border-[#ded6c8] relative group hover:border-[#c1603e] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[#ded6c8]">
                    <span className="text-xs font-mono font-bold text-[#c1603e] uppercase">
                      {item.duration}
                    </span>
                    <span className="text-xs font-mono font-bold bg-[#e8e0d2] px-2 py-0.5 text-[#161514] self-start sm:self-auto">
                      {item.score}
                    </span>
                  </div>

                  <div className="pt-3">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#161514]">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-semibold text-[#c1603e] tracking-wide mt-0.5">
                      {item.degree} • <span className="text-[#6c645c] font-normal">{item.location}</span>
                    </p>
                    <p className="text-xs text-[#3a342f] leading-relaxed mt-2">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6 cols): Leadership, Achievements & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Leadership & Competitive Achievements */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-[#ded6c8]">
                <Trophy size={18} className="text-[#c1603e]" />
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514]">
                  ACHIEVEMENTS & VOLUNTEERING
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievementsData.map((ach, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#f5f1e8] border border-[#ded6c8] flex flex-col justify-between group hover:border-[#c1603e] transition-colors"
                  >
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#c1603e] uppercase bg-[#fbeee8] px-1.5 py-0.5 border border-[#c1603e]/20 block w-fit mb-2">
                        {ach.badge}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#161514] leading-snug">
                        {ach.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#6c645c] mt-0.5">
                        {ach.platform}
                      </p>
                      <p className="text-xs text-[#3a342f] mt-2 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 pb-3 border-b border-[#ded6c8]">
                <Award size={18} className="text-[#c1603e]" />
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514]">
                  CERTIFICATIONS & CONTINUOUS LEARNING
                </h3>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#f5f1e8] border border-[#ded6c8] flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-[#c1603e] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#161514]">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] font-mono text-[#c1603e]">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-[#6c645c] mt-1">
                        {cert.skills}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
