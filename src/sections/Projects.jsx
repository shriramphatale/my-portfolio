import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { selectedWorkData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Minimal Section Header */}
        <div className="mb-6 sm:mb-8 pb-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ef233c] font-mono text-sm font-bold">§ 02</span>
            <span className="text-zinc-500 font-mono text-sm">—</span>
            <h2 className="text-xl sm:text-2xl font-bold font-manrope text-white tracking-tight">
              Projects
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            [{selectedWorkData.length} PROJECTS]
          </span>
        </div>

        {/* Minimal Projects List - No Cards */}
        <div className="divide-y divide-zinc-800/80">
          {selectedWorkData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="py-6 sm:py-8 first:pt-0 last:pb-0 group"
            >
              <div className="space-y-3">
                
                {/* Header: Number, Title & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs sm:text-sm font-mono text-[#ef233c] font-bold shrink-0">
                      {project.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-manrope text-white group-hover:text-[#ef233c] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* GitHub & Live Demo Action Buttons */}
                  <div className="flex items-center gap-2.5 shrink-0 pt-1 sm:pt-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-300 hover:text-white border border-white/10 transition-all uppercase tracking-wider font-semibold"
                    >
                      <Github className="w-3 h-3" />
                      <span>GitHub</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#ef233c]/15 hover:bg-[#ef233c] text-[11px] font-mono text-[#ef233c] hover:text-white border border-[#ef233c]/40 transition-all uppercase tracking-wider font-bold"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="text-[11px] sm:text-xs font-mono text-zinc-400 pt-0.5">
                  <span className="text-[#ef233c] font-semibold">TECH STACK: </span>
                  <span>{project.technologies.join(' • ')}</span>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
