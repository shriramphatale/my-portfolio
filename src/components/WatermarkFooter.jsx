import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function WatermarkFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-10 pb-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 relative z-10">
        
        {/* Brand & Description */}
        <div className="md:col-span-2 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#ef233c] rounded-[2px] rotate-45 shadow-[0_0_8px_rgba(239,35,60,0.6)]" />
            <span className="text-base sm:text-lg font-bold font-manrope text-white">
              {profileData.name}
            </span>
          </div>
          <p className="text-zinc-400 text-xs font-light max-w-xs leading-relaxed">
            {profileData.role} based in {profileData.location}.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="text-xs font-mono font-bold text-[#ef233c] uppercase tracking-widest mb-2.5">
            Index
          </h4>
          <ul className="space-y-1.5 text-zinc-400 text-xs font-mono">
            <li><a href="#skills" className="hover:text-white transition-colors">§ 01 — Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">§ 02 — Work</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">§ 03 — Experience</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">§ 04 — Contact</a></li>
          </ul>
        </div>

        {/* Connect & Socials */}
        <div>
          <h4 className="text-xs font-mono font-bold text-[#ef233c] uppercase tracking-widest mb-2.5">
            Connect
          </h4>
          <ul className="space-y-1.5 text-zinc-400 text-xs font-mono">
            <li>
              <a href="https://github.com/shriramphatale" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/shriram-phatale/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Giant Watermark Typography */}
      <div className="flex justify-center items-center py-2 opacity-10 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[12vw] leading-none font-extrabold font-manrope tracking-tighter text-stroke-watermark whitespace-nowrap">
          {profileData.name.toUpperCase()}
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] font-mono gap-3">
        <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="hover:text-white transition-colors flex items-center gap-1 p-1"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3 text-[#ef233c]" />
        </button>
      </div>
    </footer>
  );
}
