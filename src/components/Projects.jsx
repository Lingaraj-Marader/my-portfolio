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
  ArrowUpRight,
  X,
  Code,
  Zap
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import { projectsData } from '../data/portfolioData';

const categoryList = ['All', 'AI & GenAI', 'Machine Learning', 'Full Stack'];

function ProjectCard({ project, onSelect }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15 transition-all group relative overflow-hidden"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
        }}
      />

      {/* Decorative top corner accent */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
            {project.category}
          </span>
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            <Zap className="w-3 h-3 text-cyan-400" />
            {project.metrics}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3
          onClick={() => onSelect(project)}
          className="font-heading font-extrabold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between cursor-pointer"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </h3>

        <p className="text-xs sm:text-sm font-medium text-blue-400/90 mb-4">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((highlight, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-white/10">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-lg bg-dark-950/80 text-cyan-300 border border-cyan-500/20 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-dark-950 hover:bg-dark-850 border border-white/10 hover:border-cyan-500/40 transition-all shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Code</span>
          </a>

          <button
            onClick={() => onSelect(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Architecture & Impact</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

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
            Real-world AI screening agents, algorithmic evaluators, and production full-stack systems.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
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
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Detailed Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark-950/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-dark-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-dark-950 text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedProject.metrics}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mb-4">
                {selectedProject.subtitle}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/10 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                  <Code className="w-4 h-4" />
                  <span>Key Architectural Deliverables</span>
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-dark-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-dark-950 hover:bg-dark-850 border border-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
