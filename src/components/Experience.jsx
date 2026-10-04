import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { 
  FadeIn, 
  SpotlightCard 
} from './animations/MotionComponents';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Demonstrated engineering experience developing robust microservice endpoints, real-time architectures, and high-performance full-stack applications.
          </p>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line with Animated Flowing Beam */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-slate-800/80 overflow-hidden">
            <motion.div
              className="w-full h-40 bg-gradient-to-b from-transparent via-cyan-400 to-indigo-500"
              animate={{
                y: ['-100%', '400%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'linear',
              }}
            />
          </div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.15} 
                direction="up"
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden md:flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-16 h-16 rounded-2xl bg-[#0d1322] border-2 border-cyan-500/60 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 z-10 relative group"
                  >
                    <span className="absolute -inset-1 rounded-2xl bg-cyan-500/20 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    {idx === 0 ? <Zap className="w-7 h-7 text-cyan-400 relative z-10" /> : <Briefcase className="w-7 h-7 text-indigo-400 relative z-10" />}
                  </motion.div>
                  <div className="h-full w-0.5 bg-slate-800 my-2"></div>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <SpotlightCard className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/40 shadow-xl group-hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all">
                    
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                            {exp.type}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-slate-300 mt-0.5 flex flex-wrap items-center gap-2">
                          <span className="text-indigo-400">{exp.company}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quantifiable Impact Metrics */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-4 my-5 p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      {exp.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-base sm:text-xl font-display font-black text-cyan-400 tabular-nums">
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-slate-400 mr-1">Skills:</span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-cyan-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </SpotlightCard>
                </div>

              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
