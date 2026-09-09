import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  Database,
  Terminal,
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 3D Tilt Card Physics on mouse move
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleResumeDownload = () => {
    // Multi-stage confetti celebration!
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#10b981']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Multi-layered Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text, Roles, Stats & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pulsing Status Pill */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-lg shadow-cyan-500/15 mb-6 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for AI/ML & Full Stack Engineering Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white mb-3 leading-[1.1]">
              Hello, I'm{' '}
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Animated Typewriter / Rotating Role Carousel */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-5 overflow-hidden">
              <span className="text-slate-400 text-lg sm:text-2xl font-medium mr-2">I build as a</span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-lg sm:text-2xl font-bold font-heading bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent border-b-2 border-cyan-400/50 pb-0.5"
              >
                {personalInfo.roles[currentRoleIndex]}
              </motion.span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {personalInfo.tagline}
            </p>

            {/* Contact Details Quick Cards */}
            <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-slate-300">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-900/70 border border-white/5 hover:border-cyan-500/40 hover:bg-dark-850 hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-slate-300 hover:text-cyan-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{personalInfo.contact.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.contact.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-900/70 border border-white/5 hover:border-blue-500/40 hover:bg-dark-850 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-slate-300 hover:text-blue-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.phones[0]}</span>
              </a>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-900/70 border border-white/5 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.contact.location}</span>
              </div>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-dark-900/70 border border-white/5 hover:border-emerald-500/40 hover:bg-dark-850 hover:shadow-lg hover:shadow-emerald-500/10 transition-all text-slate-300 hover:text-emerald-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <span className="truncate">github.com/Lingaraj-Marader</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={personalInfo.contact.resumeUrl}
                download="Lingaraj_Marader_Resume.pdf"
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-dark-900/90 border border-cyan-500/40 hover:border-cyan-400 hover:text-white hover:bg-dark-800 transition-all shadow-md shadow-cyan-500/10"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </motion.a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Interactive Portrait & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex items-center justify-center relative perspective-[1200px]"
          >
            <div className="relative w-72 sm:w-88 md:w-96 flex items-center justify-center">
              
              {/* Outer decorative glowing radar rings */}
              <div className="absolute inset-0 -m-6 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-0 -m-12 rounded-full border border-violet-500/10 border-dashed animate-reverse-spin pointer-events-none" />
              
              {/* Interactive 3D Tilt Card Container */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-3xl p-3 bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-violet-600/30 border border-white/20 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] transition-shadow duration-300 hover:shadow-[0_25px_80px_-10px_rgba(59,130,246,0.45)] group cursor-pointer"
              >
                {/* Holographic Cyber Corner Brackets */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg pointer-events-none z-20" />
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg pointer-events-none z-20" />
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-violet-400 rounded-bl-lg pointer-events-none z-20" />
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-violet-400 rounded-br-lg pointer-events-none z-20" />

                {/* Profile Image Container */}
                <div className="relative w-64 h-80 sm:w-76 sm:h-96 md:w-80 md:h-[430px] rounded-2xl overflow-hidden bg-dark-950 border border-white/10 flex items-center justify-center">
                  
                  {/* Photo of Lingaraj Marader */}
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    onLoad={() => setImageLoaded(true)}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Lighting overlay to blend smoothly into dark theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-75 pointer-events-none" />

                  {/* Shimmer Light Sweep on hover */}
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                  {/* Bottom overlay badge inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs z-10">
                    <div>
                      <span className="font-heading font-bold text-white block text-sm">
                        Lingaraj Marader
                      </span>
                      <span className="text-cyan-400 font-mono text-[11px]">
                        AI/ML & Full Stack
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 font-mono text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>

              </motion.div>

              {/* Orbiting Animated Floating Tech Badges */}
              
              {/* Badge 1: Python & AI */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/95 backdrop-blur-xl border border-cyan-500/50 shadow-xl shadow-cyan-500/20 text-xs font-semibold text-cyan-300 z-30 pointer-events-none"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Python & ML</span>
              </motion.div>

              {/* Badge 2: React & Node */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-left-5 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/95 backdrop-blur-xl border border-blue-500/50 shadow-xl shadow-blue-500/20 text-xs font-semibold text-blue-300 z-30 pointer-events-none"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>React 19 & Node</span>
              </motion.div>

              {/* Badge 3: Generative AI & LLMs */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/4 -right-4 sm:-right-8 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-900/95 backdrop-blur-xl border border-violet-500/50 shadow-xl shadow-violet-500/20 text-xs font-semibold text-violet-300 z-30 pointer-events-none"
              >
                <Bot className="w-4 h-4 text-violet-400" />
                <span>Generative AI & LLMs</span>
              </motion.div>

              {/* Badge 4: Semantic Embeddings */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-3 -right-3 sm:-right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-900/95 backdrop-blur-xl border border-emerald-500/50 shadow-xl shadow-emerald-500/20 text-xs font-semibold text-emerald-300 z-30 pointer-events-none"
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vector Embeddings</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
