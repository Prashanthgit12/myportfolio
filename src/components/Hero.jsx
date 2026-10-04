import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  CheckCircle, 
  Copy 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { 
  FadeIn, 
  SpotlightCard, 
  CountUp, 
  Typewriter,
  MagneticButton 
} from './animations/MotionComponents';
import ProfileAvatar from './ProfileAvatar';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const roleTitles = [
    "Java Full Stack Developer",
    "Spring Boot & Microservices Engineer",
    "Real-Time Systems Architect (AuctionX)",
    "B.Tech CSE Graduate • CGPA 9.1",
    "Low-Latency Concurrency Specialist"
  ];

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Mobile-Only Circular Avatar Showcase */}
            <FadeIn delay={0.05} direction="down" className="lg:hidden w-full flex justify-center mb-8">
              <ProfileAvatar size="about" showFloatingBadges={true} showStatus={true} />
            </FadeIn>

            {/* Status Badge */}
            <FadeIn delay={0.08} direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10 mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Full-Time SDE & Java Full Stack Roles</span>
              </div>
            </FadeIn>

            {/* Name & Animated Dynamic Role */}
            <FadeIn delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-4">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {personalInfo.name}
                </span>
              </h1>
            </FadeIn>

            {/* Typewriter Dynamic Title */}
            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 min-h-[36px] flex items-center">
                  <Typewriter 
                    words={roleTitles} 
                    typingSpeed={65} 
                    deletingSpeed={35} 
                    pauseTime={2400} 
                    className="text-cyan-300 font-medium"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Tech chips */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-md bg-indigo-950/70 border border-indigo-500/30 text-indigo-300">
                  Spring Boot & React.js
                </span>
                <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                  Real-Time WebSockets
                </span>
                <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                  CGPA 9.1 / 10.0
                </span>
              </div>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.35}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
                {personalInfo.tagline}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.45}>
              <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
                <MagneticButton strength={8}>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 hover:from-cyan-400 hover:via-indigo-500 hover:to-indigo-600 shadow-lg shadow-cyan-500/25 transition-all"
                    id="hero-view-projects-btn"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={8}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenResume}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/50 shadow-md shadow-black/40 transition-all"
                    id="hero-download-resume-btn"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Resume</span>
                  </motion.button>
                </MagneticButton>

                <MagneticButton strength={8}>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/30 transition-all"
                    id="hero-get-in-touch-btn"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </motion.a>
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Social and Quick Contact Chips */}
            <FadeIn delay={0.55}>
              <div className="pt-6 border-t border-slate-800/70 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 group"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                  <span>github.com/{personalInfo.githubUsername}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 group"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                  <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all text-xs"
                  title="Click to copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Circular Profile Avatar Showcase */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center py-8">
            <FadeIn delay={0.25} direction="left" className="flex justify-center items-center w-full">
              <ProfileAvatar size="hero" showFloatingBadges={true} showStatus={true} />
            </FadeIn>
          </div>

        </div>

        {/* Highlight Stats Row with SpotlightCard & CountUp */}
        <FadeIn delay={0.6}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <SpotlightCard
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 shadow-lg shadow-black/20 group hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white group-hover:text-cyan-400 transition-colors flex items-baseline">
                  <CountUp
                    value={stat.value}
                    decimals={stat.value.includes('.') ? 1 : 0}
                    className="tabular-nums"
                  />
                  <span className="text-base sm:text-lg font-mono text-cyan-400/90 ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {stat.description}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
