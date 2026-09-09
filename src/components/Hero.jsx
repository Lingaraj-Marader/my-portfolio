import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Bot,
  Code2,
  Cpu,
  Database
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981']
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/80 border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-sm shadow-cyan-500/10 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for AI/ML & Full Stack Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white mb-4 leading-[1.1]">
              Hello, I'm{' '}
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Animated Rotating Role Carousel */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
              <span className="text-slate-400 text-lg sm:text-2xl font-medium mr-2">I build as a</span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-bold font-heading bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent underline decoration-cyan-500/40 underline-offset-4"
              >
                {personalInfo.roles[currentRoleIndex]}
              </motion.span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {personalInfo.tagline}
            </p>

            {/* Contact Details Quick Strip */}
            <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-slate-300">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-dark-850 transition-all text-slate-300 hover:text-cyan-300"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-dark-850 transition-all text-slate-300 hover:text-cyan-300"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{personalInfo.contact.phones[0]}</span>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-900/60 border border-white/5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>{personalInfo.contact.location}</span>
              </div>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-900/60 border border-white/5 hover:border-cyan-500/30 hover:bg-dark-850 transition-all text-slate-300 hover:text-cyan-300"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <GithubIcon className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">github.com/Lingaraj-Marader</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Lingaraj_Marader_Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 hover:text-white hover:bg-dark-800 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Profile & Orbiting Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer decorative spinning gradient ring */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 opacity-60 blur-md animate-pulse" />
              
              <div className="absolute inset-1 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 animate-spin-slow">
                <div className="w-full h-full bg-dark-950 rounded-full" />
              </div>

              {/* Profile Image / Fallback Container */}
              <div className="relative w-[88%] h-[88%] rounded-full p-2 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center group">
                {!imageError ? (
                  <img
                    src="profile.jpg"
                    alt={personalInfo.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // Sleek Cyber Avatar Fallback if profile.jpg is missing or not provided
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-dark-900 via-dark-850 to-dark-800 flex flex-col items-center justify-center text-center p-4 border border-cyan-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-hero-gradient opacity-80" />
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-black font-heading shadow-xl shadow-cyan-500/30 mb-2 relative z-10">
                      LM
                    </div>
                    <span className="text-base font-bold text-white relative z-10">
                      Lingaraj Marader
                    </span>
                    <span className="text-xs text-cyan-400 font-mono tracking-wider relative z-10">
                      AI/ML & FULL STACK
                    </span>
                  </div>
                )}
              </div>

              {/* Orbiting Floating Technology Badges */}
              
              {/* Badge 1: Python */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 left-4 sm:left-6 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-cyan-500/10 text-xs font-semibold text-cyan-300"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Python & ML</span>
              </motion.div>

              {/* Badge 2: React */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 left-6 sm:left-10 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 backdrop-blur-md border border-blue-500/40 shadow-xl shadow-blue-500/10 text-xs font-semibold text-blue-300"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>React & Node</span>
              </motion.div>

              {/* Badge 3: GenAI / LLM */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/4 -right-4 sm:-right-6 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/90 backdrop-blur-md border border-violet-500/40 shadow-xl shadow-violet-500/10 text-xs font-semibold text-violet-300"
              >
                <Bot className="w-4 h-4 text-violet-400" />
                <span>Generative AI</span>
              </motion.div>

              {/* Badge 4: Database */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-2 -right-2 sm:right-2 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-emerald-500/40 shadow-xl shadow-emerald-500/10 text-xs font-semibold text-emerald-300"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>MySQL & Mongo</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
