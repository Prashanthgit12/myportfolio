import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Code2, 
  Sparkles, 
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, skillsData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';
import { 
  FadeIn, 
  SpotlightCard 
} from './animations/MotionComponents';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeIn className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive overview of my programming languages, frameworks, cloud tools, and distributed system methodologies.
          </p>
        </FadeIn>

        {/* Filter Controls Bar */}
        <FadeIn delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs with Animated Spring Pill */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md w-full md:w-auto">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors relative duration-200 ${
                    isSelected ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill, tool or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </FadeIn>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  className="glass-card rounded-xl p-4 sm:p-5 border border-slate-800/80 hover:border-cyan-500/40 shadow-lg group relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 transition-all"
                >
                  {/* Top Row: Icon + Name */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/90 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors border border-slate-700/60 group-hover:scale-105">
                        <DynamicIcon name={skill.icon} className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-cyan-400/90 border border-slate-700/80">
                        {skill.level}%
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                      {skill.highlight}
                    </p>
                  </div>

                  {/* Bottom: Animated Progress Bar */}
                  <div className="mt-2 pt-2 border-t border-slate-800/70">
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-slate-800">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium">No skills match your filter.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for Java, React, SQL, or Docker.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-1.5 text-xs rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/30"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Methodology Feature Badges */}
        <FadeIn delay={0.2} className="mt-14">
          <SpotlightCard className="glass-card rounded-2xl p-6 border border-slate-800/80 bg-gradient-to-r from-[#0d1322] via-[#111827] to-[#0d1322]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Full Stack Architecture Mastery
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Trained across all layers: Database schema design &rarr; RESTful APIs & Spring Microservices &rarr; React Component Hierarchies.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  ⚡ 99.9% Uptime Mindset
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                  🚀 Sub-Second WebSockets
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">
                  🛡️ Stateless JWT & RBAC
                </span>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

      </div>
    </section>
  );
}
