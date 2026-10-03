import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#161514]/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#f9f6f0] border border-[#ded6c8] shadow-2xl z-10 my-8 overflow-hidden rounded-xs"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#ded6c8] bg-[#f5f1e8]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#c1603e] px-2 py-0.5 bg-[#fbeee8] border border-[#c1603e]/30">
                CASE STUDY // {project.number}
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6c645c]">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#161514] hover:text-[#c1603e] hover:bg-[#ded6c8]/40 rounded-xs transition-colors"
              aria-label="Close Case Study"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Title & Tagline */}
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#161514] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#c1603e] tracking-wide mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Visual Block */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#161514] border border-[#ded6c8] group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161514]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-xs font-mono">
                <span>MODEL TELEMETRY & UI</span>
                <span className="bg-[#c1603e] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  PRODUCTION READY
                </span>
              </div>
            </div>

            {/* Performance Stats Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-[#f5f1e8] border border-[#ded6c8]">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-xs font-bold tracking-[0.15em] text-[#6c645c] uppercase">
                    {stat.label}
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#161514] mt-1">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514] flex items-center gap-2">
                <Layers size={14} className="text-[#c1603e]" />
                SYSTEM OVERVIEW & ARCHITECTURE
              </h4>
              <p className="text-sm sm:text-base text-[#3a342f] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514] flex items-center gap-2">
                <Cpu size={14} className="text-[#c1603e]" />
                TECHNICAL HIGHLIGHTS & IMPLEMENTATION
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#3a342f]">
                    <CheckCircle2 size={16} className="text-[#c1603e] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#161514]">
                TECHNOLOGIES UTILIZED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#e8e0d2] text-[#161514] text-xs font-semibold tracking-wider uppercase border border-[#ded6c8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-[#f5f1e8] border-t border-[#ded6c8] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#6c645c]">
              REPO: {project.repoName || `dikshaverma469/${project.id}`}
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#161514] text-[#161514] hover:bg-[#161514] hover:text-[#f5f1e8] text-xs font-bold tracking-[0.15em] uppercase transition-colors"
              >
                <GithubIcon size={14} />
                VIEW REPOSITORY
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#c1603e] text-[#f5f1e8] hover:bg-[#a54b2d] text-xs font-bold tracking-[0.15em] uppercase transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
