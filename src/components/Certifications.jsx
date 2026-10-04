import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';
import { 
  FadeIn, 
  SpotlightCard 
} from './animations/MotionComponents';

export default function Certifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            A solid academic track record rooted in Computer Science theory combined with 600+ hours of full-stack engineering certification.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn delay={0.1} direction="right">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Formal Academic Education
                </h3>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <FadeIn key={idx} delay={0.15 + idx * 0.1} direction="up">
                  <SpotlightCard
                    className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 shadow-md group hover:-translate-y-1 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold">
                          {edu.badge}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                          {edu.score}
                        </span>
                        <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center sm:justify-end gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80 leading-relaxed">
                      {edu.details}
                    </p>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certification */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.2} direction="left">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Industry Credentials
                </h3>
              </div>
            </FadeIn>

            {certificationsData.map((cert, idx) => (
              <FadeIn key={idx} delay={0.25 + idx * 0.1} direction="left">
                <SpotlightCard
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-indigo-500/30 relative overflow-hidden group shadow-xl hover:-translate-y-1 transition-all"
                  spotlightColor="rgba(99, 102, 241, 0.16)"
                  borderColor="rgba(99, 102, 241, 0.4)"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-500/40">
                      Verified Credential
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      {cert.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <div className="text-xs sm:text-sm font-semibold text-indigo-400 mb-3">
                    {cert.issuer} • <span className="text-slate-300 font-normal">{cert.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Key Skills Gained */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Skills Acquired & Applied:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID badge */}
                  <div className="mt-6 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>ID: {cert.credentialId}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completed
                    </span>
                  </div>

                </SpotlightCard>
              </FadeIn>
            ))}

            {/* Quick summary highlight */}
            <FadeIn delay={0.4}>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/20 text-xs text-slate-300 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-pulse" />
                <span>
                  Equipped with strong theoretical CS pillars (OS, DBMS, Networks, OOP) and practical full-stack deployment skills.
                </span>
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
}
