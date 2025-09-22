 
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  ExternalLink,
  Code,
  Star,
  Zap,
  Heart,
  Send
} from "lucide-react";
import { motion, useInView, useAnimation, useScroll, useTransform, useSpring } from "framer-motion";

const Footer = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const controls = useAnimation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll-based animations
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), { 
    stiffness: 150, damping: 30 
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialItems = [
    { 
      href: "https://github.com/officialmuhammadusman", 
      icon: Github, 
      label: "GitHub"
    },
    { 
      href: "https://www.linkedin.com/in/muhammadusman-webdev", 
      icon: Linkedin, 
      label: "LinkedIn"
    },
    { 
      href: "mailto:official.muhammadusman01@gmail.com", 
      icon: Mail, 
      label: "Email"
    },
  ];

  const quickLinks = [
    { id: "about", label: "About", icon: Star },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "experience", label: "Experience", icon: Code },
    { id: "projects", label: "Projects", icon: ExternalLink },
    { id: "contact", label: "Contact", icon: Send },
  ];

  return (
    <motion.footer
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0a] text-[#f8fafc]"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Floating Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3b82f6]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-[#f8fafc] font-poppins mb-4"
            variants={floatingVariants}
            animate="animate"
          >
            Muhammad Usman
          </motion.h2>
          <motion.p 
            className="text-xl text-[#94a3b8] font-inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Crafting digital experiences that push the boundaries of what's possible. 
            Let's build something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Connect Section */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#34d399]" />
              Let's Connect
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1e293b]/50 backdrop-blur-sm border border-[#3b82f6]/30 transition-all duration-300 hover:bg-[#1e293b]/80"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.15 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6] flex items-center justify-center transition-all duration-300">
                    <item.icon size={20} className="text-[#f8fafc]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[#f8fafc] font-medium font-inter">{item.label}</span>
                  </div>
                  <ExternalLink size={16} className="text-[#94a3b8] group-hover:text-[#22d3ee] transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#34d399]" />
              Quick Navigation
            </h3>
            
            <div className="space-y-2">
              {quickLinks.map(({ id, label, icon: Icon }, index) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="group w-full flex items-center gap-3 p-3 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e293b]/50 transition-all duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <Icon size={18} className="text-[#3b82f6] group-hover:text-[#22d3ee] transition-colors duration-300" />
                  <span className="font-medium font-inter">{label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-[#34d399]" />
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Abbottabad, Pakistan" },
                { icon: Phone, text: "(0313) 526-3300" },
                { icon: Mail, text: "official.muhammadusman01@gmail.com" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#1e293b]/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.25 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-[#3b82f6] group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={18} />
                  </div>
                  <span className="text-[#94a3b8] group-hover:text-[#f8fafc] font-inter transition-colors duration-300 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] hover:bg-gradient-to-r hover:from-[#22d3ee] hover:to-[#3b82f6] text-[#f8fafc] rounded-2xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 font-inter"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-[#1e293b]/50 pt-8"
          variants={sectionVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-[#94a3b8] text-sm font-inter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {new Date().getFullYear()} Muhammad Usman. Crafted with passion and precision.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-2 text-sm text-[#94a3b8] font-inter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-[#34d399]" />
              </motion.div>
              <span>and lots of coffee</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#3b82f6] hover:bg-[#22d3ee] text-[#f8fafc] rounded-2xl shadow-sm border border-[#1e293b]/50 backdrop-blur-sm z-50"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0, 
          rotate: showBackToTop ? 0 : -180 
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 360
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;