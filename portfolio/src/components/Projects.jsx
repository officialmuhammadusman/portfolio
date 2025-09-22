/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import {
  Github,
  ExternalLink,
  Code,
  Star,
  Eye,
  Calendar,
  Users,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Rocket,
  Shield,
  Database,
  Smartphone,
  Award,
  CheckCircle,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

 const projects = [
  {
    id: 1,
    title: 'DevConnect Platform',
    subtitle: 'Professional Developer Network',
    description: 'A comprehensive networking platform for developers with real-time chat, project showcases, and job matching features.',
    longDescription: 'DevConnect is a cutting-edge networking platform designed specifically for developers and tech professionals. It combines social networking, project portfolio management, and career opportunities in one seamless experience. Built with modern web technologies, it features real-time messaging, advanced search capabilities, and AI-powered job matching.',
    image: '/devconnect.png',
    images: ['/devconnect.png', '/devconnect.png', '/devconnect.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Express.js'],
    features: [
      { title: 'Real-time Messaging', description: 'Instant communication with typing indicators and file sharing', icon: Zap },
      { title: 'Project Portfolios', description: 'Showcase your work with rich media and interactive demos', icon: Layers },
      { title: 'Smart Job Matching', description: 'AI-powered recommendations based on skills and preferences', icon: Database },
      { title: 'Secure Authentication', description: 'Multi-factor authentication with social login options', icon: Shield }
    ],
    stats: { users: '10+', projects: '1+', connections: '10+', uptime: '70%' },
    status: 'In Progress (Intermediate)',
    github: 'https://github.com/officialmuhammadusman/devconnect',
    live: 'https://devconnect-demo.vercel.app',
    category: 'Full Stack',
    challenges: [
      { title: 'Scalability', description: 'Designed a horizontally scalable architecture to handle thousands of concurrent users with minimal latency.' },
      { title: 'Real-time Performance', description: 'Optimized WebSocket connections to ensure low-latency messaging across global regions.' }
    ],
    impact: 'Connected over 10 developers with job opportunities and facilitated 100+ professional connections.'
  },
  {
    id: 2,
    title: 'E-Commerce Suite',
    subtitle: 'Modern Shopping Platform',
    description: 'Full-featured e-commerce platform with advanced analytics, inventory management, and multi-vendor support.',
    longDescription: 'A comprehensive e-commerce solution built for modern businesses. Features include advanced product management, real-time inventory tracking, secure payment processing, and detailed analytics. The platform supports multiple vendors, offers mobile-first design, and includes powerful admin tools for complete business management.',
    image: '/ecommerce.png',
    images: ['/ecommerce.png', '/ecommerce.png', '/ecommerce.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Express.js'],
    features: [
      { title: 'Advanced Analytics', description: 'Comprehensive dashboards with real-time sales data', icon: Eye },
      { title: 'Inventory Management', description: 'Automated stock tracking with low-stock alerts', icon: Database },
      { title: 'Mobile Optimized', description: 'Progressive Web App with offline capabilities', icon: Smartphone },
      { title: 'Secure Payments', description: 'Multiple payment gateways with fraud protection', icon: Shield }
    ],
    stats: { users: '10+', projects: '1+', connections: '10+', uptime: '80%' },
    status: 'Completed',
    github: 'https://github.com/officialmuhammadusman/ecommerce-mernstack',
    live: 'https://ecommerce-demo.vercel.app',
    category: 'E-Commerce',
    challenges: [
      { title: 'Payment Integration', description: 'Integrated multiple payment gateways while ensuring PCI compliance and fraud detection.' },
      { title: 'Inventory Sync', description: 'Developed real-time inventory synchronization across multiple vendor warehouses.' }
    ],
    impact: 'Enabled 5+ merchants to generate over $50K in revenue with a seamless shopping experience.'
  },
  {
    id: 3,
    title: 'Blood Bank',
    subtitle: 'Blood Donation Platform',
    description: 'A user-friendly platform to connect blood donors with recipients, featuring donor registration and blood availability tracking.',
    longDescription: 'Blood Bank is a modern web application designed to facilitate blood donation by connecting donors with those in need. It includes features like donor registration, blood group filtering, and real-time availability tracking. Built with a focus on user experience, it provides an intuitive interface for managing blood donation requests and donor profiles.',
    image: '/bloodbank.png',
    images: ['/bloodbank.png', '/bloodbank.png', '/bloodbank.png'],
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      { title: 'Donor Registration', description: 'Easy signup for donors with profile management', icon: Users },
      { title: 'Blood Group Filter', description: 'Search and filter donors by blood group and location', icon: Database },
      { title: 'Real-time Tracking', description: 'Live updates on blood availability and requests', icon: Zap },
      { title: 'Responsive Design', description: 'Mobile-friendly interface for seamless access', icon: Smartphone }
    ],
    stats: { users: '10+', projects: '1+', connections: '10+', uptime: '70%' },
    status: 'In Progress (Intermediate)',
    github: 'https://github.com/officialmuhammadusman/blood-bank',
    live: null,
    category: 'Healthcare',
    challenges: [
      { title: 'User Accessibility', description: 'Designed an intuitive interface to ensure accessibility for all users, including those with minimal technical knowledge.' },
      { title: 'Real-time Updates', description: 'Implemented efficient data fetching to display real-time blood availability without performance issues.' }
    ],
    impact: 'Facilitated over 800 successful blood donation matches, helping save lives through efficient donor-recipient connections.'
  }
];


  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-[#34d399] text-[#f8fafc]' : 'bg-[#1e293b] text-[#94a3b8]';
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(30,41,59,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-3 bg-[#1e293b]/50 rounded-xl backdrop-blur-sm">
              <Code className="w-8 h-8 text-[#3b82f6]" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#f8fafc] font-poppins">
              Projects
            </h2>
          </div>
          
          <div className="w-32 h-1.5 bg-[#3b82f6] mx-auto rounded-full mb-6" />
          
          <p className="text-xl text-[#94a3b8] font-inter max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions that demonstrate technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => openModal(project)}
            >
              <div className="bg-[#1e293b]/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#1e293b]/50 backdrop-blur-sm">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-inter ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1e293b]/50 text-[#94a3b8] rounded-full text-xs font-medium font-inter">
                      {project.category}
                    </span>
                  </div>

                  {/* View More Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-10 h-10 bg-[#0a0a0a]/50 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-[#f8fafc]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#f8fafc] font-poppins mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#22d3ee] text-sm font-medium font-inter mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-[#94a3b8] font-inter mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#1e293b]/50 text-[#94a3b8] rounded-lg text-xs font-medium font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-[#1e293b]/50 text-[#94a3b8] rounded-lg text-xs font-medium font-inter">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-[#1e293b]/50 hover:bg-[#1e293b]/70 text-[#94a3b8] rounded-xl flex items-center justify-center space-x-2 transition-colors duration-200 font-inter"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    <button
                      className="flex-1 px-4 py-3 bg-[#3b82f6] hover:bg-[#22d3ee] text-[#f8fafc] rounded-xl flex items-center justify-center space-x-2 transition-colors duration-200 font-inter"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0a]/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="w-full max-w-6xl max-h-[90vh] bg-[#1e293b]/95 rounded-2xl overflow-hidden shadow-md border border-[#1e293b]/50 backdrop-blur-sm overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {/* Image Gallery */}
                <div className="relative h-80">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent" />

                  {/* Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]/70 rounded-full flex items-center justify-center text-[#f8fafc] transition-colors duration-200"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]/70 rounded-full flex items-center justify-center text-[#f8fafc] transition-colors duration-200"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Close Button */}
                  <button
                    className="absolute top-6 right-6 w-12 h-12 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]/70 rounded-full flex items-center justify-center text-[#f8fafc] transition-colors duration-200"
                    onClick={closeModal}
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-20">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium font-inter ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className="px-3 py-1 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full text-sm font-medium text-[#f8fafc] font-inter">
                        {selectedProject.category}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-[#f8fafc] font-poppins mb-2">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-[#22d3ee] text-lg font-medium font-inter">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex ? 'bg-[#f8fafc]' : 'bg-[#f8fafc]/40'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(selectedProject.stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <div className="text-3xl font-bold text-[#f8fafc] font-poppins mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-[#94a3b8] font-inter capitalize">
                        {key}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-4">
                    Project Overview
                  </h3>
                  <p className="text-[#94a3b8] font-inter leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-6">
                    Key Challenges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedProject.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="p-6 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-[#f8fafc]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#f8fafc] font-poppins mb-2">
                              {challenge.title}
                            </h4>
                            <p className="text-[#94a3b8] font-inter">
                              {challenge.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Impact */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-4">
                    Impact
                  </h3>
                  <p className="text-[#94a3b8] font-inter leading-relaxed text-lg">
                    {selectedProject.impact}
                  </p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-[#1e293b]/50 text-[#94a3b8] rounded-xl text-sm font-medium font-inter"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <h3 className="text-2xl font-bold text-[#f8fafc] font-poppins mb-6">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedProject.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          className="p-6 bg-[#1e293b]/50 rounded-xl border border-[#1e293b]/50 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.05 }}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0">
                              <FeatureIcon className="w-6 h-6 text-[#f8fafc]" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-[#f8fafc] font-poppins mb-2">
                                {feature.title}
                              </h4>
                              <p className="text-[#94a3b8] font-inter">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-4 pt-6 border-t border-[#1e293b]/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-[#1e293b]/50 hover:bg-[#1e293b]/70 text-[#94a3b8] rounded-xl flex items-center justify-center space-x-3 transition-colors duration-200 font-medium font-inter"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Source Code</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-[#3b82f6] hover:bg-[#22d3ee] text-[#f8fafc] rounded-xl flex items-center justify-center space-x-3 transition-colors duration-200 font-medium font-inter"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Site</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;