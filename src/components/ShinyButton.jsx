import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ShinyButton({
  children,
  href,
  onClick,
  className = '',
  showArrow = true,
  icon,
  ...props
}) {
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 text-white font-medium text-xs sm:text-sm tracking-wide uppercase font-manrope">
        {children}
        {showArrow && !icon && (
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        )}
        {icon && (
          <span className="group-hover:translate-x-0.5 transition-transform">{icon}</span>
        )}
      </span>
    </>
  );

  const baseClasses = `shiny-cta group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-semibold transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(239,35,60,0.2)] hover:shadow-[0_0_30px_rgba(239,35,60,0.45)] ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} {...props}>
      {content}
    </button>
  );
}
