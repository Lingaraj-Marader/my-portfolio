import React from 'react';
import { Mail, Phone, ArrowUp, Heart, Sparkles } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-dark-950/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 text-xl font-black font-heading tracking-tight mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-cyan-500/20">
                L
              </div>
              <span className="text-white">
                Lingaraj{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Marader
                </span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              AI/ML Engineer & Full Stack Developer building production intelligence & modern web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-dark-800 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-dark-800 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-dark-800 transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.contact.phones[0].replace(/\s+/g, '')}`}
              aria-label="Phone"
              className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-dark-800 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/30 transition-all shadow-sm"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Lingaraj Marader. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS & Framer Motion</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
