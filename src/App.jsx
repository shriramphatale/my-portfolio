import React, { useState, useEffect } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import SkillsBento from './sections/SkillsBento';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import WatermarkFooter from './components/WatermarkFooter';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toasts, setToasts] = useState([]);

  // ScrollSpy to track active navigation section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (title, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, message }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-mono relative selection:bg-[#ef233c] selection:text-white">
      
      {/* 1. Global Atmospheric Crimson Glow Orbs & Cyber Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#140304] via-[#000000] to-[#000000]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ef233c]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] right-[-10%] w-[550px] h-[550px] bg-[#ef233c]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] left-[-10%] w-[550px] h-[550px] bg-[#ef233c]/6 rounded-full blur-[150px]" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* 2. Global Interactive Starfield Parallax Particle Canvas */}
      <StarfieldCanvas />

      {/* 3. Top Atmospheric Blur Mask */}
      <div className="gradient-blur" />

      {/* 4. Floating Minimal Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 5. Main Clean Application Sections */}
      <main className="relative z-10">
        <Hero />
        <SkillsBento />
        <Projects />
        <Experience />
        <Contact onShowToast={addToast} />
      </main>

      {/* 6. Clean Watermark Footer */}
      <WatermarkFooter />

      {/* 7. Floating Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

    </div>
  );
}
