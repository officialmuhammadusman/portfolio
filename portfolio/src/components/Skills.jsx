/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Server, Globe, Award } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Smartphone,
      skills: [
        { name: 'React.js', level: 90, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Tailwind CSS', level: 95, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'JavaScript', level: 85, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'HTML5/CSS3', level: 90, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Redux Toolkit', level: 80, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Framer Motion', level: 75, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Express.js', level: 90, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'MongoDB', level: 80, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'JWT Auth', level: 85, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'REST APIs', level: 90, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
      ],
    },
    {
      title: 'Tools & Integration',
      icon: Globe,
      skills: [
        { name: 'Git/GitHub', level: 85, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Cloudinary', level: 80, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Stripe Payment', level: 75, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Socket.IO', level: 70, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
        { name: 'Vercel/Render', level: 85, color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight' },
      ],
    },
  ];

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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -15,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "backOut"
      }
    }),
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: {
      width: "0%",
      opacity: 0
    },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  const certificationVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateY: -25
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        ease: "backOut"
      }
    }),
    hover: {
      y: -5,
      rotateY: 5,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotateZ: [0, 2, 0],
      transition: {
        duration: 4,
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
    <section id="skills" className="py-20 bg-light-background dark:bg-dark-background redblack:bg-redblack-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            variants={gradientBarVariants}
            className="w-24 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight mx-auto rounded-full"
            style={{ transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mt-4 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              variants={cardVariants}
              whileHover="hover"
              className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 rounded-2xl p-8 shadow-glass backdrop-blur-sm cursor-pointer group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Gradient Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-light-primary/5 to-light-secondary/5 dark:from-dark-primary/5 dark:to-dark-secondary/5 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Header */}
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  // variants={floatingVariants}
                  animate="animate"
                  className="w-12 h-12 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight rounded-full flex items-center justify-center shadow-lg"
                >
                  <category.icon size={24} className="text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary"
                >
                  {category.title}
                </motion.h3>
              </div>

              {/* Skills List */}
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
                className="space-y-4 relative z-10"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="group/skill cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <motion.span
                        className="text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary font-medium"
                        whileHover={{ scale: 1.05, x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className="text-sm text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="w-full bg-light-textSecondary/20 dark:bg-dark-textSecondary/20 redblack:bg-redblack-textSecondary/20 rounded-full h-3 overflow-hidden relative">
                      {/* Background shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: [-100, 300],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Progress bar */}
                      <motion.div
                        custom={skill.level}
                        variants={skillBarVariants}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        whileHover={{
                          scaleY: 1.2,
                          boxShadow: "0 0 20px rgba(var(--primary), 0.4)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: [-20, 20],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating decoration */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3
            variants={titleVariants}
            className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary text-center mb-8"
          >
            Certifications
          </motion.h3>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'MERN Stack E-commerce Bootcamp',
                provider: 'YouTube',
                icon: Award,
                color: 'from-light-error to-light-error dark:from-dark-error dark:to-dark-error redblack:from-redblack-error redblack:to-redblack-error',
              },
              {
                title: 'Responsive Web Design',
                provider: 'freeCodeCamp',
                icon: Award,
                color: 'from-light-success to-light-success dark:from-dark-success dark:to-dark-success redblack:from-redblack-success redblack:to-redblack-success',
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={certificationVariants}
                whileHover="hover"
                className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 p-6 rounded-xl border border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20 shadow-glass backdrop-blur-sm cursor-pointer group relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="flex items-center space-x-4 relative z-10">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center shadow-lg`}
                    variants={pulseVariants}
                    animate="animate"
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <cert.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="font-semibold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cert.title}
                    </motion.h4>
                    <motion.p
                      className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {cert.provider}
                    </motion.p>
                  </div>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;