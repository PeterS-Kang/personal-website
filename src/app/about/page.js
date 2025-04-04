"use client"; // Needed for framer-motion animations

import Image from "next/image";
import { motion } from 'framer-motion';
import profilePic from "@/assets/me.jpg"; // Ensure path is correct

// Icons - keeping your selection
import { FaLinux, FaPython, FaReact, FaJava } from "react-icons/fa"; // Added Java as an example if needed
import { IoLogoJavascript } from "react-icons/io5"; // Using Io5 for potentially newer icon designs
import { SiMongodb, SiCplusplus, SiTailwindcss, SiNodedotjs } from "react-icons/si"; // Added Tailwind, Node
import { BiLogoGit } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";

// Assuming globals.css provides base styles and font imports if necessary
import "@/styles/globals.css";

// Skill data - easier to manage and map
const skillsData = [
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
  { name: 'React', icon: <FaReact />, color: 'text-sky-500' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
  { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
  { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-700' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-700' },
  { name: 'SQL', icon: <BsFiletypeSql />, color: 'text-orange-600' },
  { name: 'Git', icon: <BiLogoGit />, color: 'text-red-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'Linux', icon: <FaLinux />, color: 'text-gray-800' },
  // Add or remove skills as needed
];

export default function About() {

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  };

   const skillGridVariants = {
    hidden: {}, // No initial animation needed for the container itself if children are staggered
    visible: { transition: { staggerChildren: 0.08 } }, // Stagger animation of skill blocks
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const skillHoverEffect = {
    scale: 1.06,
    y: -4,
    boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.1)",
    transition: { type: 'spring', stiffness: 300, damping: 15 }
  };


  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 pt-24 sm:pt-32 pb-16 antialiased"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Main Content Card */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200/30 overflow-hidden"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {/* Page Header */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
            About Me
          </h1>

          {/* Intro Section */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16"
            variants={sectionVariants} // Use section animation
            initial="hidden"
            animate="visible" // Trigger animation when section comes into view (can enhance with viewport hook later)
          >
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              variants={skillItemVariants} // Re-use simple scale/opacity animation
            >
              <Image
                src={profilePic}
                alt="Peter Kang profile picture"
                width={200} // Consistent size
                height={200}
                className="rounded-full shadow-lg object-cover"
                priority
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex flex-col text-center md:text-left"
              variants={skillItemVariants} // Re-use simple scale/opacity animation
            >
              <p className="text-xl sm:text-2xl font-medium mb-4 text-gray-800">
                Hi there, I'm <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Peter Kang</span>!
              </p>
              {/* Updated text using theme colors and styles */}
              <p className="text-base sm:text-lg mb-4 leading-relaxed text-gray-700">
                Currently based near <span className="font-medium text-gray-800">West Lafayette, Indiana</span>, I'm pursuing a degree in Computer Science at Purdue University. I'm passionate about building efficient, scalable software and tackling challenging problems through code. My coursework and projects have given me solid experience in software design, algorithms, and working across the tech stack.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Beyond the keyboard, I enjoy competitive gaming, participating in hackathons to rapidly prototype ideas, and staying curious about emerging technologies. I'm always eager to learn and collaborate on exciting projects.
              </p>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={sectionVariants} // Animate section as a whole first
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold text-center mb-8 text-indigo-700">
              My Tech Stack & Skills
            </h2>

            {/* Skills Grid - Animated */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              variants={skillGridVariants} // Use grid variant for staggering children
            >
              {skillsData.map((skill) => (
                // Skill Block - Animated
                <motion.div
                  key={skill.name}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 text-center shadow-md border border-gray-200/40 cursor-default" // Added cursor-default as they aren't links
                  variants={skillItemVariants} // Item animation
                  whileHover={skillHoverEffect} // Hover animation
                >
                  <div className={`inline-block text-4xl md:text-5xl mb-3 ${skill.color || 'text-indigo-600'}`}> {/* Default color if none specified */}
                    {skill.icon}
                  </div>
                  <span className="block text-sm md:text-base font-medium text-gray-800">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

        </motion.div> {/* End of Main Content Card */}
      </div> {/* End of Container */}
    </motion.div> // End of Page Wrapper
  );
}