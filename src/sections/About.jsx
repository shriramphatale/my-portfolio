import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ef233c] font-mono text-sm font-bold">§ 01</span>
            <span className="text-zinc-500 font-mono text-sm">—</span>
            <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
              About
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [BACKGROUND]
          </span>
        </div>

        {/* Minimal Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="space-y-4 max-w-3xl"
        >
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-manrope font-normal leading-relaxed">
            I am a Full-Stack developer based in {profileData.location}, with an academic background in Artificial Intelligence & Data Science.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            I focus on building reliable full-stack web applications, real-time WebSocket systems, and clean user interfaces with modular backend architecture.
          </p>

          {/* Clean Minimal Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-zinc-800/80">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 block uppercase tracking-wider mb-1">
                Core Focus
              </span>
              <span className="text-xs sm:text-sm font-medium font-manrope text-zinc-200">
                Full-Stack & Real-Time
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 block uppercase tracking-wider mb-1">
                Education
              </span>
              <span className="text-xs sm:text-sm font-medium font-manrope text-zinc-200">
                B.Tech in AI & DS
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 block uppercase tracking-wider mb-1">
                Location
              </span>
              <span className="text-xs sm:text-sm font-medium font-manrope text-zinc-200">
                Pune, Maharashtra, IN
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
