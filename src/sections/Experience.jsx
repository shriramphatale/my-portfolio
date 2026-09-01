import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData, certificationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ef233c] font-mono text-sm font-bold">§ 03</span>
            <span className="text-zinc-500 font-mono text-sm">—</span>
            <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
              Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [JOURNEY]
          </span>
        </div>

        <div className="space-y-8 sm:space-y-10">
          
          {/* Work Experience / Internships */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[#ef233c] uppercase tracking-widest font-bold">
              // Work Experience & Virtual Internships
            </h3>

            <div className="divide-y divide-zinc-800/80">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="py-4 sm:py-5 first:pt-0 last:pb-0 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-manrope text-white">
                        {item.role}
                      </h4>
                      <div className="text-xs text-zinc-400 font-mono">
                        {item.organization} · {item.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#ef233c] font-bold">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c] shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] sm:text-xs font-mono text-zinc-500 pt-0.5">
                    {item.tags.join(' · ')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
