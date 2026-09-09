import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Layers,
  Code,
  Database,
  BarChart3
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

const certIconMap = {
  Layers: Layers,
  Code: Code,
  Database: Database,
  BarChart3: BarChart3,
};

export default function EducationCertifications() {
  return (
    <section id="education" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Solid foundations in computer science theory matched with accredited specialized training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Degree
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {educationData.degree}
                </h3>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <p className="text-base font-semibold text-slate-200">
                {educationData.major}
              </p>
              <p className="text-sm text-slate-400">
                {educationData.institution}
              </p>
              <p className="text-xs font-mono text-cyan-400">
                {educationData.location} • Class of {educationData.graduationYear}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Curriculum & Focus Areas</span>
              </h4>
              {educationData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificationsData.map((cert, idx) => {
              const Icon = certIconMap[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-dark-850/80 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {cert.tag}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {cert.title}
                    </h4>
                    
                    <p className="text-xs font-medium text-cyan-400/90 mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Verified
                    </span>
                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors font-mono text-[11px]">
                      Credential
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
