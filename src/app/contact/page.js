"use client";

import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFileAlt } from 'react-icons/fa'; // Added FaFileAlt for Resume
import { motion } from 'framer-motion'; // Import framer-motion

const ContactPage = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'kangpeter03@outlook.com', // **<- Replace with your actual email**
      icon: <FaEnvelope />,
      link: 'mailto:kangpeter03@outlook.com', // **<- Replace with your actual email**
      color: 'text-red-500', // Assign specific colors for potential theming
      bgHover: 'hover:bg-red-50',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/PeterS-Kang', // **<- Replace with your LinkedIn profile URL segment**
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/PeterS-Kang', // **<- Replace with your full LinkedIn profile URL**
      color: 'text-blue-700',
      bgHover: 'hover:bg-blue-50',
    },
    {
      title: 'GitHub',
      value: 'github.com/PeterS-Kang', // **<- Replace with your GitHub username**
      icon: <FaGithub />,
      link: 'https://github.com/PeterS-Kang', // **<- Replace with your full GitHub profile URL**
      color: 'text-gray-800',
      bgHover: 'hover:bg-gray-100',
    },
    {
      title: 'Resume', // New Card for Resume
      value: 'View My Resume', // Descriptive text
      icon: <FaFileAlt />,
      link: '/PeterKang_Resume.pdf', // **<- IMPORTANT: Replace with the actual URL/path to your resume PDF**
      color: 'text-green-600',
      bgHover: 'hover:bg-green-50',
    },
    // You can uncomment Twitter or add others if needed
    // {
    //   title: 'Twitter',
    //   value: 'twitter.com/yourhandle', // **<- Replace with your Twitter handle**
    //   icon: <FaTwitter />,
    //   link: 'https://twitter.com/yourhandle', // **<- Replace with your full Twitter profile URL**
    //   color: 'text-sky-500',
    //   bgHover: 'hover:bg-sky-50',
    // },
  ];

  // Animation Variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  const cardHoverEffect = {
    scale: 1.05, // Slightly scale up on hover
    boxShadow: "0px 15px 30px -10px rgba(0, 0, 0, 0.15)", // More pronounced shadow
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 md:p-8 antialiased">
      {/* Antialiased provides smoother font rendering */}
      <motion.div
        className="container mx-auto max-w-5xl rounded-3xl shadow-xl bg-white/80 backdrop-blur-lg overflow-hidden border border-gray-200/50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-10 md:p-16">
          {/* Enhanced Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight leading-tight">
            Let&apos;s Create Something Amazing Together
          </h1>

          {/* Animated Grid Container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((item, index) => (
              // Animated Card Item
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl p-6 ${item.bgHover} transition-colors duration-300 ease-in-out flex flex-col items-center text-center cursor-pointer border border-transparent hover:border-gray-200`}
                variants={itemVariants} // Apply item animation variant
                whileHover={cardHoverEffect} // Apply hover animation
              >
                {/* Icon styling */}
                <motion.div
                  className={`mb-5 text-5xl ${item.color} group-hover:scale-110 transition-transform duration-300 ease-out`}
                  // Add subtle rotation on hover for extra flair
                  whileHover={{ rotate: [0, 15, -10, 0], transition: { duration: 0.4 } }}
                >
                  {item.icon}
                </motion.div>

                {/* Title styling */}
                <h2 className="text-lg font-semibold mb-2 text-gray-800 tracking-wide">
                  {item.title}
                </h2>

                {/* Value styling */}
                {/* <p className="text-sm text-gray-600 break-words px-2">
                  {item.value}
                </p> */}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;