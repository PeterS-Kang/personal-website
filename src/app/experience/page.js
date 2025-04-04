"use client"; // Required for animations

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa"; // Example icons

// Base styles
import "@/styles/globals.css";

// Experience data array - Add descriptions later!
// Dates interpreted based on current date: April 3, 2025
const experienceData = [
  {
    title: "Software Engineer",
    organization: "Bloomberg",
    location: "New York, NY", // Example location
    startDate: "September 2025",
    endDate: "Future Position",
    description: "Excited to join Bloomberg's Engineering team to contribute to financial technology solutions.", // Placeholder
    isFuture: true,
  },
  {
    title: "Software Engineer Intern",
    organization: "Siemens",
    location: "Wilsonville, OR", // Example location
    startDate: "May 2024",
    endDate: "August 2024",
    description: "Developed features for industrial software applications, focusing on backend services and API integration.", // Placeholder
    isPast: true,
  },
  {
    title: "Undergraduate Teaching Assistant",
    organization: "Purdue University - CS Department",
    location: "West Lafayette, IN",
    startDate: "August 2023",
    endDate: "December 2024",
    description: "Assisted professors with course instruction for introductory programming courses (e.g., CS 180), graded assignments, and held office hours.", // Placeholder
    isPast: true,
  },
  {
    title: "Dev Team Organizer",
    organization: "Hello World Hackathon @ Purdue",
    location: "West Lafayette, IN",
    startDate: "February 2023",
    endDate: "September 2023",
    description: "Coordinated development efforts, managed resources, and helped organize logistics for a large-scale student hackathon.", // Placeholder
    isPast: true,
  },
  // Add more experiences here, oldest last usually
].sort((a, b) => {
    // Sort by start date, newest first (handle 'Future' case if needed, though Sep 2025 is latest here)
    // This basic sort might need refinement if dates are complex or 'Future' needs specific placement
    const dateA = a.isFuture ? new Date(8640000000000000) : new Date(a.startDate); // Treat future as very far ahead
    const dateB = b.isFuture ? new Date(8640000000000000) : new Date(b.startDate);
    return dateB - dateA; // Sort descending
});


export default function Experience() {

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const timelineVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25, delayChildren: 0.3 } }, // Stagger children animation
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, // Slide in from left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardHoverEffect = {
     scale: 1.02,
     boxShadow: "0px 10px 25px -8px rgba(0, 0, 0, 0.12)",
     transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 pt-24 sm:pt-32 pb-16 antialiased"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto max-w-3xl"> {/* Max-width 3xl suits timelines well */}
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
          My Experience
        </h1>

        {/* Timeline Container */}
        <motion.div
          className="relative" // Needed for the timeline pseudo-element line
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        >
          {/* The vertical line using a pseudo-element */}
          <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 rounded-full"></div>

          {/* Timeline Items */}
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-12 sm:pl-14 mb-10" // Padding left to make space for line/dot
              variants={itemVariants} // Apply item animation variant
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-1 transform translate-x-[-50%] ml-[18px] sm:ml-[22px] w-4 h-4 rounded-full border-2 border-white ${item.isFuture ? 'bg-purple-400' : 'bg-indigo-500'} shadow-sm`}></div>

              {/* Experience Card */}
              <motion.div
                className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/40 p-6"
                 whileHover={cardHoverEffect}
              >
                {/* Date Range and Status Badge */}
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs sm:text-sm font-semibold text-indigo-700 tracking-wide flex items-center gap-2">
                        <FaCalendarAlt className="opacity-70"/>
                        {item.startDate} - {item.endDate}
                    </p>
                    {item.isFuture && (
                        <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full">
                            Future
                        </span>
                    )}
                     {item.isPast && (
                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                            Past
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>

                {/* Organization & Location */}
                <p className="text-sm sm:text-base text-gray-600 mb-3 flex items-center gap-2">
                  <FaBriefcase className="opacity-60"/> {item.organization} {item.location && <span className="text-xs text-gray-500">({item.location})</span>}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description || "Details about responsibilities and achievements will be added soon."}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}