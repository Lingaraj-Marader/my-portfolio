import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Lingaraj,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-dark-950/50">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Have an exciting opportunity, project collaboration, or just want to discuss AI/ML? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details & Direct Connect (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Direct channels to reach me quickly. Typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3.5">
                
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Email</span>
                      <a
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-sm font-medium text-slate-200 hover:text-cyan-300 truncate block transition-colors"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/5 transition-all relative shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phones */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 flex items-center gap-3 group hover:border-blue-500/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Phone / WhatsApp</span>
                    <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-200">
                      <a href="tel:+919535256698" className="hover:text-cyan-300 transition-colors">
                        +91 9535256698
                      </a>
                      <span className="text-slate-600">|</span>
                      <a href="tel:+918618006822" className="hover:text-cyan-300 transition-colors">
                        +91 8618006822
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase">Location</span>
                    <span className="text-sm font-medium text-slate-200">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-dark-950/70 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 hover:bg-dark-850 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">GitHub</span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                        github.com/Lingaraj-Marader
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>

              </div>
            </div>

            {/* Availability Footer Card */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-slate-300">
                Open to Full-Time & High-Impact AI/Engineering Opportunities.
              </span>
            </div>
          </motion.div>

          {/* Interactive Direct Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Pre-fills your message directly in your mail client.
                </p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Job Opportunity / AI Project / Collaboration"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your team, project, or what you'd like to build together..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
