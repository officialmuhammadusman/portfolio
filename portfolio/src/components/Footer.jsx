/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Heart,
  ArrowUp,
} from "lucide-react";
import { motion, useInView, useAnimation, useScroll, useTransform, useSpring } from "framer-motion";
import { ThemeContext } from './ThemeContext';

const Footer = ({ scrollToSection }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, margin: "-50px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), { stiffness: 100, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 }
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

  const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <motion.footer
      ref={ref}
      className="py-12 bg-gradient-to-br from-light-card/80 via-light-card to-light-card/80 dark:from-dark-card/80 dark:via-dark-card dark:to-dark-card/80 redblack:from-redblack-card/80 redblack:via-redblack-card redblack:to-redblack-card/80 border-t border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20 backdrop-blur-sm relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      style={{ position: "relative" }}
    >
      {/* Animated Background Particles */}
      <motion.div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-light-primary/50 to-light-secondary/50 dark:from-dark-primary/50 dark:to-dark-secondary/50 redblack:from-redblack-primary/50 redblack:to-redblack-primaryLight/50 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              y: useSpring(useTransform(scrollYProgress, [0, 1], [i * 20, -(i * 20)]), { stiffness: 80, damping: 20 })
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {/* Column 1 */}
          <motion.div
            variants={columnVariants}
            whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
            style={{ perspective: 1000 }}
          >
            <motion.h3
              className="text-lg font-bold text-light-textPrimary dark:text-white  mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05,  }}
            >
              Muhammad Usman
            </motion.h3>
            <motion.p
              className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mb-4"
              variants={itemVariants}
            >
              MERN Stack Developer crafting innovative web solutions.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { href: "https://github.com/officialmuhammadusman", icon: Github },
                { href: "https://www.linkedin.com/in/muhammadusman-webdev", icon: Linkedin },
                { href: "mailto:official.muhammadusman01@gmail.com", icon: Mail },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    color: theme === "dark" ? "#3b82f6" : theme === "redblack" ? "#ef4444" : "#2563eb",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={columnVariants}
            whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
            style={{ perspective: 1000 }}
          >
            <motion.h3
              className="text-lg font-bold text-light-textPrimary dark:text-white redblack:text-redblack-textPrimary mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: theme === "dark" ? "#3b82f6" : theme === "redblack" ? "#ef4444" : "#2563eb" }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary hover:text-light-primary dark:hover:text-dark-primary redblack:hover:text-redblack-primary transition-colors duration-300 flex items-center space-x-1"
                  >
                    <motion.div
                      whileHover={{ rotate: 90, scale: 1.2, transition: { duration: 0.3 } }}
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                    <span>{label}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={columnVariants}
            whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
            style={{ perspective: 1000 }}
          >
            <motion.h3
              className="text-lg font-bold text-light-textPrimary dark:text-white redblack:text-redblack-textPrimary mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: theme === "dark" ? "#3b82f6" : theme === "redblack" ? "#ef4444" : "#2563eb" }}
            >
              Get In Touch
            </motion.h3>
            <motion.div
              className="space-y-2 text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                { icon: MapPin, text: "Abbottabad, Pakistan" },
                { icon: Phone, text: "(0313) 526-3300" },
                { icon: Mail, text: "official.muhammadusman01@gmail.com", href: "mailto:official.muhammadusman01@gmail.com" },
                { icon: Linkedin, text: "linkedin.com/in/muhammadusman-webdev", href: "https://www.linkedin.com/in/muhammadusman-webdev", target: "_blank", rel: "noopener noreferrer" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 group"
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <item.icon size={16} className="text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target || "_self"}
                      rel={item.rel}
                      className="group-hover:text-light-primary dark:group-hover:text-dark-primary redblack:group-hover:text-redblack-primary transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="group-hover:text-light-primary dark:group-hover:text-dark-primary redblack:group-hover:text-redblack-primary transition-colors duration-300">
                      {item.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight text-white rounded-full shadow-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 pt-8 border-t border-light-textSecondary/20 dark:border-dark-textSecondary/20 redblack:border-redblack-textSecondary/20 text-center"
          variants={itemVariants}
        >
          <motion.p
            className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary overflow-hidden"
            variants={textVariants}
          >
            &copy; {new Date().getFullYear()} Muhammad Usman. All rights reserved.
          </motion.p>
          <motion.p
            className="text-sm text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mt-2"
            variants={textVariants}
          >
            {/* Built with{" "} */}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* <Heart
                size={16}
                className="inline text-light-primary dark:text-dark-primary redblack:text-redblack-primary"
              /> */}
            </motion.span>{" "}
          
          </motion.p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={handleBackToTop}
          className="fixed bottom-8 right-8 px-4 py-4 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight text-white rounded-full shadow-lg z-50"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
          whileHover={{
            scale: 1.15,
            y: -5,
            rotate: 360,
            boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 150 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;