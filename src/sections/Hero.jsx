import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 sm:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          {/* Identity & Status Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-[2px] bg-[#ef233c] shadow-[0_0_8px_#ef233c]" />
              <span className="text-white font-bold tracking-tight text-sm sm:text-base uppercase">
                {profileData.name}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide">
                {profileData.role}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
              <span>{profileData.location.toUpperCase()}</span>
              <span className="text-zinc-700">·</span>
              <span className="text-[#ef233c] font-semibold uppercase tracking-wider">
                {profileData.badge}
              </span>
            </div>
          </div>

          {/* Authentic Minimal Narrative */}
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-2xl font-normal pt-1">
            I build full-stack web products that balance clean interfaces, reliable systems, and a smooth experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
