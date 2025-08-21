/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Code, Star, Award } from 'lucide-react';
import { ThemeContext } from './ThemeContext';
import myphoto from "../assets/myphoto.jpeg";
import photo from "../assets/photo.jpg"; // Changed from .jpeg to .jpg
import photoModified from "../assets/photo-modified.png";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Muhammad_Usman_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
      rotateY: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textContentVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const gradientTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "backOut"
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -8,
      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      y: -2
    }
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 80
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "backOut"
      }
    }
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + i * 0.1,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.15,
      rotateY: 10,
      z: 20,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const magneticVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background redblack:bg-redblack-background relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          className="absolute top-20 left-20 w-72 h-72 bg-light-primary/20 dark:bg-dark-primary/20 redblack:bg-redblack-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 w-72 h-72 bg-light-secondary/20 dark:bg-dark-secondary/20 redblack:bg-redblack-primaryLight/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          variants={pulseVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-light-primary/20 dark:bg-dark-primary/20 redblack:bg-redblack-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Side - Image */}
          <motion.div
            variants={imageVariants}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={magneticVariants.hover}
              className="relative group"
            >
              {/* Image Container with 3D Effect */}
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Image Frame */}
                <motion.div
                  className="relative w-full h-full bg-gradient-to-br from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary rounded-full p-2 shadow-2xl"
                  whileHover={{
                    rotateY: 15,
                    rotateX: 10,
                    scale: 1.05,
                    transition: { duration: 0.4 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <img
                      src={photoModified}
                      alt="Muhammad Usman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-light-success to-emerald-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code size={24} className="text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Star size={28} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={textContentVariants}
            className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Name */}
            <div className="space-y-4">
              <motion.h1
                variants={titleVariants}
                className="text-5xl md:text-7xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary leading-tight"
              >
                <motion.span 
                  className="block"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  Muhammad
                </motion.span>
                <motion.span 
                  variants={gradientTextVariants}
                  className="block bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight bg-clip-text text-transparent"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(var(--primary), 0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  Usman
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary font-medium"
              >
                MERN Stack Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building scalable web applications with React.js, Node.js, Express, and MongoDB.
                Passionate about creating exceptional user experiences through clean code and modern design.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div 
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <motion.button
                custom={0}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight text-white rounded-full flex items-center space-x-2 relative overflow-hidden group shadow-lg"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  View My Work
                </motion.span>
                <motion.div
                  whileHover={{ x: 5, rotate: -45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              <motion.button
                custom={1}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary rounded-full border-2 border-light-textSecondary/50 dark:border-dark-textSecondary/50 redblack:border-redblack-textSecondary/50 hover:border-light-primary dark:hover:border-dark-primary redblack:hover:border-redblack-primary hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary flex items-center space-x-2 backdrop-blur-sm relative overflow-hidden group shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Download size={20} />
                </motion.div>
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  Download CV
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-light-primary/10 to-light-secondary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ borderRadius: '9999px' }}
                />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={statsVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20"
            >
              {[
                { icon: Code, label: '1+ Years Experience', value: 'Development' },
                { icon: Star, label: '5+ Projects', value: 'Completed' },
                { icon: Award, label: 'MERN Stack', value: 'Certified' },
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statItemVariants}
                  whileHover="hover"
                  className="text-center group cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight rounded-full flex items-center justify-center shadow-lg relative"
                    whileHover={{
                      rotateY: 180,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Icon size={24} className="text-white" />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                  <motion.p
                    className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary"
                    whileHover={{ scale: 1.05 }}
                  >
                    {label}
                  </motion.p>
                  <motion.p
                    className="text-xs text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary"
                    whileHover={{ scale: 1.05 }}
                  >
                    {value}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;