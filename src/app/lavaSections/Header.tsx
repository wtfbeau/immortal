// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  activeSection?: string;
  navigationItems?: Array<{
    name: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

export default function Header({
  activeSection = 'hero',
  navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'VIP Offering', href: '#vip' },
    { name: 'Membership', href: '#membership' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  ctaText = 'Join Now',
  ctaHref = '#contact',
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For header background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // For scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    // Add entrance animation
    setTimeout(() => {
      setHasAnimated(true);
    }, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md py-2 shadow-lg shadow-black/30'
          : 'bg-transparent py-4'
      } ${
        hasAnimated
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-crimson via-gold to-crimson"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {scrolled && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>
        )}
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-cinzel text-2xl text-gold transition-all duration-500 hover:text-gold/80 group"
          >
            <span className="sr-only">Immortal Flame</span>
            <div className="flex items-center">
              <span className="mr-2 text-crimson group-hover:scale-110 transition-transform duration-500">
                🔥
              </span>
              <span className="sacred-glow tracking-wider">Immortal Flame</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`font-cinzel text-sm tracking-widest hover:text-gold relative py-2 px-1 transition-all duration-500 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-gold after:to-transparent'
                      : 'text-ivory'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={ctaHref}
            className="flame-button ml-8 font-cinzel text-sm bg-gradient-to-r from-crimson to-crimson/80 text-ivory px-6 py-3 rounded-sm hover:from-crimson hover:to-crimson/90 transition-all duration-500 shadow-lg shadow-crimson/20 border border-crimson/50 transform hover:scale-105 sacred-glow"
          >
            {ctaText}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-ivory focus:outline-none p-2 transition-all duration-300"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gold transform transition-all duration-500 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gold transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gold transform transition-all duration-500 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right with mystical styling */}
      <div
        className={`mobile-menu md:hidden fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-gradient-to-b from-charcoal to-black backdrop-blur-lg shadow-xl transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--crimson)_0%,_transparent_70%)] opacity-5"></div>
        </div>

        <div className="flex flex-col h-full p-8 relative z-10">
          <div className="flex justify-between items-center mb-10">
            <Link
              href="/"
              className="font-cinzel text-2xl text-gold sacred-glow tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Immortal Flame
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-ivory p-2 transition-all duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-6">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="transform transition-all duration-300 hover:translate-x-2"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-cinzel text-xl block py-2 border-b border-gold/20 ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-gold sacred-glow'
                        : 'text-ivory hover:text-gold'
                    } tracking-wider transition-all duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10">
            <Link
              href={ctaHref}
              onClick={() => setIsMenuOpen(false)}
              className="flame-button w-full font-cinzel text-lg bg-gradient-to-r from-crimson to-crimson/80 text-ivory py-4 rounded-sm hover:from-crimson hover:to-crimson/90 flex justify-center items-center transition-all duration-500 sacred-glow"
            >
              <span>{ctaText}</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>

            <div className="mt-8 flex justify-center space-x-4">
              {['Instagram', 'Twitter', 'Facebook', 'YouTube'].map(
                (social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-ivory/70 hover:text-gold transition-colors duration-300 transform hover:scale-110"
                    aria-label={social}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {social === 'Instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {social === 'Twitter' && (
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      )}
                      {social === 'Facebook' && (
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      )}
                      {social === 'YouTube' && (
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      )}
                    </svg>
                  </a>
                )
              )}
            </div>

            {/* Mystical quote in mobile menu */}
            <div className="mt-10 pt-6 border-t border-gold/20">
              <p className="text-ivory/60 text-sm font-cormorant-upright italic text-center">
                The flame calls to those who are ready to burn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
