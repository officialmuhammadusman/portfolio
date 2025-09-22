/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  MapPin, 
  Star, 
  Code,
  Users,
  Award,
  Clock,
  ChevronRight,
  Building,
  X,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  const experiences = [
    {
      id: 1,
      title: 'MERN Stack Developer Intern',
      subtitle: 'Robotics World',
      company: 'Robotics World KPITB',
      location: 'Abbottabad',
      duration: 'Aug 2025 – Present',
      type: 'Internship',
      level: 'Junior',
      status: 'Current',
      description: 'Leading development of full-stack web applications with cutting-edge MERN stack technologies.',
      achievements: [
        'Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js',
        'Implementing user authentication systems with JWT and secure API endpoints',
        'Creating responsive user interfaces with React components and Tailwind CSS',
        'Integrating backend services with frontend, including data visualization using Chart.js'
      ],
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS', 'Chart.js'],
      highlights: ['Full-stack Development', 'Authentication Systems', 'Data Visualization', 'Responsive Design'],
      icon: Code,
    },
    {
      id: 2,
      title: 'Junior React Developer',
      subtitle: 'XISLABS',
      company: 'XISLABS',
      location: 'Lahore',
      duration: 'Jan 2025 – Mar 2025',
      type: 'Full-time',
      level: 'Junior',
      status: 'Completed',
      description: 'Created dynamic user interfaces and implemented state management solutions.',
      achievements: [
        'Translated Figma wireframes into responsive, reusable React components using Tailwind CSS',
        'Integrated backend APIs using Axios and managed global state with Redux Toolkit',
        'Applied scroll-triggered animations and route transitions using Framer Motion',
        'Developed multi-page frontend apps with React Router and component-based architecture',
        'Contributed to GitHub-based team projects following Agile methodologies'
      ],
      skills: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Axios', 'Framer Motion', 'React Router', 'Figma'],
      highlights: ['UI/UX Development', 'State Management', 'Animation Implementation', 'Team Collaboration'],
      icon: Users,
    },
    {
      id: 3,
      title: 'Frontend Development Intern',
      subtitle: 'MettleSol',
      company: 'MettleSol',
      location: 'Remote',
      duration: 'Jul 2024 – Oct 2024',
      type: 'Internship',
      level: 'Junior',
      status: 'Completed',
      description: 'Gained foundational experience in modern frontend development practices.',
      achievements: [
        'Developed reusable React.js UI components based on instructor-led mockups',
        'Practiced state management using React Hooks and connected to local mock APIs',
        'Applied mobile-first responsive design principles for cross-device compatibility',
        'Reported and resolved UI bugs while learning performance optimization techniques',
        'Worked collaboratively on GitHub and completed tasks under mentor guidance'
      ],
      skills: ['React.js', 'React Hooks', 'Responsive Design', 'GitHub', 'UI/UX', 'Performance Optimization'],
      highlights: ['Component Development', 'Responsive Design', 'Bug Resolution', 'Mentorship Learning'],
      icon: Award,
    }
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.section 
        ref={ref}
        id="experience" 
        className="py-16 lg:py-24 bg-[#0a0a0a] relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-3 bg-[#1e293b]/50 rounded-2xl backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#f8fafc] font-poppins">
                Experience
              </h2>
            </motion.div>
            
            <motion.div
              className="w-32 h-1.5 bg-[#3b82f6] mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            
            <p className="text-lg lg:text-xl text-[#94a3b8] font-inter max-w-3xl mx-auto">
              My journey in crafting digital experiences and building innovative solutions
            </p>
          </motion.div>

          {/* Experience Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              
              return (
                <motion.div
                  key={exp.id}
                  className="group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedExp(exp)}
                >
                  <div className="relative bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md border border-[#1e293b]/50 transition-all duration-300 overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-[#3b82f6] rounded-xl shadow-sm">
                            <IconComponent className="w-6 h-6 text-[#f8fafc]" />
                          </div>
                          <div>
                            {exp.status === 'Current' && (
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-[#3b82f6] font-inter">Current Position</span>
                              </div>
                            )}
                            <div className="px-3 py-1 bg-[#3b82f6] text-[#f8fafc] text-xs font-bold rounded-full uppercase tracking-wider font-inter">
                              {exp.type}
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          className="p-2 bg-[#1e293b]/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-4 h-4 text-[#94a3b8]" />
                        </motion.div>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl lg:text-2xl font-bold text-[#f8fafc] font-poppins mb-2 group-hover:text-[#3b82f6] transition-all duration-300">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-[#94a3b8] font-inter">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4 text-[#94a3b8]" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-[#94a3b8]" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-4 text-[#94a3b8] font-inter">
                        <Calendar className="w-4 h-4 text-[#94a3b8]" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[#94a3b8] font-inter mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills Preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-[#1e293b]/50 text-[#94a3b8] text-xs rounded-full font-inter"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 4 && (
                          <span className="px-3 py-1 bg-[#1e293b]/50 text-[#94a3b8] text-xs rounded-full font-inter">
                            +{exp.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <motion.div 
                        className="flex items-center justify-between pt-4 border-t border-[#1e293b]/50"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-sm text-[#94a3b8] font-inter">Click to view details</span>
                        <div className="flex items-center space-x-2 text-[#3b82f6]">
                          <span className="text-sm font-medium font-inter">Learn More</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            {[
              { label: "Years of Experience", value: "1+", icon: Clock },
              { label: "Projects Completed", value: "5+", icon: Code },
              { label: "Companies Worked", value: "4", icon: Building }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-[#1e293b]/50 rounded-2xl backdrop-blur-sm border border-[#1e293b]/50 shadow-sm"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3b82f6] rounded-2xl mb-4 shadow-sm">
                  <stat.icon className="w-8 h-8 text-[#f8fafc]" />
                </div>
                <div className="text-3xl font-bold text-[#f8fafc] font-poppins mb-2">
                  {stat.value}
                </div>
                <p className="text-[#94a3b8] font-inter font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1e293b]/95 rounded-3xl shadow-md max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm border border-[#1e293b]/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-[#3b82f6] p-8 text-[#f8fafc] rounded-t-3xl">
                <motion.button
                  className="absolute top-6 right-6 p-2 bg-[#f8fafc]/20 rounded-full hover:bg-[#f8fafc]/30 transition-colors"
                  onClick={() => setSelectedExp(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <div className="flex items-start space-x-6">
                  <motion.div
                    className="p-4 bg-[#f8fafc]/20 rounded-2xl backdrop-blur-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <selectedExp.icon className="w-12 h-12 text-[#f8fafc]" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-3xl lg:text-4xl font-bold mb-2 font-poppins"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedExp.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="flex flex-wrap items-center gap-4 mb-4 text-[#f8fafc]/90 font-inter"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Building className="w-5 h-5" />
                        <span className="font-semibold text-lg">{selectedExp.company}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>{selectedExp.location}</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center space-x-2 text-[#f8fafc]/80 font-inter"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{selectedExp.duration}</span>
                      {selectedExp.status === 'Current' && (
                        <div className="flex items-center space-x-2 ml-4">
                          <div className="w-2 h-2 bg-[#f8fafc] rounded-full animate-pulse" />
                          <span className="text-sm">Current Position</span>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Description */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-[#f8fafc] font-poppins mb-4">Role Overview</h4>
                  <p className="text-[#94a3b8] font-inter leading-relaxed text-lg">
                    {selectedExp.description}
                  </p>
                </motion.div>

                {/* Key Highlights */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-xl font-semibold text-[#f8fafc] font-poppins mb-4 flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-[#3b82f6]" />
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedExp.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#3b82f6] rounded-full" />
                          <span className="font-medium text-[#f8fafc] font-inter">{highlight}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-xl font-semibold text-[#f8fafc] font-poppins mb-6">Key Achievements</h4>
                  <div className="space-y-4">
                    {selectedExp.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <p className="text-[#94a3b8] font-inter leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Skills & Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h4 className="text-xl font-semibold text-[#f8fafc] font-poppins mb-4">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedExp.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-[#1e293b]/50 border border-[#1e293b]/50 rounded-full text-sm font-medium text-[#94a3b8] font-inter shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;