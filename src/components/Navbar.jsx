import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Keep navbar visible if mobile menu is open, scrolling UP, or near top (< 10px)
      const isVisible = mobileMenuOpen || prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

  const navLinks = [
    { name: 'HERO', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToTarget = (href) => {
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Wait for drawer animation to close before scrolling accurately
      setTimeout(() => {
        scrollToTarget(href);
      }, 150);
    } else {
      scrollToTarget(href);
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white text-black border-b-4 border-black shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo & Sub-Badge Section */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-black flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform border-2 border-black shadow-[3px_3px_0px_0px_#CCFF00] flex-shrink-0">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight font-mono text-black leading-none">
              &lt;SHRIRAM /&gt;
            </span>
            <div className="inline-flex items-center gap-1.5 bg-volt border border-black px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-black mt-1 shadow-[2px_2px_0px_0px_#000000]">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              <span>OPEN TO NEW OPPORTUNITIES</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links & Action CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Nav Links */}
          <nav className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1.5 hover:bg-black hover:text-white transition-colors border border-transparent hover:border-black"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="brutalist-btn bg-black text-white font-mono text-xs font-bold uppercase px-4 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00] hover:bg-volt hover:text-black flex items-center gap-2"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-volt border-2 border-black shadow-[3px_3px_0px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 z-50"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-white border-t-4 border-black px-6 py-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3 font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-bold uppercase p-3 border-2 border-black bg-gray-50 shadow-[3px_3px_0px_0px_#000000] hover:bg-volt hover:text-black transition-colors block text-left"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 text-center text-base font-bold uppercase p-3 border-2 border-black bg-black text-white shadow-[3px_3px_0px_0px_#CCFF00] hover:bg-volt hover:text-black block"
              >
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
