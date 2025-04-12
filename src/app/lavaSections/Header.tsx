'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items - updated for better user flow
  const navItems = [
    { name: 'Transformation', href: '#transformation' },
    { name: 'Method', href: '#method' },
    { name: 'Membership', href: '#quest-offering' },

    { name: 'VIP Offering', href: '#vip-activation' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2 bg-charcoal/95 backdrop-blur-md shadow-lg'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center space-x-2">
              {/* Sacred flame symbol */}
              <div
                className={`transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
              >
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <path d="M20,10 Q24,16 20,22 Q16,16 20,10" fill="#D4AF37" />
                  <circle cx="20" cy="20" r="2" fill="#D4AF37" />
                  <path
                    d="M20 4 L20 36"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    strokeDasharray="1 2"
                  />
                  <path
                    d="M4 20 L36 20"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    strokeDasharray="1 2"
                  />
                </svg>
              </div>

              {/* Logo text with shimmer effect */}
              <span
                className={`font-cinzel shimmer-text transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}
                style={{
                  background:
                    'linear-gradient(90deg, #D4AF37 0%, #fff6d9 25%, #D4AF37 50%, #fff6d9 75%, #D4AF37 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                The Immortal Flame
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-ivory/90 hover:text-gold transition-colors duration-300 font-inter text-sm lg:text-base mystical-underline"
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="#final-cta"
                className={`ml-2 px-4 py-2 bg-gradient-to-r from-crimson to-crimson/90 text-gold border border-gold/30 rounded-sm font-medium text-sm lg:text-base transition-all duration-300 hover:shadow-md ${
                  isScrolled ? 'sacred-glow' : ''
                }`}
              >
                Join Now
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-ivory hover:text-gold focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs z-50 bg-charcoal/95 backdrop-blur-lg shadow-xl pt-16 pb-6 px-6"
          >
            <div className="flex flex-col h-full">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 text-ivory/90 hover:text-gold transition-colors duration-300 font-inter text-lg border-b border-gold/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-4">
                <Link
                  href="#final-cta"
                  className="block w-full py-3 bg-gradient-to-r from-crimson to-crimson/90 text-gold border border-gold/30 rounded-sm text-center font-medium text-lg sacred-glow"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
