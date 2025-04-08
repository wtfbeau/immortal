'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

// Type definitions
type FloatingSymbolProps = {
  symbol: string;
  delay?: number;
  size?: number;
  left?: string;
  duration?: number;
  opacity?: number;
};

type ShivaElement = {
  letter: string;
  word: string;
  description: string;
  icon: string;
};

type Initiative = {
  title: string;
  description: string;
  icon: string;
};

// Floating symbol component for mystical elements
const FloatingSymbol = ({
  symbol,
  delay = 0,
  size = 30,
  left = '50%',
  duration = 20,
  opacity = 0.1,
}: FloatingSymbolProps) => (
  <motion.div
    className="absolute z-10 text-gold font-cormorant-upright pointer-events-none"
    style={{
      left,
      bottom: '-5%',
      fontSize: size,
      opacity: 0,
    }}
    initial={{ opacity: 0 }}
    animate={{
      y: [0, typeof window !== 'undefined' ? -window.innerHeight * 0.7 : -500],
      opacity: [0, opacity, opacity, 0],
      rotate: [0, 10, -10, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: [0.1, 0.25, 0.3, 1],
    }}
  >
    {symbol}
  </motion.div>
);

// Ancient symbols for floating elements
const symbols = [
  'ॐ',
  '☥',
  '⚶',
  '𓂀',
  '𓇽',
  '𓆣',
  '𓃀',
  '𓅓',
  '𓄿',
  '☉',
  '☽',
  '♰',
  '☸',
  '⚕',
];

export default function ShivaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);

    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      // Add listener for changes
      const handleMotionPreferenceChange = () => {
        setPrefersReducedMotion(mediaQuery.matches);
      };

      mediaQuery.addEventListener('change', handleMotionPreferenceChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      };
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // SHIVA elements data
  const shivaElements: ShivaElement[] = [
    {
      letter: 'S',
      word: 'Startups',
      description:
        "Empowering visionary founders who create technologies and businesses that advance humanity's collective evolution. We identify and nurture companies with both profit potential and spiritual alignment.",
      icon: 'rocket',
    },
    {
      letter: 'H',
      word: 'Human Impact',
      description:
        'Initiatives that directly uplift and transform human consciousness through education, healthcare, art, and community building. We focus on projects that honor both ancient wisdom and modern innovation.',
      icon: 'users',
    },
    {
      letter: 'I',
      word: 'Investment',
      description:
        'Prophecy-backed investing that channels resources into ventures aligned with the coming global renaissance. We create wealth that serves as a vehicle for planetary transformation.',
      icon: 'chart',
    },
    {
      letter: 'V',
      word: 'Vision',
      description:
        "Prophetic insight that guides all our endeavors. We operate not from short-term market analysis but from a divine understanding of humanity's trajectory and potential.",
      icon: 'eye',
    },
    {
      letter: 'A',
      word: 'Awakening',
      description:
        'The ultimate purpose of all our work—to facilitate individual and collective consciousness evolution. We believe business, art, and spirituality must unite to create lasting change.',
      icon: 'fire',
    },
  ];

  // Initiatives data
  const initiatives: Initiative[] = [
    {
      title: 'Founder Revolution Fund',
      description:
        "Supporting visionary founders building conscious technology companies that align with prophetic vision for humanity's evolution.",
      icon: 'dollar',
    },
    {
      title: 'Awakening Academy',
      description:
        'Educational initiative blending ancient wisdom with modern leadership practices. Transforming consciousness through immersive learning experiences.',
      icon: 'education',
    },
    {
      title: 'Global Reform Council',
      description:
        'Assembling visionary leaders to address systemic corruption and create new models for governance, economics, and social wellbeing.',
      icon: 'people',
    },
  ];

  // Icons for SHIVA elements
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'rocket':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        );
      case 'users':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        );
      case 'chart':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
        );
      case 'eye':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        );
      case 'fire':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
        );
      case 'dollar':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 000 1.5h1.5a3.75 3.75 0 003.75-3.75v-.75a.75.75 0 00-.75-.75H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'education':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
        );
      case 'people':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="SHIVA"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-charcoal text-ivory overflow-hidden"
      aria-labelledby="shiva-movement-title"
    >
      {/* Mystical Background Elements - Only render if user doesn't prefer reduced motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark gradient background with subtle texture */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black"
          style={{
            backgroundImage: "url('/images/subtle-texture.png')",
            backgroundBlendMode: 'overlay',
            opacity: 0.8,
          }}
          aria-hidden="true"
        ></div>

        {/* Animated background - only if user doesn't prefer reduced motion */}
        {mounted && !prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle at 30% 20%, rgba(157,11,11,0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 80%, rgba(157,11,11,0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 20%, rgba(157,11,11,0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          ></motion.div>
        )}
      </div>

      {/* Mystical Floating Elements - Only render if mounted and not preferring reduced motion */}
      {mounted && !prefersReducedMotion && (
        <>
          {symbols.slice(0, 6).map((symbol, i) => (
            <FloatingSymbol
              key={i}
              symbol={symbol}
              delay={i * 1.5}
              size={15 + Math.random() * 20}
              left={`${5 + Math.random() * 90}%`}
              duration={25 + Math.random() * 20}
              opacity={0.08 + Math.random() * 0.1}
            />
          ))}

          {/* Golden light orbs - limited number for performance */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 8 + Math.random() * 12,
                height: 8 + Math.random() * 12,
                background:
                  'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)',
                filter: 'blur(3px)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(212,175,55,0.4)',
              }}
              animate={{
                x: [0, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 80 - 40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 5px rgba(212,175,55,0.2)',
                  '0 0 15px rgba(212,175,55,0.5)',
                  '0 0 5px rgba(212,175,55,0.2)',
                ],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
              aria-hidden="true"
            />
          ))}
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header with sacred design */}
        <div className="mb-12 md:mb-16 text-center">
          <h2
            id="shiva-movement-title"
            className="font-cinzel text-4xl md:text-5xl tracking-wider text-gold mb-4"
          >
            THE SHIVA MOVEMENT
          </h2>

          {/* Decorative element styled like temple design */}
          <div
            className="relative h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            aria-hidden="true"
          >
            {mounted && !prefersReducedMotion && (
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

          {/* SHIVA description with improved readability */}
          <p className="max-w-2xl mx-auto mt-6 text-ivory/90 font-cormorant-upright italic text-lg md:text-xl">
            The divine embodiment of{' '}
            <span className="text-crimson">destruction</span> and{' '}
            <span className="text-gold">creation</span>. We tear down corrupt
            systems and build anew with sacred intention.
          </p>
        </div>

        {/* Main content wrapper - 2 column layout on larger screens */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-16 md:mb-20">
          {/* SHIVA Elements (Left Column) - Non-expandable, simplified */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-8 md:space-y-10">
              {shivaElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.3 + index * 0.1,
                      },
                    },
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    {/* Letter box with improved contrast for accessibility */}
                    <div
                      className="letter-box relative flex-shrink-0 w-20 h-20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {/* Background layers for 3D effect */}
                      <div className="absolute inset-0 bg-charcoal border border-gold/20 transform translate-x-1 translate-y-1"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black border border-gold/40"></div>

                      {/* The letter with improved contrast */}
                      <span className="relative font-cinzel text-4xl text-gold z-10">
                        {element.letter}
                      </span>

                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/60"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/60"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/60"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/60"></div>
                    </div>

                    <div className="flex-1">
                      {/* Heading with improved contrast */}
                      <h3 className="font-cinzel text-xl md:text-2xl text-gold mb-3">
                        {element.word}
                      </h3>

                      {/* Description with improved readability - emphasis words */}
                      <p className="text-ivory/90 leading-relaxed text-base">
                        {element.description.split(' ').map((word, i) => {
                          // Add subtle color emphasis to key words based on their significance
                          if (
                            word.includes('vision') ||
                            word.includes('prophet') ||
                            word.includes('divine') ||
                            word.includes('sacred') ||
                            word.includes('spiritual')
                          ) {
                            return (
                              <span key={i} className="text-gold">
                                {' '}
                                {word}
                              </span>
                            );
                          } else if (
                            word.includes('transform') ||
                            word.includes('evol') ||
                            word.includes('revolution') ||
                            word.includes('change') ||
                            word.includes('reform')
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
                      </p>
                    </div>

                    {/* Icon - hidden on mobile for better space utilization */}
                    <div className="hidden sm:flex items-center justify-center relative w-16 h-16">
                      <div className="relative text-crimson">
                        {renderIcon(element.icon)}
                      </div>
                    </div>
                  </div>

                  {/* Subtle separator with reduced animation */}
                  {index < shivaElements.length - 1 && (
                    <div
                      className="mt-8 h-px w-full opacity-30"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    ></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Shiva Image (Right Column) with improved loading */}
          <motion.div
            className="w-full lg:w-5/12 mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/40"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold/40"
                aria-hidden="true"
              ></div>

              {/* Main image with proper aspect ratio preservation */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/50">
                <Image
                  src="/images/shiva.webp"
                  alt="Lord Shiva inspiration - The divine force of transformation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority={false}
                  loading="lazy"
                  quality={90}
                />

                {/* Text overlay with improved contrast for accessibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6 md:p-8">
                  <blockquote className="text-ivory font-cormorant-upright text-base sm:text-xl italic">
                    <span className="text-gold"></span>The SHIVA Movement is not
                    merely an organization—it is the embodiment of{' '}
                    <span className="text-crimson">divine destruction</span> and{' '}
                    <span className="text-gold">creation</span>. We tear down
                    corrupt systems and build anew with sacred intention.
                    <span className="text-gold"></span>
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Initiative Cards */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-cinzel text-2xl md:text-3xl text-center text-gold mb-10 md:mb-12">
            Current Initiatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.9 + index * 0.2,
                    },
                  },
                }}
                whileHover="hover"
              >
                {/* Card with improved interactivity */}
                <motion.a
                  href="#contact"
                  className="flex-col h-full p-6 md:p-8 bg-black/60 border border-gold/20 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 block"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  variants={{
                    hover: {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  {/* Background sacred geometry pattern */}
                  <div className="absolute inset-0 overflow-hidden opacity-5">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <pattern
                        id={`grid-${index}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#D4AF37"
                          strokeWidth="0.5"
                        />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#grid-${index})`}
                      />
                    </svg>
                  </div>

                  {/* Interactive hover effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    variants={{
                      hover: {
                        opacity: 0.15,
                        background:
                          'radial-gradient(circle at center, rgba(212,175,55,0.8) 0%, transparent 70%)',
                      },
                    }}
                  ></motion.div>

                  {/* Icon with divine styling */}
                  <div className="relative mb-6 w-16 h-16 flex items-center justify-center sacred-glow rounded-full bg-charcoal border border-gold/30 group-hover:border-gold/60 transition-colors duration-500">
                    <div className="text-crimson group-hover:text-gold transition-colors duration-500">
                      {renderIcon(initiative.icon)}
                    </div>
                  </div>

                  {/* Title with luxury styling */}
                  <h4 className="font-cinzel text-xl text-gold mb-4 relative">
                    {initiative.title}

                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px bg-gold/40 w-12 group-hover:w-full transition-all duration-700"
                      aria-hidden="true"
                    ></motion.span>
                  </h4>

                  {/* Description with color emphasis */}
                  <p className="text-ivory/90 group-hover:text-ivory transition-colors duration-500 mb-6 flex-grow">
                    {initiative.description.split(' ').map((word, i) => {
                      // Add subtle color emphasis to key words
                      if (
                        word.includes('vision') ||
                        word.includes('conscious') ||
                        word.includes('wisdom') ||
                        word.includes('immersive')
                      ) {
                        return (
                          <span key={i} className="text-gold/90">
                            {' '}
                            {word}
                          </span>
                        );
                      } else if (
                        word.includes('transform') ||
                        word.includes('revolutionary') ||
                        word.includes('reform') ||
                        word.includes('change')
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
                  </p>

                  {/* Animated arrow indicator */}
                  <div className="mt-auto flex justify-end">
                    <motion.div
                      className="text-gold h-6 w-6"
                      variants={{
                        hover: { x: 5, opacity: 1 },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Corner divine accents */}
                  <div
                    className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/40 group-hover:border-gold/60 transition-colors duration-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/40 group-hover:border-gold/60 transition-colors duration-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/40 group-hover:border-gold/60 transition-colors duration-500"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/40 group-hover:border-gold/60 transition-colors duration-500"
                    aria-hidden="true"
                  ></div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work With Paul - CTA with improved accessibility */}
        <div className="relative py-12 md:py-16 text-center">
          {/* Background effect (reduced for performance) */}
          {mounted && !prefersReducedMotion && (
            <div
              className="absolute inset-0 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                className="w-full h-full opacity-10"
                animate={{
                  background: [
                    'radial-gradient(circle at center, rgba(212,175,55,0.5) 0%, transparent 60%)',
                    'radial-gradient(circle at center, rgba(212,175,55,0.7) 0%, transparent 60%)',
                    'radial-gradient(circle at center, rgba(212,175,55,0.5) 0%, transparent 60%)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              ></motion.div>
            </div>
          )}

          {/* Content with increased readability */}
          <div className="relative z-10">
            <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-6">
              Join The Movement
            </h3>
            <p className="max-w-3xl mx-auto text-ivory/90 mb-8 text-base md:text-lg">
              Whether you are a{' '}
              <span className="text-gold">visionary founder</span>,{' '}
              <span className="text-ivory">spiritual seeker</span>, or{' '}
              <span className="text-crimson">revolutionary change-maker</span>,
              there are many ways to contribute to the SHIVA Movement. Connect
              with Paul to explore collaboration opportunities.
            </p>

            {/* Interactive CTA button */}
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal border border-gold/50 text-gold uppercase tracking-wider font-medium overflow-hidden flame-button focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal hover:bg-crimson/80 hover:text-ivory hover:border-crimson/60 transition-colors duration-300"
              aria-label="Work with Paul Rataul"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {/* Flame animation on hover */}
              <span
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-crimson/40 via-gold/20 to-transparent group-hover:h-full transition-all duration-700 ease-in-out"
                aria-hidden="true"
              ></span>

              <span className="relative flex items-center">
                Work With Paul
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
