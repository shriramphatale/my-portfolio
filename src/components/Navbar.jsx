import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-3 sm:pt-6 px-2 sm:px-4 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-4 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 transition-all duration-300 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'bg-zinc-950/70 backdrop-blur-lg border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand / Name */}
        <a
          href="#hero"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-white transition-colors pl-1 pr-1 group shrink-0"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-[2px] bg-[#ef233c] shadow-[0_0_8px_#ef233c] group-hover:scale-110 transition-transform" />
          <span className="tracking-tight text-white font-bold">shriram</span>
        </a>

        {/* Navigation Pill Links */}
        <div className="flex items-center gap-0.5 sm:gap-1.5 pl-1.5 sm:pl-2 border-l border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs transition-colors duration-200 shrink-0 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
