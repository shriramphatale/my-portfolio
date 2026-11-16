import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { AsciiSkylineBanner } from './AsciiSkylineBanner';

export const VideoBanner: React.FC = () => {
  const { videoBanner } = portfolioConfig;

  return (
    <div
      className="relative mx-auto w-full max-w-[900px]
             h-[180px] sm:h-[240px] md:h-[320px] lg:h-auto
             border-x border-[#242426] overflow-hidden !bg-[#06070f] select-none"
      style={{
        height: `clamp(180px, 35vw, ${videoBanner.heightDesktop}px)`,
      }}
    >
      {/* Hand-built Harbour Neon Skyline Scene */}
      <AsciiSkylineBanner />

      {/* Technical corner badge: Live System Indicator */}
      {/* <div className="absolute top-4 right-6 flex items-center gap-2 pointer-events-none z-10">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="font-mono text-[11px] text-zinc-300 tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          Live System
        </span>
      </div> */}
    </div>
  );
};

export default VideoBanner;
