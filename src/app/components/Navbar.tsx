'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Navigation items wrapped in useMemo to prevent dependency changes on every render
  const navItems = useMemo(
    () => [
      { name: 'Prophecy', id: 'prophecy' },
      { name: 'SHIVA', id: 'SHIVA' }, // Updated to match component ID
      { name: 'Books', id: 'books' },
      { name: 'Music', id: 'music' },
      { name: 'Podcast', id: 'podcast' },
      { name: 'Journey', id: 'divine-journey' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = [...navItems.map((item) => item.id), 'contact'];

      // Find the current section in view
      for (const section of sections.reverse()) {
        // Check from bottom to top
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, navItems]);

  // Handle smooth scrolling when clicking nav links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === '') {
      // Scroll to top for home link
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navHeight = scrolled ? 70 : 100; // Approximate navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Main Navigation - Sticky on Scroll */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="#" onClick={(e) => handleNavClick(e, '')}>
              <Image
                src="/images/Logo.webp"
                alt="Immortal Paul Rataul"
                width={180}
                height={60}
                className={`transition-all duration-300 ${
                  scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                } w-auto`}
                priority
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[#F5F5F5] uppercase text-sm tracking-widest">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`hover:text-[#D4AF37] transition-colors cursor-pointer block px-2 py-1 relative ${
                      activeSection === item.id
                        ? 'text-[#D4AF37]'
                        : 'text-[#F5F5F5]'
                    }`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                        layoutId="activeSection"
                      />
                    )}
                  </a>
                </li>
              ))}

              {/* Contact Button */}
              <li>
                <a
                  href="#contact"
                  className={`ml-2 px-5 py-2 border border-[#D4AF37] ${
                    activeSection === 'contact'
                      ? 'bg-[#D4AF37] text-[#1E1E1E]'
                      : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10'
                  } transition-all duration-300 rounded-sm`}
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#F5F5F5] hover:text-[#D4AF37] transition-colors p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#1E1E1E]/95 backdrop-blur-lg flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex justify-between items-center p-6 border-b border-[#D4AF37]/20">
              <Image
                src="/images/Logo.webp"
                alt="Immortal Paul Rataul"
                width={150}
                height={40}
                className="h-12 w-auto"
              />

              <button
                className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow space-y-6 p-8 text-xl font-cinzel">
              <a
                href="#"
                className="py-3 hover:text-[#D4AF37] transition-colors cursor-pointer w-full text-center border-b border-[#F5F5F5]/10"
                onClick={(e) => handleNavClick(e, '')}
              >
                Home
              </a>

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-3 hover:text-[#D4AF37] transition-colors cursor-pointer w-full text-center border-b border-[#F5F5F5]/10 ${
                    activeSection === item.id
                      ? 'text-[#D4AF37]'
                      : 'text-[#F5F5F5]'
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                className={`mt-6 px-10 py-3 border-2 border-[#D4AF37] transition-all duration-300 rounded-sm ${
                  activeSection === 'contact'
                    ? 'bg-[#D4AF37] text-[#1E1E1E]'
                    : 'bg-transparent text-[#D4AF37] hover:bg-[#D4AF37]/10'
                }`}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
