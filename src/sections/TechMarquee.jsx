import React from 'react';
import { techMarqueeLogos } from '../data/portfolioData';

export default function TechMarquee() {
  return (
    <section className="w-full border-y border-white/10 bg-white/[0.015] backdrop-blur-md py-6 sm:py-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-center">
        <p className="text-[11px] sm:text-xs font-bold tracking-widest text-zinc-500 uppercase font-mono">
          Core Production Ecosystem
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {techMarqueeLogos.concat(techMarqueeLogos).map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 font-manrope font-semibold text-xs sm:text-sm text-zinc-300 hover:text-white hover:border-[#ef233c]/40 transition-colors shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#ef233c]" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
