import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function SkillsBento() {
  return (
    <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ef233c] font-mono text-sm font-bold">§ 01</span>
            <span className="text-zinc-500 font-mono text-sm">—</span>
            <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
              Skills
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [TOOLSET]
          </span>
        </div>

        {/* Minimal Editorial Rows - No Cards */}
        <div className="divide-y divide-zinc-800/80">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="py-4 sm:py-5 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-1.5 sm:gap-6 items-baseline"
            >
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#ef233c] font-bold mr-2">
                  0{index + 1}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-manrope text-white inline-block">
                  {group.category}
                </h3>
              </div>

              <div className="md:col-span-8">
                <p className="text-xs sm:text-sm font-mono text-zinc-400 font-normal leading-relaxed">
                  {group.skills.join(' · ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
