import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { SectionHeading } from './SectionHeading';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export const ContactSection: React.FC = () => {
  const { contact, personal } = portfolioConfig;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full">
      <SectionHeading
        title="Contact"
        subtitle="Open for full-stack engineering roles, technical inquiries, and project discussions."
      />

      <div className="w-full">
        <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] px-6 py-4  space-y-6">
          {/* Invitation Text */}
          <p className="text-base md:text-lg text-[#d4d4d8] leading-relaxed max-w-xl">
            {contact.invitation}
          </p>

          {/* Contact Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            {/* Email Button with Copy */}
            <div className="flex items-center rounded-lg border border-[#242426] bg-[#0d0d0f] hover:border-[#3a3a40] hover:bg-[#111114] transition-colors duration-150">
              <a
                href={`mailto:${personal.email}`}
                className="group flex-1 min-w-0 flex items-center gap-3 pl-3.5 pr-2 py-2.5 rounded-l-lg active:scale-[0.99] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-zinc-500"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#a1a1aa] group-hover:text-white transition-colors duration-150" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-100 group-hover:text-white leading-tight transition-colors duration-150">
                    Email
                  </p>
                  <p
                    className="text-xs text-[#71717a] group-hover:text-[#a1a1aa] font-mono leading-tight truncate mt-0.5 transition-colors duration-150"
                    title={personal.email}
                  >
                    {personal.email}
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label={copied ? "Email copied" : "Copy email to clipboard"}
                title={copied ? "Copied" : "Copy email to clipboard"}
                className={`mr-2 shrink-0 p-1.5 rounded-md border transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 ${
                  copied
                    ? "border-zinc-500 bg-[#1a1a1e] text-white"
                    : "border-transparent text-[#71717a] hover:border-[#2e2e32] hover:bg-[#18181b] hover:text-white"
                }`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* GitHub Button */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg border border-[#242426] bg-[#0d0d0f] hover:border-[#3a3a40] hover:bg-[#111114] active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
            >
              <div className="flex items-center gap-3 min-w-0">
                <GithubIcon className="w-4 h-4 shrink-0 text-[#a1a1aa] group-hover:text-white transition-colors duration-150" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-100 group-hover:text-white leading-tight transition-colors duration-150">
                    GitHub
                  </p>
                  <p className="text-xs text-[#71717a] group-hover:text-[#a1a1aa] leading-tight truncate mt-0.5 transition-colors duration-150">
                    View repositories
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
            </a>

            {/* LinkedIn Button */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg border border-[#242426] bg-[#0d0d0f] hover:border-[#3a3a40] hover:bg-[#111114] active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500"
            >
              <div className="flex items-center gap-3 min-w-0">
                <LinkedinIcon className="w-4 h-4 shrink-0 text-[#a1a1aa] group-hover:text-white transition-colors duration-150" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-100 group-hover:text-white leading-tight transition-colors duration-150">
                    LinkedIn
                  </p>
                  <p className="text-xs text-[#71717a] group-hover:text-[#a1a1aa] leading-tight truncate mt-0.5 transition-colors duration-150">
                    Professional profile
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#71717a] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
            </a>
          </div>

          {/* Note */}
          <p className="text-xs text-[#71717a] font-mono">
            {contact.note}
          </p>
        </div>
      </div>
    </section>
  );
};
