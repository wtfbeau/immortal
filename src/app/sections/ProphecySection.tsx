'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from 'framer-motion';

// Type definitions for component props
interface FloatingSymbolProps {
  symbol: string;
  delay?: number;
  size?: number;
  left?: string;
  duration?: number;
  opacity?: number;
}

interface FeaturedLogoProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

// Floating symbol component for mystical elements
const FloatingSymbol: React.FC<FloatingSymbolProps> = ({
  symbol,
  delay = 0,
  size = 30,
  left = '50%',
  duration = 20,
  opacity = 0.1,
}) => (
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

// Featured logo item component with proper TypeScript types
const FeaturedLogo: React.FC<FeaturedLogoProps> = ({
  src,
  alt,
  width = 100,
  className = '',
}) => (
  <div className={`relative h-7 ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={28}
      className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
    />
  </div>
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

// Add CSS for thin scrollbar
const scrollbarStyles = `
.thin-scrollbar::-webkit-scrollbar {
  height: 2px;
}
.thin-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.thin-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(212, 175, 55, 0.3);
  border-radius: 2px;
}
`;

export default function ProphecySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });
  const isFeaturedInView = useInView(featuredRef, {
    once: true,
    margin: '-50px 0px',
  });
  const scrollControls = useAnimation();

  // YouTube video ID from the URL
  const youtubeVideoId = 'oTRxcDIQBiM';

  // Prophecy text from the HTML mockup
  const prophecyVerse =
    'I was born with the flame of immortality. Not to conform, but to transform. Not to blend, but to transcend.';
  const prophecyText = [
    'The immortal flame was ignited in the heart of Auckland, New Zealand, where East met West in my veins. Born of warrior blood, I have carried the ancient dharma through modern realms, walking between worlds as both observer and catalyst.',
    'My mission transcends convention. I stand as living prophecy—to awaken the dormant, to challenge the corrupt, and to rebuild what has fallen. Through art, word, and presence, I channel divine fire into a world that has forgotten its sacred origins.',
    'This is not a journey of ego, but of duty. The flame I carry illuminates both the darkness in our systems and the path toward collective liberation. Join me not as followers, but as fellow bearers of the eternal light.',
  ];

  // Memoize toggleVideoExpanded to fix the React Hook dependency warning
  const toggleVideoExpanded = useCallback(() => {
    setVideoExpanded((prev) => !prev);

    // Lock/unlock body scroll when modal is open/closed
    if (!videoExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [videoExpanded]);

  // Initialize animations and handle component mount
  useEffect(() => {
    setMounted(true);
    scrollControls.start({ opacity: 1, y: 0 });

    // Return focus to the trigger element when modal closes
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && videoExpanded) {
        toggleVideoExpanded();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [scrollControls, videoExpanded, toggleVideoExpanded]);

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleVideoExpanded();
    }
  };

  return (
    <>
      {/* Add scrollbar styles */}
      <style jsx global>
        {scrollbarStyles}
      </style>

      {/* Featured In transition section - Pure black background */}
      <div
        ref={featuredRef}
        className="relative w-full py-5 overflow-hidden"
        style={{
          background: '#000000',
          borderBottom: '1px solid rgba(0,0,0,0.8)',
        }}
      >
        {/* Minimal background overlay for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-[1px] z-0"></div>
        </div>

        {/* Featured logos container with improved accessibility */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={
              isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Accessible heading for screen readers */}
            <h2 className="sr-only">Featured In</h2>

            {/* Single-line layout for logo display with improved scrolling */}
            <div
              className="w-full px-4 overflow-x-auto thin-scrollbar"
              role="region"
              aria-label="Featured logos"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFeaturedInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center justify-start md:justify-center min-w-max gap-3 md:gap-4 lg:gap-5 py-1"
              >
                {/* As seen on section */}
                <span className="text-gold/80 font-cinzel text-xs tracking-wide whitespace-nowrap flex-shrink-0">
                  As seen on:
                </span>
                <FeaturedLogo
                  src="/images/logos/nzh-logo.webp"
                  alt="NZ Herald"
                  width={75}
                />
                <FeaturedLogo
                  src="/images/logos/google-scholar.webp"
                  alt="Google Scholar"
                  width={100}
                />
                <FeaturedLogo
                  src="/images/logos/RNZ-White.webp"
                  alt="Radio NZ"
                  width={65}
                />

                {/* Divider */}
                <div
                  className="h-6 w-px bg-gold/20 mx-3 md:mx-4"
                  aria-hidden="true"
                ></div>

                {/* Trusted by section */}
                <span className="text-gold/80 font-cinzel text-xs tracking-wide whitespace-nowrap flex-shrink-0">
                  Trusted by:
                </span>
                <FeaturedLogo
                  src="/images/logos/UoA-Logo-Mono-Landscape.webp"
                  alt="University of Auckland"
                  width={90}
                />
                <FeaturedLogo
                  src="/images/logos/Sage_logo_white.webp"
                  alt="Sage"
                  width={60}
                />
                <FeaturedLogo
                  src="/images/logos/PepClothing.webp"
                  alt="Pep Clothing"
                  width={70}
                />
                <FeaturedLogo
                  src="/images/logos/NZ-Post-Logo-w.webp"
                  alt="NZ Post"
                  width={70}
                />
                <FeaturedLogo
                  src="/images/logos/qld-gv.webp"
                  alt="Queensland Government"
                  width={100}
                  className="hidden md:block"
                />
                <FeaturedLogo
                  src="/images/logos/asx.webp"
                  alt="ASX"
                  width={50}
                  className="hidden md:block"
                />
                <FeaturedLogo
                  src="/images/logos/bcg-logo.webp"
                  alt="BCG"
                  width={60}
                  className="hidden lg:block"
                />
              </motion.div>
            </div>

            {/* Visual indicator for horizontal scrolling on mobile */}
            <div className="flex gap-1 mt-2 md:hidden" aria-hidden="true">
              <motion.div
                className="w-1 h-1 rounded-full bg-gold/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-1 h-1 rounded-full bg-gold/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
              />
              <motion.div
                className="w-1 h-1 rounded-full bg-gold/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Prophecy Section - Using pure black background */}
      <section
        id="prophecy"
        ref={sectionRef}
        className="prophecy-section relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: '#000000',
        }}
      >
        {/* Video Background with Enhanced Overlay for Better Contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Dark gradient overlay with increased opacity for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20 z-10"></div>

          {/* Stronger vignette effect for better text contrast */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-90"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)',
            }}
            aria-hidden="true"
          ></div>

          {/* YouTube video as background - hidden on mobile for performance */}
          <div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
            {mounted && !videoExpanded && (
              <div className="relative w-full h-full">
                <iframe
                  className="absolute w-[130%] h-[130%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${youtubeVideoId}&disablekb=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(
                    typeof window !== 'undefined' ? window.location.origin : ''
                  )}`}
                  title="Prophecy Background Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: 'none' }}
                  loading="lazy"
                  aria-hidden="true"
                ></iframe>
              </div>
            )}
          </div>

          {/* Mobile fallback - fixed implementation to properly display background image */}
          <div className="absolute inset-0 w-full h-full md:hidden">
            <div className="absolute inset-0 bg-black/70 z-5"></div>
            <div className="absolute inset-0 z-1">
              <Image
                src="/images/prophecy-bg-fallback.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-60"
                quality={85}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Enhanced mystical elements - only render client-side */}
        {mounted && (
          <>
            {/* Selective floating symbols for better performance */}
            {symbols.slice(0, 8).map((symbol, i) => (
              <FloatingSymbol
                key={i}
                symbol={symbol}
                delay={i * 1.5}
                size={15 + Math.random() * 20}
                left={`${5 + Math.random() * 90}%`}
                duration={25 + Math.random() * 20}
                opacity={0.08 + Math.random() * 0.12}
              />
            ))}

            {/* Mystical magical light orbs with enhanced glow effect */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 8 + Math.random() * 12,
                  height: 8 + Math.random() * 12,
                  background:
                    i % 3 === 0
                      ? 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)'
                      : i % 3 === 1
                      ? 'radial-gradient(circle, rgba(157,11,11,0.4) 0%, rgba(157,11,11,0) 70%)'
                      : 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(3px)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow:
                    i % 3 === 0
                      ? '0 0 10px rgba(212,175,55,0.4)'
                      : i % 3 === 1
                      ? '0 0 10px rgba(157,11,11,0.4)'
                      : '0 0 10px rgba(255,255,255,0.3)',
                }}
                animate={{
                  x: [0, Math.random() * 80 - 40, 0],
                  y: [0, Math.random() * 80 - 40, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1],
                  boxShadow:
                    i % 3 === 0
                      ? [
                          '0 0 5px rgba(212,175,55,0.2)',
                          '0 0 15px rgba(212,175,55,0.5)',
                          '0 0 5px rgba(212,175,55,0.2)',
                        ]
                      : i % 3 === 1
                      ? [
                          '0 0 5px rgba(157,11,11,0.2)',
                          '0 0 15px rgba(157,11,11,0.5)',
                          '0 0 5px rgba(157,11,11,0.2)',
                        ]
                      : [
                          '0 0 5px rgba(255,255,255,0.1)',
                          '0 0 15px rgba(255,255,255,0.3)',
                          '0 0 5px rgba(255,255,255,0.1)',
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

            {/* Magical ethereal light rays with enhanced effects */}
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute pointer-events-none"
                style={{
                  width: 1 + (i % 3),
                  height: 120 + Math.random() * 160,
                  background:
                    i % 4 === 0
                      ? 'linear-gradient(to bottom, rgba(212,175,55,0), rgba(212,175,55,0.3), rgba(212,175,55,0))'
                      : i % 4 === 1
                      ? 'linear-gradient(to bottom, rgba(157,11,11,0), rgba(157,11,11,0.2), rgba(157,11,11,0))'
                      : i % 4 === 2
                      ? 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.15), rgba(255,255,255,0))'
                      : 'linear-gradient(to bottom, rgba(255,123,0,0), rgba(255,123,0,0.1), rgba(255,123,0,0))',
                  left: `${10 + Math.random() * 80}%`,
                  top: `${-30 + Math.random() * 30}%`,
                  transformOrigin: 'center bottom',
                  transform: `rotate(${-20 + Math.random() * 40}deg)`,
                  filter: 'blur(1px)',
                }}
                animate={{
                  opacity: [0, 0.4, 0],
                  height: ['80%', '110%', '80%'],
                  filter: ['blur(1px)', 'blur(2px)', 'blur(1px)'],
                }}
                transition={{
                  duration: 6 + Math.random() * 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 1.2,
                }}
                aria-hidden="true"
              />
            ))}

            {/* Additional magical dust particles floating around */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                className="absolute rounded-full w-1 h-1 pointer-events-none"
                style={{
                  background:
                    i % 3 === 0
                      ? '#D4AF37'
                      : i % 3 === 1
                      ? '#9D0B0B'
                      : '#FFFFFF',
                  opacity: 0.1 + Math.random() * 0.3,
                  left: `${Math.random() * 100}%`,
                  top: `${30 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -20 - Math.random() * 30],
                  x: [0, Math.random() * 40 - 20],
                  opacity: [0, 0.4, 0],
                  scale: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
                aria-hidden="true"
              />
            ))}
          </>
        )}

        {/* Main content container with reduced padding */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          {/* Section Header - Ancient temple inscription style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative mb-6 md:mb-8 text-center"
          >
            <h2
              className="font-cinzel text-4xl md:text-5xl tracking-wider text-gold mb-3"
              id="prophecy-heading"
            >
              THE PROPHECY
            </h2>

            {/* Decorative temple line with flame accent */}
            <div
              className="relative h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
              aria-hidden="true"
            >
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
            </div>
          </motion.div>

          {/* Magical Mystical Prophecy Scroll */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="prophecy-scroll max-w-4xl mx-auto p-4 md:p-6 relative"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(12px)',
              boxShadow:
                '0 0 100px rgba(0,0,0,0.9), 0 0 40px rgba(157,11,11,0.4), 0 0 25px rgba(212,175,55,0.3), inset 0 0 30px rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
            aria-labelledby="prophecy-heading"
          >
            {/* Scroll border design - more elaborate ancient manuscript style */}
            <div
              className="absolute inset-0 border border-gold/30 z-0"
              aria-hidden="true"
            >
              {/* Inner glow effect */}
              <div
                className="absolute inset-[3px] shadow-inner"
                style={{ boxShadow: 'inset 0 0 15px rgba(212,175,55,0.1)' }}
              ></div>
            </div>

            {/* Magical animated border effect */}
            <motion.div
              className="absolute inset-0 border border-gold/10 z-[1] pointer-events-none"
              animate={{
                boxShadow: [
                  'inset 0 0 5px rgba(212,175,55,0.1)',
                  'inset 0 0 15px rgba(212,175,55,0.2)',
                  'inset 0 0 5px rgba(212,175,55,0.1)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            ></motion.div>

            {/* Corner decorative elements - sacred manuscript corners */}
            <div className="absolute top-0 left-0 w-16 h-16" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M0 1 H40 Q48 1 54 7 L63 16 Q63 12 63 8 Q63 4 63 0 H0 Z"
                  fill="#000000"
                />
                <path
                  d="M1 0 V40 Q1 48 7 54 L16 63 Q12 63 8 63 Q4 63 0 63 V0 Z"
                  fill="#000000"
                />
                <path
                  d="M0 0 H40 Q50 0 60 10 L63 13 V0 H0 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0 0 V40 Q0 50 10 60 L13 63 H0 V0 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="3"
                  stroke="#9D0B0B"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </div>

            <div
              className="absolute top-0 right-0 w-16 h-16"
              aria-hidden="true"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M64 1 H24 Q16 1 10 7 L1 16 Q1 12 1 8 Q1 4 1 0 H64 Z"
                  fill="#000000"
                />
                <path
                  d="M63 0 V40 Q63 48 57 54 L48 63 Q52 63 56 63 Q60 63 64 63 V0 Z"
                  fill="#000000"
                />
                <path
                  d="M64 0 H24 Q14 0 4 10 L1 13 V0 H64 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M64 0 V40 Q64 50 54 60 L51 63 H64 V0 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="44"
                  cy="20"
                  r="3"
                  stroke="#9D0B0B"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </div>

            <div
              className="absolute bottom-0 left-0 w-16 h-16"
              aria-hidden="true"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M0 63 H40 Q48 63 54 57 L63 48 Q63 52 63 56 Q63 60 63 64 H0 Z"
                  fill="#000000"
                />
                <path
                  d="M1 64 V24 Q1 16 7 10 L16 1 Q12 1 8 1 Q4 1 0 1 V64 Z"
                  fill="#000000"
                />
                <path
                  d="M0 64 H40 Q50 64 60 54 L63 51 V64 H0 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0 64 V24 Q0 14 10 4 L13 1 H0 V64 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="20"
                  cy="44"
                  r="3"
                  stroke="#9D0B0B"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </div>

            <div
              className="absolute bottom-0 right-0 w-16 h-16"
              aria-hidden="true"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path
                  d="M64 63 H24 Q16 63 10 57 L1 48 Q1 52 1 56 Q1 60 1 64 H64 Z"
                  fill="#000000"
                />
                <path
                  d="M63 64 V24 Q63 16 57 10 L48 1 Q52 1 56 1 Q60 1 64 1 V64 Z"
                  fill="#000000"
                />
                <path
                  d="M64 64 H24 Q14 64 4 54 L1 51 V64 H64 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M64 64 V24 Q64 14 54 4 L51 1 H64 V64 Z"
                  stroke="#D4AF37"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="3"
                  stroke="#9D0B0B"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Content container with reduced padding to fit on single screen */}
            <div className="relative z-10 py-3 px-2 md:px-4">
              {/* Enhanced Magical Sacred Verse */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-5 md:mb-6 text-center relative"
              >
                {/* Decorative elements above quote */}
                <div className="flex justify-center mb-2" aria-hidden="true">
                  <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
                </div>

                {/* Quote with enhanced magical effects */}
                <div className="relative">
                  {/* Enhanced magical glow effects behind text */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-crimson/30 via-gold/10 to-transparent blur-md rounded-lg"
                    aria-hidden="true"
                  ></div>

                  {/* Pulsing flame effect behind text */}
                  <motion.div
                    className="absolute inset-0 -z-10 opacity-0"
                    animate={{
                      opacity: [0, 0.4, 0],
                      background: [
                        'radial-gradient(circle at center, rgba(157,11,11,0.4) 0%, transparent 70%)',
                        'radial-gradient(circle at center, rgba(157,11,11,0.6) 0%, transparent 70%)',
                        'radial-gradient(circle at center, rgba(157,11,11,0.4) 0%, transparent 70%)',
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    aria-hidden="true"
                  ></motion.div>

                  {/* Dancing golden light effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 opacity-70"
                    animate={{
                      boxShadow: [
                        'inset 0 0 20px rgba(212,175,55,0.3)',
                        'inset 0 0 40px rgba(212,175,55,0.4)',
                        'inset 0 0 20px rgba(212,175,55,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    aria-hidden="true"
                  ></motion.div>

                  <p
                    className="font-cormorant-upright text-xl md:text-2xl italic text-gold leading-relaxed relative z-10"
                    style={{
                      textShadow:
                        '0 2px 6px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    <span
                      className="text-4xl text-gold absolute -left-4 -top-2 opacity-80"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    {prophecyVerse}
                    <span
                      className="text-4xl text-gold absolute -right-4 -bottom-1 opacity-80"
                      aria-hidden="true"
                    >
                      &rdquo;
                    </span>
                  </p>
                </div>

                {/* Decorative elements below quote */}
                <div className="flex justify-center mt-2" aria-hidden="true">
                  <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
                </div>
              </motion.div>

              {/* Enhanced Mystical Prophetic Text */}
              <div className="prophetic-text space-y-3 md:space-y-4 text-ivory/95 relative">
                {/* Magical glowing border */}
                <motion.div
                  className="absolute inset-0 -m-2 rounded-md opacity-0 pointer-events-none"
                  animate={{
                    opacity: [0, 0.2, 0],
                    boxShadow: [
                      '0 0 0 rgba(212,175,55,0)',
                      '0 0 15px rgba(212,175,55,0.3)',
                      '0 0 0 rgba(212,175,55,0)',
                    ],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  aria-hidden="true"
                />

                {/* Enhanced flame accent with animated particles */}
                <motion.div
                  className="absolute -left-4 top-1/4 w-3 h-32"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    background: [
                      'linear-gradient(to top, #9D0B0B00, #9D0B0B50, #D4AF3740, #9D0B0B00)',
                      'linear-gradient(to top, #9D0B0B00, #9D0B0B40, #D4AF3730, #9D0B0B00)',
                      'linear-gradient(to top, #9D0B0B00, #9D0B0B50, #D4AF3740, #9D0B0B00)',
                    ],
                    filter: ['blur(2px)', 'blur(3px)', 'blur(2px)'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  aria-hidden="true"
                />

                <motion.div
                  className="absolute -right-4 top-1/3 w-3 h-32"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    background: [
                      'linear-gradient(to top, #D4AF3700, #D4AF3750, #9D0B0B40, #D4AF3700)',
                      'linear-gradient(to top, #D4AF3700, #D4AF3740, #9D0B0B30, #D4AF3700)',
                      'linear-gradient(to top, #D4AF3700, #D4AF3750, #9D0B0B40, #D4AF3700)',
                    ],
                    filter: ['blur(2px)', 'blur(3px)', 'blur(2px)'],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  aria-hidden="true"
                />

                {prophecyText.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                    }
                    transition={{ duration: 0.7, delay: 0.6 + index * 0.2 }}
                    className="font-cormorant text-base md:text-lg leading-relaxed first-letter:text-gold first-letter:text-3xl first-letter:font-cinzel first-letter:mr-1 first-letter:float-left relative"
                    style={{
                      textShadow:
                        '0 1px 4px rgba(0,0,0,0.7), 0 0 10px rgba(212,175,55,0.15)',
                      background:
                        index === 0
                          ? 'linear-gradient(90deg, rgba(212,175,55,0.05) 0%, rgba(0,0,0,0) 10%)'
                          : 'none',
                    }}
                  >
                    {/* Enhanced mystical rune before each paragraph except first */}
                    {index > 0 && (
                      <motion.span
                        className="absolute -left-6 top-1 text-gold/60 text-sm"
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                          textShadow: [
                            '0 0 3px rgba(212,175,55,0.2)',
                            '0 0 6px rgba(212,175,55,0.4)',
                            '0 0 3px rgba(212,175,55,0.2)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.7,
                        }}
                        aria-hidden="true"
                      >
                        {['⚶', '⟡', '⚱', '☉'][index % 4]}
                      </motion.span>
                    )}
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Enhanced Video CTA Button with better focus and hover states */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mt-5 md:mt-6 text-center"
              >
                <button
                  onClick={toggleVideoExpanded}
                  className="group relative inline-flex items-center gap-3 px-8 py-3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
                  aria-label="Watch Prophecy Video"
                >
                  {/* Animated border */}
                  <span
                    className="absolute inset-0 border border-gold/30"
                    aria-hidden="true"
                  ></span>

                  {/* Flame animation on hover */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-crimson/40 via-gold/20 to-transparent group-hover:h-full transition-all duration-700 ease-in-out"
                    aria-hidden="true"
                  ></span>

                  {/* Light ray effect on hover */}
                  <span
                    className="absolute inset-0 w-full h-full scale-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-300 ease-in-out bg-white/10 blur-md"
                    aria-hidden="true"
                  ></span>

                  {/* Play icon */}
                  <span
                    className="relative flex items-center justify-center w-8 h-8 rounded-full border border-gold/50 bg-gold/10 group-hover:bg-gold/30 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gold group-hover:text-ivory transition-colors duration-300 ml-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  {/* Text */}
                  <span className="relative font-cinzel text-gold group-hover:text-ivory transition-colors duration-300 text-sm md:text-base tracking-wider uppercase">
                    Watch The Prophecy
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Video Modal - Only rendered when open, with improved accessibility */}
        <AnimatePresence>
          {videoExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
              onClick={handleBackdropClick}
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-modal-title"
            >
              {/* Video Container with Ancient Frame */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-full max-w-5xl aspect-video bg-black/20 rounded-sm overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Hidden accessible title for screen readers */}
                <h3 id="video-modal-title" className="sr-only">
                  Paul Rataul Prophecy Video
                </h3>

                {/* Ancient decorative frame */}
                <div
                  className="absolute inset-0 border-2 border-gold/30 z-10 pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Corner embellishments */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/60"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/60"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60"></div>
                </div>

                {/* YouTube Embed */}
                <div className="w-full h-full relative">
                  <iframe
                    className="absolute w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1&showinfo=0&modestbranding=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(
                      typeof window !== 'undefined'
                        ? window.location.origin
                        : ''
                    )}`}
                    title="Paul Rataul Prophecy"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Close button with improved accessibility and focus handling */}
                <button
                  className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 text-gold hover:text-ivory hover:bg-crimson/70 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={toggleVideoExpanded}
                  aria-label="Close video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
