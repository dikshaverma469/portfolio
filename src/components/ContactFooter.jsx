import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check, Copy, ArrowUp, Phone, FileText, Sparkles, QrCode } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodolioIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactFooter({ onCopyEmail, copied }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Full-Stack Software Engineering (MERN)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c1603e', '#161514', '#dfd7c9', '#f5f1e8']
      });

      // Reset after 6 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          topic: 'Full-Stack Software Engineering (MERN)',
          message: ''
        });
      }, 6000);
    }, 800);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-8700153308');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 lg:pt-28 pb-12 bg-[#161514] text-[#f5f1e8] relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-10 right-0 select-none pointer-events-none opacity-5 font-serif font-black text-[22vw] leading-none text-[#f5f1e8]">
        DIKSHA
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Masthead */}
        <div className="pb-12 border-b border-[#332e2a]">
          <div className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#c1603e] mb-2">
            INQUIRIES & RECRUITMENT
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[#f5f1e8]">
            LET'S CREATE <br />
            <span className="text-[#c1603e] italic font-normal">SOMETHING GREAT</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b5aca1] max-w-2xl mt-4 font-normal leading-relaxed">
            Looking for a motivated software engineer who combines robust full-stack (MERN) architecture with research-backed machine learning capabilities? Let's connect.
          </p>
        </div>

        {/* Two-Column Main Contact Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12">
          
          {/* Left Column (7 cols): Interactive Message Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-[#332e2a]">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b5aca1]">
                DIRECT TRANSMISSION DISPATCH
              </span>
              <span className="text-[10px] font-mono text-[#c1603e] uppercase">
                24H RESPONSE TIME
              </span>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#211e1b] border border-[#c1603e]/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#c1603e] text-[#f5f1e8] flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#f5f1e8]">
                  Message Dispatched
                </h3>
                <p className="text-sm text-[#b5aca1] max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-[#f5f1e8] font-semibold">{formState.name || 'Friend'}</span>. I will review your inquiry and follow up at <span className="text-[#c1603e]">{formState.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#b5aca1] block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Tech Lead"
                      className="w-full px-4 py-3 bg-[#211e1b] border border-[#3a342f] text-[#f5f1e8] placeholder-[#6c645c] text-sm focus:outline-none focus:border-[#c1603e] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#b5aca1] block">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="w-full px-4 py-3 bg-[#211e1b] border border-[#3a342f] text-[#f5f1e8] placeholder-[#6c645c] text-sm focus:outline-none focus:border-[#c1603e] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#b5aca1] block">
                    OPPORTUNITY FOCUS
                  </label>
                  <select
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-4 py-3 bg-[#211e1b] border border-[#3a342f] text-[#f5f1e8] text-sm focus:outline-none focus:border-[#c1603e] transition-colors"
                  >
                    <option value="Full-Stack Software Engineering (MERN)">Full-Stack Software Engineering (MERN / React)</option>
                    <option value="AI / ML Engineering Role">AI / Machine Learning Engineering Role</option>
                    <option value="Backend Development (FastAPI / Node.js)">Backend Development (FastAPI / Node.js)</option>
                    <option value="Open Source / Technical Collaboration">Open Source / Technical Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold tracking-wider uppercase text-[#b5aca1] block">
                    MESSAGE / ROLE BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, role openings, or interview scheduling..."
                    className="w-full px-4 py-3 bg-[#211e1b] border border-[#3a342f] text-[#f5f1e8] placeholder-[#6c645c] text-sm focus:outline-none focus:border-[#c1603e] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#c1603e] hover:bg-[#a54b2d] text-[#f5f1e8] text-xs font-bold tracking-[0.25em] uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {loading ? (
                    <span>DISPATCHING MESSAGE...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): QR Code + Contact Info List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#211e1b] p-8 border border-[#332e2a]">
            
            {/* Contact List */}
            <div className="space-y-5">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#c1603e] pb-3 border-b border-[#332e2a]">
                COMMUNICATION CHANNELS
              </div>

              {/* Email */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#8e857c] uppercase">
                  ELECTRONIC MAIL
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:dikshaverma0029@gmail.com"
                    className="text-sm font-semibold text-[#f5f1e8] hover:text-[#c1603e] transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} className="text-[#c1603e]" />
                    <span>dikshaverma0029@gmail.com</span>
                  </a>
                  <button
                    onClick={onCopyEmail}
                    className="p-1.5 bg-[#2c2824] hover:bg-[#c1603e] text-[#f5f1e8] transition-colors rounded-xs text-xs"
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Telephone */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#8e857c] uppercase">
                  TELEPHONE CONTACT
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="tel:+918700153308"
                    className="text-sm font-semibold text-[#f5f1e8] hover:text-[#c1603e] transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} className="text-[#c1603e]" />
                    <span>+91-8700153308</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 bg-[#2c2824] hover:bg-[#c1603e] text-[#f5f1e8] transition-colors rounded-xs text-xs"
                    title="Copy Phone"
                  >
                    {phoneCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* GitHub & LinkedIn & Codolio */}
              <div className="pt-2 space-y-2.5">
                <div className="text-[10px] font-mono tracking-widest text-[#8e857c] uppercase">
                  PROFESSIONAL PROFILES & CODE
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-semibold">
                  <a
                    href="https://www.linkedin.com/in/diksha-verma-b890ab294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#2c2824] text-[#f5f1e8] hover:bg-[#c1603e] transition-colors flex items-center gap-1.5 border border-[#3a342f]"
                  >
                    <LinkedinIcon size={14} className="text-[#c1603e]" />
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href="https://github.com/dikshaverma469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#2c2824] text-[#f5f1e8] hover:bg-[#c1603e] transition-colors flex items-center gap-1.5 border border-[#3a342f]"
                  >
                    <GithubIcon size={14} className="text-[#c1603e]" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href="https://codolio.com/profile/dikshaverma_469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#2c2824] text-[#f5f1e8] hover:bg-[#c1603e] transition-colors flex items-center gap-1.5 border border-[#3a342f]"
                  >
                    <CodolioIcon size={14} className="text-[#c1603e]" />
                    <span>CODOLIO</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-mono tracking-widest text-[#8e857c] uppercase">
                  GEOGRAPHIC BASE
                </div>
                <div className="text-sm font-semibold text-[#f5f1e8] flex items-center gap-2">
                  <MapPin size={16} className="text-[#c1603e]" />
                  <span>Delhi, India — Open to Relocation & Remote</span>
                </div>
              </div>
            </div>

            {/* QR Code Graphic ("SCAN TO VISIT MY WEBSITE") */}
            <div className="pt-6 border-t border-[#332e2a] flex items-center gap-5">
              <div className="p-2.5 bg-[#f5f1e8] border border-[#ded6c8] shrink-0 text-[#161514]">
                <svg className="w-18 h-18" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="10" y="10" width="26" height="26" fill="#161514" />
                  <rect x="14" y="14" width="18" height="18" fill="#f5f1e8" />
                  <rect x="18" y="18" width="10" height="10" fill="#c1603e" />

                  <rect x="64" y="10" width="26" height="26" fill="#161514" />
                  <rect x="68" y="14" width="18" height="18" fill="#f5f1e8" />
                  <rect x="72" y="18" width="10" height="10" fill="#c1603e" />

                  <rect x="10" y="64" width="26" height="26" fill="#161514" />
                  <rect x="14" y="68" width="18" height="18" fill="#f5f1e8" />
                  <rect x="18" y="72" width="10" height="10" fill="#c1603e" />

                  <rect x="42" y="12" width="6" height="14" fill="#161514" />
                  <rect x="52" y="20" width="6" height="16" fill="#161514" />
                  <rect x="42" y="32" width="16" height="6" fill="#c1603e" />
                  <rect x="20" y="42" width="16" height="6" fill="#161514" />
                  <rect x="42" y="44" width="16" height="14" fill="#161514" />
                  <rect x="64" y="44" width="8" height="18" fill="#161514" />
                  <rect x="78" y="52" width="12" height="6" fill="#c1603e" />
                  <rect x="42" y="64" width="10" height="14" fill="#161514" />
                  <rect x="58" y="70" width="14" height="6" fill="#161514" />
                  <rect x="78" y="70" width="12" height="20" fill="#161514" />
                  <rect x="48" y="84" width="24" height="6" fill="#c1603e" />
                </svg>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#c1603e] uppercase block">
                  DIGITAL VCARD ACCESS
                </span>
                <p className="text-xs font-bold text-[#f5f1e8] uppercase tracking-wider">
                  SCAN TO VISIT MY WEBSITE
                </p>
                <p className="text-[11px] text-[#8e857c]">
                  Quick save Diksha Verma's contact & portfolio
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Colophon & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#332e2a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8e857c]">
          <div>
            © 2026 DIKSHA VERMA • IGDTUW DELHI • ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#c1603e]">TYPESET IN PLAYFAIR & INTER</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#f5f1e8] hover:text-[#c1603e] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
