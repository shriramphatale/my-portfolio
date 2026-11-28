import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { BarChart2, FileText, Image, Zap } from 'lucide-react';
import {
  siBaseui,
  siBun,
  siClaude,
  siCursor,
  siDocker,
  siExpo,
  siFigma,
  siGit,
  siGithub,
  siGooglegemini,
  siJavascript,
  siMobxstatetree,
  siMongodb,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPosthog,
  siPython,
  siRadixui,
  siReact,
  siRedis,
  siShadcnui,
  siTailwindcss,
  siTanstack,
  siTypescript,
  siVercel,
} from 'simple-icons';
import { portfolioConfig } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { SectionHeading } from './SectionHeading';

type StackIconEntry =
  | { kind: 'simple'; path: string }
  | { kind: 'asset'; src: string }
  | { kind: 'lucide'; Icon: LucideIcon };

const STACK_ICON_MAP: Record<string, StackIconEntry> = {
  TypeScript: { kind: 'simple', path: siTypescript.path },
  JavaScript: { kind: 'simple', path: siJavascript.path },
  Python: { kind: 'simple', path: siPython.path },
  React: { kind: 'simple', path: siReact.path },
  'Next.js': { kind: 'simple', path: siNextdotjs.path },
  'Tailwind CSS': { kind: 'simple', path: siTailwindcss.path },
  'shadcn/ui': { kind: 'simple', path: siShadcnui.path },
  'Radix UI': { kind: 'simple', path: siRadixui.path },
  'Base UI': { kind: 'simple', path: siBaseui.path },
  Motion: { kind: 'lucide', Icon: Zap },
  Expo: { kind: 'simple', path: siExpo.path },
  TanStack: { kind: 'simple', path: siTanstack.path },
  'MobX-State-Tree': { kind: 'simple', path: siMobxstatetree.path },
  'Node.js': { kind: 'simple', path: siNodedotjs.path },
  Bun: { kind: 'simple', path: siBun.path },
  PostgreSQL: { kind: 'simple', path: siPostgresql.path },
  MongoDB: { kind: 'simple', path: siMongodb.path },
  Redis: { kind: 'simple', path: siRedis.path },
  nginx: { kind: 'simple', path: siNginx.path },
  Claude: { kind: 'simple', path: siClaude.path },
  Cursor: { kind: 'simple', path: siCursor.path },
  Gemini: { kind: 'simple', path: siGooglegemini.path },
  ChatGPT: { kind: 'asset', src: `${import.meta.env.BASE_URL}icons/openai.svg` },
  Git: { kind: 'simple', path: siGit.path },
  GitHub: { kind: 'simple', path: siGithub.path },
  Docker: { kind: 'simple', path: siDocker.path },
  Vercel: { kind: 'simple', path: siVercel.path },
  OpenPanel: { kind: 'lucide', Icon: BarChart2 },
  PostHog: { kind: 'simple', path: siPosthog.path },
  Figma: { kind: 'simple', path: siFigma.path },
  Paper: { kind: 'lucide', Icon: FileText },
  Photoshop: { kind: 'lucide', Icon: Image },
};

const StackTechIcon: React.FC<{ name: string; isDark: boolean }> = ({ name, isDark }) => {
  const entry = STACK_ICON_MAP[name];
  if (!entry) return null;

  if (entry.kind === 'simple') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-3.5 h-3.5 shrink-0 text-[#a1a1aa]"
      >
        <path d={entry.path} />
      </svg>
    );
  }

  if (entry.kind === 'asset') {
    return (
      <img
        src={entry.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`w-3.5 h-3.5 shrink-0 object-contain select-none ${
          isDark ? 'brightness-0 invert opacity-75' : 'brightness-0 opacity-70'
        }`}
      />
    );
  }

  const { Icon } = entry;
  return (
    <Icon
      aria-hidden="true"
      strokeWidth={1.75}
      className="w-3.5 h-3.5 shrink-0 text-[#a1a1aa]"
    />
  );
};

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioConfig;
  const { isDark } = useTheme();

  return (
    <section id="skills" className="w-full">
      <SectionHeading
        title="Technologies"
        subtitle="Languages, frameworks, databases, and AI tooling applied in production."
      />

      <div className="w-full">
        <div
          role="table"
          aria-label="Technologies stack"
          className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909]"
        >
          {skills.map((group, idx) => {
            const isLast = idx === skills.length - 1;
            return (
              <div
                key={group.number}
                role="row"
                className={`grid grid-cols-[128px_minmax(0,1fr)] sm:grid-cols-[220px_minmax(0,1fr)] md:grid-cols-[250px_minmax(0,1fr)] ${
                  !isLast ? 'border-b border-[#242426]' : ''
                }`}
              >
                <div
                  role="rowheader"
                  className="border-r border-[#242426] px-3 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-4 flex items-start gap-2 sm:gap-2.5 min-w-0"
                >
                  <span className="font-mono text-xs md:text-[16px] text-[#71717a] tabular-nums shrink-0 leading-5">
                    {group.number}
                  </span>
                  <span className="text-xs md:text-[16px] font-medium text-[#fafafa] tracking-tight leading-5 break-words min-w-0">
                    {group.category}
                  </span>
                </div>

                <div
                  role="cell"
                  className="px-3 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-4 min-w-0"
                >
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141416] border border-[#27272a] text-xs md:text-[14px] text-[#f4f4f5] leading-none whitespace-nowrap"
                      >
                        <StackTechIcon name={skill} isDark={isDark} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
