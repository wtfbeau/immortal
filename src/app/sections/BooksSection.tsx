'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Book series data types
type Book = {
  title: string;
  volume: string;
  coverSrc: string;
  available: boolean;
};

type BookSeries = {
  name: string;
  description: string;
  subDescription: string;
  books: Book[];
};

export default function BooksSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress] = useState<number>(40);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Book series data with updated images
  const bookSeries: BookSeries[] = [
    {
      name: 'The Immortal Flame',
      description: 'The Spiritual Scripture Series',
      subDescription:
        "Seven volumes of divine revelation, channeled through the prophet's journey. Each book unveils ancient wisdom for the modern seeker, combining spiritual tradition with revolutionary insight.",
      books: [
        {
          title: 'The Sacred Fire',
          volume: 'Volume I of The Immortal Flame',
          coverSrc: '/images/book1.webp',
          available: true,
        },
        {
          title: 'The Divine Vessel',
          volume: 'Volume II of The Immortal Flame',
          coverSrc: '/images/book2.webp',
          available: true,
        },
        {
          title: "The Warrior's Path",
          volume: 'Volume III of The Immortal Flame',
          coverSrc: '/images/book1.webp', // Using book1.webp since we have limited assets
          available: true,
        },
        {
          title: "The Prophet's Vision",
          volume: 'Volume IV of The Immortal Flame',
          coverSrc: '/images/book-upcoming.webp',
          available: false,
        },
      ],
    },
    {
      name: 'The Immortal Library',
      description: 'The Strategy & Awakening Series',
      subDescription:
        'Seven foundational texts for the modern leader, merging ancient wisdom with tactical strategies for transformation in a rapidly evolving world.',
      books: [
        {
          title: 'Strategic Divinity',
          volume: 'Volume I of The Immortal Library',
          coverSrc: '/images/book2.webp',
          available: true,
        },
        {
          title: 'The Awakened Leader',
          volume: 'Volume II of The Immortal Library',
          coverSrc: '/images/book1.webp',
          available: true,
        },
        {
          title: "Reformer's Manifesto",
          volume: 'Volume III of The Immortal Library',
          coverSrc: '/images/book2.webp',
          available: true,
        },
        {
          title: 'Divine Commerce',
          volume: 'Volume IV of The Immortal Library',
          coverSrc: '/images/book-upcoming.webp',
          available: false,
        },
      ],
    },
  ];

  // Sacred verse from The Sacred Fire
  const sacredVerse =
    'The flame does not ask permission to burn, nor does the prophet ask permission to speak. Both are manifestations of divine will—unstoppable, transformative, and necessary for the evolution of all they touch.';

  // Toggle audio play state
  const toggleAudioPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="books"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-charcoal to-black text-ivory overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark gradient background with subtle texture */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal to-black"
          style={{
            backgroundImage: "url('/images/subtle-texture.png')",
            backgroundBlendMode: 'overlay',
            opacity: 0.8,
          }}
          aria-hidden="true"
        ></div>

        {/* Subtle book-related patterns */}
        {mounted && (
          <div className="absolute inset-0 opacity-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="book-pattern"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M15,2 L15,28 M2,15 L28,15"
                    stroke="#D4AF37"
                    strokeWidth="0.2"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#book-pattern)" />
            </svg>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl tracking-wider text-gold mb-4">
            SACRED WRITINGS
          </h2>

          {/* Decorative divider with animation */}
          <div className="relative h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto">
            {mounted && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-full bg-crimson/30 blur-sm" />
              </motion.div>
            )}
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-ivory/80 font-cormorant-upright italic text-lg md:text-xl">
            Volumes of <span className="text-gold">divine wisdom</span> and{' '}
            <span className="text-crimson">revolutionary insight</span> for the
            modern seeker.
          </p>
        </motion.div>

        {/* Book Series Tabs - Enhanced with elegant styling */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex relative border-b border-ivory/10 p-1">
            {bookSeries.map((series, index) => (
              <motion.button
                key={index}
                className={`relative px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'text-gold'
                    : 'text-ivory/70 hover:text-ivory'
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {series.name}
                {activeTab === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                    layoutId="activeTabIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Decorative corner accents */}
            <div
              className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30"
              aria-hidden="true"
            ></div>
            <div
              className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30"
              aria-hidden="true"
            ></div>
          </div>
        </div>

        {/* Book Series Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`description-${activeTab}`}
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.h3
              className="font-cormorant-upright text-gold text-2xl italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {bookSeries[activeTab].description}
            </motion.h3>
            <motion.p
              className="text-ivory/80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {bookSeries[activeTab].subDescription
                .split(' ')
                .map((word, i) => {
                  // Add subtle color emphasis to key words
                  if (
                    word.includes('divine') ||
                    word.includes('wisdom') ||
                    word.includes('spiritual') ||
                    word.includes('sacred')
                  ) {
                    return (
                      <span key={i} className="text-gold/90">
                        {' '}
                        {word}
                      </span>
                    );
                  } else if (
                    word.includes('transform') ||
                    word.includes('revolution') ||
                    word.includes('journey') ||
                    word.includes('prophet')
                  ) {
                    return (
                      <span key={i} className="text-crimson/90">
                        {' '}
                        {word}
                      </span>
                    );
                  } else {
                    return <span key={i}> {word}</span>;
                  }
                })}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Books Grid - Enhanced with elegant styling and animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`books-${activeTab}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {bookSeries[activeTab].books.map((book, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                onMouseEnter={() => setHoveredBook(index)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {/* Book Cover - Enhance with 3D effect and hover animations */}
                <div className="relative aspect-[2/3] mb-6 group perspective">
                  <motion.div
                    className={`relative w-full h-full book-shine sacred-glow shadow-xl ${
                      hoveredBook === index ? 'transform-active' : ''
                    }`}
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.05,
                      transition: { duration: 0.4 },
                    }}
                  >
                    {/* Decorative spine effect */}
                    <div className="absolute left-0 top-0 h-full w-[8px] bg-gradient-to-r from-black/60 to-transparent"></div>

                    {/* Cover image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={book.coverSrc}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className={`w-full h-full object-cover ${
                          !book.available ? 'filter blur-sm' : ''
                        }`}
                      />

                      {/* Overlay for unavailable books */}
                      {!book.available && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-10">
                          <div className="text-center">
                            <p className="font-cinzel text-gold text-lg tracking-widest mb-1">
                              Coming Soon
                            </p>
                            <div className="h-px w-16 bg-gold/40 mx-auto"></div>
                          </div>
                        </div>
                      )}

                      {/* Divine light effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 mix-blend-overlay"
                        animate={{ opacity: hoveredBook === index ? 0.5 : 0 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>

                    {/* Ornamental frame */}
                    <div className="absolute inset-0 border border-gold/20 pointer-events-none">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/60"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/60"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/60"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/60"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Book Details */}
                <div className="text-center">
                  <h4 className="font-cinzel text-xl text-gold mb-1">
                    {book.title}
                  </h4>
                  <p className="text-ivory/60 text-sm mb-4">{book.volume}</p>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-3">
                    {book.available ? (
                      <>
                        <motion.a
                          href="#contact"
                          className="px-5 py-2 bg-gold text-charcoal text-sm uppercase tracking-wider font-medium hover:bg-ivory transition-colors"
                          whileHover={{ y: -2, scale: 1.02 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          Buy
                        </motion.a>
                        <motion.a
                          href="#"
                          className="px-5 py-2 border border-gold/50 text-gold text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
                          whileHover={{ y: -2 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          Preview
                        </motion.a>
                      </>
                    ) : (
                      <>
                        <motion.button
                          className="px-5 py-2 bg-gold/20 text-gold/50 text-sm uppercase tracking-wider font-medium cursor-not-allowed"
                          whileHover={{ scale: 1.01 }}
                        >
                          Pre-Order
                        </motion.button>
                        <motion.a
                          href="#contact"
                          className="px-5 py-2 border border-gold/30 text-gold/80 text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
                          whileHover={{ y: -2 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          Notify Me
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sacred Verse Preview - Enhanced with elegant styling */}
        <motion.div
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-cormorant-upright text-gold text-3xl italic mb-3">
              From The Sacred Fire
            </h3>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"></div>
          </div>

          {/* Verse with decorative styling */}
          <div className="relative prophetic-quote mb-12 px-6 md:px-12">
            <blockquote className="text-ivory/90 text-lg md:text-2xl font-cormorant-upright italic leading-relaxed text-center">
              <span className="text-gold text-3xl"></span>
              {sacredVerse.split(' ').map((word, i) => {
                // Add subtle color emphasis to key words
                if (
                  word.includes('flame') ||
                  word.includes('divine') ||
                  word.includes('manifestations')
                ) {
                  return (
                    <span key={i} className="text-gold">
                      {' '}
                      {word}
                    </span>
                  );
                } else if (
                  word.includes('burn') ||
                  word.includes('transform') ||
                  word.includes('prophet') ||
                  word.includes('evolution')
                ) {
                  return (
                    <span key={i} className="text-crimson">
                      {' '}
                      {word}
                    </span>
                  );
                } else {
                  return <span key={i}> {word}</span>;
                }
              })}
              <span className="text-gold text-3xl"></span>
            </blockquote>
          </div>

          {/* Enhanced Audio Player */}
          <motion.div
            className="relative mx-auto max-w-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="audio-player bg-black/60 border border-gold/30 p-6 flex items-center rounded-sm backdrop-blur-sm">
              {/* Play Button */}
              <button
                onClick={toggleAudioPlay}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-gold to-gold/90 flex items-center justify-center mr-5 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 focus:outline-none focus-visible:ring focus-visible:ring-gold/50"
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-charcoal"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-charcoal ml-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {/* Audio Controls */}
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gold/80 font-medium">
                    The Sacred Fire - Audiobook Excerpt
                  </span>
                  <span className="text-sm text-ivory/70">1:34 / 3:45</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-charcoal rounded-full overflow-hidden cursor-pointer group">
                  <motion.div
                    className="bg-gradient-to-r from-crimson to-gold h-full"
                    style={{ width: `${audioProgress}%` }}
                    initial={{ width: '40%' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 rounded-full w-3 h-3 bg-gold -mt-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${audioProgress}% - 6px)` }}
                    ></div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div
              className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-gold/60"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-gold/60"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-gold/60"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-gold/60"
              aria-hidden="true"
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
