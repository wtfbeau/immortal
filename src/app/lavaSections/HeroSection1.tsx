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
      {/* Dark overlay to improve text contrast */}
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

        {/* Golden vignette overlay for luxury feel */}
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

          {/* Image glow effect for better visibility */}
          <div
            className="absolute inset-0 rounded-full glow-effect"
            style={{ boxShadow: '0 0 30px rgba(212,175,55,0.2)' }}
          ></div>
        </div>
      </motion.div>

      {/* Hero Content - Improved contrast with background overlay */}
      <div className="absolute inset-x-0 bottom-24 sm:bottom-20 md:bottom-24 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
        {/* Main Heading - With enhanced contrast */}
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
            <span
              className="shimmer-text"
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
          </h1>
        </motion.div>

        {/* Subheadline with background for better readability */}
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
              href="#final-cta"
              className="relative block px-10 py-4 bg-gradient-to-r from-crimson via-crimson/90 to-crimson text-gold uppercase tracking-wider font-medium text-lg md:text-xl overflow-hidden border border-gold/30 flame-button rounded-sm shadow-lg shadow-crimson/20"
              aria-label="Enter The Flame"
            >
              <span className="relative z-10 flex items-center justify-center font-cinzel">
                ENTER THE FLAME
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
