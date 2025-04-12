'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Elegant fire particle with more subtle, luxurious appearance
const FireParticle = ({
  delay = 0,
  duration = 15,
  size = 20,
  left = '50%',
  opacity = 0.7,
}) => (
  <motion.div
    className="absolute z-10"
    style={{
      left,
      bottom: '-5%',
      width: size,
      height: size * 1.5,
    }}
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [0, -window.innerHeight * 1.2],
      opacity: [0, opacity * 0.85, opacity * 0.85, 0],
      rotate: [0, 10, -10, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: [0.1, 0.25, 0.3, 1],
    }}
  >
    <div
      className="w-full h-full"
      style={{
        background:
          'radial-gradient(circle at 50% 30%, rgba(255,85,0,0.8), rgba(157,11,11,0.8))',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        filter: 'blur(4px)',
      }}
    />
  </motion.div>
);

// Golden sparkle component for divine effect
const GoldenSparkle = ({
  delay = 0,
  duration = 8,
  size = 2,
  left = '50%',
  top = '50%',
}) => (
  <motion.div
    className="absolute z-5 rounded-full"
    style={{
      left,
      top,
      width: size,
      height: size,
      background:
        'radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0) 70%)',
      boxShadow: '0 0 4px rgba(212,175,55,0.8)',
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.2, 1, 0.2],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  // Only run particle animations after component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);

    // Add animation to the shimmer-text element
    const shimmerElements = document.querySelectorAll('.shimmer-text');
    shimmerElements.forEach((element) => {
      element.animate(
        [{ backgroundPosition: '-100% 0' }, { backgroundPosition: '200% 0' }],
        {
          duration: 8000,
          iterations: Infinity,
          easing: 'linear',
        }
      );
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative h-screen w-full overflow-hidden bg-charcoal"
      id="hero"
    >
      {/* Darkened background for better contrast */}
      <div className="absolute inset-0 z-0 bg-black/70"></div>

      {/* Mystical Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Deep luxurious background */}
        <motion.div
          className="absolute inset-0 bg-charcoal"
          initial={{
            background:
              'radial-gradient(circle at 50% 50%, #1E1E1E 0%, #090909 100%)',
          }}
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, #1E1E1E 0%, #090909 100%)',
              'radial-gradient(circle at 60% 40%, #1E1E1E 0%, #090909 100%)',
              'radial-gradient(circle at 40% 60%, #1E1E1E 0%, #090909 100%)',
              'radial-gradient(circle at 50% 50%, #1E1E1E 0%, #090909 100%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle golden vignette overlay for luxury feel */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212,175,55,0.2) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        {/* Divine fire base glow at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/4 opacity-40"
          style={{
            background:
              'linear-gradient(to top, rgba(157,11,11,0.25), rgba(212,175,55,0.1), transparent)',
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* Fire particles with divine energy */}
      {mounted && (
        <>
          {[...Array(12)].map((_, i) => (
            <FireParticle
              key={i}
              delay={i * 0.5}
              duration={12 + Math.random() * 8}
              size={8 + Math.random() * 20}
              left={`${5 + Math.random() * 90}%`}
              opacity={0.3 + Math.random() * 0.4}
            />
          ))}

          {/* Divine golden sparkles */}
          {[...Array(25)].map((_, i) => (
            <GoldenSparkle
              key={`sparkle-${i}`}
              delay={i * 0.3}
              duration={4 + Math.random() * 6}
              size={1 + Math.random() * 2}
              left={`${5 + Math.random() * 90}%`}
              top={`${10 + Math.random() * 80}%`}
            />
          ))}
        </>
      )}

      {/* Main flame effect behind the portal imagery */}
      <motion.div
        className="absolute z-5 bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-[80vh] opacity-46"
        style={{
          background:
            'linear-gradient(to top, rgba(157,11,11,0.6), rgba(255,85,0,0.4), rgba(255,204,0,0.25), transparent 85%)',
          filter: 'blur(65px)',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        }}
        animate={{
          scale: [1, 1.03, 1, 1.02, 1],
          y: [0, -3, 0, -2, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Portal/Sacred Geometric Element */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Sri Yantra-inspired sacred geometry */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: [0.03, 0.05, 0.03], rotate: 360 }}
          transition={{
            opacity: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
          }}
        >
          <svg
            viewBox="0 0 500 500"
            width="150%"
            height="150%"
            className="absolute"
            style={{ maxWidth: 'none' }}
          >
            {/* Outer circle */}
            <circle
              cx="250"
              cy="250"
              r="240"
              stroke="#D4AF37"
              strokeWidth="0.4"
              fill="none"
            />

            {/* Middle circle */}
            <circle
              cx="250"
              cy="250"
              r="200"
              stroke="#9D0B0B"
              strokeWidth="0.2"
              fill="none"
            />

            {/* Inner circle */}
            <circle
              cx="250"
              cy="250"
              r="160"
              stroke="#D4AF37"
              strokeWidth="0.4"
              fill="none"
            />

            {/* Triangles - Sri Yantra inspired */}
            <polygon
              points="250,10 490,370 10,370"
              stroke="#D4AF37"
              strokeWidth="0.4"
              fill="none"
            />
            <polygon
              points="250,490 10,130 490,130"
              stroke="#D4AF37"
              strokeWidth="0.4"
              fill="none"
            />

            {/* Inner triangles */}
            <polygon
              points="250,70 400,350 100,350"
              stroke="#9D0B0B"
              strokeWidth="0.2"
              fill="none"
            />
            <polygon
              points="250,430 100,150 400,150"
              stroke="#9D0B0B"
              strokeWidth="0.2"
              fill="none"
            />

            {/* Center star */}
            <polygon
              points="250,180 270,230 325,230 280,260 300,315 250,285 200,315 220,260 175,230 230,230"
              stroke="#D4AF37"
              strokeWidth="0.5"
              fill="none"
            />

            {/* Mystical sigil lines */}
            <line
              x1="10"
              y1="250"
              x2="490"
              y2="250"
              stroke="#D4AF37"
              strokeWidth="0.2"
            />
            <line
              x1="250"
              y1="10"
              x2="250"
              y2="490"
              stroke="#D4AF37"
              strokeWidth="0.2"
            />
            <line
              x1="100"
              y1="100"
              x2="400"
              y2="400"
              stroke="#D4AF37"
              strokeWidth="0.2"
            />
            <line
              x1="400"
              y1="100"
              x2="100"
              y2="400"
              stroke="#D4AF37"
              strokeWidth="0.2"
            />
          </svg>
        </motion.div>

        {/* Spinning mandala elements */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center mix-blend-overlay"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            rotate: { duration: 180, repeat: Infinity, ease: 'linear' },
          }}
        >
          <svg
            viewBox="0 0 500 500"
            width="120%"
            height="120%"
            className="absolute opacity-5"
            style={{ maxWidth: 'none' }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 250 250)`}>
                <path
                  d="M250,100 L250,30 L270,100 Z"
                  fill="#9D0B0B"
                  fillOpacity="0.3"
                />
                <path
                  d="M250,400 L250,470 L230,400 Z"
                  fill="#9D0B0B"
                  fillOpacity="0.3"
                />
              </g>
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <circle
                key={`circle-${i}`}
                cx="250"
                cy="250"
                r={100 + i * 8}
                stroke={i % 2 === 0 ? '#D4AF37' : '#9D0B0B'}
                strokeWidth="0.15"
                strokeDasharray={
                  i % 3 === 0 ? '1 10' : i % 3 === 1 ? '5 5' : '10 1'
                }
                fill="none"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Central Hero image */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15 w-auto max-w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: [0.98, 1, 0.99, 1.01, 0.98],
          y: [0, -3, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 1.5 },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="relative w-[36vh] sm:w-[42vh] md:w-[52vh] lg:w-[62vh] mx-auto">
          {/* Divine golden aura behind the image */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(157,11,11,0.05) 50%, rgba(0,0,0,0) 70%)',
              filter: 'blur(25px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Image
            src="/images/hero.webp"
            alt="The Immortal Portal"
            width={800}
            height={800}
            priority
            className="object-contain w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Hero Content - Improved contrast with background overlay */}
      <div className="absolute inset-x-0 bottom-24 sm:bottom-20 md:bottom-24 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
        {/* Sacred symbol above title */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1],
            rotateY: [0, 180, 360],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Sacred symbol */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle */}
            <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="0.7" />

            {/* Inner circle */}
            <circle cx="30" cy="30" r="20" stroke="#D4AF37" strokeWidth="0.5" />

            {/* Cross */}
            <path d="M30 2 L30 58" stroke="#D4AF37" strokeWidth="0.7" />
            <path d="M2 30 L58 30" stroke="#D4AF37" strokeWidth="0.7" />

            {/* Diagonal crosses */}
            <path d="M10 10 L50 50" stroke="#D4AF37" strokeWidth="0.4" />
            <path d="M50 10 L10 50" stroke="#D4AF37" strokeWidth="0.4" />

            {/* Flame center */}
            <path d="M30,22 Q33,17 30,12 Q27,17 30,22" fill="#9D0B0B" />
            <path
              d="M30,22 Q27,17 30,12 Q33,17 30,22"
              fill="#D4AF37"
              fillOpacity="0.5"
            />

            {/* Central dot */}
            <circle cx="30" cy="30" r="3" fill="#D4AF37" />

            {/* Subtle rays */}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M30,30 L${30 + 15 * Math.cos((i * Math.PI) / 4)},${
                  30 + 15 * Math.sin((i * Math.PI) / 4)
                }`}
                stroke="#D4AF37"
                strokeWidth="0.3"
                strokeDasharray="1 2"
              />
            ))}
          </svg>
        </motion.div>

        {/* Main Heading - Using the sparkly gold effect from brand guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-3"
        >
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl tracking-wide">
            <span
              className="text-ivory"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
            >
              Welcome to the
            </span>{' '}
            <span className="relative">
              {/* Sparkly gold text with shimmer for "Immortal Portal" */}
              <span
                className="text-gold shimmer-text"
                style={{
                  background:
                    'linear-gradient(90deg, #D4AF37 0%, #fff6d9 25%, #D4AF37 50%, #fff6d9 75%, #D4AF37 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  textShadow: '0 0 10px rgba(212,175,55,0.5)',
                }}
              >
                Immortal Portal
              </span>

              {/* Elegant golden underline effect */}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #D4AF37 70%, transparent 100%)',
                  filter: 'blur(0.5px)',
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                  width: ['95%', '100%', '95%'],
                  left: ['2.5%', '0%', '2.5%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Enhanced subheadline with better contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-5"
        >
          <div className="relative inline-block px-6 py-2">
            {/* Background blur overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg -z-10"></div>

            <h2 className="font-cormorant-upright text-xl md:text-2xl lg:text-3xl text-ivory/95 font-medium">
              This is where you remember who you are.
            </h2>
          </div>
        </motion.div>

        {/* Power Statement with shimmer effect */}
        <motion.div
          className="font-playfair text-2xl md:text-3xl mb-5 max-w-3xl sacred-glow py-2 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-gold">
            Weaponize Your Genius. Rewire Your Destiny.
          </h2>
        </motion.div>

        {/* Description with enhanced visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8 relative inline-block px-6 py-2"
        >
          {/* Subtle background for better readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-lg -z-10"></div>

          <p className="font-inter text-base md:text-lg lg:text-xl text-ivory font-medium">
            Transform vision into reality. Strip away illusions. Step into your
            true power.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Main CTA Button with enhanced effects */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {/* Glow effect */}
            <span className="absolute -inset-0.5 bg-gradient-to-r from-crimson via-gold to-crimson opacity-80 group-hover:opacity-100 blur-sm group-hover:blur rounded-sm transition-all duration-500"></span>

            {/* Main button */}
            <a
              href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
              className="relative block px-10 py-4 bg-gradient-to-r from-crimson via-crimson to-crimson/90 text-gold uppercase tracking-wider font-medium text-lg md:text-xl overflow-hidden border border-gold/30 flame-button rounded-sm"
              aria-label="Enter The Flame"
            >
              {/* Flame hover effect */}
              <span className="absolute inset-0 w-full h-0 transition-all duration-700 ease-out bg-gradient-to-t from-gold/20 via-gold/10 to-transparent group-hover:h-full opacity-0 group-hover:opacity-100"></span>

              {/* Text with hover effect */}
              <span className="relative group-hover:text-gold/100 transition-colors duration-300 flex items-center justify-center font-cinzel">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✧
                </span>
                ENTER THE FLAME
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ✧
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        onClick={() => {
          document
            .getElementById('introduction')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#D4AF37"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
