import React from 'react';

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  centered = true,
  className = ""
}) {
  return (
    <div className={`mb-14 sm:mb-18 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-bold uppercase tracking-widest text-[#ef233c] mb-4 shadow-[0_0_15px_rgba(239,35,60,0.15)]">
          {badgeIcon || <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-manrope tracking-tight text-white mb-4 leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-[#ef233c] inline-block relative font-extrabold">
            {highlight}
            <svg
              className="absolute w-full h-2.5 -bottom-1.5 left-0 text-[#ef233c] opacity-70"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
