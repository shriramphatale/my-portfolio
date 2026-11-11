import React, { useState } from 'react';
import type { ExperienceItemType } from '../config/portfolio';
import { Code2, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  item: ExperienceItemType;
  isLast?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, isLast = false }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(item.defaultExpanded ?? true);

  return (
    <div className={`w-full ${!isLast ? 'border-b border-[#242426]' : ''}`}>
      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8">
        {/* 1. Organization Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            {/* Organization logo / icon */}
            <div className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-zinc-300">
              <Briefcase className="w-3 h-3" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
              {item.company}
            </h3>
          </div>

          {/* Location & Remote status dot */}
          <div className="flex items-center gap-2 text-xs text-[#a1a1aa] font-mono">
            <span>{item.location}</span>
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{
                backgroundColor: item.statusDotColor || '#38bdf8',
                boxShadow: `0 0 6px ${item.statusDotColor || '#38bdf8'}66`,
              }}
            />
          </div>
        </div>

        {/* 2. Role & Expand / Collapse Toggle Row */}
        <div className="rounded-lg bg-[#0d0d0f] border border-[#1e1e22] p-4 space-y-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-left group focus:outline-none"
            aria-expanded={isExpanded}
          >
            <div className="flex items-center gap-2.5">
              {/* Code Icon badge </> */}
              <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm md:text-base font-medium text-white group-hover:text-zinc-200 transition-colors">
                {item.role}
              </span>
            </div>

            <div className="p-1 rounded text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </div>
          </button>

          {/* Meta row: Full-time / Date range / Duration */}
          <div className="flex items-center gap-3 text-xs text-[#71717a] font-mono pl-8.5">
            <span className="text-zinc-400">{item.employmentType}</span>
            <span>·</span>
            <span>{item.period}</span>
            <span>·</span>
            <span>{item.duration}</span>
          </div>

          {/* Expandable Bullet Points */}
          {isExpanded && (
            <div className="pt-2 pl-8.5 space-y-2 border-t border-zinc-800/60 transition-all duration-300">
              <ul className="space-y-2 text-xs md:text-sm text-[#a1a1aa] list-disc list-outside ml-3">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Pill Badges */}
          <div className="pt-3 pl-8.5 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-[#141416] text-[#a1a1aa] border border-[#27272a] hover:border-zinc-600 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
