'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EnhancedPropheticQuote = ({
  quote = "You're not just buying coaching. You're buying mythic alignment. You're entering the immortal frequency.",
  source = 'The Immortal Flame',
  backgroundImage = '/images/stars-bg.webp',
  ctaText,
  ctaHref,
  theme = 'gold',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef(null);

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <section
      id="quote"
      className="py-16 md:py-20 bg-cover bg-fixed relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={quoteRef}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${
            theme === 'crimson' ? 'rgba(157,11,11,0.1)' : 'rgba(212,175,55,0.1)'
          } 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.2,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative quote symbol */}
          <motion.svg
            className={`w-12 h-12 mx-auto mb-6 ${
              theme === 'crimson' ? 'text-crimson' : 'text-gold'
            } opacity-70`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 0.7, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
          </motion.svg>

          {/* Top divider */}
          <motion.div
            className={`w-24 h-px bg-gradient-to-r from-transparent ${
              theme === 'crimson' ? 'via-crimson/70' : 'via-gold/70'
            } to-transparent mx-auto mb-6`}
            initial={{ width: 0, opacity: 0 }}
            animate={isVisible ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          ></motion.div>

          {/* Quote text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <p className="font-cormorant-upright text-2xl md:text-3xl lg:text-4xl text-ivory leading-relaxed tracking-wide sacred-glow">
              <span className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-sm inline-block">
                {quote}
              </span>
            </p>
          </motion.div>

          {/* Bottom divider */}
          <motion.div
            className={`w-24 h-px bg-gradient-to-r from-transparent ${
              theme === 'crimson' ? 'via-crimson/70' : 'via-gold/70'
            } to-transparent mx-auto mb-6`}
            initial={{ width: 0, opacity: 0 }}
            animate={isVisible ? { width: 96, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* Source */}
          <motion.p
            className={`font-cinzel ${
              theme === 'crimson' ? 'text-crimson' : 'text-gold'
            } text-xl tracking-widest`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            — {source}
          </motion.p>

          {/* Optional CTA button */}
          {ctaText && ctaHref && (
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <a
                href={ctaHref}
                className={`inline-block sacred-glow bg-gradient-to-r ${
                  theme === 'crimson'
                    ? 'from-crimson to-crimson/80 hover:from-crimson hover:to-crimson/90 shadow-crimson/30 text-ivory'
                    : 'from-gold to-gold/80 hover:from-gold hover:to-gold/90 shadow-gold/30 text-charcoal'
                } font-cinzel text-lg px-8 py-3 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg`}
              >
                {ctaText}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedPropheticQuote;
