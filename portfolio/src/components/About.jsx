/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Target, Zap, Globe, CheckCircle, Phone, Mail } from 'lucide-react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState(null);

  const openModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants (with reduced durations)
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
        duration: 0.5,
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
        duration: 0.6,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 10px 30px rgba(30, 41, 59, 0.2)",
      transition: {
        duration: 0.2,
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
        duration: 0.4,
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
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
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
      transition: {
        duration: 0.15,
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

  const fullAboutText = "MERN Stack developer with hands-on experience in React.js, Node.js, Express, and MongoDB. Skilled in building scalable REST APIs, modular UI components, and secure authentication systems. Experienced in responsive design, performance optimization, and clean full-stack architecture focused on usability and maintainability.";

  const experienceItems = [
    'Built responsive dashboards with React.js and Node.js',
    'Implemented JWT authentication and secure route protection',
    'Integrated payment gateways and cloud storage solutions',
    'Created reusable UI components with modern animations',
    'Deployed full-stack applications on cloud platforms',
  ];

  return (
    <>
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <motion.h2
              variants={fadeInUpVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc] font-poppins mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={gradientBarVariants}
              className="w-20 sm:w-24 h-1 bg-[#3b82f6] mx-auto rounded-full"
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start"
          >
            <motion.div variants={slideInLeftVariants} className="space-y-6">
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-[#1e293b]/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-[#1e293b]/50 cursor-pointer w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-poppins mb-4"
                >
                  Full-Stack Developer & Problem Solver
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base text-[#94a3b8] font-inter leading-relaxed mb-6"
                >
                  MERN Stack developer specializing in full-stack web development.
                </motion.p>

                <motion.button
                  variants={ctaButtonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  onClick={() => openModal('Full-Stack Developer & Problem Solver', (
                    <p className="text-sm sm:text-base text-[#94a3b8] font-inter leading-relaxed">
                      {fullAboutText}
                    </p>
                  ))}
                  className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#3b82f6] text-[#f8fafc] rounded-full shadow-sm transition-all duration-300 relative overflow-hidden group text-sm sm:text-base font-inter"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    Learn More
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#22d3ee]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 sm:space-x-4 mt-4 sm:mt-6"
                >
                  <div className="flex items-center space-x-2 text-[#94a3b8] font-inter text-sm sm:text-base">
                    <motion.div
                      variants={pulseVariants}
                      animate="animate"
                    >
                      <MapPin size={16} sm:size={20} className="text-[#3b82f6]" />
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
                      staggerChildren: 0.05
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
                          duration: 0.5,
                          delay: index * 0.05,
                          ease: "backOut"
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateY: 5,
                      z: 20,
                      boxShadow: "0 10px 20px rgba(30, 41, 59, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                    className="bg-[#1e293b]/50 p-4 sm:p-6 rounded-xl border border-[#1e293b]/50 shadow-sm backdrop-blur-sm cursor-pointer group w-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      variants={iconRotateVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon
                        size={20} sm:size={24}
                        className="text-[#3b82f6] mb-3"
                      />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="font-semibold text-base sm:text-lg text-[#f8fafc] font-poppins mb-2"
                    >
                      {title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-xs sm:text-sm text-[#94a3b8] font-inter"
                    >
                      {desc}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRightVariants} className="space-y-6">
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-[#1e293b]/50 p-6 sm:p-8 rounded-2xl shadow-sm border border-[#1e293b]/50 backdrop-blur-sm cursor-pointer w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins mb-6"
                >
                  Experience Highlights
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base text-[#94a3b8] font-inter leading-relaxed mb-6"
                >
                  Key achievements in building and deploying full-stack applications.
                </motion.p>
                <motion.button
                  variants={ctaButtonVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true }}
                  onClick={() => openModal('Experience Highlights', (
                    <div className="space-y-4">
                      {experienceItems.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle size={16} sm:size={20} className="text-[#34d399] mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-[#94a3b8] font-inter">{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#3b82f6] text-[#f8fafc] rounded-full shadow-sm transition-all duration-300 relative overflow-hidden group text-sm sm:text-base font-inter"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    View Details
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#22d3ee]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] p-6 sm:p-8 rounded-2xl text-[#f8fafc] shadow-sm cursor-pointer w-full"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-bold font-poppins mb-4"
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
                        staggerChildren: 0.1
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
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                      }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.15 }
                      }}
                      className="flex items-center space-x-3 cursor-pointer text-sm sm:text-base"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.1,
                          transition: { duration: 0.15 }
                        }}
                      >
                        <Icon size={16} sm:size={20} />
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
                  className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#1e293b] text-[#f8fafc] rounded-full shadow-sm transition-all duration-300 relative overflow-hidden group text-sm sm:text-base font-inter"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    Get In Touch
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#3b82f6]/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0a0a0a]/60 flex items-center justify-center z-50 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#1e293b]/95 p-4 sm:p-6 md:p-8 rounded-2xl max-w-lg sm:max-w-xl md:max-w-2xl w-[95%] sm:w-full m-4 shadow-md backdrop-blur-sm border border-[#1e293b]/50"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-poppins mb-4 sm:mb-6"
            >
              {modalTitle}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-sm sm:text-base"
            >
              {modalBody}
            </motion.div>
            <motion.button
              variants={ctaButtonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsModalOpen(false)}
              className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-[#3b82f6] text-[#f8fafc] rounded-full shadow-sm transition-all duration-300 relative overflow-hidden group text-sm sm:text-base font-inter"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                Close
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#22d3ee]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default About;