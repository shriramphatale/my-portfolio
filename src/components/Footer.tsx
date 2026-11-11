import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#242426]">
      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] py-8 px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Name & Year */}
          <div className="text-xs text-[#71717a] font-mono flex items-center gap-2">
            <span className="text-[#a1a1aa] font-medium">{personal.name}</span>
            <span>·</span>
            <span>© 2026</span>
            <span className="hidden sm:inline">· Pune, India</span>
          </div>

          {/* Center: Tech note */}
          <div className="text-[11px] text-[#52525b] font-mono text-center">
            Built with React, TypeScript & Tailwind CSS
          </div>

          {/* Right: Scroll to top button (matching reference image 1) */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#27272a] bg-[#141416] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors text-xs font-mono"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
