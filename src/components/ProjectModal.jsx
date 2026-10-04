import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0d1322] border border-slate-700/80 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Modal Header */}
          <div className="relative px-6 py-6 border-b border-slate-800 bg-[#090d16]/90 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                  Featured Engineering Project
                </span>
                <span className="text-xs font-mono text-slate-400">
                  High-Concurrency Architecture
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm">
            {/* Tagline & Metrics Grid */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <p className="text-slate-200 text-sm sm:text-base font-normal mb-4">
                {project.tagline}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
                    <div className="text-lg sm:text-xl font-display font-bold text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Key Architectural Highlights</span>
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Breakdown by Tier */}
            <div>
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>System Design & Tier Breakdown</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold mb-1.5">
                    <Cpu className="w-4 h-4" />
                    <span>Frontend Client Layer</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.architecture.client}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-1.5">
                    <Server className="w-4 h-4" />
                    <span>Backend Engine & Services</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.architecture.server}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1.5">
                    <Database className="w-4 h-4" />
                    <span>Data Layer & Indexing</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Security & Auth Guards</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.architecture.security}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Frameworks Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-[#090d16] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-500">
              Engineered by Borra Prashanth
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Live System Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
