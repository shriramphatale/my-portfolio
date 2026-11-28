import React, { useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { GithubIcon, type GithubIconHandle } from './ui/github';
import { LinkedinIcon, type LinkedinIconHandle } from './ui/linkedin';
import { FileTextIcon, type FileTextIconHandle } from './ui/file-text';

type AnimatedIconHandle = GithubIconHandle | LinkedinIconHandle | FileTextIconHandle;

interface HeroSocialLinkProps {
  href: string;
  label: string;
  title: string;
  Icon: React.ForwardRefExoticComponent<
    { size?: number; className?: string } & React.RefAttributes<AnimatedIconHandle>
  >;
}

const HeroSocialLink: React.FC<HeroSocialLinkProps> = ({ href, label, title, Icon }) => {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={title}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onFocus={() => iconRef.current?.startAnimation()}
      onBlur={() => iconRef.current?.stopAnimation()}
      className="inline-flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-visible:text-[var(--text-primary)] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 transition-colors"
    >
      <Icon ref={iconRef} size={20} />
    </a>
  );
};

export const AboutSection: React.FC = () => {
  const { personal } = portfolioConfig;

  const socialLinks: HeroSocialLinkProps[] = [
    {
      href: personal.githubUrl,
      label: 'GitHub profile',
      title: 'GitHub',
      Icon: GithubIcon as HeroSocialLinkProps['Icon'],
    },
    {
      href: personal.linkedinUrl,
      label: 'LinkedIn profile',
      title: 'LinkedIn',
      Icon: LinkedinIcon as HeroSocialLinkProps['Icon'],
    },
    ...(personal.resumeUrl
      ? [
          {
            href: personal.resumeUrl,
            label: 'View Resume PDF',
            title: 'Resume',
            Icon: FileTextIcon as HeroSocialLinkProps['Icon'],
          },
        ]
      : []),
  ];

  return (
    <section id="about" className="w-full">
      {/* <SectionHeading number="01" title="About" /> */}

      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] px-6 py-4 md:py-4 space-y-5">
        {/* Main Editorial Statement */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg md:text-xl text-[#f4f4f5] font-normal leading-relaxed">
            {personal.tagline}
          </p>

          {/* {about.bioParagraphs.map((para, idx) => (
            <p key={idx} className="text-sm md:text-base text-[#a1a1aa] leading-relaxed">
              {para}
            </p>
          ))} */}
        </div>

        {/* Minimal Social & Resume Icon Row */}
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <HeroSocialLink key={link.title} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};
