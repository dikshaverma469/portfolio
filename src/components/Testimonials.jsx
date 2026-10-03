import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight, Award, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 border-b border-[#ded6c8] bg-[#f5f1e8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pb-12 border-b border-[#ded6c8]">
          
          {/* Left: "WHAT PEERS" / "SAY" (serif) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#6c645c] mb-1">
              ENDORSEMENTS & COLLABORATION
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#161514] tracking-tight leading-none">
              WHAT PEERS <br />
              <span className="text-[#c1603e] italic font-normal">SAY</span>
            </h2>
          </div>

          {/* Middle: Short Description */}
          <div className="lg:col-span-4 text-sm sm:text-base text-[#3a342f] leading-relaxed">
            Feedback from engineering mentors, research advisors, and hackathon teammates on execution velocity, code clarity, and teamwork.
          </div>

          {/* Right: "MORE REVIEWS →" Link */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <a
              href="https://www.linkedin.com/in/diksha-verma-b890ab294"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#161514] hover:text-[#c1603e] transition-colors"
            >
              MORE RECOMMENDATIONS
              <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* 3-Column Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between p-7 bg-[#faf8f5] border border-[#ded6c8] shadow-xs relative group hover:border-[#c1603e] transition-colors duration-300"
            >
              {/* Top Tag & Quote Icon */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#ded6c8]">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#c1603e] bg-[#fbeee8] px-2 py-0.5 border border-[#c1603e]/20">
                    {item.tag}
                  </span>
                  <div className="flex text-[#c1603e]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-current text-[#c1603e]" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="pt-5 text-[#c1603e]/40 group-hover:text-[#c1603e] transition-colors">
                  <Quote size={24} className="fill-current" />
                </div>

                {/* 2-3 Line Quote */}
                <p className="text-sm sm:text-base text-[#161514] font-normal leading-relaxed italic mt-3">
                  "{item.quote}"
                </p>

                {/* Highlight Tag */}
                <div className="mt-4 pt-3 border-t border-[#e8e0d2] text-[11px] font-mono text-[#6c645c]">
                  Key strength: <span className="text-[#161514] font-medium">{item.highlight}</span>
                </div>
              </div>

              {/* Author Info at Bottom: Avatar + Name + Role */}
              <div className="mt-8 pt-4 border-t border-[#ded6c8] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#161514]/20 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <div className="text-xs font-bold tracking-wide text-[#161514] uppercase">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#6c645c]">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-[#c1603e] font-medium font-mono">
                    {item.organization}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
