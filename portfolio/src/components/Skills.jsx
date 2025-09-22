/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Globe, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Smartphone,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 80 },
        { name: 'Redux Toolkit', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'JWT Auth', level: 85 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Integration',
      icon: Globe,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Cloudinary', level: 80 },
        { name: 'Stripe Payment', level: 75 },
        { name: 'Socket.IO', level: 70 },
        { name: 'Vercel/Render', level: 85 },
      ],
    },
  ];

  // Animation variants with reduced durations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
        duration: 0.4
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
        duration: 0.5,
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
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
        duration: 0.5,
        delay: i * 0.1,
        ease: "backOut"
      }
    }),
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(30, 41, 59, 0.2)",
      transition: {
        duration: 0.2,
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
        duration: 0.4,
        ease: "backOut",
        delay: 0.1
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.2,
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
        duration: 1,
        ease: "easeOut",
        delay: 0.2
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
        duration: 0.4,
        delay: 0.3 + i * 0.05,
        ease: "easeOut"
      }
    }),
    hover: {
      x: 5,
      transition: {
        duration: 0.15
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
        duration: 0.5,
        delay: i * 0.1,
        ease: "backOut"
      }
    }),
    hover: {
      y: -5,
      rotateY: 5,
      scale: 1.03,
      transition: {
        duration: 0.2,
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
    <section id="skills" className="py-20 bg-[#0a0a0a] overflow-hidden">
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
            className="text-4xl md:text-5xl font-bold text-[#f8fafc] font-poppins mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            variants={gradientBarVariants}
            className="w-24 h-1 bg-[#3b82f6] mx-auto rounded-full"
            style={{ transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-[#94a3b8] font-inter mt-4 max-w-2xl mx-auto"
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
                staggerChildren: 0.1
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
              className="bg-[#1e293b]/50 rounded-2xl p-8 shadow-sm border border-[#1e293b]/50 backdrop-blur-sm cursor-pointer group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background Gradient Animation */}
              <motion.div
                className="absolute inset-0 bg-[#3b82f6]/10 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Header */}
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  animate="animate"
                  className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-sm"
                >
                  <category.icon size={24} className="text-[#f8fafc]" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + categoryIndex * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-[#f8fafc] font-poppins"
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
                      staggerChildren: 0.05
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
                        className="text-[#f8fafc] font-medium font-inter"
                        whileHover={{ scale: 1.05, x: 3 }}
                        transition={{ duration: 0.15 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        className="text-sm text-[#94a3b8] font-inter"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="w-full bg-[#1e293b]/50 rounded-full h-3 overflow-hidden relative">
                      {/* Background shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-[#1e293b]/20"
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
                        className="h-full bg-[#3b82f6] rounded-full relative overflow-hidden"
                        whileHover={{
                          scaleY: 1.2,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-[#22d3ee]/30"
                          animate={{
                            x: [-20, 20],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 1,
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
                className="absolute -top-2 -right-2 w-8 h-8 bg-[#3b82f6] rounded-full opacity-20"
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
            className="text-2xl font-bold text-[#f8fafc] font-poppins text-center mb-8"
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
                  staggerChildren: 0.1
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
              },
              {
                title: 'Responsive Web Design',
                provider: 'freeCodeCamp',
                icon: Award,
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={certificationVariants}
                whileHover="hover"
                className="bg-[#1e293b]/50 p-6 rounded-xl border border-[#1e293b]/50 shadow-sm backdrop-blur-sm cursor-pointer group relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background effect */}
                <motion.div
                  className="absolute inset-0 bg-[#3b82f6]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />

                <div className="flex items-center space-x-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-sm"
                    variants={pulseVariants}
                    animate="animate"
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <cert.icon size={24} className="text-[#f8fafc]" />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="font-semibold text-[#f8fafc] font-poppins"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                    >
                      {cert.title}
                    </motion.h4>
                    <motion.p
                      className="text-[#94a3b8] font-inter"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                    >
                      {cert.provider}
                    </motion.p>
                  </div>
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-[#22d3ee] rounded-full"
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