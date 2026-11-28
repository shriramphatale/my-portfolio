import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  badge,
  id,
}) => {
  return (
    <div id={id} className="w-full border-b border-[#242426] scroll-mt-20">
      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] pt-2 pb-2 px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            {/* <span className="font-mono text-sm md:text-base text-[#71717a] font-medium tracking-tight">
              {number}
            </span> */}
            {/* <span className="text-zinc-600 font-light select-none">—</span> */}
            <h2 className="text-2xl md:text-3xl  text-[#fafafa] tracking-tight">
              {title}
            </h2>
          </div>
          {badge && (
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-[#27272a] bg-[#141416] text-[#a1a1aa]">
              {badge}
            </span>
          )}
        </div>
        {/* {subtitle && (
          <p className="mt-2 text-sm text-[#a1a1aa] max-w-2xl">
            {subtitle}
          </p>
        )} */}
      </div>
    </div>
  );
};
