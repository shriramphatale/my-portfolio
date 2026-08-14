import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-volt selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Contact */}
        <Contact />
      </main>

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}
