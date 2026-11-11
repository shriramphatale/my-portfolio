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
        number="06"
        title="Contact"
        subtitle="Open for full-stack engineering roles, technical inquiries, and project discussions."
      />

      <div className="w-full">
        <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8 space-y-6">
          {/* Invitation Text */}
          <p className="text-base md:text-lg text-[#d4d4d8] leading-relaxed max-w-xl">
            {contact.invitation}
          </p>

          {/* Contact Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Email Button with Copy */}
            <div className="p-4 rounded-lg border border-[#242426] bg-[#0d0d0f] space-y-3 flex flex-col justify-between hover:border-[#323238] transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-[#71717a] font-mono mb-1">
                  <span>Direct Mail</span>
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <p className="text-sm font-medium text-white truncate" title={personal.email}>
                  {personal.email}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 text-center px-2.5 py-1.5 rounded text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded border border-[#27272a] bg-[#141416] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border border-[#242426] bg-[#0d0d0f] space-y-3 flex flex-col justify-between hover:border-[#323238] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#71717a] font-mono mb-1">
                  <span>Code Repository</span>
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">
                  github.com/shriramphatale
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#a1a1aa] group-hover:text-white font-mono pt-1">
                <span>View Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border border-[#242426] bg-[#0d0d0f] space-y-3 flex flex-col justify-between hover:border-[#323238] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#71717a] font-mono mb-1">
                  <span>Professional Profile</span>
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-medium text-white group-hover:text-zinc-200 transition-colors">
                  linkedin.com/in/shriramphatale
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#a1a1aa] group-hover:text-white font-mono pt-1">
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
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
