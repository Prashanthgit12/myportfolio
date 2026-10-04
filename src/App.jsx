import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import FloatingThemeDock from './components/FloatingThemeDock';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--theme-bg-main)] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 antialiased overflow-x-hidden transition-colors duration-500">
        {/* Dynamic Ambient Background Effects */}
        <BackgroundEffects />

        {/* Sticky Top Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Floating Quick Theme Switcher */}
        <FloatingThemeDock />

        {/* High-Fidelity Resume Modal & Print View */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
