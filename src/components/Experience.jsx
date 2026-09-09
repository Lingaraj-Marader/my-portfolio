import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Zap
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

function ExperienceCard({ exp, idx, isCurrent }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Glowing Pulsing Node on Timeline Line */}
      <div className="absolute -left-[17px] top-2 flex items-center justify-center">
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-125 ${
            isCurrent
              ? 'border-cyan-400 bg-dark-950 shadow-[0_0_20px_rgba(6,182,212,0.6)]'
              : 'border-violet-400 bg-dark-950 shadow-[0_0_15px_rgba(139,92,246,0.5)]'
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isCurrent ? 'bg-cyan-400 animate-ping opacity-75' : 'bg-violet-400'
            }`}
          />
          <div
            className={`absolute w-2 h-2 rounded-full ${
              isCurrent ? 'bg-cyan-300' : 'bg-violet-300'
            }`}
          />
        </div>
      </div>

      {/* Experience Card */}
      <div
        onMouseMove={handleMouseMove}
        className="p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all group relative overflow-hidden"
      >
        {/* Cursor Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
          }}
        />

        {/* Card Header */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                {exp.role}
              </h3>
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold border flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/20'
                    : 'bg-violet-500/15 border-violet-500/30 text-violet-300'
                }`}
              >
                <Zap className="w-3 h-3" />
                {exp.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-1">
              <span className="font-semibold text-cyan-400 text-sm">
                {exp.company}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 bg-dark-950/70 px-3.5 py-1.5 rounded-xl border border-white/5 self-start sm:self-auto font-mono">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="relative z-10 text-slate-300 text-sm sm:text-base my-4 leading-relaxed">
          {exp.description}
        </p>

        {/* Bullet achievements */}
        <div className="relative z-10 space-y-2.5 mb-6">
          {exp.achievements.map((item, bulletIdx) => (
            <div
              key={bulletIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tech stack badges */}
        <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-mono mr-1">Stack:</span>
          {exp.tech.map((techItem) => (
            <span
              key={techItem}
              className="px-3 py-1 text-xs rounded-lg bg-dark-950 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors font-mono"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Practical industry engineering across full-stack systems and applied machine learning research.
          </p>
        </div>

        {/* Timeline with Animated Glowing Laser Track */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
          {/* Traveling Laser Light */}
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-[3px] w-[4px] h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#06b6d4] pointer-events-none"
          />

          {experienceData.map((exp, idx) => {
            const isCurrent = exp.status.toLowerCase().includes('current');
            return (
              <ExperienceCard
                key={idx}
                exp={exp}
                idx={idx}
                isCurrent={isCurrent}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
