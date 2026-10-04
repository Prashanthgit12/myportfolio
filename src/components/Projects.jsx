import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  SpotlightCard 
} from './animations/MotionComponents';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Production-grade full-stack architectures solving complex real-time concurrency, algorithmic evaluation, and distributed data management.
          </p>
        </FadeIn>

        {/* Projects Grid with StaggerContainer */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" staggerChildren={0.15}>
          {projectsData.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <SpotlightCard
                className="glass-card rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-xl flex flex-col justify-between overflow-hidden group h-full hover:-translate-y-2 transition-all duration-300"
              >
                {/* Card Banner / Header with Gradient Accent */}
                <div>
                  <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-slate-800/80 relative overflow-hidden`}>
                    {/* Subtle light sweep effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-center justify-between gap-3 mb-3 relative z-10">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                        Production Stack
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-cyan-300 font-mono transition-colors bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700/50"
                        title="View System Architecture"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Architecture</span>
                      </motion.button>
                    </div>

                    <h3 className="text-2xl font-display font-black text-white group-hover:text-cyan-300 transition-colors relative z-10">
                      {project.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400/90 mt-0.5 relative z-10">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* High Impact Highlights Preview */}
                    <div className="space-y-2 mb-5">
                      {project.highlights.slice(0, 2).map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Badges with CountUp */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center mb-5">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-xs sm:text-sm font-bold text-white tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack pill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60 group-hover:border-slate-600 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-3">
                  <motion.button
                    whileHover={{ x: 2 }}
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>System Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>

                  <div className="flex items-center gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>

                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-400 border border-cyan-500/30 transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                        title="Launch Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Modal deep dive */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
