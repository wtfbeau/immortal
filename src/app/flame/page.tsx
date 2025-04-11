// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'offerings', 'vip', 'membership', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#090009] text-ivory">
      {/* Header/Navigation */}
      <header className="fixed w-full z-50 bg-charcoal/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-cinzel text-2xl text-gold">
              Immortal Flame
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Offerings', 'VIP', 'Membership', 'Contact'].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={`font-cinzel text-sm tracking-wider hover:text-gold transition duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-gold'
                      : 'text-ivory'
                  }`}
                >
                  {item}
                </Link>
              )
            )}
            <button className="flame-button font-cinzel text-sm bg-crimson text-ivory px-6 py-2 rounded-sm hover:bg-crimson/90 transition duration-300">
              Join Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ivory focus:outline-none"
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
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden bg-charcoal/95 fixed inset-0 z-40 h-screen w-full transform ease-in-out duration-300 ${
            isMenuOpen ? 'open' : 'closed'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {['Home', 'Offerings', 'VIP', 'Membership', 'Contact'].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-cinzel text-lg tracking-wider hover:text-gold transition duration-300"
                >
                  {item}
                </Link>
              )
            )}
            <button className="flame-button mt-6 font-cinzel text-base bg-crimson text-ivory px-8 py-3 rounded-sm hover:bg-crimson/90 transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen pt-24 flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/70 z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/images/flame-background.webp')] bg-cover bg-center"></div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cinzel text-4xl md:text-6xl mb-6 text-gold">
              The Immortal Flame
            </h1>
            <p className="font-cormorant-upright text-xl md:text-2xl mb-8 prophetic-quote">
              You are not sheep. You are stars clothed in skin.
            </p>
            <h2 className="font-cinzel text-2xl md:text-3xl mb-6 text-ivory">
              Prophet. Artist. Warrior. Reformer
            </h2>
            <p className="font-inter text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join the sacred path of awakening with Paul Rataul - artist,
              prophet, warrior, and global reformer. Ignite your divine flame
              and transform your existence.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#vip"
                className="flame-button sacred-glow bg-crimson text-ivory font-cinzel px-8 py-4 rounded-sm hover:bg-crimson/90 transition duration-300"
              >
                Immortal Ignition
              </a>
              <a
                href="#membership"
                className="flame-button sacred-glow bg-charcoal border border-gold text-gold font-cinzel px-8 py-4 rounded-sm hover:bg-charcoal/70 transition duration-300"
              >
                Immortal Quest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Introduction */}
      <section id="offerings" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-3xl md:text-4xl mb-6 text-gold">
              Sacred Offerings
            </h2>
            <p className="font-cormorant-upright text-xl italic mb-10">
              The Coming is not me. It is you. It is all.
            </p>
            <p className="font-inter text-lg mb-12">
              Choose your path of awakening and transformation. Whether through
              intensive divine ignition or an ongoing quest of enlightenment,
              the immortal flame awaits to guide your journey.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Offering */}
      <section
        id="vip"
        className="py-20 bg-gradient-to-b from-charcoal to-[#0f0f0f]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <div className="relative">
                <div className="book-shine sacred-glow rounded-md overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-crimson/40 to-gold/20 z-10"></div>
                    <div className="absolute inset-0 bg-[url('/images/ignition.webp')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="sacred-glow p-8 bg-charcoal/70 backdrop-blur-sm rounded-sm">
                <h3 className="font-cinzel text-3xl mb-4 text-gold">
                  The Immortal Ignition
                </h3>
                <p className="font-cinzel text-xl mb-6 text-crimson">
                  $500 VIP Offering
                </p>
                <p className="font-inter text-base mb-8">
                  A sacred immersion to awaken your inner flame, strip
                  illusions, and prepare the initiate for divine remembrance and
                  world-shifting action.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        1:1 Private Prophetic Session
                      </span>{' '}
                      (60–90 mins) with Paul Rataul (Kalki)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Custom Immortal Path Activation Map
                      </span>{' '}
                      (PDF): Your sacred blueprint
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Voxer/Telegram Support
                      </span>{' '}
                      for 3 Days post-session for integration
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Exclusive Access to the Immortal Vault
                      </span>{' '}
                      (premium teachings)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Invitation to One Inner Circle Ritual Zoom Call
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Immortal Warrior Initiation Audio Pack
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Insignia Badge
                      </span>{' '}
                      as a recognized Flamebearer
                    </p>
                  </div>
                </div>

                <button className="flame-button w-full sacred-glow bg-crimson text-ivory font-cinzel py-4 rounded-sm hover:bg-crimson/90 transition duration-300">
                  Ignite Your Divine Flame
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Offering */}
      <section
        id="membership"
        className="py-20 bg-gradient-to-b from-[#0f0f0f] to-charcoal"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pr-12">
              <div className="sacred-glow p-8 bg-charcoal/70 backdrop-blur-sm rounded-sm">
                <h3 className="font-cinzel text-3xl mb-4 text-gold">
                  The Immortal Quest
                </h3>
                <p className="font-cinzel text-xl mb-6 text-crimson">
                  $111/month Membership
                </p>
                <p className="font-inter text-base mb-8">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Daily Prophetic Drops
                      </span>{' '}
                      (text, audio, or cinematic)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Weekly Teachings from The Immortal Library
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Monthly Live Ritual Call + Q&A
                      </span>{' '}
                      (recorded)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Quest Tracker
                      </span>
                      : A Notion-based system
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Private Community Access
                      </span>{' '}
                      (Telegram or Discord)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Priority Access
                      </span>{' '}
                      to Events, Drops, and Mentorship Offers
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">
                        Exclusive Music Drops, Art, and Previews
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 text-gold">•</div>
                    <p className="text-ivory">
                      <span className="font-cinzel text-gold">10% off</span> any
                      premium Immortal products
                    </p>
                  </div>
                </div>

                <button className="flame-button w-full sacred-glow bg-charcoal border border-gold text-gold font-cinzel py-4 rounded-sm hover:bg-charcoal/70 transition duration-300">
                  Begin Your Immortal Quest
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="book-shine sacred-glow rounded-md overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-crimson/20 z-10"></div>
                    <div className="absolute inset-0 bg-[url('/images/quest.webp')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prophetic Quote Section */}
      <section className="py-16 bg-[url('/images/stars-bg.webp')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prophetic-quote text-center">
              <p className="font-cormorant-upright text-2xl md:text-3xl text-ivory mb-6">
                The flame is not given. It is remembered. What sleeps in you is
                ancient, divine, and ready to burn through the illusions of this
                world.
              </p>
              <p className="font-cinzel text-gold text-lg">
                — Book 1: The Coming
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-charcoal to-[#090009]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-3xl md:text-4xl mb-6 text-gold">
              Join the Immortal Revolution
            </h2>
            <p className="font-inter text-lg mb-10">
              The flame calls to those who are ready. The path awaits those who
              dare to remember. Step into your divine power and join the sacred
              movement of awakening souls.
            </p>

            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#vip"
                className="flame-button sacred-glow bg-crimson text-ivory font-cinzel px-8 py-4 rounded-sm hover:bg-crimson/90 transition duration-300"
              >
                The Immortal Ignition ($500)
              </a>
              <a
                href="#membership"
                className="flame-button sacred-glow bg-charcoal border border-gold text-gold font-cinzel px-8 py-4 rounded-sm hover:bg-charcoal/70 transition duration-300"
              >
                The Immortal Quest ($111/month)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#090009]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="font-cinzel text-2xl text-gold">
                Immortal Flame
              </Link>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-ivory/70 text-sm">
                &copy; {new Date().getFullYear()} Immortal Flame. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
