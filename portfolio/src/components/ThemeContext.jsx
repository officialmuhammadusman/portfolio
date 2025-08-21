/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const validThemes = ['light', 'dark'];

  // Strictly get initial theme
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      let savedTheme = localStorage.getItem('theme');

      // Remove invalid saved theme
      if (!validThemes.includes(savedTheme)) {
        localStorage.removeItem('theme');
        savedTheme = null;
      }

      if (savedTheme) return savedTheme;

      // Use system preference if no valid saved theme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme class and save in localStorage
  useEffect(() => {
    document.documentElement.classList.remove(...validThemes);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
