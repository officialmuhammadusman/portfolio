/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Briefcase, GraduationCap, Phone, ChevronRight, Sparkles, ExternalLink, Zap, Star, ArrowRight } from 'lucide-react';

const Navigation = ({ activeSection = 'hero', scrollToSection = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
   
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize and mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkIsMobile();
    handleScroll();

    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: User, description: 'Back to top' },
    { id: 'about', label: 'About', icon: User, description: 'Learn about me' },
    { id: 'skills', label: 'Skills', icon: Code, description: 'Technical expertise' },
    { id: 'experience', label: 'Experience', icon: Briefcase, description: 'Work history' },
    { id: 'projects', label: 'Projects', icon: Code, description: 'Featured work' },
    { id: 'education', label: 'Education', icon: GraduationCap, description: 'Academic background' },
    { id: 'contact', label: 'Contact', icon: Phone, description: 'Get in touch' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const handleHireMeClick = () => {
    scrollToSection('contact');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg border-b border-[#1e293b]/60'
            : 'bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-[#1e293b]/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* Logo Section - Always visible */}
            <div 
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0"
              onClick={() => handleNavClick('hero')}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110">
                <Sparkles size={16} className="sm:w-5 sm:h-5 text-[#f8fafc]" />
              </div>
              <div className="hidden xs:block">
                <div className="text-lg sm:text-xl font-bold text-[#f8fafc] font-sans">
                  Muhammad Usman
                </div>
                <div className="text-xs text-[#94a3b8] -mt-1 hidden sm:block">
                  MERN Developer
                </div>
              </div>
              {/* Mobile-only compact logo */}
              <div className="block xs:hidden">
                <div className="text-base font-bold text-[#f8fafc]">MU</div>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative px-3 xl:px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    activeSection === id
                      ? 'text-[#3b82f6] bg-[#3b82f6]/10'
                      : 'text-[#94a3b8] hover:text-[#22d3ee] hover:bg-[#1e293b]/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={16} className="text-[#94a3b8] group-hover:text-[#22d3ee]" />
                    <span className="hidden xl:inline">{label}</span>
                  </div>
                  
                  {activeSection === id && (
                    <div className="absolute inset-0 bg-[#3b82f6]/10 rounded-xl" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side - Hire Me + Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Desktop Hire Me Button */}
              <button
                onClick={handleHireMeClick}
                className="hidden md:flex relative group overflow-hidden bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] text-[#f8fafc] px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <Zap size={16} className="text-[#fbbf24]" />
                  <span>Hire Me</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Mobile Hire Me Button */}
              <button
                onClick={handleHireMeClick}
                className="md:hidden flex items-center space-x-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] text-[#f8fafc] px-3 py-2 rounded-lg font-semibold text-xs shadow-md hover:scale-105 transition-transform"
              >
                <Zap size={14} className="text-[#fbbf24]" />
                <span>Hire</span>
              </button>

              {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
              <button
                onClick={toggleMenu}
                className="lg:hidden menu-button p-2.5 rounded-xl bg-[#3b82f6]/10 border border-[#1e293b]/50 text-[#f8fafc] hover:bg-[#22d3ee]/20 transition-all duration-300 shadow-sm hover:scale-110"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 top-2' : 'top-1'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : 'top-2'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-5 bg-current transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 top-2' : 'top-3'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0a0a0a]/95 backdrop-blur-md border-l border-[#1e293b]/50 shadow-2xl z-50 lg:hidden mobile-menu transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#1e293b]/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-sm">
                <Sparkles size={20} className="text-[#f8fafc]" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#f8fafc]">Muhammad</div>
                <div className="text-xs text-[#94a3b8]">Usman</div>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-[#1e293b]/50 text-[#94a3b8] hover:text-[#22d3ee] hover:bg-[#1e293b]/80 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Hire Me CTA */}
          <div className="p-4 sm:p-6 border-b border-[#1e293b]/50">
            <button
              onClick={handleHireMeClick}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] text-[#f8fafc] p-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center space-x-3">
                <Star size={20} className="text-[#fbbf24]" />
                <span className="text-lg">HIRE ME NOW</span>
                <ArrowRight size={20} />
              </div>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-2">
              {navItems.map(({ id, label, icon: Icon, description }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-[#3b82f6]/10 border border-[#3b82f6]/30'
                      : 'bg-[#1e293b]/50 border border-[#1e293b]/50 hover:bg-[#1e293b]/80 hover:border-[#22d3ee]/20'
                  }`}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeSection === id
                          ? 'bg-[#3b82f6] text-[#f8fafc]'
                          : 'bg-[#1e293b]/50 text-[#94a3b8] group-hover:text-[#22d3ee] group-hover:bg-[#1e293b]/80'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div className="text-left">
                        <div className={`font-medium transition-colors ${
                          activeSection === id ? 'text-[#f8fafc]' : 'text-[#94a3b8] group-hover:text-[#22d3ee]'
                        }`}>
                          {label}
                        </div>
                        <div className="text-xs text-[#94a3b8] mt-0.5">{description}</div>
                      </div>
                    </div>
                    
                    <ChevronRight 
                      size={16} 
                      className={`transition-all duration-300 group-hover:translate-x-1 ${
                        activeSection === id ? 'text-[#3b82f6]' : 'text-[#94a3b8] group-hover:text-[#22d3ee]'
                      }`}
                    />
                  </div>

                  {/* Active indicator */}
                  {activeSection === id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#22d3ee]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 sm:p-6 border-t border-[#1e293b]/50">
            <div className="text-center text-[#94a3b8] text-sm">
              <div className="mb-2 font-medium text-[#f8fafc]">Muhammad Usman</div>
              <div className="text-xs">MERN Stack Developer</div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-0.5 bg-[#3b82f6] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;