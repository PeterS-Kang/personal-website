"use client"; // Required for animations and hooks

import Image from "next/image";
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for links

// Import project images (ensure paths are correct)
import project1Img from "@/assets/mentr.png";
import project2Img from "@/assets/snapbattle.png";
import project3Img from "@/assets/music.png";

// Base styles
import "@/styles/globals.css";

// Updated project data (removed 'gradient', added optional 'liveLink')
const projects = [
  {
    img: project1Img,
    title: "Mentr", // Example: More specific title
    description:
      "A web application connecting mentors and mentees, facilitating knowledge sharing and guidance within communities.", // Example: More specific description
    githubLink: "https://github.com/PeterS-Kang/mentr", // Changed prop name
    liveLink: null, // Optional: Add live demo link
    tech: ["React", "Flask", "MongoDB", "Python"] // Optional: Add tech stack tags
  },
  {
    img: project2Img,
    title: "SnapBattle",
    description:
      "Developed a real-time image sharing and voting application using React Native and Firebase for backend services.",
    githubLink: "https://github.com/PeterS-Kang/SnapBattle",
    liveLink: null, // Example: No live link
    tech: ["React Native", "Firebase", "JavaScript", "Node.js"]
  },
  {
    img: project3Img,
    title: "TuneIn",
    description:
      "A music discovery platform leveraging Spotify API to provide personalized recommendations and playlist creation features.",
    githubLink: "https://github.com/PeterS-Kang/TuneIn",
    liveLink: null,
    tech: ["React", "Spotify API", "Django"]
  },
  // Add more projects as needed
];

export default function Projects() {

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardHoverEffect = {
    scale: 1.03, // Slightly less scale than smaller items
    y: -5,
    boxShadow: "0px 15px 30px -10px rgba(0, 0, 0, 0.15)",
    transition: { type: "spring", stiffness: 250, damping: 20 }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 pt-24 sm:pt-32 pb-16 antialiased"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
          My Projects
        </h1>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => (
            // Project Card - Replaces the custom <Card> component
            <motion.div
              key={proj.title + idx} // Use a more unique key if titles repeat
              className="rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md border border-gray-200/40 flex flex-col h-full" // Ensure full height for flex alignment
              variants={cardVariants}
              whileHover={cardHoverEffect}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-56"> {/* Fixed height container */}
                 <Image
                    src={proj.img}
                    alt={proj.title}
                    fill // Use fill layout
                    style={{ objectFit: 'cover' }} // Ensure image covers the area
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes
                    className="transition-transform duration-300 group-hover:scale-105" // Optional subtle zoom on hover (add group class to parent if needed)
                  />
              </div>


              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow allows button alignment */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow"> {/* flex-grow pushes content below it down */}
                  {proj.description}
                </p>

                {/* Optional: Tech Stack Tags */}
                {proj.tech && proj.tech.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {proj.tech.map(tag => (
                            <span key={tag} className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links/Buttons */}
                <div className="mt-auto pt-4 border-t border-gray-200/60 flex items-center gap-4"> {/* mt-auto pushes this section down */}
                  {proj.githubLink && (
                     <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium"
                      aria-label={`View ${proj.title} on GitHub`}
                    >
                      <FaGithub size={18} /> GitHub
                    </a>
                  )}
                  {proj.liveLink && (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800 transition-colors duration-200 font-medium"
                      aria-label={`View live demo of ${proj.title}`}
                    >
                       <FaExternalLinkAlt size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}