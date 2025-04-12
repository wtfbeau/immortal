'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
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
    'Daily Prophetic Transmissions (text, audio, or cinematic) from The Immortal Flame series',
    'Weekly Teachings from The Immortal Library: Strategic, practical guidance to embody your power',
    'Monthly Live Ritual Call + Q&A (recorded)',
    "The Seeker's Map: A sacred Notion-based system to track spiritual, physical, and mission progress",
    'Private Community Access (Telegram or Discord) to connect with other Seekers of the Flame',
    'Priority Access to Events, Drops, and Mentorship Offers',
    'Exclusive Music Drops, Art, and Previews before public release',
    '10% off any premium Immortal products',
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
      className="relative py-24 md:py-32 bg-charcoal text-ivory overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95"></div>

      {/* Subtle flame effect at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
        style={{
          background:
            'linear-gradient(to top, rgba(157,11,11,0.3), transparent)',
          filter: 'blur(40px)',
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left Column - Portrait Visual */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative"
            >
              <div className="sticky top-24">
                {/* Portrait image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl sacred-glow">
                  <Image
                    src="/images/book-upcoming.webp"
                    alt="The Immortal Quest Membership"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />

                  {/* Elegant frame overlay */}
                  <div className="absolute inset-0 border border-gold/30 pointer-events-none"></div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/60"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/60"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60"></div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent"></div>
                </div>

                {/* Testimonial quote overlay at the bottom */}
                <div className="absolute bottom-6 left-6 right-6 bg-charcoal/70 backdrop-blur-sm p-4 rounded-sm border-l-3 border-gold">
                  <p className="font-cormorant-upright text-lg text-ivory/95 italic">
                    "The daily guidance keeps me focused, and the community has
                    led to multiple five-figure collaborations."
                  </p>
                  <p className="font-inter text-sm text-gold mt-1">
                    — Sophia T., Wellness Entrepreneur
                  </p>
                </div>

                {/* Artistic light effects */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-crimson/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-6"
            >
              {/* Bold Headline */}
              <div className="mb-8">
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
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
                      textShadow: '0 0 10px rgba(212,175,55,0.3)',
                    }}
                  >
                    THE IMMORTAL QUEST
                  </span>
                </h2>
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide text-ivory">
                  MONTHLY MEMBERSHIP
                </h2>
                <div className="h-0.5 w-24 bg-gold mt-6 mb-8"></div>
                <p className="font-cormorant-upright text-xl md:text-2xl text-gold italic mb-6">
                  Not Just Content — Transmissions. Not Just Community —
                  Convergence.
                </p>
                <p className="font-inter text-lg md:text-xl text-ivory/90 leading-relaxed">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>
              </div>

              {/* Price Tag - Premium Display */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-block relative">
                  <div className="bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 px-8 py-3 rounded-sm border border-gold/40 sacred-glow">
                    <span className="font-cinzel text-3xl text-gold">$111</span>
                    <span className="text-ivory/80 ml-2">per month</span>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/80"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/80"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/80"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/80"></div>
                </div>
              </motion.div>

              {/* Limited Access Alert */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-5 bg-crimson/10 border-l-4 border-crimson/70 rounded-r-sm"
              >
                <h4 className="font-cinzel text-xl text-gold mb-2">
                  Limited Access:
                </h4>
                <p className="font-inter text-ivory/90">
                  Only{' '}
                  <span className="font-semibold text-gold">
                    33 Initiate spots
                  </span>{' '}
                  available per cycle — doors close April 25th for next ritual
                </p>
              </motion.div>

              {/* Bonus Highlight */}
              <motion.div
                variants={itemVariants}
                className="p-5 mb-10 bg-gold/10 border-l-4 border-gold rounded-r-sm"
              >
                <h4 className="font-cinzel text-xl text-gold mb-2">BONUS:</h4>
                <p className="font-inter text-ivory/90">
                  Join now and get immediate access to the upcoming April 25th
                  Abundance Ritual + the complete archive of past ritual
                  recordings{' '}
                  <span className="font-semibold text-gold">($333 value)</span>
                </p>
              </motion.div>

              {/* Features List - Scannability with alternating backgrounds */}
              <motion.div variants={itemVariants}>
                <h3 className="font-cinzel text-2xl text-gold mb-5">
                  Membership Includes:
                </h3>
                <div className="space-y-3">
                  {membershipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-3 rounded-sm ${
                        index % 2 === 0 ? 'bg-charcoal/40' : 'bg-charcoal/20'
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1 text-gold">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 12L10.5 15L16.5 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <p className="font-inter text-base text-ivory/90">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Practical Benefits */}
              <motion.div variants={itemVariants} className="mt-10">
                <h3 className="font-cinzel text-2xl text-gold mb-5">
                  Practical Benefits:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practicalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-charcoal/30 p-4 rounded-sm border-l-3 border-gold/70"
                    >
                      <p className="font-inter text-base text-ivory/90">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divine Guarantee */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-charcoal/70 via-charcoal/40 to-charcoal/70 border border-gold/20 shadow-md rounded-sm mt-10"
              >
                <h4 className="font-cinzel text-xl text-gold mb-3">
                  Divine Guarantee:
                </h4>
                <p className="font-inter text-ivory/90">
                  If after your first 30 days, you do not experience a profound
                  shift in clarity, purpose, or momentum, you will receive a
                  full refund. No questions asked.
                </p>
              </motion.div>

              {/* After Joining */}
              <motion.div
                variants={itemVariants}
                className="bg-charcoal/40 p-5 rounded-sm mt-8"
              >
                <h4 className="font-cinzel text-lg text-gold mb-2">
                  After Joining:
                </h4>
                <p className="font-inter text-ivory/90">
                  Your transformation begins instantly. You'll receive access to
                  the membership dashboard and community within 15 minutes of
                  signing up.
                </p>
              </motion.div>

              {/* Section CTA - Single Clear Action */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-gold/20 to-gold/10 text-gold uppercase tracking-wider font-medium text-base overflow-hidden flame-button rounded-sm relative border border-gold/40"
                >
                  <span className="relative z-10">SEE FULL DETAILS</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
