/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MapPin, Target, Zap, Globe, CheckCircle, Phone, Mail } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

const About = () => {
  useContext(ThemeContext);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconRotateVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const gradientBarVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const ctaButtonVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      y: 0
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-light-background dark:bg-dark-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl md:text-5xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={gradientBarVariants}
            className="w-24 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary mx-auto rounded-full"
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideInLeftVariants} className="space-y-6">
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-glass cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-4"
              >
                Full-Stack Developer & Problem Solver
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-6"
              >
                MERN Stack developer with hands-on experience in React.js, Node.js, Express, and MongoDB.
                Skilled in building scalable REST APIs, modular UI components, and secure authentication systems.
                Experienced in responsive design, performance optimization, and clean full-stack architecture
                focused on usability and maintainability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2 text-light-textSecondary dark:text-dark-textSecondary">
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                  >
                    <MapPin size={20} className="text-light-primary dark:text-dark-primary" />
                  </motion.div>
                  <span>Abbottabad, Pakistan</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: Target, title: 'Problem Solving', desc: 'Analytical approach to complex challenges' },
                { icon: Zap, title: 'Fast Learning', desc: 'Quick adaptation to new technologies' },
                { icon: Globe, title: 'Full-Stack', desc: 'End-to-end web development' },
                { icon: CheckCircle, title: 'Quality Focus', desc: 'Clean, maintainable code practices' },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      rotateX: -15
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "backOut"
                      }
                    }
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotateY: 5,
                    z: 20,
                    boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-light-card/80 dark:bg-dark-card/80 p-6 rounded-xl border border-light-textSecondary/20 dark:border-dark-textSecondary/20 shadow-glass backdrop-blur-sm cursor-pointer group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    variants={iconRotateVariants}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-light-primary dark:text-dark-primary mb-3"
                    />
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-2"
                  >
                    {title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm text-light-textSecondary dark:text-dark-textSecondary"
                  >
                    {desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRightVariants} className="space-y-8">
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-light-card/80 dark:bg-dark-card/80 p-8 rounded-2xl shadow-glass backdrop-blur-sm cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary mb-6"
              >
                Experience Highlights
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-4"
              >
                {[
                  'Built responsive dashboards with React.js and Node.js',
                  'Implemented JWT authentication and secure route protection',
                  'Integrated payment gateways and cloud storage solutions',
                  'Created reusable UI components with modern animations',
                  'Deployed full-stack applications on cloud platforms',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-start space-x-3 cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5, ease: "backOut" }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={20} className="text-light-success dark:text-dark-success mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-light-textSecondary dark:text-dark-textSecondary"
                    >
                      {item}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary p-8 rounded-2xl text-white shadow-glass-lg cursor-pointer"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-4"
              >
                Let's Connect!
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                className="space-y-3"
              >
                {[
                  { icon: Phone, text: "(0313) 526-3300" },
                  { icon: Mail, text: "official.muhammadusman01@gmail.com" }
                ].map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.button
                variants={ctaButtonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-6 py-3 bg-white dark:bg-dark-card text-light-primary dark:text-dark-primary rounded-full transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Get In Touch
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-light-primary/10 to-light-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;