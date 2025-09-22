/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Award,
  Code2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import profilePhoto from "../assets/photo-modified.png";

const WorldClassHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Sample photo
  const photoUrl =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 1,
      },
    },
  };

  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
  ];
  const achievements = [
    { icon: Code2, value: "1+", label: "Years Experience" },
    { icon: Briefcase, value: "3+", label: "Projects Completed" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 41, 59, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 41, 59, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            y: y2,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#3b82f6] rounded-full opacity-20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Left Side - Content */}
                <motion.div variants={slideUpVariants} className="space-y-8">
                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="inline-flex md:mt-30 items-center px-4 py-2 rounded-full bg-[#1e293b]/50 backdrop-blur-sm border border-[#1e293b]/50"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-[#22d3ee] rounded-full mr-3"
                    />
                    <span className="text-[#22d3ee] text-sm font-medium font-inter">
                      Available for opportunities
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <motion.div
                      variants={slideUpVariants}
                      className="space-y-2"
                    >
                      <motion.h1
                        className="text-5xl lg:text-7xl font-bold text-[#f8fafc] font-poppins leading-tight"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        Hi, I'm Usman
                      </motion.h1>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.4,
                          ease: "backOut",
                        }}
                        className="relative"
                      >
                        {/* Animated underline */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                          className="h-1 bg-[#3b82f6] rounded-full mt-2 origin-left"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Professional Title with Animation */}
                    <motion.div variants={slideUpVariants} className="relative">
                      <motion.h2
                        className="text-2xl lg:text-3xl font-semibold text-[#f8fafc] font-poppins mb-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        Full Stack MERN Developer
                      </motion.h2>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex items-center text-[#3b82f6] font-inter mb-6"
                      >
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">Abbottabad, Pakistan</span>
                      </motion.div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      variants={slideUpVariants}
                      className="text-lg lg:text-xl text-[#94a3b8] font-inter leading-relaxed max-w-xl"
                    >
                      Crafting exceptional digital experiences with modern
                      technologies. Specialized in building scalable web
                      applications that drive business growth and user
                      engagement.
                    </motion.p>
                  </div>

                  {/* Skills Tags */}
                  <motion.div
                    variants={slideUpVariants}
                    className="flex flex-wrap gap-3"
                  >
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2 + index * 0.1,
                          ease: "backOut",
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-[#1e293b]/50 backdrop-blur-sm border border-[#1e293b]/50 rounded-full text-sm text-[#f8fafc] font-medium font-inter hover:bg-[#3b82f6]/10 hover:text-[#22d3ee] transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    variants={slideUpVariants}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#3b82f6] text-[#f8fafc] rounded-full font-semibold font-inter flex items-center justify-center gap-3 relative overflow-hidden group shadow-sm"
                    >
                      <motion.span className="absolute inset-0 bg-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">View My Work</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/cv.pdf"; // file in public/
                        link.download = "Muhammad_Usman_CV.pdf"; // custom filename
                        link.click();
                      }}
                      className="px-8 py-4 bg-[#1e293b]/50 backdrop-blur-sm border border-[#1e293b]/50 text-[#f8fafc] rounded-full font-semibold font-inter flex items-center justify-center gap-3 hover:bg-[#3b82f6]/10 hover:text-[#22d3ee] transition-all"
                    >
                      <Download size={20} />
                      Download CV
                    </motion.button>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    variants={slideUpVariants}
                    className="flex gap-4 pt-2"
                  >
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/officialmuhammadusman",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/muhammadusman-webdev/",
                        label: "LinkedIn",
                      },
                      {
                        icon: Mail,
                        href: "https://mail.google.com/mail/?view=cm&fs=1&to=official.muhammadusman01@gmail.com",
                        label: "Email",
                      },
                    ].map(({ icon: Icon, href, label }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-12 h-12 bg-[#1e293b]/50 backdrop-blur-sm border border-[#1e293b]/50 rounded-full flex items-center justify-center text-[#f8fafc] hover:bg-[#3b82f6]/10 hover:text-[#22d3ee] transition-all"
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right Side - Enhanced Image + Stats */}
                <motion.div variants={slideUpVariants} className="relative">
                  {/* Main Image Container */}
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="relative z-10"
                  >
                    <div className="relative w-80 h-80 mx-auto">
                      {/* Glowing background */}
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl opacity-20"
                      />

                      {/* Image */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: "backOut",
                        }}
                        className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-[#1e293b]/50 backdrop-blur-sm"
                      >
                        <img
                          src={profilePhoto}
                          alt="Muhammad Usman"
                          className="w-full h-full object-cover"
                        />
                        {/* Professional overlay */}
                        <div className="absolute inset-0 bg-[#3b82f6]/10 mix-blend-multiply" />
                      </motion.div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        {[Code2, Sparkles, Briefcase].map((Icon, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-sm"
                            style={{
                              top: "50%",
                              left: "50%",
                              transform: `translate(-50%, -50%) rotate(${
                                i * 120
                              }deg) translateY(-200px) rotate(-${i * 120}deg)`,
                            }}
                            whileHover={{ scale: 1.2, rotate: 180 }}
                          >
                            <Icon size={20} className="text-[#f8fafc]" />
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Achievement Stats */}
                  <motion.div
                    variants={slideUpVariants}
                    className="grid grid-cols-3 gap-4 mt-12"
                  >
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1.5 + index * 0.2,
                          duration: 0.6,
                          ease: "backOut",
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-[#1e293b]/50 backdrop-blur-sm border border-[#1e293b]/50 rounded-2xl p-6 text-center hover:bg-[#3b82f6]/10 transition-all"
                      >
                        <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-3">
                          <achievement.icon size={20} className="text-[#f8fafc]" />
                        </div>
                        <div className="text-2xl font-bold text-[#f8fafc] font-poppins mb-1">
                          {achievement.value}
                        </div>
                        <div className="text-sm text-[#94a3b8] font-inter">
                          {achievement.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#94a3b8]"
          >
            <span className="text-sm mb-2 font-inter">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldClassHero;