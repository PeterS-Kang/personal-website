"use client"

import Image from "next/image";
import { motion } from 'framer-motion'; // Import framer-motion
import profilePic from "@/assets/me.jpg"; // Ensure this path is correct
// Assuming globals.css provides base styles and font imports if necessary
import "@/styles/globals.css";

export default function Home() {

  // Animation variants for the main content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation of children (image and text)
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
  };


  return (
    // Main container with gradient background and padding for navbar
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-24 sm:py-32 antialiased">
      {/* Overall container for animation staggering */}
       <motion.div
        className="container mx-auto max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Glassmorphism Card */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl bg-white/70 backdrop-blur-lg border border-gray-200/30 overflow-hidden"
          // Animate the card itself slightly
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {/* Profile Image Section - Animated */}
          <motion.div
            className="flex-shrink-0"
            variants={imageVariants} // Use specific animation for image
          >
            <Image
              src={profilePic}
              width={200} // Adjusted size slightly
              height={200}
              alt="Peter Kang profile picture" // More descriptive alt text
              className="rounded-full shadow-lg object-cover" // Removed border, added rounded-full
              priority // Important for LCP (Largest Contentful Paint)
            />
          </motion.div>

          {/* Text Content Section - Animated */}
          <motion.div
            className="flex flex-col text-center md:text-left"
            variants={itemVariants} // General item animation
          >
            {/* Gradient Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
              Hello, I&apos;m Peter Kang
            </h1>

            {/* Tagline/Subheading */}
            <p className="text-lg sm:text-xl mb-5 text-gray-700 font-medium">
              A student at Purdue University and an incoming software engineer at Bloomberg.
              {/* **<- Suggestion: Replace with your actual short tagline!** */}
            </p>

            {/* Welcome Text */}
            <p className="text-base text-gray-600 leading-relaxed">
              Welcome to my personal corner of the internet. I&apos;m excited to share my journey, projects, and insights with you. Feel free to explore!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}