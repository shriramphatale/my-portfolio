import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Mail, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <section id="about" className="w-full">
      {/* <SectionHeading number="01" title="About" /> */}

      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] p-6 md:p-8 space-y-8">
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

        {/* Core Technical Pillars / Areas of Interest */}
        {/* <div className="pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#71717a] mb-4 flex items-center gap-2">
            <ArrowDownRight className="w-3.5 h-3.5" />
            Core Focus & Capabilities
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {about.corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-4 rounded-lg border border-[#242426] bg-[#0f0f11] hover:border-[#333338] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <h3 className="text-sm font-medium text-[#f4f4f5] group-hover:text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Direct Action Link */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </a>

          <a
            href="#askdoc-ai"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-md border border-[#27272a] bg-[#141416] text-[#d4d4d8] hover:text-white hover:border-[#3f3f46] transition-colors"
          >
            <span>Explore AskDoc.ai project</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
