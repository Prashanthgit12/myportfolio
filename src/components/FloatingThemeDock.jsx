import React, { useState } from 'react';
import { Palette, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/useTheme';

export default function FloatingThemeDock() {
  const { theme, themes, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);
  const [hoveredTheme, setHoveredTheme] = useState(null);

  return (
    <aside 
      aria-label="Floating Theme Switcher"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center select-none"
    >
      <div className="relative flex items-center">
        {/* Hover Tooltip Popup */}
        <AnimatePresence>
          {hoveredTheme && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: -45, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1.5 rounded-xl glass-card border border-slate-700/80 shadow-xl backdrop-blur-xl flex items-center gap-1.5 whitespace-nowrap text-xs z-50"
              style={{
                background: 'rgba(10, 15, 29, 0.95)',
                borderColor: hoveredTheme.primaryColor
              }}
            >
              <span>{hoveredTheme.emoji}</span>
              <span className="font-semibold text-white">{hoveredTheme.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">({hoveredTheme.category})</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Capsule Bar */}
        <motion.div
          layout
          className="flex items-center gap-1.5 p-1.5 rounded-full glass-card border border-slate-700/80 shadow-2xl backdrop-blur-xl shadow-black/50"
          style={{
            background: 'rgba(13, 19, 34, 0.85)'
          }}
        >
          {/* Main Toggle / Palette Icon */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-center"
            title={isExpanded ? 'Collapse Theme Dock' : 'Open Theme Dock'}
            aria-label="Toggle theme dock"
          >
            <Palette className="w-4 h-4 text-cyan-400" />
            <span className="sr-only">Toggle theme dock</span>
          </button>

          {/* Expanded Swatch Dots */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-1 overflow-hidden"
              >
                {themes.map((t) => {
                  const isActive = t.id === theme;
                  return (
                    <motion.button
                      key={t.id}
                      whileHover={{ scale: 1.25, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setTheme(t.id)}
                      onMouseEnter={() => setHoveredTheme(t)}
                      onMouseLeave={() => setHoveredTheme(null)}
                      className={`relative w-6 h-6 rounded-full transition-all focus:outline-none flex items-center justify-center ${
                        isActive
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 shadow-lg scale-110'
                          : 'opacity-70 hover:opacity-100 hover:shadow-md'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${t.primaryColor}, ${t.secondaryColor})`,
                        boxShadow: isActive ? `0 0 12px ${t.primaryColor}` : 'none'
                      }}
                      aria-label={`Switch to ${t.name} theme`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Collapse Arrow Indicator */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors text-xs"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? (
              <ChevronRight className="w-3.5 h-3.5" />
            ) : (
              <ChevronLeft className="w-3.5 h-3.5" />
            )}
          </button>
        </motion.div>
      </div>
    </aside>
  );
}
