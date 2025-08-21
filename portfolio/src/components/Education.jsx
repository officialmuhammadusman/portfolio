/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from './ThemeContext';

const Education = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, margin: "-100px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="education"
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
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Education
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight mx-auto rounded-full mt-4 relative overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p
            className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mt-4 max-w-2xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}}
          >
            Academic foundation that shaped my technical expertise
          </motion.p>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 rounded-2xl p-8 md:p-12 shadow-glass hover:shadow-glass-lg transition-all duration-500 backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight rounded-full flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0], transition: { duration: 0.6 } }}
              >
                <GraduationCap size={32} className="text-white" />
              </motion.div>

              <div className="flex-1">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  Bachelor of Science in Computer Science
                </motion.h3>
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mb-4"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">COMSATS University Islamabad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Abbottabad Campus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>Sep 2021 – Jul 2025</span>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 p-6 rounded-xl border border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20 mt-6 backdrop-blur-sm"
                  variants={itemVariants}
                >
                  <motion.h4
                    className="font-semibold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-4 flex items-center space-x-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <span>Relevant Coursework:</span>
                  </motion.h4>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                  >
                    {[
                      'Data Structures & Algorithms',
                      'Web Development',
                      'Software Engineering',
                      'Object-Oriented Programming',
                      'Database Systems',
                      'Computer Networks',
                      'UI/UX Design',
                    ].map((course, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-light-primary dark:bg-dark-primary redblack:bg-redblack-primary rounded-full"
                          whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                        />
                        <span className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary text-sm">{course}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 grid md:grid-cols-3 gap-6"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
            >
              {[
                { value: '4 Years', label: 'Computer Science Program' },
                { value: 'STEM', label: 'Science & Technology Focus' },
                { value: '2025', label: 'Graduation' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 rounded-xl border border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20 shadow-glass backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="text-2xl font-bold text-light-primary dark:text-dark-primary redblack:text-redblack-primary mb-2">{stat.value}</div>
                  <div className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Continuous Learning
            </motion.h3>
            <motion.p
              className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Beyond formal education, I'm constantly learning new technologies and best practices through online courses, documentation, and hands-on projects.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                'Self-directed Learning',
                'Open Source Contributions',
                'Tech Community Participation',
                'Industry Best Practices',
                'Modern Development Tools',
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-light-background/80 dark:bg-dark-background/80 redblack:bg-redblack-background/80 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary rounded-full text-sm font-medium hover:from-light-primary/20 hover:to-light-secondary/20 dark:hover:from-dark-primary/20 dark:hover:to-dark-secondary/20 redblack:hover:from-redblack-primary/20 redblack:hover:to-redblack-primaryLight/20 hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary transition-all duration-300 backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;