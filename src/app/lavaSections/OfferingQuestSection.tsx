'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OfferingQuestSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  // Membership features
  const membershipFeatures = [
    {
      icon: '📱',
      title: 'Daily Prophetic Transmissions',
      description:
        'Text, audio, or cinematic insights from The Immortal Flame series',
    },
    {
      icon: '📚',
      title: 'Weekly Strategic Teachings',
      description:
        'Practical guidance from The Immortal Library to embody your power',
    },
    {
      icon: '🔥',
      title: 'Monthly Live Ritual + Q&A',
      description:
        'Join Paul live for transformative rituals and direct guidance',
    },
    {
      icon: '🗺️',
      title: "The Seeker's Map System",
      description:
        'Track your spiritual, physical, and mission progress in Notion',
    },
    {
      icon: '👥',
      title: 'Private Community Access',
      description:
        'Connect with other Seekers of the Flame in our exclusive group',
    },
    {
      icon: '🎁',
      title: 'Priority Access & Discounts',
      description:
        'First access to events and 10% off premium Immortal products',
    },
  ];

  // Practical benefits
  const practicalBenefits = [
    'Daily guidance to maintain clarity and focus',
    'A structured 90-day system for real transformation',
    'Community support from like-minded individuals',
    'Weekly strategic insights on business, purpose, and performance',
    'Tools to track your progress and celebrate victories',
  ];

  return (
    <section
      id="quest-offering"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/95 text-ivory overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95"></div>

      {/* Subtle glow effect behind sections */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/3 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(157,11,11,0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
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
          {/* Section header - with more emphasis */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="h-0.5 w-20 bg-crimson mx-auto mb-4"></div>
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
              Not Just Content — Transmissions. Not Just Community —
              Convergence.
            </p>
          </motion.div>

          {/* Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-6 order-2 md:order-1"
            >
              {/* Description and Price */}
              <div className="bg-gradient-to-br from-charcoal/60 to-charcoal/30 p-6 rounded-lg border-2 border-crimson/30 mb-8">
                <p className="font-inter text-lg text-ivory/90 mb-5 leading-relaxed">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="bg-gradient-to-r from-crimson/30 to-crimson/10 px-6 py-3 rounded-sm border border-crimson/40 inline-flex items-center">
                    <span className="font-cinzel text-3xl text-crimson">
                      $111
                    </span>
                    <span className="text-ivory/80 ml-2">per month</span>
                  </div>

                  <div className="bg-crimson/80 text-ivory px-4 py-2 rounded-sm text-sm font-medium border border-crimson/40">
                    Only 33 spots available
                  </div>
                </div>
              </div>

              {/* Membership Features - Better grid layout */}
              <div className="mb-8">
                <h3 className="font-cinzel text-2xl text-crimson mb-5 border-b border-crimson/30 pb-2">
                  What You&apos;ll Receive:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {membershipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 border border-crimson/20 rounded-sm bg-charcoal/50 hover:bg-crimson/10 transition-colors duration-300 h-full"
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

              {/* Bonus - More eye-catching */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-5 bg-gradient-to-r from-gold/20 to-gold/5 border-l-4 border-gold rounded-r-sm"
              >
                <h4 className="font-cinzel text-xl text-gold mb-2">BONUS:</h4>
                <p className="font-inter text-ivory/90">
                  Join now and get immediate access to the upcoming April 25th
                  Abundance Ritual + the complete archive of past ritual
                  recordings{' '}
                  <span className="font-semibold text-gold">($333 value)</span>
                </p>
              </motion.div>

              {/* Practical Benefits - With improved visual hierarchy */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="font-cinzel text-2xl text-crimson mb-5 border-b border-crimson/30 pb-2">
                  Practical Benefits:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practicalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-charcoal/40 to-charcoal/20 p-4 rounded-sm border border-crimson/10"
                    >
                      <div className="flex items-start space-x-3">
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
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divine Guarantee - More prominent */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-6 bg-gradient-to-br from-charcoal/70 via-charcoal/40 to-charcoal/70 border-2 border-gold/20 shadow-lg rounded-sm"
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

              {/* Section CTA - Single Clear Action */}
              <motion.div
                variants={itemVariants}
                className="pt-4 text-center md:text-left"
              >
                <a
                  href="https://buy.stripe.com/bIY9Bt39L0QHdMceUV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-crimson/60 to-crimson/40 text-ivory uppercase tracking-wider font-medium text-lg overflow-hidden flame-button rounded-sm relative border-2 border-crimson/50 hover:from-crimson/80 hover:to-crimson/60 transition-all duration-300"
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

            {/* Right Column - Visual Element */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative order-1 md:order-2"
            >
              <div className="relative mx-auto">
                {/* Background glow behind image */}
                <div
                  className="absolute -inset-5 rounded-lg opacity-70"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(157,11,11,0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                ></div>

                {/* Main content card with prominent deadline */}
                <div className="relative rounded-lg overflow-hidden border-2 border-crimson/30 shadow-xl">
                  <div className="absolute -top-6 right-0 left-0 px-4 py-2 bg-crimson text-ivory font-cinzel text-center text-lg transform rotate-0 z-20">
                    LIMITED TIME OFFER
                  </div>

                  <div className="pt-10 pb-5 px-5 bg-gradient-to-b from-charcoal/80 to-charcoal/60 text-center">
                    <div className="bg-crimson/80 text-ivory inline-block px-4 py-1 rounded-sm border border-crimson/40 mb-3">
                      Join by April 25th
                    </div>

                    <h3 className="font-cinzel text-2xl text-gold mb-3">
                      Complete Package
                    </h3>

                    <div className="mb-4 border-t border-b border-crimson/30 py-3">
                      <div className="text-4xl font-cinzel text-crimson">
                        $111
                      </div>
                      <div className="text-ivory/90">per month</div>
                    </div>

                    <div className="bg-charcoal/60 p-4 rounded-sm mb-3 border border-crimson/20">
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

                    <div className="text-center mt-4">
                      <motion.a
                        href="https://buy.stripe.com/bIY9Bt39L0QHdMceUV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full px-6 py-3 bg-gradient-to-r from-crimson/80 to-crimson/60 text-ivory font-cinzel tracking-wide text-lg border border-crimson/40 rounded-sm hover:bg-crimson transition-all duration-300"
                        whileHover={{ scale: 1.03 }}
                      >
                        SECURE YOUR SPOT NOW
                      </motion.a>
                    </div>
                  </div>

                  <div className="bg-charcoal/30 px-5 py-3 text-center">
                    <p className="text-ivory/90 text-sm font-medium">
                      Only <span className="text-crimson">33 spots</span>{' '}
                      available for the next cohort
                    </p>
                  </div>
                </div>

                {/* Testimonial quote below the card */}
                <div className="mt-6 p-5 bg-charcoal/60 rounded-sm border-l-4 border-crimson sacred-glow">
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
