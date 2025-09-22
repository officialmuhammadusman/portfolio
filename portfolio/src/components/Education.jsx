/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen,
  Award,
  Users,
  Code,
  Database,
  Globe,
  Layers,
  Palette,
  Network,
  Brain,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, margin: "-50px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const courses = [
    { name: 'Data Structures & Algorithms', icon: Brain },
    { name: 'Web Development', icon: Globe },
    { name: 'Software Engineering', icon: Code },
    { name: 'Object-Oriented Programming', icon: Layers },
    { name: 'Database Systems', icon: Database },
    { name: 'Computer Networks', icon: Network },
    { name: 'UI/UX Design', icon: Palette }
  ];

  const learningAreas = [
    { title: 'Self-directed Learning', icon: BookOpen, description: 'Continuous skill development through online resources' },
    { title: 'Open Source Contributions', icon: Code, description: 'Contributing to community projects and learning from peers' },
    { title: 'Tech Community Participation', icon: Users, description: 'Active engagement in developer communities and forums' },
    { title: 'Industry Best Practices', icon: Target, description: 'Following modern development standards and methodologies' },
    { title: 'Modern Development Tools', icon: Rocket, description: 'Staying updated with latest frameworks and technologies' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="education"
      className="py-12 sm:py-16 lg:py-24 bg-[#0a0a0a] relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
      >
        <div className="w-full h-full bg-[linear-gradient(rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Floating academic icons */}
        <motion.div
          className="absolute top-1/4 right-1/5 text-[#3b82f6]/20"
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-[#3b82f6]/20"
          animate={{ rotate: -360, x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen className="w-6 h-6 sm:w-10 sm:h-10" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-20"
          variants={headerVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-2 sm:p-3 bg-[#1e293b]/50 rounded-xl backdrop-blur-sm border border-[#1e293b]/50"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#3b82f6]" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#f8fafc] font-poppins"
            >
              Education
            </motion.h2>
          </motion.div>

          <motion.div
            className="w-16 sm:w-24 lg:w-32 h-1 bg-[#3b82f6] mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />

          <motion.p
            className="text-sm sm:text-base lg:text-xl text-[#94a3b8] font-inter max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.3, delay: 0.2 }
              }
            }}
          >
            Academic foundation and continuous learning journey that shapes my technical expertise
          </motion.p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div 
          className="max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          variants={cardVariants}
        >
          <motion.div
            className="bg-[#1e293b]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm hover:shadow-md border border-[#1e293b]/50 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10">
              {/* University Header */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
                variants={itemVariants}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-[#3b82f6] rounded-2xl flex items-center justify-center shadow-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#f8fafc]" />
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f8fafc] font-poppins mb-2"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    Bachelor of Science in Computer Science
                  </motion.h3>
                  
                  <motion.div
                    className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6 text-[#94a3b8] font-inter"
                    variants={itemVariants}
                  >
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#94a3b8]" />
                      <span className="font-semibold">COMSATS University Islamabad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#94a3b8]" />
                      <span>Abbottabad Campus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#94a3b8]" />
                      <span>Sep 2021 – Jul 2025</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Statistics */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                {[
                  { value: '4 Years', label: 'Duration', icon: Calendar },
                  { value: 'STEM', label: 'Focus Area', icon: Brain },
                  { value: '2025', label: 'Graduation', icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 sm:p-6 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm shadow-sm"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5
                    }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#3b82f6] rounded-xl mb-3 shadow-sm"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f8fafc]" />
                    </motion.div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f8fafc] font-poppins">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#94a3b8] font-inter">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Coursework Section */}
              <motion.div
                className="bg-[#1e293b]/50 rounded-2xl p-6 sm:p-8 border border-[#1e293b]/50 backdrop-blur-sm"
                variants={itemVariants}
              >
                <motion.h4
                  className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins mb-6 flex items-center space-x-3"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#3b82f6]" />
                  <span>Core Coursework</span>
                </motion.h4>
                
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                    }
                  }}
                >
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-center space-x-3 p-3 sm:p-4 bg-[#1e293b]/50 rounded-xl hover:shadow-md transition-all duration-300 border border-[#1e293b]/50 backdrop-blur-sm"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5
                      }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-[#3b82f6] shadow-sm"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <course.icon className="w-4 h-4 text-[#f8fafc]" />
                      </motion.div>
                      <span className="text-sm sm:text-base text-[#94a3b8] font-inter font-medium group-hover:text-[#f8fafc] transition-colors">
                        {course.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Continuous Learning Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={cardVariants}
        >
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="p-3 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm"
                whileHover={{ rotate: 15 }}
              >
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#3b82f6]" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f8fafc] font-poppins">
                Continuous Learning
              </h3>
            </motion.div>
            <motion.p
              className="text-sm sm:text-base text-[#94a3b8] font-inter max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Beyond formal education, I'm committed to lifelong learning through various channels and methodologies
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 sm:mb-12"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
          >
            {learningAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-[#1e293b]/50 rounded-xl p-6 shadow-sm border border-[#1e293b]/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02
                }}
              >
                <motion.div
                  className="flex items-center space-x-3 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="p-3 bg-[#3b82f6] rounded-xl shadow-sm"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <area.icon className="w-5 h-5 text-[#f8fafc]" />
                  </motion.div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#f8fafc] font-poppins">
                    {area.title}
                  </h4>
                </motion.div>
                <p className="text-sm text-[#94a3b8] font-inter leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Showcase */}
          <motion.div
            className="bg-[#1e293b]/50 rounded-2xl p-6 sm:p-8 border border-[#1e293b]/50 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -4 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="p-3 bg-[#3b82f6] rounded-xl shadow-sm"
                whileHover={{ rotate: 15 }}
              >
                <Lightbulb className="w-6 h-6 text-[#f8fafc]" />
              </motion.div>
              <h4 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins">
                Learning Philosophy
              </h4>
            </motion.div>

            <motion.p
              className="text-center text-[#94a3b8] font-inter mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              I believe in continuous growth through hands-on experience, community engagement, and staying current with industry trends and best practices.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.03 }
                }
              }}
            >
              {[
                'Problem Solving',
                'Critical Thinking',
                'Innovation',
                'Collaboration',
                'Adaptability',
                'Technical Excellence'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#1e293b]/50 rounded-full border border-[#1e293b]/50 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                  <span className="text-sm font-medium text-[#94a3b8] font-inter">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;