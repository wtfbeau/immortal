'use client';

import Image from 'next/image';

export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E1E] text-[#F5F5F5] py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/paul-logo.png"
              alt="Immortal Paul Rataul"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8">
            <a
              href="#prophecy"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Prophecy
            </a>
            <a
              href="#modelling"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Visuals
            </a>
            <a
              href="#books"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Books
            </a>
            <a
              href="#music"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Music
            </a>
            <a
              href="#movement"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Movement
            </a>
            <a
              href="#contact"
              className="text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#F5F5F5]/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-cinzel text-lg text-[#D4AF37]">
              Truth. Fire. Revolution.
            </div>
          </div>

          <div className="text-[#F5F5F5]/60 text-sm">
            <p>
              &copy; {currentYear} Immortal Paul Rataul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
