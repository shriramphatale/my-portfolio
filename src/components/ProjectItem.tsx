import React from 'react';
import type { ProjectItemType } from '../config/portfolio';
import { MoveUpRight } from 'lucide-react';
import { TechStackIcons } from './TechStackIcons';

interface ProjectItemProps {
  project: ProjectItemType;
  isLast?: boolean;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, isLast = false }) => {
  const projectUrl = project.demoUrl || project.githubUrl;

  const cardClassName = `group relative block max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] px-6 py-4 md:py-4 transition-colors duration-200 ${
    projectUrl
      ? 'hover:bg-[#0e0e11] has-[>a:focus-visible]:ring-1 has-[>a:focus-visible]:ring-inset has-[>a:focus-visible]:ring-[#3f3f46] cursor-pointer'
      : ''
  }`;

  const cardContent = (
    <div className={`space-y-4 ${projectUrl ? 'relative z-10 pointer-events-none' : ''}`}>
      {/* Header: Title, Badge, Link Arrow */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-2xl text-white tracking-tight">
            {project.title}
          </h3>
          {project.badge && (
            <span className="px-2 py-0.5 rounded text-[11px] font-mono border border-sky-900/60 bg-sky-950/40 text-sky-300">
              {project.badge}
            </span>
          )}
        </div>

        {projectUrl && (
          <MoveUpRight
            aria-hidden="true"
            className="w-4 h-4 shrink-0 text-zinc-500 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>

      {/* Tagline / Brief Description */}
      <p className="text-[16px] md:text-[18px] text-zinc-300 leading-relaxed font-normal">
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

      {/* Technology Stack Icons */}
      <TechStackIcons technologies={project.technologies} />
    </div>
  );

  return (
    <div
      id={project.id}
      className={`w-full scroll-mt-20 ${!isLast ? 'border-b border-[#242426]' : ''}`}
    >
      <div className={cardClassName}>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} (opens in a new tab)`}
            className="absolute inset-0 z-0 focus:outline-none"
          />
        )}
        {cardContent}
      </div>
    </div>
  );
};