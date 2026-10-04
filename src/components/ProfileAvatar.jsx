import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, 
  Atom, 
  Zap, 
  Award 
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';

/**
 * ProfileAvatar: High-end circular developer portrait with dynamic ambient glow,
 * spinning gradient rings, orbital nodes, floating tech pills, and live status badge.
 */
export default function ProfileAvatar({
  size = 'hero', // 'hero' | 'about' | 'compact' | 'mini'
  showFloatingBadges = true,
  showStatus = true,
  className = '',
}) {
  // Dimension styles mapping
  const sizeMap = {
    hero: {
      container: 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80',
      imageWrap: 'w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64',
      glowSize: 'w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96',
      badgeText: 'text-xs',
      badgePadding: 'px-3 py-1.5',
      iconSize: 'w-3.5 h-3.5',
    },
    about: {
      container: 'w-56 h-56 sm:w-64 sm:h-64',
      imageWrap: 'w-44 h-44 sm:w-52 sm:h-52',
      glowSize: 'w-64 h-64 sm:w-72 sm:h-72',
      badgeText: 'text-[11px]',
      badgePadding: 'px-2.5 py-1',
      iconSize: 'w-3 h-3',
    },
    compact: {
      container: 'w-36 h-36',
      imageWrap: 'w-28 h-28',
      glowSize: 'w-40 h-40',
      badgeText: 'text-[10px]',
      badgePadding: 'px-2 py-0.5',
      iconSize: 'w-2.5 h-2.5',
    },
    mini: {
      container: 'w-10 h-10',
      imageWrap: 'w-9 h-9',
      glowSize: 'w-12 h-12',
      badgeText: '',
      badgePadding: '',
      iconSize: '',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.hero;

  if (size === 'mini') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-spin-slow opacity-80" />
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-700 bg-slate-900">
          <img
            src={profileImg}
            alt="Borra Prashanth"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${currentSize.container} ${className}`}>
      
      {/* 1. Ambient Background Pulse Glow */}
      <div 
        className={`absolute rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-purple-600/25 blur-2xl animate-pulse-slow pointer-events-none ${currentSize.glowSize}`} 
      />

      {/* 2. Outer Orbiting Dashed Radar Ring with Nodes */}
      <div 
        className="absolute inset-0 rounded-full border border-dashed border-cyan-500/25 animate-spin-reverse pointer-events-none"
      >
        {/* Orbital tech nodes */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-ping" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-sm shadow-purple-400" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
      </div>

      {/* 3. Outer Rotating Halo (Conic Gradient Ring) */}
      <div 
        className={`absolute rounded-full p-[2.5px] avatar-conic-glow animate-spin-slow shadow-xl shadow-cyan-500/10 ${currentSize.imageWrap}`}
      >
        <div className="w-full h-full rounded-full bg-[var(--theme-bg-main)]" />
      </div>

      {/* 4. Main Circular Image Wrapper */}
      <motion.div 
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative z-10 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-2xl shadow-cyan-950/80 bg-slate-900 group cursor-pointer ${currentSize.imageWrap}`}
      >
        <img
          src={profileImg}
          alt="Borra Prashanth - Java Full Stack Developer"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
          loading="eager"
        />

        {/* Gloss / Specular Sheen Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/15 pointer-events-none" />
        
        {/* Fine inner circular border */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
      </motion.div>

      {/* 5. Floating Glass Tech Pills */}
      {showFloatingBadges && (
        <>
          {/* Top-Left: Java & Spring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className={`absolute top-2 -left-2 sm:-left-4 z-20 animate-float flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono shadow-lg shadow-black/50 backdrop-blur-md hover:border-cyan-400 hover:scale-105 transition-all ${currentSize.badgePadding} ${currentSize.badgeText}`}
          >
            <span className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
              <Coffee className={currentSize.iconSize} />
            </span>
            <span className="font-semibold tracking-wide">Java & Spring</span>
          </motion.div>

          {/* Top-Right: React & WebSockets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className={`absolute top-4 -right-2 sm:-right-4 z-20 animate-float-delayed flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-indigo-500/40 text-indigo-300 font-mono shadow-lg shadow-black/50 backdrop-blur-md hover:border-indigo-400 hover:scale-105 transition-all ${currentSize.badgePadding} ${currentSize.badgeText}`}
          >
            <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400">
              <Atom className={currentSize.iconSize} />
            </span>
            <span className="font-semibold tracking-wide">React & Sockets</span>
          </motion.div>

          {/* Bottom-Left: Sub-100ms Latency */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className={`absolute bottom-8 -left-3 sm:-left-5 z-20 animate-float-delayed flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 font-mono shadow-lg shadow-black/50 backdrop-blur-md hover:border-emerald-400 hover:scale-105 transition-all ${currentSize.badgePadding} ${currentSize.badgeText}`}
          >
            <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
              <Zap className={currentSize.iconSize} />
            </span>
            <span className="font-semibold tracking-wide">&lt;100ms Latency</span>
          </motion.div>

          {/* Bottom-Right: 9.1 CGPA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className={`absolute bottom-6 -right-3 sm:-right-5 z-20 animate-float flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 font-mono shadow-lg shadow-black/50 backdrop-blur-md hover:border-amber-400 hover:scale-105 transition-all ${currentSize.badgePadding} ${currentSize.badgeText}`}
          >
            <span className="p-1 rounded-full bg-amber-500/20 text-amber-400">
              <Award className={currentSize.iconSize} />
            </span>
            <span className="font-semibold tracking-wide">9.1 CGPA</span>
          </motion.div>
        </>
      )}

      {/* 6. Active "Open to Work" Status Badge */}
      {showStatus && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-[#080d18]/95 border border-emerald-500/50 text-emerald-300 font-mono text-[11px] sm:text-xs font-semibold shadow-lg shadow-emerald-950/80 backdrop-blur-md hover:border-emerald-400 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Hire</span>
          </div>
        </motion.div>
      )}

    </div>
  );
}
