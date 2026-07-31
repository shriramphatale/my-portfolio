import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, ArrowUpRight, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="scroll-mt-20 relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-dark text-white border-b-8 border-black px-4 sm:px-6 lg:px-12 py-10 lg:py-0 flex flex-col justify-center overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center overflow-hidden">
        <span className="font-ranchers text-[24vw] leading-none text-white tracking-tighter">
          DEVELOPER
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Greeting, Name & CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Tilted Sticker Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -15, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-1.5 border-3 border-black shadow-[4px_4px_0px_0px_#CCFF00]"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>FULL-STACK MERN DEVELOPER</span>
              <span className="text-gray-400">|</span>
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>PUNE, INDIA</span>
            </motion.div>

            {/* Greeting Tag + Main Name Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <span className="font-mono text-xs sm:text-sm font-bold text-volt uppercase tracking-widest block">
                // HI, I AM
              </span>
              <h1 className="font-ranchers text-4xl sm:text-6xl md:text-8xl lg:text-[92px] xl:text-[105px] uppercase text-white tracking-wide leading-[0.9] drop-shadow-[5px_5px_0px_#000000] select-none break-words">
                SHRIRAM PHATALE
              </h1>
            </motion.div>

            {/* Hero CTA — Single Get In Touch Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="pt-2 flex justify-center lg:justify-start"
            >
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="brutalist-btn bg-volt text-black border-4 border-black px-7 py-3.5 sm:px-8 sm:py-4 font-mono font-extrabold text-sm sm:text-base uppercase shadow-[6px_6px_0px_0px_#000000] hover:bg-white hover:text-black flex items-center gap-2.5"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] bg-white border-4 border-black p-2.5 sm:p-3 shadow-[6px_6px_0px_0px_#CCFF00] sm:shadow-[8px_8px_0px_0px_#CCFF00] transform rotate-2 hover:rotate-0 transition-transform duration-300">
              
              {/* Sticker Tag */}
              <div className="absolute -top-3.5 -right-3 bg-black text-white font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 border-2 border-black rotate-6 shadow-[2px_2px_0px_0px_#CCFF00]">
                SHRIRAM.RAW
              </div>

              {/* Image Frame */}
              <div className="bg-dark border-3 border-black overflow-hidden aspect-[3/4] flex items-center justify-center">
                <img
                  src="/avatar.png"
                  alt="Shriram Phatale"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
              </div>

              {/* Caption Tag */}
              <div className="mt-2 pt-2 border-t-2 border-black flex items-center justify-between font-mono text-[10px] font-bold text-black uppercase">
                <span className="flex items-center gap-1 truncate">
                  <Terminal className="w-3 h-3 text-black flex-shrink-0" />
                  SHRIRAM PHATALE
                </span>
                <span className="bg-volt px-1.5 py-0.5 border border-black text-[9px] flex-shrink-0">
                  VERIFIED
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
