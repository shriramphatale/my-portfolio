import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VideoBanner } from './components/VideoBanner';
import { PullCord } from './components/PullCord';
import { ProfileHeader } from './components/ProfileHeader';
import { GridDivider } from './components/GridDivider';
import { AboutSection } from './components/AboutSection';
// import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { GitHubActivity } from './components/GitHubActivity';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090909] text-[#f4f4f5] relative flex flex-col selection:bg-zinc-800 selection:text-white overflow-x-hidden">
      {/* Background CAD Diagonal Hatch Pattern on Outer Gutters (Left & Right of 900px Column) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-diagonal-hatch-subtle opacity-40" />
      {/* 2. Sticky Slim Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      {/* 1. Video Banner at Very Top (width matches portfolio section) */}
      <header className="w-full relative z-10 border-b border-[#242426]">
        <div className="relative max-w-[900px] mx-auto">
          <VideoBanner />
          {/* Desktop Outer Gutter Pull-Cord: placed in right margin aligned with top-right of hero banner */}
          <div className="hidden xl:block absolute left-[calc(100%+1.5rem)] 2xl:left-[calc(100%+2rem)] top-8 z-30 pointer-events-auto">
            <PullCord />
          </div>
        </div>
      </header>
      {/* 3. Centered Editorial Content Column with Full-Width Section Boundaries */}
      <main className="w-full flex-1 relative z-10">
        {/* Profile Header (Avatar + Name & Role) */}
        <ProfileHeader />

        {/* Section 01: About */}
        <AboutSection />

        {/* Diagonal Hatch Divider Strip (matching Reference Image 1) */}
        {/* <GridDivider withHatch hatchHeight="h-3" /> */}

        {/* Section 02: Experience */}
        {/* <ExperienceSection /> */}

        {/* Diagonal Hatch Divider Strip */}
        <GridDivider withHatch hatchHeight="h-3" />

        {/* Section 03: Selected Projects (AskDoc.ai & RAG Simulator) */}
        <ProjectsSection />

        {/* Subtle Horizontal Divider */}
        <GridDivider />

        {/* Section 04: Technologies & Skills */}
        <SkillsSection />

        {/* Diagonal Hatch Divider Strip */}
        <GridDivider withHatch hatchHeight="h-3" />

        {/* Section: GitHub Activity */}
        <GitHubActivity />

        {/* Diagonal Hatch Divider Strip */}
        <GridDivider withHatch hatchHeight="h-3" />

        {/* Section 05: Contact */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Interactive Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
