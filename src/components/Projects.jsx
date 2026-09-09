import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Bot,
  FileCheck,
  CheckCircle2,
  Layers,
  Train,
  ArrowUpRight
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { projectsData } from '../data/portfolioData';

const categoryList = ['All', 'AI & GenAI', 'Machine Learning', 'Full Stack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(activeCategory) || activeCategory.includes(p.category));

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Showcasing real-world AI screening agents, algorithmic evaluators, and production web applications.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-dark-900/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all group relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Top Bar with Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-blue-400/90 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/10">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-dark-950/80 text-cyan-300 border border-cyan-500/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-dark-950 hover:bg-dark-850 border border-white/10 hover:border-cyan-500/40 transition-all shadow-sm"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Details & Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
