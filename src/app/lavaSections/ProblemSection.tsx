'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Add animation to any shimmer-text elements
  useEffect(() => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  // Problem items with bold statements
  const problemItems = [
    "You're grinding on tasks that don't serve your highest purpose",
    'Conventional thinking has trapped you in limited patterns',
    "You sense a greater calling but can't fully grasp or articulate it",
    'The noise of daily life has dimmed your inner flame',
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/90 text-ivory overflow-hidden"
    >
      {/* Enhanced vibrant background effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95"></div>

        {/* Crimson flame glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-60 opacity-30"
          style={{
            background:
              'linear-gradient(to top, rgba(157,11,11,0.5), transparent)',
            filter: 'blur(50px)',
          }}
        ></div>

        {/* Gold accent light */}
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column - Portrait Visual */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative"
            >
              <div className="relative">
                {/* Enhanced visual element - portrait image with glowing effect */}
                <div
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                  style={{ boxShadow: '0 0 30px rgba(157,11,11,0.3)' }}
                >
                  <Image
                    src="/images/hero.webp"
                    alt="Trapped Potential"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover filter brightness-90"
                  />

                  {/* Overlay effect with more vibrancy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson/40 via-charcoal/30 to-transparent"></div>

                  {/* Artistic frame - more visible */}
                  <div className="absolute inset-0 border-2 border-gold/50 pointer-events-none"></div>

                  {/* Corner accents - more prominent */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/80"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold/80"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold/80"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/80"></div>
                </div>

                {/* Enhanced artistic light effects */}
                <div className="absolute -top-5 -right-5 w-32 h-32 bg-crimson/30 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 -left-8 w-24 h-24 bg-gold/30 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-8"
            >
              {/* Bold Headline with enhanced shimmer effect */}
              <div className="mb-8">
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
                  You Are Not Seeing{' '}
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
                      textShadow: '0 0 10px rgba(212,175,55,0.4)',
                    }}
                  >
                    Your Full Power
                  </span>
                </h2>
                <div className="h-1 w-24 bg-gold mt-6 mb-8 rounded-full"></div>
                <p className="font-inter text-lg md:text-xl text-ivory/90 leading-relaxed">
                  The modern world has conditioned you to play small. To accept
                  limitations. To dim your flame. But deep down, you know
                  there&apos;s more.
                </p>
              </div>

              {/* Problem Statements - Enhanced for better scanning with vibrant colors */}
              <div className="space-y-6">
                {problemItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 rounded-md transform hover:translate-x-1 transition-transform duration-300"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(157,11,11,0.3), rgba(30,30,30,0.6))',
                      boxShadow: '0 0 15px rgba(157,11,11,0.2)',
                      border: '1px solid rgba(212,175,55,0.3)',
                    }}
                    whileHover={{
                      boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                    }}
                  >
                    <div className="flex-shrink-0 bg-crimson/20 p-4">
                      <svg
                        className="w-6 h-6 text-gold"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-inter text-lg text-ivory/90 py-4 pr-4">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Emotional Transition Statement - More vibrant */}
              <div
                className="mt-10 py-4 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 rounded-md"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.2)' }}
              >
                <p className="font-cormorant-upright text-xl md:text-2xl text-gold italic text-center px-4">
                  These barriers aren&apos;t real. They&apos;re illusions — and
                  Paul is here to help you shatter them.
                </p>
              </div>

              {/* Section CTA - Enhanced button */}
              <motion.div
                variants={itemVariants}
                className="pt-8 text-center md:text-left"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-gold/50 via-gold/40 to-gold/50 text-charcoal font-bold uppercase tracking-wider text-base rounded-sm relative shadow-lg"
                  style={{ boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
                >
                  <span className="relative z-10 font-cinzel">
                    BREAK FREE FROM LIMITATIONS
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
