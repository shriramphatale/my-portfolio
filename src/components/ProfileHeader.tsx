import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const ANIMATED_PHRASES = [
  'Full Stack Engineer',
  'Learning Generative AI',
  'Exploring New Technologies',
  'Building with AI',
];

export const ProfileHeader: React.FC = () => {
  const { personal } = portfolioConfig;
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in India Standard Time (IST)
      const timeString = new Intl.DateTimeFormat('en-IN', {
        timeZone: personal.timezone || 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [personal.timezone]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % ANIMATED_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-b border-[#242426]">
      <div className="max-w-[900px] mx-auto border-x border-[#242426] bg-[#090909] py-7 px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Left side: Avatar + Name & Role */}
          <div className="flex items-center gap-5">
            {/* Circular Profile Avatar (68-72px) */}
            <div className="relative shrink-0 w-[68px] h-[68px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden border border-[#27272a] bg-[#141416] ring-1 ring-white/5">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to stylized monogram if avatar fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center font-bold text-xl text-white bg-zinc-900">
                        SP
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Name & Role */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[22px] md:text-[22px] font-semibold text-white tracking-tight leading-snug">
                {personal.name}
              </h1>
              {/* <p className="text-[13px] md:text-[13px] text-[#a1a1aa] font-normal leading-normal">
                {personal.role}
              </p> */}
              {/* Continuously Looping Animated Text Line */}
              <div className="h-5 overflow-hidden flex items-center" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ANIMATED_PHRASES[currentPhraseIndex]}
                    initial={shouldReduceMotion ? { opacity: 0 } : { y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.25 }
                        : { duration: 0.35, ease: [0.25, 1, 0.5, 1] }
                    }
                    className="text-[13px] md:text-[13px] text-[#a1a1aa] font-normal leading-normal inline-block whitespace-nowrap"
                  >
                    {ANIMATED_PHRASES[currentPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right side: Time and Location */}
          <div className="flex flex-wrap sm:flex-col sm:items-end gap-2.5 sm:gap-1.5 text-xs text-[#a1a1aa]">
            {/* Current Time */}
            {currentTime && (
              <div className="inline-flex items-center gap-1.5 text-[#828288] font-mono text-[11px]">
                <Clock className="w-3 h-3 text-[#71717a]" />
                <span>{currentTime} IST</span>
              </div>
            )}

            {/* Location */}
            <div className="inline-flex items-center gap-1 text-[#828288] font-mono text-[11px]">
              <MapPin className="w-3 h-3 text-[#71717a]" />
              <span>{personal.location}, {personal.country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
