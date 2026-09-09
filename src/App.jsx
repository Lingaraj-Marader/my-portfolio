import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Dynamic 60fps Starfield / Particle Background */}
      <BackgroundCanvas />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-30 z-0" />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <EducationCertifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
