'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OfferingQuestSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Add animation to shimmer-text elements
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
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

  // Simplified membership features - focused on what matters most
  const membershipFeatures = [
    {
      icon: '📱',
      title: 'Daily Prophetic Transmissions',
      description: 'Insights from The Immortal Flame series',
    },
    {
      icon: '📚',
      title: 'Weekly Strategic Teachings',
      description: 'Practical guidance to embody your power',
    },
    {
      icon: '🔥',
      title: 'Monthly Live Ritual + Q&A',
      description: 'Join Paul live for transformative guidance',
    },
    {
      icon: '🗺️',
      title: "The Seeker's Map System",
      description: 'Track your progress across all aspects of life',
    },
  ];

  // Simplified practical benefits - clear outcomes
  const practicalBenefits = [
    'Daily guidance to maintain clarity and focus',
    'A structured 90-day system for transformation',
    'Community support from like-minded individuals',
    'Tools to track progress and celebrate victories',
  ];

  return (
    <section
      id="quest-offering"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/95 text-ivory overflow-hidden"
    >
      {/* Simple, elegant background effects */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95"></div>

        {/* Subtle glow effects */}
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/3 opacity-30"
          style={{
            background:
              'radial-gradient(circle at center, rgba(157,11,11,0.5) 0%, transparent 70%)',
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
          {/* Clean, focused section header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-3 tracking-wide">
              <span
                className="shimmer-text"
                style={{
                  background:
                    'linear-gradient(90deg, #9D0B0B 0%, #D4AF37 50%, #9D0B0B 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                THE IMMORTAL QUEST
              </span>
            </h2>
            <h3 className="font-cinzel text-2xl md:text-3xl text-crimson mb-4">
              MONTHLY MEMBERSHIP
            </h3>
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic max-w-3xl mx-auto">
              Not just content — transformations. Not just community —
              convergence.
            </p>
          </motion.div>

          {/* Clean two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left Column - Main content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-6 order-2 md:order-1"
            >
              {/* Clean description and price card */}
              <div
                className="bg-gradient-to-br from-charcoal/70 to-charcoal/50 p-6 rounded-lg mb-6"
                style={{
                  border: '2px solid rgba(157,11,11,0.4)',
                  boxShadow: '0 0 20px rgba(157,11,11,0.2)',
                }}
              >
                <p className="font-inter text-lg text-ivory/90 mb-5 leading-relaxed">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div
                    className="bg-gradient-to-r from-crimson/40 to-crimson/20 px-6 py-3 rounded-lg inline-flex items-center"
                    style={{
                      border: '1px solid rgba(157,11,11,0.5)',
                    }}
                  >
                    <span className="font-cinzel text-3xl text-crimson">
                      $111
                    </span>
                    <span className="text-ivory/80 ml-2">per month</span>
                  </div>

                  <div
                    className="bg-crimson/80 text-ivory px-4 py-2 rounded-lg text-sm font-medium"
                    style={{
                      border: '1px solid rgba(157,11,11,0.3)',
                    }}
                  >
                    Only 33 spots available
                  </div>
                </div>
              </div>

              {/* Membership Features - Clean grid layout */}
              <div className="mb-6">
                <h3 className="font-cinzel text-2xl text-crimson mb-4 border-b border-crimson/30 pb-2">
                  What You&apos;ll Receive:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {membershipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 rounded-lg bg-charcoal/60 hover:bg-crimson/10 transition-colors duration-300"
                      style={{
                        border: '1px solid rgba(157,11,11,0.3)',
                      }}
                    >
                      <div className="text-2xl mr-3 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-base text-crimson mb-1">
                          {feature.title}
                        </h4>
                        <p className="font-inter text-sm text-ivory/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus - Clean highlight box */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-lg bg-gradient-to-r from-gold/20 to-gold/5"
                style={{
                  border: '1px solid rgba(212,175,55,0.4)',
                  boxShadow: '0 0 15px rgba(212,175,55,0.1)',
                }}
              >
                <h4 className="font-cinzel text-xl text-gold mb-2">BONUS:</h4>
                <p className="font-inter text-ivory/90">
                  Join now and get immediate access to the upcoming April 25th
                  Abundance Ritual + the complete archive of past ritual
                  recordings{' '}
                  <span className="font-semibold text-gold">($333 value)</span>
                </p>
              </motion.div>

              {/* Practical Benefits - Clean visual list */}
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="font-cinzel text-2xl text-crimson mb-4 border-b border-crimson/30 pb-2">
                  Practical Benefits:
                </h3>
                <div className="space-y-3">
                  {practicalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-charcoal/40"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-crimson"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-inter text-ivory/90">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divine Guarantee - Simple but effective */}
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-lg bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-charcoal/70"
                style={{
                  border: '2px solid rgba(212,175,55,0.3)',
                  boxShadow: '0 0 15px rgba(212,175,55,0.1)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xl text-gold mb-2">
                      Divine Guarantee:
                    </h4>
                    <p className="font-inter text-ivory/90">
                      If after your first 30 days, you do not experience a
                      profound shift in clarity, purpose, or momentum, you will
                      receive a full refund. No questions asked.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section CTA - Clean, focused button */}
              <motion.div
                variants={itemVariants}
                className="pt-4 text-center md:text-left"
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-crimson/80 to-crimson/60 text-ivory uppercase tracking-wider font-bold text-lg rounded-lg relative border-2 border-crimson/50 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(157,11,11,0.3)',
                  }}
                >
                  <span className="relative z-10 flex items-center font-cinzel">
                    JOIN THE QUEST NOW
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Simple, focused card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative order-1 md:order-2"
            >
              <div className="relative mx-auto max-w-md">
                {/* Simple glow effect */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-50"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(157,11,11,0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                ></div>

                {/* Clean, focused content card */}
                <div
                  className="relative rounded-lg overflow-hidden bg-gradient-to-b from-charcoal/80 to-charcoal/60"
                  style={{
                    border: '2px solid rgba(157,11,11,0.5)',
                    boxShadow: '0 0 25px rgba(157,11,11,0.2)',
                  }}
                >
                  {/* Header banner */}
                  <div className="bg-crimson/90 text-ivory font-cinzel text-center text-lg py-3 px-4">
                    LIMITED TIME OFFER
                  </div>

                  <div className="p-6 text-center">
                    <div
                      className="bg-crimson/80 text-ivory inline-block px-4 py-1 rounded-md mb-4"
                      style={{
                        border: '1px solid rgba(157,11,11,0.4)',
                      }}
                    >
                      Join by April 25th
                    </div>

                    <h3 className="font-cinzel text-2xl text-gold mb-3">
                      Complete Package
                    </h3>

                    <div className="mb-4 border-t border-b border-crimson/30 py-4">
                      <div className="text-4xl font-cinzel text-crimson">
                        $111
                      </div>
                      <div className="text-ivory/90">per month</div>
                    </div>

                    <div
                      className="bg-charcoal/60 p-4 rounded-md mb-5"
                      style={{
                        border: '1px solid rgba(157,11,11,0.3)',
                      }}
                    >
                      <p className="text-lg font-bold text-crimson mb-1">
                        BONUS VALUE:
                      </p>
                      <p className="text-ivory font-medium">
                        $333 of Exclusive Content
                      </p>
                      <p className="text-ivory/70 text-sm">
                        Abundance Ritual + Archive Access
                      </p>
                    </div>

                    <div className="text-center mb-4">
                      <motion.a
                        href="#final-cta"
                        className="inline-block w-full px-6 py-4 bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory font-cinzel tracking-wide text-lg rounded-md transition-all duration-300"
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 0 20px rgba(157,11,11,0.4)',
                        }}
                        style={{
                          border: '1px solid rgba(157,11,11,0.5)',
                          boxShadow: '0 0 15px rgba(157,11,11,0.2)',
                        }}
                      >
                        SECURE YOUR SPOT NOW
                      </motion.a>
                    </div>
                  </div>

                  <div className="bg-charcoal/50 px-5 py-3 text-center">
                    <p className="text-ivory/90 text-sm font-medium">
                      Only <span className="text-crimson">33 spots</span>{' '}
                      available for the next cohort
                    </p>
                  </div>
                </div>

                {/* Simple testimonial quote */}
                <div
                  className="mt-6 p-5 rounded-lg bg-charcoal/60"
                  style={{
                    border: '2px solid rgba(157,11,11,0.3)',
                    boxShadow: '0 0 15px rgba(157,11,11,0.1)',
                  }}
                >
                  <p className="font-cormorant-upright text-lg text-ivory/95 italic mb-2">
                    &ldquo;The daily guidance keeps me focused, and the
                    community has led to multiple five-figure collaborations.
                    Within 90 days, I launched my first sold-out retreat.&rdquo;
                  </p>
                  <p className="font-cinzel text-crimson text-sm">
                    — Sophia T., Wellness Entrepreneur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
