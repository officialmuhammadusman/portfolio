/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useEffect } from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  MapPin, 
  Star, 
  TrendingUp,
  Code,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

// Theme Context (mock for demo)
const ThemeContext = React.createContext({ theme: 'light' });

const Experience = () => {
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

  const experiences = [
    {
      title: 'MERN Stack Developer Intern - Robotics World ', // Updated title to be on a single line
      company: 'Robotics World KPITB',
      location: 'Abbottabad',
      duration: 'Aug 2025 – Present',
      type: 'Internship',
      level: 'Junior',
      achievements: [
        'Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Implementing user authentication systems with JWT and secure API endpoints',
        'Creating responsive user interfaces with React components and Tailwind CSS',
        'Integrating backend services with frontend, including data visualization using Chart.js',
        
      ],
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      icon: Code,
      bgPattern: 'pattern-0'
    },
    {
      title: 'Junior MERN Stack Developer Intern',
      company: 'CodeFulcrum',
      location: 'Lahore',
      duration: 'Jun 2025 – Jul 2025',
      type: 'Full-time',
      level: 'Junior',
      achievements: [
        'Built responsive dashboards using React.js integrated with Node.js/Express REST APIs',
        'Implemented JWT-based authentication and route protection for admin panels',
        'Managed image uploads via Cloudinary and integrated Stripe payment gateways',
        'Enhanced interactivity and visualization using Tailwind CSS, Chart.js, and Framer Motion',
        'Deployed applications with frontend hosted on Vercel and backend on Render',
      ],
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      icon: Code,
      bgPattern: 'pattern-1'
    },
    {
      title: 'Junior React Developer',
      company: 'XISLABS',
      location: 'Lahore',
      duration: 'Jun 2024 – sep 2024',
      type: 'Full-time',
      level: 'Junior',
      achievements: [
        'Translated Figma wireframes into responsive, reusable React components using Tailwind CSS',
        'Integrated backend APIs using Axios and managed global state with Redux Toolkit',
        'Applied scroll-triggered animations and route transitions using Framer Motion',
        'Developed multi-page frontend apps with React Router and component-based architecture',
        'Contributed to GitHub-based team projects following Agile methodologies',
      ],
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      icon: Users,
      bgPattern: 'pattern-2'
    },
    {
      title: 'Frontend Development Intern',
      company: 'MettleSol',
      location: 'Remote',
      duration: 'Jan 2024 – March 2024',
      type: 'Internship',
      level: 'Junior',
      achievements: [
        'Developed reusable React.js UI components based on instructor-led mockups',
        'Practiced state management using React Hooks and connected to local mock APIs',
        'Applied mobile-first responsive design principles for cross-device compatibility',
        'Reported and resolved UI bugs while learning performance optimization techniques',
        'Worked collaboratively on GitHub and completed tasks under mentor guidance',
      ],
      color: 'from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight',
      icon: Award,
      bgPattern: 'pattern-3'
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

  const timelineVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: 0,
      y: 100,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const achievementVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
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
      id="experience" 
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
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 redblack:from-redblack-primary/20 redblack:to-redblack-primaryLight/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-light-secondary/20 to-light-primary/20 dark:from-dark-secondary/20 dark:to-dark-primary/20 redblack:from-redblack-primaryLight/20 redblack:to-redblack-primary/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={headerVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 redblack:from-redblack-primary/20 redblack:to-redblack-primaryLight/20 rounded-2xl backdrop-blur-sm"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <TrendingUp className="w-8 h-8 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Experience
            </motion.h2>
          </motion.div>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary mx-auto rounded-full mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

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
            My professional journey in crafting digital experiences and building innovative solutions
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary rounded-full shadow-lg"
            variants={timelineVariants}
            style={{ originY: 0 }}
          />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white dark:border-gray-800 redblack:border-gray-900`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <motion.div
                        className={`absolute -inset-2 bg-gradient-to-br ${exp.color} rounded-3xl opacity-20 blur-sm`}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-20 md:ml-0`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="group relative bg-gradient-to-br from-light-card/90 via-light-card to-light-card/80 dark:from-dark-card/90 dark:via-dark-card dark:to-dark-card/80 redblack:from-redblack-card/90 redblack:via-redblack-card redblack:to-redblack-card/80 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10 backdrop-blur-xl overflow-hidden"
                      whileHover={{ 
                        borderColor: "rgba(var(--color-primary), 0.3)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      {/* Card Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={`w-full h-full bg-gradient-to-br ${exp.color}`} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <motion.div 
                          className="flex items-center justify-between mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div 
                              className={`px-3 py-1.5 bg-gradient-to-r ${exp.color} text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {exp.type}
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-1"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary">
                                {exp.level}
                              </span>
                            </motion.div>
                          </div>
                          <Clock className="w-5 h-5 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary" />
                        </motion.div>

                        {/* Job Title */}
                        <motion.h3
                          className="text-2xl md:text-3xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-4 group-hover:bg-gradient-to-r group-hover:from-light-primary group-hover:to-light-secondary dark:group-hover:from-dark-primary dark:group-hover:to-dark-secondary redblack:group-hover:from-redblack-primary redblack:group-hover:to-redblack-primaryLight group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 1.1 + index * 0.2 }}
                        >
                          {exp.title}
                        </motion.h3>

                        {/* Company Info */}
                        <motion.div 
                          className="space-y-3 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 1.2 + index * 0.2 }}
                        >
                          <div className="flex items-center space-x-3 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary">
                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                              <Briefcase size={18} />
                            </motion.div>
                            <span className="font-semibold text-lg">{exp.company}</span>
                            <span className="text-light-textSecondary/60 dark:text-dark-textSecondary/60 redblack:text-redblack-textSecondary/60">•</span>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary">
                            <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                              <Calendar size={18} />
                            </motion.div>
                            <span className="font-medium">{exp.duration}</span>
                          </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div 
                          className="space-y-4"
                          variants={{
                            hidden: {},
                            visible: {
                              transition: {
                                staggerChildren: 0.1,
                                delayChildren: 1.3 + index * 0.2
                              }
                            }
                          }}
                        >
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              className="flex items-start space-x-4 group/achievement"
                              variants={achievementVariants}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="mt-1 flex-shrink-0"
                                whileHover={{ 
                                  scale: 1.3, 
                                  rotate: 360,
                                  transition: { duration: 0.5 }
                                }}
                              >
                                <CheckCircle 
                                  size={18} 
                                  className="text-green-500 dark:text-green-400 redblack:text-green-300" 
                                />
                              </motion.div>
                              <motion.span 
                                className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary leading-relaxed group-hover/achievement:text-light-textPrimary dark:group-hover/achievement:text-dark-textPrimary redblack:group-hover/achievement:text-redblack-textPrimary transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                {achievement}
                              </motion.span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                        whileHover={{ opacity: 0.1 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 2
              }
            }
          }}
        >
          {[
            { label: "Years of Experience", value: "1+", icon: Clock },
            { label: "Projects Completed", value: "5+", icon: Code },
            { label: "Companies Worked", value: "4", icon: Briefcase }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-light-card/50 to-light-background/50 dark:from-dark-card/50 dark:to-dark-background/50 redblack:from-redblack-card/50 redblack:to-redblack-background/50 rounded-2xl backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 redblack:from-redblack-primary/20 redblack:to-redblack-primaryLight/20 rounded-2xl mb-4 mx-auto"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <stat.icon className="w-8 h-8 text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight bg-clip-text text-transparent mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;