'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-charcoal/95 text-ivory/80 py-10 overflow-hidden"
    >
      {/* Golden accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Sacred symbol */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-70"
            >
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              <circle
                cx="30"
                cy="30"
                r="20"
                stroke="#D4AF37"
                strokeWidth="0.3"
              />
              <path d="M30 2 L30 58" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M2 30 L58 30" stroke="#D4AF37" strokeWidth="0.5" />
              <path d="M10 10 L50 50" stroke="#D4AF37" strokeWidth="0.3" />
              <path d="M50 10 L10 50" stroke="#D4AF37" strokeWidth="0.3" />
              <circle cx="30" cy="30" r="3" fill="#D4AF37" fillOpacity="0.5" />
            </svg>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6 mb-6"
          >
            <Link
              href="#hero"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              Home
            </Link>
            <Link
              href="#introduction"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              About Paul
            </Link>
            <Link
              href="#vip-activation"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              VIP Activation
            </Link>
            <Link
              href="#membership"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              Membership
            </Link>
            <Link
              href="#method"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              The Method
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-inter text-ivory/70 hover:text-gold transition-colors duration-300 mystical-underline"
            >
              Testimonials
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-xs font-inter text-ivory/60">
              © {new Date().getFullYear()} The Immortal Flame |{' '}
              <Link
                href="#"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link
                href="#"
                className="text-ivory/60 hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
