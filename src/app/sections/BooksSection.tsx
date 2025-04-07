'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function BooksSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Book series data based on HTML mockup
  const bookSeries = [
    {
      name: 'The Immortal Flame',
      description: 'The Spiritual Scripture Series',
      subDescription:
        "Seven volumes of divine revelation, channeled through the prophet's journey. Each book unveils ancient wisdom for the modern seeker, combining spiritual tradition with revolutionary insight.",
      books: [
        {
          title: 'The Sacred Fire',
          volume: 'Volume I of The Immortal Flame',
          coverSrc: '/images/books/immortal-flame-1.jpg',
          available: true,
        },
        {
          title: 'The Divine Vessel',
          volume: 'Volume II of The Immortal Flame',
          coverSrc: '/images/books/immortal-flame-2.jpg',
          available: true,
        },
        {
          title: "The Warrior's Path",
          volume: 'Volume III of The Immortal Flame',
          coverSrc: '/images/books/immortal-flame-3.jpg',
          available: true,
        },
        {
          title: "The Prophet's Vision",
          volume: 'Volume IV of The Immortal Flame',
          coverSrc: '/images/books/immortal-flame-4-blurred.jpg',
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
          coverSrc: '/images/books/immortal-library-1.jpg',
          available: true,
        },
        {
          title: 'The Awakened Leader',
          volume: 'Volume II of The Immortal Library',
          coverSrc: '/images/books/immortal-library-2.jpg',
          available: true,
        },
        {
          title: "Reformer's Manifesto",
          volume: 'Volume III of The Immortal Library',
          coverSrc: '/images/books/immortal-library-3.jpg',
          available: true,
        },
        {
          title: 'Divine Commerce',
          volume: 'Volume IV of The Immortal Library',
          coverSrc: '/images/books/immortal-library-4-blurred.jpg',
          available: false,
        },
      ],
    },
  ];

  // Sacred verse from The Sacred Fire
  const sacredVerse =
    'The flame does not ask permission to burn, nor does the prophet ask permission to speak. Both are manifestations of divine will—unstoppable, transformative, and necessary for the evolution of all they touch.';

  return (
    <section
      id="books"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1E1E1E] to-[#0A0A0A] text-[#F5F5F5]"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl tracking-wider mb-4">
            SACRED WRITINGS
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        {/* Book Series Tabs */}
        <div className="book-series-tabs flex justify-center mb-16">
          <div className="inline-flex border-b border-[#F5F5F5]/10">
            {bookSeries.map((series, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-sm uppercase tracking-wider border-b-2 ${
                  activeTab === index
                    ? 'border-[#D4AF37]'
                    : 'border-transparent hover:border-[#D4AF37]'
                } transition-colors font-medium`}
                onClick={() => setActiveTab(index)}
              >
                {series.name}
              </button>
            ))}
          </div>
        </div>

        {/* Book Series Description */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-cormorant-upright text-[#D4AF37] text-2xl italic mb-4">
            {bookSeries[activeTab].description}
          </h3>
          <p className="text-[#F5F5F5]/80 mb-4">
            {bookSeries[activeTab].subDescription}
          </p>
        </motion.div>

        {/* Book Carousel */}
        <div className="book-carousel relative">
          {/* Carousel Navigation */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#1E1E1E]/70 rounded-full flex items-center justify-center text-[#F5F5F5] hover:bg-[#D4AF37] hover:text-[#1E1E1E] transition-colors">
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#1E1E1E]/70 rounded-full flex items-center justify-center text-[#F5F5F5] hover:bg-[#D4AF37] hover:text-[#1E1E1E] transition-colors">
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Books Grid */}
          <motion.div
            className="books-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10"
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
                className="book-item group relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div
                  className={`book-cover aspect-[2/3] bg-[#1E1E1E] border border-[#D4AF37]/30 overflow-hidden mb-4 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 ${
                    !book.available ? 'relative' : ''
                  }`}
                >
                  {!book.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1E1E1E]/80 z-10">
                      <p className="font-cinzel text-[#D4AF37] text-lg tracking-widest rotate-6">
                        Coming Soon
                      </p>
                    </div>
                  )}
                  <Image
                    src={book.coverSrc}
                    alt={book.title}
                    fill
                    className={`w-full h-full object-cover object-center ${
                      book.available
                        ? 'group-hover:scale-105 transition-transform duration-700'
                        : 'filter blur-sm'
                    }`}
                  />
                </div>
                <h4 className="font-cinzel text-xl mb-1">{book.title}</h4>
                <p className="text-[#F5F5F5]/60 text-sm mb-4">{book.volume}</p>
                <div className="flex items-center space-x-3">
                  {book.available ? (
                    <>
                      <a
                        href="#"
                        className="px-4 py-2 bg-[#D4AF37]/90 text-[#1E1E1E] text-sm uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
                      >
                        Buy
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-sm uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-colors"
                      >
                        Preview
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="px-4 py-2 bg-[#D4AF37]/30 text-[#F5F5F5]/50 text-sm uppercase tracking-wider cursor-not-allowed"
                      >
                        Pre-Order
                      </a>
                      <a
                        href="#"
                        className="px-4 py-2 border border-[#D4AF37]/30 text-[#D4AF37]/50 text-sm uppercase tracking-wider hover:bg-[#D4AF37]/10 transition-colors"
                      >
                        Notify Me
                      </a>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sacred Verse Preview */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="mb-8">
            <h3 className="font-cormorant-upright text-[#D4AF37] text-3xl italic mb-2">
              From The Sacred Fire
            </h3>
            <div className="h-[1px] w-12 bg-[#D4AF37]/50 mx-auto"></div>
          </div>

          <blockquote className="text-[#F5F5F5]/90 text-lg md:text-xl font-cormorant leading-relaxed">
            {sacredVerse}
          </blockquote>

          {/* Audio Preview */}
          <div className="mt-12">
            <div className="audio-player bg-[#1E1E1E] border border-[#D4AF37]/30 p-4 flex items-center rounded-sm">
              <button className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4 hover:bg-[#F5F5F5] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#1E1E1E] ml-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-[#F5F5F5]/70">
                    The Sacred Fire - Audiobook Excerpt
                  </span>
                  <span className="text-sm text-[#F5F5F5]/70">1:34 / 3:45</span>
                </div>

                <div className="w-full bg-[#F5F5F5]/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#D4AF37] h-full w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
