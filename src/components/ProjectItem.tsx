import React from 'react';
import type { ProjectItemType } from '../config/portfolio';
import { AskDocLiveDemo } from './AskDocLiveDemo';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';

interface ProjectItemProps {
  project: ProjectItemType;
  isLast?: boolean;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, isLast = false }) => {
  return (
    <div
      id={project.id}
      className={`w-full scroll-mt-20 ${!isLast ? 'border-b border-[#242426]' : ''}`}
    >
      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8">
        <div className="space-y-4">
          {/* Header: Title, Badge, Links */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                {project.title}
              </h3>
              {project.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-mono border border-sky-900/60 bg-sky-950/40 text-sky-300">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Project Action Links */}
            <div className="flex items-center gap-3 text-xs">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#27272a] bg-[#141416] text-[#d4d4d8] hover:text-white hover:border-[#3f3f46] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px]">Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Live Preview</span>
                </a>
              )}
            </div>
          </div>

          {/* Tagline / Brief Description */}
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Architectural Highlights */}
          {/* {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 rounded-lg bg-[#0e0e11] border border-[#1f1f23] space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Key Engineering Highlights
              </div>
              <ul className="space-y-1.5 text-xs text-[#a1a1aa] list-disc list-outside ml-3.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* Embedded Interactive Simulator for Primary Project (AskDoc.ai) */}
          {/* {project.isPrimary && <AskDocLiveDemo />} */}

          {/* Technology Pill Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
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
