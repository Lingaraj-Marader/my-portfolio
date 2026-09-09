import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  Cpu,
  Target,
  Rocket,
  Code2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function AnimatedCounter({ value, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract number from string like "8+", "95%", "15+"
  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = targetNum;
    const totalFrames = 60 * duration;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // easeOutExpo formula
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easedProgress * end);

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, targetNum, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `const engineer = {
  name: "Lingaraj Marader",
  currentRole: "Full Stack Developer @ Zeta Coding Innovation",
  pastRole: "ML & GenAI Intern @ Contriver",
  coreFocus: ["LLM Agents", "Vector Embeddings", "MERN Stack"],
  status: "Ready to ship production intelligence"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
            
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Engineering Beyond Models
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Full Stack + AI/ML
                </span>
              </div>

              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interactive Code Console preview */}
            <div className="mt-6 rounded-2xl bg-dark-950/90 border border-white/10 p-4 font-mono text-xs overflow-x-auto relative">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 font-sans text-[11px]">profile.config.ts</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="text-slate-300 leading-5">
                <span className="text-violet-400">const</span>{' '}
                <span className="text-cyan-300">engineer</span> = &#123;{'\n'}
                {'  '}name: <span className="text-emerald-300">"Lingaraj Marader"</span>,{'\n'}
                {'  '}currentRole: <span className="text-emerald-300">"Full Stack Developer @ Zeta"</span>,{'\n'}
                {'  '}specialization: [<span className="text-amber-300">"LLMs"</span>, <span className="text-amber-300">"Semantic Search"</span>, <span className="text-amber-300">"React/Node"</span>],{'\n'}
                {'  '}availability: <span className="text-cyan-400">true</span>{'\n'}
                &#125;;
              </pre>
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

          {/* Key Metrics / Stats Column with Counting Animation (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 hover:bg-dark-850/90 transition-all flex flex-col justify-center group shadow-lg"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25">
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
                className={`p-6 rounded-3xl bg-gradient-to-b ${pillar.color} bg-dark-900/60 border ${pillar.border} backdrop-blur-lg hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${pillar.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
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
