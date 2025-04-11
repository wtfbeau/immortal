// pages/index.tsx
'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Immortal Paul Rataul | Prophet. Artist. Warrior. Reformer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal bg-opacity-90 backdrop-blur-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <span className="text-gold font-cinzel text-2xl">IMMORTAL</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#vip"
              className={`font-cinzel text-sm ${
                activeSection === 'vip' ? 'text-gold' : 'text-ivory'
              } hover:text-gold transition duration-300`}
            >
              IMMORTAL IGNITION
            </a>
            <a
              href="#quest"
              className={`font-cinzel text-sm ${
                activeSection === 'quest' ? 'text-gold' : 'text-ivory'
              } hover:text-gold transition duration-300`}
            >
              IMMORTAL QUEST
            </a>
            <a
              href="#methodology"
              className={`font-cinzel text-sm ${
                activeSection === 'methodology' ? 'text-gold' : 'text-ivory'
              } hover:text-gold transition duration-300`}
            >
              METHODOLOGY
            </a>
            <a
              href="#contact"
              className={`font-cinzel text-sm ${
                activeSection === 'contact' ? 'text-gold' : 'text-ivory'
              } hover:text-gold transition duration-300`}
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-ivory hover:text-gold focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
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

        {/* Mobile Menu */}
        <div
          className={`mobile-menu fixed inset-0 bg-charcoal bg-opacity-95 z-40 pt-20 px-4 ${
            isMenuOpen ? 'open' : 'closed'
          } md:hidden`}
        >
          <div className="flex flex-col space-y-6 items-center">
            <a
              href="#vip"
              onClick={() => setIsMenuOpen(false)}
              className="font-cinzel text-xl text-ivory hover:text-gold transition duration-300"
            >
              IMMORTAL IGNITION
            </a>
            <a
              href="#quest"
              onClick={() => setIsMenuOpen(false)}
              className="font-cinzel text-xl text-ivory hover:text-gold transition duration-300"
            >
              IMMORTAL QUEST
            </a>
            <a
              href="#methodology"
              onClick={() => setIsMenuOpen(false)}
              className="font-cinzel text-xl text-ivory hover:text-gold transition duration-300"
            >
              METHODOLOGY
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-cinzel text-xl text-ivory hover:text-gold transition duration-300"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero2.webp"
            alt="Paul Rataul"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-gold mb-6 fade-in-up">
              IMMORTAL PAUL RATAUL
            </h1>
            <p className="font-cormorant-upright text-2xl md:text-3xl text-ivory mb-12 opacity-90 fade-in-up">
              Prophet. Artist. Warrior. Reformer.
            </p>
            <div className="prophetic-quote my-10 fade-in-up">
              <p className="text-xl md:text-2xl text-ivory italic">
                You are not sheep. You are stars clothed in skin.
              </p>
              <p className="text-gold text-sm mt-4">— Book 1: The Coming</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 fade-in-up">
              <a
                href="#vip"
                className="flame-button font-cinzel bg-crimson text-ivory px-8 py-4 rounded-sm uppercase tracking-wider transform hover:scale-105 transition-transform duration-300 sacred-glow"
              >
                Ignite Your Flame
              </a>
              <a
                href="#quest"
                className="flame-button font-cinzel border-2 border-gold text-gold px-8 py-4 rounded-sm uppercase tracking-wider transform hover:scale-105 transition-transform duration-300"
              >
                Join The Quest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section id="vip" className="py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="book-shine rounded-sm overflow-hidden">
                <Image
                  src="/images/g-wagon.webp"
                  alt="Immortal Ignition"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-6">
                The Immortal Ignition
              </h2>
              <p className="text-xl text-ivory mb-8 font-cormorant">
                $500 VIP Offering — A sacred immersion to awaken your inner
                flame, strip illusions, and prepare you for divine remembrance
                and world-shifting action.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      1:1 Private Prophetic Session (60–90 mins)
                    </span>{' '}
                    with Paul Rataul — Soul codes, divine mirror, strategy +
                    spiritual ignition
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Custom Immortal Path Activation Map
                    </span>{' '}
                    (PDF): Your sacred blueprint across mind, body, soul, and
                    mission
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Voxer/Telegram Support
                    </span>{' '}
                    for 3 Days post-session for integration
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Exclusive Access to the Immortal Vault
                    </span>{' '}
                    with premium teachings
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Invitation to One Inner Circle Ritual Zoom Call
                    </span>{' '}
                    (normally reserved for monthly members)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Immortal Warrior Initiation Audio Pack
                    </span>{' '}
                    for daily warpath, meditation, and spiritual power
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="flame-button inline-block font-cinzel bg-crimson text-ivory px-8 py-4 rounded-sm uppercase tracking-wider transform hover:scale-105 transition-transform duration-300 sacred-glow"
              >
                Begin Your Initiation
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-24 max-w-4xl mx-auto bg-charcoal bg-opacity-70 p-6 md:p-10 border border-gold border-opacity-30 rounded-sm">
            <h3 className="font-cinzel text-2xl text-gold mb-6 text-center">
              What You will Receive in Your VIP Session
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Absolute Clarity
                  </h4>
                  <p className="text-ivory opacity-90">
                    Precise understanding of what is blocking you, why you feel
                    stuck, and what is not aligned with your deeper purpose
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Bold Action Plan
                  </h4>
                  <p className="text-ivory opacity-90">
                    A crystal-clear 30-day action roadmap with decisive steps to
                    move forward with purpose
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Strategic Guidance
                  </h4>
                  <p className="text-ivory opacity-90">
                    Direct insight across business strategy, brand growth, and
                    personal leadership
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Personal Diagnosis
                  </h4>
                  <p className="text-ivory opacity-90">
                    Identification of patterns sabotaging you, core beliefs to
                    change, and where you are playing small
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Custom Tools & Practices
                  </h4>
                  <p className="text-ivory opacity-90">
                    Specific mindset tools, daily rituals, and systems to
                    implement immediately
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-cinzel text-xl text-ivory">
                    Direct Access
                  </h4>
                  <p className="text-ivory opacity-90">
                    Ask anything about career, business, mental health, personal
                    power or content strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section
        id="quest"
        className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-6">
                The Immortal Quest
              </h2>
              <p className="text-xl text-ivory mb-8 font-cormorant">
                $111/month — A sacred monthly membership for those ready to
                rise, burn, and remember. Your daily path of awakening, guided
                by prophecy, wisdom, and flame.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">Daily Prophetic Drops</span>{' '}
                    (text, audio, cinematic) from The Immortal Flame series
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">Weekly Teachings</span> from
                    The Immortal Library with strategic, practical guidance
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Monthly Live Ritual Call + Q&A
                    </span>{' '}
                    (recorded)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">Quest Tracker:</span> A
                    Notion-based system to track spiritual, physical, and
                    mission progress
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">
                      Private Community Access
                    </span>{' '}
                    to connect with other Seekers of the Flame
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">Priority Access</span> to
                    events, drops, and mentorship offers
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    <span className="font-semibold">10% off</span> any premium
                    Immortal products (merch, books, courses, retreats)
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="flame-button inline-block font-cinzel border-2 border-gold text-gold px-8 py-4 rounded-sm uppercase tracking-wider transform hover:scale-105 transition-transform duration-300"
              >
                Join The Movement
              </a>
            </div>
            <div className="relative h-96 md:h-auto">
              <div className="book-shine rounded-sm overflow-hidden">
                <Image
                  src="/images/wake-city.webp"
                  alt="Immortal Quest"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-6">
              The Prophetic Methodology
            </h2>
            <p className="text-xl text-ivory opacity-90 font-cormorant">
              A sacred integration of ancient wisdom and modern strategy to
              awaken your highest potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-80 md:h-96">
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-charcoal">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/videos/gym-walk.mp4"
                    playsInline
                    loop
                    muted={false}
                    onClick={toggleVideo}
                  />

                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                      onClick={toggleVideo}
                    >
                      <div className="w-20 h-20 rounded-full bg-crimson bg-opacity-80 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-ivory"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-cinzel text-2xl text-gold mb-6">
                The Inner Work
              </h3>
              <p className="text-ivory mb-6">
                Every transformation begins with truth. The Immortal methodology
                first strips away the illusions that have kept you from your
                divine potential, then systematically rebuilds your foundation
                with ancient spiritual practices merged with cutting-edge
                performance psychology.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    Strategic mind-body-soul alignment
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    Pattern-breaking ritual practices
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">Identity-level transformation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-cinzel text-2xl text-gold mb-6">
                The Outer Work
              </h3>
              <p className="text-ivory mb-6">
                Your awakened flame must impact the world. The Immortal
                methodology provides practical, strategic frameworks for
                bringing your mission to life, whether through business, art,
                relationships, or revolutionary leadership.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    Mission architecture & strategic planning
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">
                    Wealth, impact & influence building
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-4">•</span>
                  <p className="text-ivory">Community & movement leadership</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-80 md:h-96">
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src="/videos/fam-selfie-mindset.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-6">
              Sacred Testimonials
            </h2>
            <p className="text-xl text-ivory opacity-90 font-cormorant">
              Voices of those who have walked the Immortal path
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-charcoal p-8 border border-gold border-opacity-20 rounded-sm">
              <p className="text-ivory font-cormorant-upright text-lg italic mb-6">
                My session with Paul was unlike anything I have experienced. In
                just one hour, he identified patterns I have been blind to for
                years and gave me a clear roadmap for transformation. Three
                months later, I have doubled my income and finally launched my
                passion project.
              </p>
              <p className="text-gold font-cinzel">MARCUS T.</p>
              <p className="text-ivory opacity-70 text-sm">
                Entrepreneur & Creator
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-charcoal p-8 border border-gold border-opacity-20 rounded-sm">
              <p className="text-ivory font-cormorant-upright text-lg italic mb-6">
                The Immortal Quest membership has become the cornerstone of my
                daily practice. The prophetic drops and weekly teachings have
                completely shifted how I view my purpose. The community has
                become my spiritual family. Worth ten times the investment.
              </p>
              <p className="text-gold font-cinzel">SARAH K.</p>
              <p className="text-ivory opacity-70 text-sm">Leadership Coach</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-charcoal p-8 border border-gold border-opacity-20 rounded-sm">
              <p className="text-ivory font-cormorant-upright text-lg italic mb-6">
                I was skeptical at first, but the Immortal Ignition session cut
                through years of self-deception in minutes. His strategic mind
                combined with his spiritual insight created the perfect storm
                for breakthrough. I finally know my true path.
              </p>
              <p className="text-gold font-cinzel">JAMES R.</p>
              <p className="text-ivory opacity-70 text-sm">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black bg-opacity-70 p-8 md:p-12 border border-gold border-opacity-30 rounded-sm">
            <div className="text-center mb-10">
              <h2 className="font-cinzel text-3xl md:text-4xl text-gold mb-6">
                Ignite Your Immortal Journey
              </h2>
              <p className="text-xl text-ivory opacity-90 font-cormorant">
                The flame awaits those who are ready. Take the first step.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-ivory mb-2 font-cinzel"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-charcoal border border-gold border-opacity-30 p-3 text-ivory rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-ivory mb-2 font-cinzel"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-charcoal border border-gold border-opacity-30 p-3 text-ivory rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-ivory mb-2 font-cinzel"
                >
                  I am Interested In
                </label>
                <select
                  id="interest"
                  className="w-full bg-charcoal border border-gold border-opacity-30 p-3 text-ivory rounded-sm focus:outline-none focus:border-gold"
                >
                  <option value="">Select an Option</option>
                  <option value="ignition">The Immortal Ignition ($500)</option>
                  <option value="quest">The Immortal Quest ($111/month)</option>
                  <option value="both">Both Offerings</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-ivory mb-2 font-cinzel"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-charcoal border border-gold border-opacity-30 p-3 text-ivory rounded-sm focus:outline-none focus:border-gold"
                  placeholder="Share your current situation and what you're seeking to transform..."
                ></textarea>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="flame-button font-cinzel bg-crimson text-ivory px-12 py-4 rounded-sm uppercase tracking-wider transform hover:scale-105 transition-transform duration-300 sacred-glow"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-gold font-cinzel text-2xl">IMMORTAL</span>
              <p className="text-ivory opacity-70 mt-2">
                © {new Date().getFullYear()} Paul Rataul. All Rights Reserved.
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                YouTube
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-ivory hover:text-gold transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-ivory opacity-50 text-sm">
              The Coming is not me. It is you. It is all. — Book 1: The Coming
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
