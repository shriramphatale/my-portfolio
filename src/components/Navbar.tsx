import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Menu, X } from 'lucide-react';
import { PullCord } from './PullCord';
import { Orb } from './Orb';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { personal, navigation } = portfolioConfig;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav
        aria-label="Primary"
        className="sticky top-0 z-40 w-full transition-all duration-200 border-y border-[#242426] bg-[#090909]/95 backdrop-blur-md"
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between border-x border-[#242426] bg-[#090909]/95 backdrop-blur-md">
          {/* Left: Anti-Gravity Orb Logo */}
          <a
            href="#"
            className="group flex items-center focus:outline-none focus:ring-1 focus:ring-zinc-500 rounded-full transition-transform hover:scale-105"
            aria-label={`${personal.name} — Home`}
          >
            <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 flex items-center justify-center rounded-full overflow-hidden">
              <Orb
                colors={['#00f0ff', '#8b5cf6', '#ff007f']}
                backgroundColor="transparent"
                size={1.15}
                glow={1.5}
                wobble={1.1}
                speed={1.2}
              />
            </div>
          </a>

          {/* Right: Desktop Navigation Links + Mobile Hamburger */}
          <div className="flex items-center gap-1">
            {/* Desktop Navigation Links aligned to the right */}
            <div className="hidden md:flex items-center gap-1 text-sm font-medium">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? 'text-white bg-zinc-800/60 font-semibold'
                        : 'text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-zinc-800/30'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-md border border-[#27272a] bg-[#141416]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Search & GitHub removed) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#242426] bg-[#0c0c0e] px-6 py-4">
            {/* Two-Column Body: Nav links on left, Theme Pull-Cord on right */}
            <div className="flex items-center justify-between gap-4">
              {/* Left Column: Stacked Navigation Links */}
              <div className="flex-1 space-y-1">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'text-white bg-zinc-800/60 font-semibold'
                          : 'text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-zinc-800/40'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* Right Column: Theme Pull-Cord Card */}
              <div className="shrink-0 flex items-center justify-center pl-2">
                <PullCord className="scale-90 sm:scale-95 origin-center" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;