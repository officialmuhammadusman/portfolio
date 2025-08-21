/* eslint-disable no-unused-vars */
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ThemeContext } from './ThemeContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Open Gmail compose window with prefilled recipient, subject, and body
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('official.muhammadusman01@gmail.com')}&su=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(gmailLink, '_blank');

    // Show toast and reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSending(false);
      toast.success("Your message is ready to send! Please click 'Send' in your Gmail tab.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === 'redblack' ? 'dark' : theme,
      });
    }, 1000);
  };

  const handleEmailClick = () => {
    // Open Gmail compose window with prefilled recipient
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('official.muhammadusman01@gmail.com')}`;
    window.open(gmailLink, '_blank');
  };

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

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-20 bg-gradient-to-br from-light-background via-light-card to-light-background dark:from-dark-background dark:via-dark-card dark:to-dark-background redblack:from-redblack-background redblack:via-redblack-card redblack:to-redblack-background relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'redblack' ? 'dark' : theme}
      />
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
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-light-primary via-light-secondary to-light-primary dark:from-dark-primary dark:via-dark-secondary dark:to-dark-primary redblack:from-redblack-primary redblack:via-redblack-primaryLight redblack:to-redblack-primary bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Let's Work Together
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
            I'm excited to collaborate on innovative projects. Reach out to discuss opportunities!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.4, delayChildren: 1 } } }}
        >
          {/* Contact Info Card */}
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-500 backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
            variants={cardVariants}
            while

Hover={{ scale: 1.02, y: -10, transition: { duration: 0.3 } }}
          >
            <motion.h3
              className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Send Me a Message
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } } }}
            >
              {[
                { icon: Mail, onClick: handleEmailClick, text: "official.muhammadusman01@gmail.com" },
                { icon: Phone, href: "tel:+923135263300", text: "(0313) 526-3300" },
                { icon: MapPin, text: "Abbottabad, Pakistan" },
                { icon: Github, href: "https://github.com/officialmuhammadusman", text: "github.com/officialmuhammadusman", target: "_blank" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammadusman-webdev", text: "linkedin.com/in/muhammadusman-webdev", target: "_blank" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <item.icon size={24} className="text-light-primary dark:text-dark-primary redblack:text-redblack-primary" />
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target || "_self"}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary redblack:group-hover:text-redblack-primary transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary redblack:group-hover:text-redblack-primary transition-colors duration-300 text-left"
                    >
                      {item.text}
                    </button>
                  ) : (
                    <span className="text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary group-hover:text-light-primary dark:group-hover:text-dark-primary redblack:group-hover:text-redblack-primary transition-colors duration-300">
                      {item.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight text-white rounded-full shadow-lg"
                whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} className="mr-2" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            className="bg-light-card/80 dark:bg-dark-card/80 redblack:bg-redblack-card/80 p-8 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-500 backdrop-blur-sm border border-light-textSecondary/10 dark:border-dark-textSecondary/10 redblack:border-redblack-textSecondary/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -10, transition: { duration: 0.3 } }}
          >
            <motion.h3
              className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Contact Form
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
                { id: "subject", label: "Subject", type: "text", placeholder: "Subject" },
                { id: "message", label: "Message", type: "textarea", placeholder: "Your Message", rows: 5 },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary redblack:text-redblack-textSecondary mb-2"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <motion.textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required
                      rows={field.rows}
                      className="w-full px-4 py-3 bg-light-background/80 dark:bg-dark-background/80 redblack:bg-redblack-background/80 border border-light-textSecondary/50 dark:border-dark-textSecondary/50 redblack:border-redblack-textSecondary/50 rounded-lg text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary focus:border-light-primary dark:focus:border-dark-primary redblack:focus:border-redblack-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 redblack:focus:ring-redblack-primary/50 transition-all duration-300 backdrop-blur-sm"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.01, borderColor: "rgba(var(--color-primary), 1)" }}
                      whileHover={{ scale: 1.01 }}
                    />
                  ) : (
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-light-background/80 dark:bg-dark-background/80 redblack:bg-redblack-background/80 border border-light-textSecondary/50 dark:border-dark-textSecondary/50 redblack:border-redblack-textSecondary/50 rounded-lg text-light-textPrimary dark:text-dark-textPrimary redblack:text-redblack-textPrimary focus:border-light-primary dark:focus:border-dark-primary redblack:focus:border-redblack-primary focus:ring-2 focus:ring-light-primary/50 dark:focus:ring-dark-primary/50 redblack:focus:ring-redblack-primary/50 transition-all duration-300 backdrop-blur-sm"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.01, borderColor: "rgba(var(--color-primary), 1)" }}
                      whileHover={{ scale: 1.01 }}
                    />
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary redblack:from-redblack-primary redblack:to-redblack-primaryLight text-white rounded-lg shadow-lg flex items-center justify-center space-x-2 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: isSending ? 1 : 1.02, y: isSending ? 0 : -2, boxShadow: isSending ? 'none' : '0 20px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                >
                  <Send size={20} />
                  <span>{isSending ? 'Opening...' : 'Send Message'}</span>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;