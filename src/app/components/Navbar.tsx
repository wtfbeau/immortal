'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Handle smooth scrolling when clicking nav links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Immortal Paul Rataul"
            width={150}
            height={40}
            className="h-12 md:h-16 w-auto"
          />
        </div>

        <div className="nav-links">
          <ul className="hidden md:flex items-center space-x-8 text-[#F5F5F5] uppercase text-sm tracking-widest">
            {[
              'Prophecy',
              'Gallery',
              'Visuals',
              'Books',
              'SHIVA',
              'Music',
              'Contact',
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer block px-3 py-2"
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-[#F5F5F5]"
            onClick={() => setMobileMenuOpen(true)}
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
      </nav>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`mobile-menu ${
          mobileMenuOpen ? 'open' : 'closed'
        } fixed top-0 right-0 z-50 h-screen w-full bg-[#1E1E1E] text-[#F5F5F5] p-8`}
      >
        <div className="flex justify-end mb-8">
          <button
            className="close-menu"
            onClick={() => setMobileMenuOpen(false)}
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

        <div className="flex flex-col items-center space-y-6 text-xl font-cinzel">
          <a
            href="#"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, '')}
          >
            Home
          </a>
          <a
            href="#prophecy"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'prophecy')}
          >
            Prophecy
          </a>
          <a
            href="#gallery"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'gallery')}
          >
            Gallery
          </a>
          <a
            href="#visuals"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'visuals')}
          >
            Visuals
          </a>
          <a
            href="#books"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'books')}
          >
            Books
          </a>
          <a
            href="#shiva"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'shiva')}
          >
            SHIVA
          </a>
          <a
            href="#music"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'music')}
          >
            Music
          </a>
          <a
            href="#contact"
            className="py-2 hover:text-[#D4AF37] transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
