import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Layers,
  Code,
  Database,
  Cpu,
  Sparkles,
  Check,
  Terminal,
  FileCode2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Layers: Layers,
  Code: Code,
  Database: Database,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            A comprehensive toolbox spanning modern AI/ML frameworks, cloud databases, and high-performance web stacks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-dark-900/80 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="wait">
            {displayedCategories.map((group, idx) => {
              const Icon = iconMap[group.icon] || Code;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl bg-dark-900/70 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Bars & Chips */}
                    <div className="space-y-3.5 mt-6">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-medium text-slate-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                              {skill.tag}
                            </span>
                          </div>

                          {/* Progress Track */}
                          <div className="w-full h-1.5 rounded-full bg-dark-950 overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-sm shadow-cyan-400/50"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span>Proficiency based on shipped code</span>
                    <span className="text-cyan-400 font-mono">Production Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
