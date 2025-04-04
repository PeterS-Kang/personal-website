'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Stylish icons for menu toggle

// Assuming globals.css or a layout component handles base styles
// import "@/styles/globals.css"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu (useful when clicking a link)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  // Effect to detect scroll position for potential style changes
  useEffect(() => {
    const handleScroll = () => {
      // Add background blur only when scrolled down
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience"},
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    // Use motion.nav for potential entrance animation if desired
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50'
          : 'bg-transparent border-b border-transparent'
      } `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Home link with Gradient */}
          <Link href="/" onClick={closeMobileMenu} className="group">
            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 group-hover:opacity-80 transition-opacity duration-300">
              Peter Kang
            </span>
          </Link>

          {/* Desktop Navbar links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-indigo-600 transition-colors duration-300 group pb-1"
              >
                {link.label}
                {/* Animated underline */}
                <motion.span
                   className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left"
                   initial={{ scaleX: 0 }}
                   whileHover={{ scaleX: 1 }} // Correct usage for direct hover on parent
                   transition={{ duration: 0.3, ease: "easeOut" }}
                 />
                {/* The group class on the Link allows whileHover here, but direct motion.span hover is cleaner */}
                 {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" /> */}

              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'open' : 'closed'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated Dropdown) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200/50 pb-4"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden" // Use exit prop here
          >
            <div className="flex flex-col space-y-2 px-4 pt-4">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu} // Close menu on link click
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;