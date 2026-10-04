import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme';

export default function ThemeSelector({ variant = 'desktop' }) {
  const { theme, currentTheme, themes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mobile list view (embedded in drawer)
  if (variant === 'mobile') {
    return (
      <div className="w-full pt-2">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-cyan-400" />
            <span>Select Portfolio Theme</span>
          </span>
          <span className="text-[11px] font-mono text-cyan-400">
            {currentTheme.name}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {themes.map((t) => {
            const isActive = t.id === theme;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex items-center gap-2.5 p-2 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-slate-800/90 border-2 border-cyan-400/80 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/50'
                }`}
              >
                {/* Theme Swatch Dot */}
                <div 
                  className="w-4 h-4 rounded-full shrink-0 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor})`
                  }}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-slate-200 truncate">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {t.category}
                  </span>
                </div>
                {isActive && (
                  <Check className="w-3.5 h-3.5 text-cyan-400 ml-auto shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Dropdown Button
  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 transition-all shadow-sm group focus:outline-none"
        title="Change Portfolio Color Theme"
        aria-label="Theme selector"
        aria-expanded={isOpen}
      >
        {/* Animated Gradient Color Orb */}
        <div 
          className="w-3 h-3 rounded-full shadow-sm animate-pulse-slow"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`,
            boxShadow: `0 0 8px ${currentTheme.primaryColor}`
          }}
        />

        <Palette className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
        
        <span className="hidden xl:inline font-mono font-medium text-slate-300 group-hover:text-white">
          {currentTheme.name}
        </span>

        <ChevronDown 
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-400' : ''
          }`} 
        />
      </motion.button>

      {/* Dropdown Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-72 p-2.5 rounded-2xl glass-card border border-slate-700/80 shadow-2xl shadow-black/60 z-50 backdrop-blur-xl"
            style={{
              background: 'rgba(13, 19, 34, 0.94)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>CHOOSE THEME</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                6 Themes
              </span>
            </div>

            {/* Themes List */}
            <div className="flex flex-col gap-1.5">
              {themes.map((t) => {
                const isActive = t.id === theme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl transition-all group ${
                      isActive
                        ? 'bg-slate-800/90 border border-cyan-500/50 shadow-md shadow-cyan-500/10'
                        : 'hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Gradient Pill Preview */}
                      <div 
                        className="w-5 h-5 rounded-full p-0.5 border border-white/20 shadow-md shrink-0 flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor})`
                        }}
                      >
                        <span className="text-[9px]">{t.emoji}</span>
                      </div>

                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-semibold ${
                            isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}>
                            {t.name}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-slate-800 text-slate-400">
                            {t.category}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-sans line-clamp-1">
                          {t.tagline}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick helper tip footer */}
            <div className="mt-2.5 pt-2 border-t border-slate-800/70 px-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>Canvas & glows adapt live</span>
              <span className="text-cyan-400 font-semibold">Instant switch</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
