import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Menu, X, Clock } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'COVER', href: '#hero' },
    { name: 'PROJECTS & RESEARCH', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-[#f5f1e8]/95 backdrop-blur-md shadow-xs border-b border-[#ded6c8]' 
        : 'bg-[#f5f1e8] border-b border-[#ded6c8]'
    }`}>
      {/* Top Editorial Ticker Bar */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-12 py-1.5 border-b border-[#e6dfd3] text-[11px] font-medium tracking-[0.2em] text-[#6c645c]">
        <div className="flex items-center gap-4">
          <span className="text-[#c1603e] font-semibold flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c1603e] animate-pulse"></span>
            EDITION 2026 / VOL. 01
          </span>
          <span>•</span>
          <span>IGDTUW ECE • AI RESEARCH & FULL-STACK DEVELOPMENT</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[#161514]">
            <Clock size={12} className="text-[#c1603e]" />
            <span>NEW DELHI: {time || '05:05 PM IST'}</span>
          </div>
          <span>•</span>
          <span className="text-[#c1603e] font-semibold">STATUS: AVAILABLE FOR 2026/2027 ROLES</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a href="#hero" className="group flex items-baseline gap-2.5 shrink-0">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#161514] group-hover:text-[#c1603e] transition-colors">
            DIKSHA VERMA
          </span>
          <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#c1603e] uppercase hidden sm:inline-block">
            / FOLIO
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-xs font-semibold tracking-[0.18em] text-[#161514]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#c1603e] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#c1603e] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase bg-[#c1603e] text-[#f5f1e8] hover:bg-[#a54b2d] transition-all duration-200 shadow-xs active:translate-y-0.5"
          >
            LET'S CONNECT
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#161514] hover:text-[#c1603e] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f9f6f0] border-b border-[#ded6c8] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="text-[10px] font-semibold tracking-[0.2em] text-[#c1603e] pb-2 border-b border-[#ded6c8]">
            DIKSHA VERMA // EDITORIAL DIRECTORY
          </div>
          <div className="flex flex-col space-y-3 text-sm font-semibold tracking-[0.15em] text-[#161514]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#c1603e] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-[#c1603e]" />
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#ded6c8]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#c1603e] text-[#f5f1e8] text-xs font-semibold tracking-[0.2em] uppercase"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
