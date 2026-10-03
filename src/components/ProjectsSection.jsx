import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'MACHINE LEARNING', 'FULL-STACK'];

  const filteredProjects = filter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => {
        if (filter === 'MACHINE LEARNING') return p.category.includes('ML') || p.category.includes('Machine Learning') || p.category.includes('NLP');
        if (filter === 'FULL-STACK') return p.category.includes('Full-Stack') || p.category.includes('FastAPI') || p.category.includes('Flask');
        return true;
      });

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#ded6c8] bg-[#f5f1e8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end pb-12 border-b border-[#ded6c8]">
          
          {/* Left: "SELECTED" (small) / "PROJECTS" (large serif terracotta) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#6c645c] mb-1">
              SELECTED
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#c1603e] tracking-tight leading-none">
              PROJECTS
            </h2>
          </div>

          {/* Middle: Short Description */}
          <div className="lg:col-span-4 text-sm sm:text-base text-[#3a342f] leading-relaxed">
            A curated showcase of production-ready machine learning engines, predictive systems, and high-performance full-stack applications.
          </div>

          {/* Right: "VIEW ALL PROJECTS →" Link & Filters */}
          <div className="lg:col-span-3 flex flex-col sm:items-end justify-between gap-3">
            <a
              href="https://github.com/dikshaverma469?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#161514] hover:text-[#c1603e] transition-colors"
            >
              VIEW ALL PROJECTS
              <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Subtle Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#e8e0d2] border border-[#ded6c8] text-[10px] font-bold tracking-wider">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-2 py-1 uppercase transition-colors ${
                    filter === cat
                      ? 'bg-[#161514] text-[#f5f1e8]'
                      : 'text-[#6c645c] hover:text-[#161514]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Column Grid of Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Dark Image / Thumbnail Block with Bold White Project Name Overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#161514] border border-[#ded6c8] shadow-xs">
                
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Editorial Vignette & Dark Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161514] via-[#161514]/40 to-transparent transition-opacity duration-300" />

                {/* Framing Marks on Card Top */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-[#f5f1e8]/70">
                  <span className="bg-[#161514]/80 px-1.5 py-0.5 border border-[#ded6c8]/20">
                    NO. {project.number}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c1603e] font-bold">
                    CLICK TO EXPAND ↗
                  </span>
                </div>

                {/* Bold White Title Overlaid Over Thumbnail */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#c1603e] uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-2xl font-black text-[#f5f1e8] leading-tight group-hover:text-[#fbeee8] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Quick-Inspect Bar */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#161514]/60 backdrop-blur-xs transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 bg-[#f5f1e8] text-[#161514] text-xs font-bold tracking-[0.2em] uppercase shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    READ CASE STUDY
                  </span>
                </div>

              </div>

              {/* Below Thumbnail: Number in terracotta + Project Title + One-Line Category */}
              <div className="pt-4 flex flex-col space-y-1">
                <div className="flex items-baseline gap-2">
                  {/* Terracotta Number */}
                  <span className="font-mono text-sm font-bold text-[#c1603e]">
                    {project.number}
                  </span>
                  <div className="w-4 h-[1px] bg-[#ded6c8]"></div>
                  {/* Title */}
                  <h4 className="font-serif text-lg font-bold text-[#161514] group-hover:text-[#c1603e] transition-colors">
                    {project.title}
                  </h4>
                </div>

                {/* One-line Category & Brief Note */}
                <p className="text-xs font-medium tracking-wide text-[#6c645c] pl-7">
                  {project.category} — {project.stats[0].label}: <span className="text-[#161514] font-semibold">{project.stats[0].value}</span>
                </p>

                {/* Tech Pills Preview */}
                <div className="flex flex-wrap gap-1.5 pt-2 pl-7">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase bg-[#e8e0d2] text-[#3a342f] px-1.5 py-0.5 border border-[#ded6c8]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-[#8e857c] self-center">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Editorial Project Strip Callout */}
        <div className="mt-14 p-6 bg-[#f9f6f0] border border-[#ded6c8] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#c1603e] animate-ping" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#161514]">
              LOOKING FOR CUSTOM ML PIPELINES OR FULL-STACK APPLICATIONS?
            </span>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#c1603e] hover:underline inline-flex items-center gap-1"
          >
            DISCUSS AN ARCHITECTURE PROPOSAL →
          </a>
        </div>

      </div>
    </section>
  );
}
