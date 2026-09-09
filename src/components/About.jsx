import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  Cpu,
  Target,
  Rocket
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const pillars = [
  {
    icon: Brain,
    title: "AI & LLM Systems",
    desc: "Designing agents, semantic vector search, and LLM reasoning pipelines that make autonomous, explainable decisions.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Engineering",
    desc: "Architecting responsive React applications backed by performant Node.js/Express APIs and scalable databases.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Target,
    title: "Data Science & Evaluation",
    desc: "Turning unstructured data into structured intelligence using Scikit-learn, Pandas, and rigorous evaluation metrics.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Rocket,
    title: "Production Delivery",
    desc: "Dedicated to building working software end-to-end, with clean modular code, Git versioning, and continuous improvement.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Summary</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Passionate about building software that thinks, adapts, and delivers real-world business value.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
            
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Engineering Beyond Models
                </h3>
              </div>

              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Highlights Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>End-to-End Full Stack Applications</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Semantic Embeddings & LLM Reasoning</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Production Experience (Zeta & Contriver)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>B.E. Information Science (STJIT 2026)</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics / Stats Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-dark-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 hover:bg-dark-850/80 transition-all flex flex-col justify-center"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-cyan-400/80 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {stat.highlight}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 4 Pillars Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} bg-dark-900/50 border ${pillar.border} backdrop-blur-lg hover:-translate-y-1.5 transition-all shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
