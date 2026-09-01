import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function TestimonialBanner() {
  return (
    <section className="w-full bg-[#ef233c] text-black py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Code2 className="w-4 h-4" />
          <span>Full-Stack Engineering Philosophy</span>
        </div>

        <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold font-manrope leading-snug sm:leading-tight mb-6 text-black">
          "Building scalable, high-performance web applications with seamless real-time WebSocket communication and clean frontend state management."
        </blockquote>

        <div className="text-sm sm:text-base font-extrabold font-manrope text-black">
          {profileData.name} &bull; <span className="font-semibold text-black/80">{profileData.role}</span>
        </div>
        <div className="text-xs font-mono text-black/70 mt-1">
          {profileData.location}
        </div>

      </div>

      {/* Subtle Background Watermark */}
      <div
        className="absolute -bottom-8 -right-8 text-[16vw] font-black font-manrope opacity-10 text-black pointer-events-none select-none leading-none"
        aria-hidden="true"
      >
        MERN
      </div>
    </section>
  );
}
