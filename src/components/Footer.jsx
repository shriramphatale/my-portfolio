import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black border-t-8 border-black pt-10 pb-6 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b-4 border-black">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black flex items-center justify-center rotate-[-3deg] border-2 border-black shadow-[3px_3px_0px_0px_#CCFF00]">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-ranchers text-2xl sm:text-3xl uppercase tracking-wider text-black">
              SHRIRAM PHATALE
            </h4>
            <span className="font-mono text-xs font-bold uppercase text-gray-600">
              FULL-STACK MERN DEVELOPER
            </span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs font-bold uppercase">
          <a href="#hero" className="hover:bg-volt px-2 py-1 border border-transparent hover:border-black transition-colors">HERO</a>
          <a href="#about" className="hover:bg-volt px-2 py-1 border border-transparent hover:border-black transition-colors">ABOUT</a>
          <a href="#skills" className="hover:bg-volt px-2 py-1 border border-transparent hover:border-black transition-colors">SKILLS</a>
          <a href="#projects" className="hover:bg-volt px-2 py-1 border border-transparent hover:border-black transition-colors">PROJECTS</a>
          <a href="#contact" className="hover:bg-volt px-2 py-1 border border-transparent hover:border-black transition-colors">CONTACT</a>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="brutalist-btn bg-volt text-black border-3 border-black px-3.5 py-2 shadow-[3px_3px_0px_0px_#000000] hover:bg-black hover:text-white flex items-center gap-1.5 font-mono text-xs font-bold uppercase"
        >
          <span>TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

      {/* Copyright Notice */}
      <div className="max-w-6xl mx-auto pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-gray-600 gap-3">
        <span>
          © {new Date().getFullYear()} SHRIRAM PHATALE. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
