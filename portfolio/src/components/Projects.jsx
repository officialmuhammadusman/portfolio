/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Github, 
  ExternalLink, 
  Code, 
  Star, 
  Eye, 
  Zap,
  Layers,
  Globe,
  Shield,
  Smartphone,
  Database,
  Rocket,
  Heart
} from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Theme Context (mock for demo)
const ThemeContext = React.createContext({ theme: 'light' });

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, margin: "-100px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [hoveredProject, setHoveredProject] = useState(null);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      title: 'DevConnect',
      subtitle: 'MERN Stack Developer Networking Platform',
      description: 'A full-stack developer networking platform inspired by LinkedIn, GitHub, and Fiverr with real-time features and comprehensive project management.',
      image: '🌐',
      primaryColor: '#6366f1',
      secondaryColor: '#8b5cf6',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Cloudinary', 'JWT'],
      features: [
        { text: 'Authentication and Profile Setup with Cloudinary integration', icon: Shield },
        { text: 'Post Feed and Follow System with personalized timeline', icon: Heart },
        { text: 'Real-Time Chat & Notifications powered by Socket.IO', icon: Zap },
        { text: 'Project uploads and job applications via admin dashboard', icon: Layers },
      ],
      github: 'https://github.com/officialmuhammadusman/devconnect',
      live: null,
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      stats: { stars: '4', forks: '1', views: '10' }
    },
    {
      title: 'MERN eCommerce Platform',
      subtitle: 'Full-Stack E-commerce Solution',
      description: 'A comprehensive eCommerce platform with secure checkout, admin control, and responsive UI built with modern web technologies.',
      image: '🛒',
      primaryColor: '#059669',
      secondaryColor: '#10b981',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Cloudinary'],
      features: [
        { text: 'Advanced product filtering and cart management', icon: Database },
        { text: 'Admin dashboard for product CRUD operations', icon: Shield },
        { text: 'Mobile-first responsive design with Cloudinary integration', icon: Smartphone },
        { text: 'Secure payment processing and user authentication', icon: Shield },
      ],
      github: 'https://github.com/officialmuhammadusman/ecommerce-mernstack',
      live: null,
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      stats: { stars: '4', forks: '1', views: '10' }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const techVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="py-20 bg-gradient-to-br from-light-background via-light-card to-light-background dark:from-dark-background dark:via-dark-card dark:to-dark-background redblack:from-redblack-background redblack:via-redblack-card redblack:to-redblack-background relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
      >
        <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-light-primary/30 to-light-secondary/30 dark:from-dark-primary/30 dark:to-dark-secondary/30 redblack:from-redblack-primary/30 redblack:to-redblack-primaryLight/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-light-secondary/30 to-light-primary/30 dark:from-dark-secondary/30 dark:to-dark-primary/30 redblack:from-redblack-primaryLight/30 redblack:to-redblack-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 redblack:from-redblack-primary/20 redblack:to-redblack-primaryLight/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-4 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 redblack:from-redblack-primary/20 redblack:to-redblack-primaryLight/20 rounded-3xl backdrop-blur-sm border border-light-primary/20 dark:border-dark-primary/20 redblack:border-redblack-primary/20"
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
            >
              <Code className="w-10 h-10 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
              }}
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Projects
            </motion.h2>
          </motion.div>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary mx-auto rounded-full mb-6 relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary max-w-3xl mx-auto leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.3 }
              }
            }}
          >
            Showcasing my best work in full-stack web development and innovative digital solutions
          </motion.p>

          {/* Project Stats */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.6 
                }
              }
            }}
          >
            {[
              { icon: Code, label: "Projects", value: "2+" },
              { icon: Star, label: "Stars", value: "10+" },
              { icon: Eye, label: "Views", value: "100+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <stat.icon className="w-5 h-5 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
                  <span className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.4,
                delayChildren: 1
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={ { 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-light-card/95 via-light-card to-light-card/90 dark:from-dark-card/95 dark:via-dark-card dark:to-dark-card/90 redblack:from-redblack-card/95 redblack:via-redblack-card redblack:to-redblack-card/90 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
                whileHover={{
                  borderColor: "rgba(var(--color-primary), 0.3)",
                }}
              >
                {/* Project Header/Hero Image */}
                <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-black/20"
                    animate={{
                      background: hoveredProject === index 
                        ? "linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))"
                        : "rgba(0,0,0,0.2)"
                    }}
                  />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`
                        }}
                        animate={{
                          y: [-10, -30, -10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>

                  {/* Project Emoji/Icon */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-9xl opacity-30 filter blur-sm group-hover:blur-none group-hover:opacity-50 transition-all duration-500"
                      animate={hoveredProject === index ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {project.image}
                    </motion.span>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 flex space-x-3">
                    <AnimatePresence>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 10,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: -10,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Project Stats */}
                  <div className="absolute bottom-4 left-6 flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-white/80">
                      <Star size={16} className="fill-current" />
                      <span className="text-sm font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white/80">
                      <Eye size={16} />
                      <span className="text-sm font-medium">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <motion.div 
                  className="p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                >
                  {/* Title Section */}
                  <motion.div className="mb-6">
                    <motion.h3
                      className="text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-3 group-hover:bg-gradient-to-r group-hover:from-light-primary group-hover:to-light-secondary dark:group-hover:from-dark-primary dark:group-hover:to-dark-secondary redblack:group-hover:from-redblack-primary redblack:group-hover:to-redblack-primaryLight group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-light-primary dark:text-dark-primary redblack:text-redblack-primary font-semibold text-sm uppercase tracking-wider"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      {project.subtitle}
                    </motion.p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mb-8 leading-relaxed text-lg"
                    whileHover={{ scale: 1.01 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div className="mb-8">
                    <motion.h4 
                      className="font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-4 text-lg flex items-center space-x-2"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Rocket className="w-5 h-5 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
                      <span>Key Features</span>
                    </motion.h4>
                    <motion.div 
                      className="space-y-3"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 1.4 + index * 0.2
                          }
                        }
                      }}
                    >
                      {project.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start space-x-3 group/feature"
                            variants={featureVariants}
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <motion.div
                              className="mt-1 flex-shrink-0"
                              whileHover={{ 
                                scale: 1.3, 
                                rotate: 360,
                                transition: { duration: 0.5 }
                              }}
                            >
                              <FeatureIcon 
                                size={18} 
                                className="text-light-primary dark:text-dark-primary redblack:text-redblack-primary" 
                              />
                            </motion.div>
                            <span className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary group-hover/feature:text-light-textPrimary dark:group-hover/feature:text-dark-textPrimary redblack:group-hover/feature:text-redblack-textPrimary transition-colors duration-300">
                              {feature.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div className="mb-8">
                    <motion.h4 
                      className="font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-4 text-lg flex items-center space-x-2"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Layers className="w-5 h-5 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
                      <span>Technologies</span>
                    </motion.h4>
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 1.6 + index * 0.2
                          }
                        }
                      }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-light-background/80 to-light-card/80 dark:from-dark-background/80 dark:to-dark-card/80 redblack:from-redblack-background/80 redblack:to-redblack-card/80 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary rounded-2xl text-sm font-medium hover:from-light-primary/20 hover:to-light-secondary/20 dark:hover:from-dark-primary/20 dark:hover:to-dark-secondary/20 redblack:hover:from-redblack-primary/20 redblack:hover:to-redblack-primaryLight/20 hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary transition-all duration-300 backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
                          variants={techVariants}
                          whileHover={ { 
                            scale: 1.1, 
                            y: -3,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn px-6 py-4 bg-gradient-to-r from-[#00C4CC] to-[#FF6AC2] dark:from-[#00C4CC] dark:to-[#FF6AC2] text-white rounded-2xl hover:from-[#00A3B0] hover:to-[#E65AB0] dark:hover:from-[#00A3B0] dark:hover:to-[#E65AB0] transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl"
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={20} />
                        <span className="font-medium">View Code</span>
                        <motion.div
                          className="group-hover/btn:translate-x-1 transition-transform duration-300"
                        >
                          <ExternalLink size={16} />
                        </motion.div>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 group/btn px-6 py-4 bg-gradient-to-r ${project.color} text-white rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg`}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -2,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe size={20} />
                        <span className="font-medium">Live Demo</span>
                        <motion.div
                          className="group-hover/btn:translate-x-1 transition-transform duration-300"
                        >
                          <ExternalLink size={16} />
                        </motion.div>
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;