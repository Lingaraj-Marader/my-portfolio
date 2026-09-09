import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

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

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((exp, idx) => {
            const isCurrent = exp.status.toLowerCase().includes('current');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Glowing Dot on Timeline Line */}
                <div className="absolute -left-[17px] top-1.5 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    isCurrent
                      ? 'border-cyan-400 bg-dark-950 shadow-lg shadow-cyan-500/50'
                      : 'border-violet-400 bg-dark-950 shadow-md shadow-violet-500/40'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-violet-400'}`} />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all shadow-xl group">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                          isCurrent
                            ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300'
                            : 'bg-violet-500/15 border-violet-500/30 text-violet-300'
                        }`}>
                          {exp.status}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                        <span className="font-semibold text-cyan-400">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 bg-dark-950/60 px-3 py-1.5 rounded-xl border border-white/5 self-start sm:self-auto">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base my-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2.5 mb-6">
                    {exp.achievements.map((item, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono mr-1">Stack:</span>
                    {exp.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-2.5 py-1 text-xs rounded-lg bg-dark-950 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30 transition-colors"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
