import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from './SectionHeading';
import { Code, Server, Database, BrainCircuit } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Code className="w-3.5 h-3.5 text-sky-400" />,
    Backend: <Server className="w-3.5 h-3.5 text-emerald-400" />,
    'Databases & Infrastructure': <Database className="w-3.5 h-3.5 text-amber-400" />,
    'AI & LLM Applications': <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />,
  };

  const filteredSkills =
    activeFilter === 'all'
      ? skills
      : skills.filter((group) => group.category === activeFilter);

  return (
    <section id="skills" className="w-full">
      <SectionHeading
        number="04"
        title="Technologies"
        subtitle="Languages, frameworks, databases, and AI tooling applied in production."
      />

      <div className="w-full">
        <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8 space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-xs font-mono rounded-md border transition-colors ${
                activeFilter === 'all'
                  ? 'bg-zinc-800 text-white border-zinc-600'
                  : 'bg-[#121215] text-[#a1a1aa] border-[#242426] hover:text-white hover:border-[#333338]'
              }`}
            >
              All Stack ({skills.reduce((acc, curr) => acc + curr.skills.length, 0)})
            </button>
            {skills.map((group) => (
              <button
                key={group.category}
                onClick={() => setActiveFilter(group.category)}
                className={`px-3 py-1 text-xs font-mono rounded-md border transition-colors ${
                  activeFilter === group.category
                    ? 'bg-zinc-800 text-white border-zinc-600'
                    : 'bg-[#121215] text-[#a1a1aa] border-[#242426] hover:text-white hover:border-[#333338]'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Grouped Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-lg border border-[#242426] bg-[#0d0d0f] space-y-3 hover:border-[#303035] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {categoryIcons[group.category] || <Code className="w-3.5 h-3.5 text-zinc-400" />}
                    <h3 className="text-sm font-medium text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#71717a]">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#8e8e93] leading-relaxed">
                  {group.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-full bg-[#141416] text-[#d4d4d8] border border-[#27272a] hover:border-zinc-500 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
