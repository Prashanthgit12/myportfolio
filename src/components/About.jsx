import React from 'react';
import { 
  GraduationCap, 
  Zap, 
  Database, 
  Server, 
  Code2, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  SpotlightCard 
} from './animations/MotionComponents';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: "Backend & Microservices",
      description: "Designing resilient RESTful microservices with Java Spring Boot, Hibernate/JPA, and Node.js. Focused on concurrency, clean layered architecture, and secure endpoints.",
      color: "from-cyan-500 to-blue-600",
      tag: "Spring Boot • Java"
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      description: "Architecting sub-second latency WebSocket engines (Socket.IO) for dynamic live bid feeds, automated timers, and real-time state synchronization across concurrent clients.",
      color: "from-indigo-500 to-purple-600",
      tag: "Socket.IO • Low Latency"
    },
    {
      icon: Database,
      title: "Database Performance & Indexing",
      description: "Crafting optimized schemas across relational (MySQL, PostgreSQL Neon DB) and NoSQL (MongoDB Atlas) stores. Hands-on tuning with query plans and connection pooling.",
      color: "from-emerald-500 to-teal-600",
      tag: "PostgreSQL • MongoDB"
    },
    {
      icon: Code2,
      title: "Modern Interactive UI",
      description: "Building responsive, accessible web interfaces using React.js, Tailwind CSS, and Framer Motion with seamless state management and intuitive user experiences.",
      color: "from-amber-500 to-orange-600",
      tag: "React.js • Tailwind CSS"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Borra Prashanth</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Computer Science engineer committed to building rock-solid backend services, reactive frontends, and low-latency distributed systems.
          </p>
        </FadeIn>

        {/* Story & Background Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} direction="right" className="h-full">
              <SpotlightCard className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between h-full">
                
                {/* Author Profile Header */}
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-800/80">
                  <div className="relative group shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 animate-spin-slow opacity-80 blur-xs" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-xl shadow-cyan-950/60 bg-slate-900">
                      <img 
                        src={profileImg} 
                        alt="Borra Prashanth" 
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
                      <span>Borra Prashanth</span>
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-cyan-400 font-medium">
                      Java Full Stack & Distributed Systems Engineer
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-400">
                      <span className="text-slate-300">B.Tech CSE '25</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">CGPA 9.1</span>
                      <span>•</span>
                      <span>Tirupati / Hyderabad</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
                    <span>Building High-Throughput & Scalable Systems</span>
                  </h4>
                  <p>
                    I am a Computer Science graduate from <span className="text-cyan-300 font-semibold">Sree Vidyanikethan Engineering College</span>, where I achieved an academic standing of <span className="text-white font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">CGPA 9.1 / 10.0</span>.
                  </p>
                  <p>
                    My engineering passion lies at the intersection of robust backend engines and reactive frontend architectures. Whether it's building a <span className="text-slate-100 font-medium">real-time IPL Virtual Auction engine (AuctionX)</span> capable of sub-second bids, or crafting an <span className="text-slate-100 font-medium">online code judge (AlgoX)</span> with automated multi-language execution pipelines, I focus on clean code, minimal latency, and zero downtime.
                  </p>
                  <p>
                    With over <span className="text-indigo-300 font-semibold">600+ hours</span> of professional full-stack training and hands-on internship experience optimizing REST endpoints and database queries, I bring solid theoretical fundamentals and pragmatic execution to any engineering team.
                  </p>
                </div>

                {/* Quick Badges */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300">
                    🎓 SVEC CSE '25
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-semibold">
                    ⭐ CGPA: 9.1 / 10.0
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                    ⚡ 600+ Hrs Coursework
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                    🚀 4+ Production Apps
                  </span>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

          {/* Academic & Core Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <FadeIn delay={0.2} direction="left">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800/90 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Higher Education
                    </div>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      B.Tech in Computer Science
                    </h4>
                    <div className="text-xs text-slate-400 mt-1">
                      Sree Vidyanikethan Engineering College (2021 – 2025)
                    </div>
                    <div className="mt-2 text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      CGPA: 9.1 / 10.0 (First Class with Distinction)
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800/90 relative overflow-hidden group hover:border-indigo-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                      Full Stack Certification
                    </div>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      Java Full Stack Development
                    </h4>
                    <div className="text-xs text-slate-400 mt-1">
                      Elearn Info Tech (600+ Hours Intensive)
                    </div>
                    <div className="mt-2 text-xs text-slate-300">
                      Mastered Core Java, Spring Boot, React.js, Hibernate ORM, and SQL architectures.
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
              <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800/90 relative overflow-hidden group hover:border-violet-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                      Core Engineering Philosophy
                    </div>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      Low-Latency, High-Reliability
                    </h4>
                    <div className="text-xs text-slate-400 mt-1">
                      Prioritizing clean abstractions, asynchronous event handling, index optimization, and fail-safe error handling.
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>

        </div>

        {/* 4 Architectural Pillars Grid with StaggerContainer */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerChildren={0.12}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={idx}>
                <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 shadow-lg group flex flex-col justify-between h-full hover:-translate-y-1.5 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors border border-slate-700/60 group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-cyan-400/90 font-medium">
                      {pillar.tag}
                    </span>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
