/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { Menu, X, Moon, Sun, User, Code, Briefcase, GraduationCap, Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './ThemeContext'; // Assuming ThemeContext is defined elsewhere

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-light-card/95 dark:bg-dark-card/95 redblack:bg-redblack-card/95 backdrop-blur-xl shadow-2xl border-b border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10'
          : 'bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 backdrop-blur-md border-b border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            Muhammad Usman
          </motion.div>

          <div className="hidden md:flex space-x-2 items-center">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeSection === id
                    ? 'text-light-primary dark:text-dark-primary redblack:text-redblack-primary'
                    : 'text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
                
                {activeSection === id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-light-primary/10 to-light-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/10 redblack:from-redblack-primary/10 redblack:to-redblack-primaryLight/10 rounded-xl"
                    layoutId="activeTab"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-light-primary/5 to-light-secondary/5 dark:from-dark-primary/5 dark:to-dark-secondary/5 redblack:from-redblack-primary/5 redblack:to-redblack-primaryLight/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-gradient-to-br from-light-background/80 to-light-card dark:from-dark-background/80 dark:to-dark-card redblack:from-redblack-background/80 redblack:to-redblack-card text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:from-light-primary/20 hover:to-light-secondary/20 dark:hover:from-dark-primary/20 dark:hover:to-dark-secondary/20 redblack:hover:from-redblack-primary/20 redblack:hover:to-redblack-primaryLight/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              title={
                theme === 'light'
                  ? 'Switch to Dark Mode'
                  : theme === 'dark'
                  ? 'Switch to Redblack Mode'
                  : 'Switch to Light Mode'
              }
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? (
                    <Moon size={20} />
                  ) : theme === 'dark' ? (
                    <Sun size={20} />
                  ) : (
                    <Sun size={20} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-light-background/80 dark:bg-dark-background/80 redblack:bg-redblack-background/80 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 redblack:hover:bg-redblack-primary/20 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-xl text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary hover:bg-light-background/50 dark:hover:bg-dark-background/50 redblack:hover:bg-redblack-background/50 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map(({ id, label, icon: Icon }, index) => (
                <motion.button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 w-full text-left px-4 py-3 rounded-lg mx-2 mb-2 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary hover:bg-light-background/50 dark:hover:bg-dark-background/50 redblack:hover:bg-redblack-background/50 transition-all duration-300"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;