'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden bg-charcoal flex items-center justify-center"
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-charcoal/90 to-black/90"></div>

        {/* Subtle animated elements */}
        {mounted && (
          <>
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[60vh] opacity-40"
              style={{
                background:
                  'linear-gradient(to top, rgba(157,11,11,0.4), rgba(255,85,0,0.2), transparent 85%)',
                filter: 'blur(65px)',
                borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
              }}
              animate={{
                scale: [1, 1.03, 1],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/50 rounded-full"
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Central Figure */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-auto max-w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="relative w-[30vh] sm:w-[40vh] mx-auto">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(157,11,11,0.05) 50%, rgba(0,0,0,0) 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <Image
            src="/images/meditating-bg.png"
            alt="Paul Rataul"
            width={600}
            height={600}
            priority
            className="object-contain w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-6 max-w-4xl mx-auto pt-[38vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3"
        >
          <span className="inline-block bg-gradient-to-r from-crimson/90 to-crimson/70 px-5 py-1.5 rounded-sm font-cinzel text-sm tracking-widest text-ivory uppercase">
            Immortal Room of Light
          </span>
        </motion.div>

        <motion.h1
          className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="bg-black/40 px-4 py-2 rounded-sm inline-block">
            Transform Your Identity
          </span>
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-xl text-ivory/90 font-inter bg-black/50 p-3 rounded-sm">
            Not just content — <span className="text-gold">transmissions</span>.
            Not just community — <span className="text-gold">convergence</span>.
            <br />
            <span className="text-crimson font-semibold">
              Weaponize your genius. Rewire your destiny.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-sm inline-block mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="text-gold font-cinzel text-lg md:text-xl">
            $111/month
          </span>
          <span className="text-ivory/60 mx-3">|</span>
          <span className="text-ivory/70 text-sm">Cancel anytime</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#join"
            className="w-full sm:w-auto bg-gradient-to-r from-crimson to-crimson/90 text-ivory px-8 py-3 rounded-sm font-cinzel transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-crimson/20"
          >
            Enter The Room of Light
          </a>
          <a
            href="#benefits"
            className="w-full sm:w-auto bg-black/60 border border-gold/70 text-gold px-8 py-3 rounded-sm font-cinzel transition-all duration-300 hover:bg-black/80 hover:scale-105"
          >
            See What is Inside
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 text-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="text-gold/80 italic font-cormorant-upright text-sm mb-3 bg-black/50 py-2 inline-block px-4 rounded-sm">
          One decision can change the entire year.
        </p>
        <motion.div
          className="flex justify-center cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .getElementById('benefits')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#D4AF37"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
