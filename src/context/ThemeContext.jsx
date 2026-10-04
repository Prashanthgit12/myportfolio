import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextInstance';
import { themes } from '../data/themesData';

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && themes.some(t => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'cyber';
  });

  const currentTheme = themes.find(t => t.id === themeId) || themes[0];

  useEffect(() => {
    // 1. Set data-theme attribute on documentElement
    document.documentElement.setAttribute('data-theme', themeId);

    // 2. Set root CSS custom properties
    const root = document.documentElement;
    Object.entries(currentTheme.cssVars).forEach(([prop, val]) => {
      root.style.setProperty(prop, val);
    });

    // 3. Persist to localStorage
    try {
      localStorage.setItem('portfolio-theme', themeId);
    } catch {
      // ignore
    }
  }, [themeId, currentTheme]);

  const setTheme = (id) => {
    if (themes.some(t => t.id === id)) {
      setThemeId(id);
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.id === themeId);
    const nextIndex = (currentIndex + 1) % themes.length;
    setThemeId(themes[nextIndex].id);
  };

  return (
    <ThemeContext.Provider value={{
      theme: themeId,
      currentTheme,
      themes,
      setTheme,
      cycleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
