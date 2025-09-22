/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Send, 
  MessageCircle,
  User,
  AtSign,
  FileText,
  CheckCircle,
  ArrowRight,
  Globe,
  Calendar,
  Zap
} from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, margin: "-50px" });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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
    
    // Create Gmail compose URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('official.muhammadusman01@gmail.com')}&su=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(gmailLink, '_blank');

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSending(false);
    }, 1000);
  };

  const handleEmailClick = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('official.muhammadusman01@gmail.com')}`;
    window.open(gmailLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "official.muhammadusman01@gmail.com",
      action: handleEmailClick
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(0313) 526-3300",
      href: "tel:+923135263300"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abbottabad, Pakistan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "officialmuhammadusman",
      href: "https://github.com/officialmuhammadusman"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammadusman-webdev",
      href: "https://www.linkedin.com/in/muhammadusman-webdev"
    }
  ];

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      icon: User,
      required: true
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      icon: AtSign,
      required: true
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What's this about?",
      icon: FileText,
      required: true
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project or question...",
      icon: MessageCircle,
      rows: 5,
      required: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
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
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#3b82f6]/20 rounded-lg"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-[#3b82f6]/20 rounded-full"
          animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
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
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#3b82f6]" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#f8fafc] font-poppins"
            >
              Let's Connect
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
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-12">
          {/* Contact Information - Mobile: Full width, Desktop: 2 columns */}
          <motion.div 
            className="lg:col-span-2"
            variants={cardVariants}
          >
            {/* Quick Contact Card */}
            <motion.div
              className="bg-[#1e293b]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#1e293b]/50 backdrop-blur-sm mb-6 sm:mb-8"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                variants={itemVariants}
              >
                <motion.div
                  className="p-3 bg-[#3b82f6] rounded-xl shadow-sm"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Zap className="w-6 h-6 text-[#f8fafc]" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins">
                    Quick Contact
                  </h3>
                  <p className="text-sm text-[#94a3b8] font-inter">
                    Get in touch instantly
                  </p>
                </div>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.slice(0, 3).map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {contact.action || contact.href ? (
                      contact.action ? (
                        <button
                          onClick={contact.action}
                          className="w-full flex items-center space-x-4 p-3 sm:p-4 rounded-xl hover:bg-[#1e293b]/80 transition-all duration-300"
                        >
                          <ContactItem contact={contact} />
                        </button>
                      ) : (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="w-full flex items-center space-x-4 p-3 sm:p-4 rounded-xl hover:bg-[#1e293b]/80 transition-all duration-300"
                        >
                          <ContactItem contact={contact} />
                        </a>
                      )
                    ) : (
                      <div className="w-full flex items-center space-x-4 p-3 sm:p-4 rounded-xl">
                        <ContactItem contact={contact} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-[#1e293b]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#1e293b]/50 backdrop-blur-sm"
              whileHover={{ y: -4 }}
            >
              <motion.h3
                className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins mb-6 flex items-center space-x-2"
                variants={itemVariants}
              >
                <Globe className="w-5 h-5 text-[#94a3b8]" />
                <span>Connect Online</span>
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.slice(3).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-[#1e293b]/80 transition-all duration-300 border border-[#1e293b]/50"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-[#3b82f6] shadow-sm"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f8fafc]" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#f8fafc] font-poppins">
                        {social.label}
                      </p>
                      <p className="text-xs text-[#94a3b8] font-inter truncate">
                        {social.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div
                className="mt-6 pt-6 border-t border-[#1e293b]/50"
                variants={itemVariants}
              >
                <motion.a
                  href="/cv.pdf"
                  download
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-[#3b82f6] text-[#f8fafc] rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Mobile: Full width, Desktop: 3 columns */}
          <motion.div 
            className="lg:col-span-3"
            variants={cardVariants}
          >
            <motion.div
              className="bg-[#1e293b]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-[#1e293b]/50 backdrop-blur-sm"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-8"
                variants={itemVariants}
              >
                <motion.div
                  className="p-3 bg-[#3b82f6] rounded-xl shadow-sm"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Send className="w-6 h-6 text-[#f8fafc]" />
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] font-poppins">
                    Send Message
                  </h3>
                  <p className="text-sm sm:text-base text-[#94a3b8] font-inter">
                    Tell me about your project
                  </p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-semibold text-[#94a3b8] font-inter mb-2"
                    >
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    
                    <div className="relative">
                      <motion.div
                        className="absolute left-3 top-3 sm:top-4 z-10"
                        animate={{ 
                          scale: focusedField === field.id ? 1.1 : 1,
                          color: focusedField === field.id ? '#3b82f6' : '#94a3b8'
                        }}
                      >
                        <field.icon className="w-5 h-5" />
                      </motion.div>

                      {field.type === 'textarea' ? (
                        <motion.textarea
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          required={field.required}
                          rows={field.rows}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 bg-[#1e293b]/50 border-2 border-[#1e293b]/50 rounded-xl text-[#f8fafc] placeholder-[#94a3b8] focus:border-[#3b82f6] focus:ring-0 transition-all duration-300 backdrop-blur-sm resize-none"
                          placeholder={field.placeholder}
                          whileFocus={{ 
                            scale: 1.01, 
                            borderColor: '#3b82f6',
                            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                          }}
                        />
                      ) : (
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          required={field.required}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 bg-[#1e293b]/50 border-2 border-[#1e293b]/50 rounded-xl text-[#f8fafc] placeholder-[#94a3b8] focus:border-[#3b82f6] focus:ring-0 transition-all duration-300 backdrop-blur-sm"
                          placeholder={field.placeholder}
                          whileFocus={{ 
                            scale: 1.01, 
                            borderColor: '#3b82f6',
                            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center space-x-3 px-8 py-4 bg-[#3b82f6] text-[#f8fafc] rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 font-inter ${
                      isSending ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    whileHover={{ scale: isSending ? 1 : 1.02, y: isSending ? 0 : -2 }}
                    whileTap={{ scale: isSending ? 1 : 0.98 }}
                  >
                    {isSending ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-[#f8fafc]/30 border-t-[#f8fafc] rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Opening Gmail...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  <motion.p
                    className="text-xs sm:text-sm text-[#94a3b8] font-inter mt-3 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Your default email client will open with the message ready to send
                  </motion.p>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 }
            }
          }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-8 bg-[#1e293b]/50 rounded-2xl border border-[#1e293b]/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div
                className="p-4 bg-[#3b82f6] rounded-2xl shadow-sm"
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <Calendar className="w-8 h-8 text-[#f8fafc]" />
              </motion.div>
              <div className="text-left">
                <h4 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-poppins">
                  Available for Projects
                </h4>
                <p className="text-sm sm:text-base text-[#94a3b8] font-inter">
                  Currently accepting new opportunities
                </p>
              </div>
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-[#3b82f6] font-semibold font-inter"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-[#3b82f6] rounded-full animate-pulse" />
              <span className="text-sm sm:text-base">Online Now</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Helper component for contact items
const ContactItem = ({ contact }) => (
  <>
    <motion.div
      className="p-3 rounded-xl bg-[#3b82f6] shadow-sm"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f8fafc]" />
    </motion.div>
    <div className="flex-1 min-w-0 text-left">
      <p className="text-sm font-medium text-[#94a3b8] font-inter">
        {contact.label}
      </p>
      <p className="text-base sm:text-lg font-semibold text-[#f8fafc] font-poppins truncate group-hover:text-[#3b82f6] transition-colors duration-300">
        {contact.value}
      </p>
    </div>
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#94a3b8] group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all duration-300" />
  </>
);

export default Contact;