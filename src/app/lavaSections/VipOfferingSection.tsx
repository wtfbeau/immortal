'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export default function OfferingsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
      transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  // VIP package features
  const vipFeatures = [
    '1:1 Private Prophetic Session (60-90 mins) with Paul Rataul',
    'Custom Immortal Path Activation Map (PDF)',
    'Voxer/Telegram Support for 3 Days post-session for integration',
    'Exclusive Access to the Immortal Vault',
    'Invitation to One Inner Circle Ritual Zoom Call',
    'Immortal Warrior Initiation Audio Pack',
    "Founder's Insignia Badge as a recognized Flamebearer",
  ];

  // Membership features
  const membershipFeatures = [
    'Daily Prophetic Transmissions (text, audio, or cinematic) from The Immortal Flame series',
    'Weekly Teachings from The Immortal Library',
    'Monthly Live Ritual Call + Q&A (recorded)',
    "The Seeker's Map: A sacred Notion-based system",
    'Private Community Access (Telegram or Discord)',
    'Priority Access to Events, Drops, and Mentorship Offers',
    'Exclusive Music Drops, Art, and Previews before public release',
    '10% off any premium Immortal products',
  ];

  return (
    <section
      id="offerings-overview"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-charcoal text-ivory overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal to-charcoal/95"></div>

      {/* Divine light effects */}
      <div className="absolute inset-0">
        {/* Top golden light */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(212,175,55,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        ></div>

        {/* Center dual light */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
          style={{
            background:
              'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, rgba(157,11,11,0.2) 30%, transparent 70%)',
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
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight tracking-wide">
              Choose Your{' '}
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
                Path to Power
              </span>
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic mt-3 max-w-3xl mx-auto">
              Two divine gateways to transformation — select the one that
              resonates with your soul's calling
            </p>
          </motion.div>

          {/* Offering Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
            {/* VIP Activation */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-lg border border-gold/30 bg-gradient-to-br from-charcoal/80 to-charcoal/40 p-6 md:p-8 overflow-hidden shadow-xl"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-50"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.3), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-2">
                    THE IMMORTAL IGNITION
                  </h3>
                  <p className="font-cormorant-upright text-xl text-ivory/90 italic">
                    VIP ACTIVATION
                  </p>
                </div>

                {/* Price */}
                <div className="bg-gold/10 border border-gold/30 rounded-sm py-3 px-6 mb-6 text-center">
                  <span className="font-cinzel text-2xl text-gold">$500</span>
                  <span className="text-ivory/80 ml-2">
                    One-time investment
                  </span>
                </div>

                {/* Description */}
                <p className="text-ivory/90 mb-6 text-center">
                  A sacred immersion to awaken your inner flame, strip away
                  illusions, and prepare you for divine remembrance and
                  world-shifting action.
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {vipFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-gold"
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
                      <p className="text-ivory/80 text-sm md:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA to Final Section */}
                <div className="text-center">
                  <Link
                    href="#offerings"
                    className="inline-block px-8 py-3 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 uppercase tracking-wider font-medium text-base overflow-hidden rounded-sm transition-all duration-300 flame-button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Monthly Membership */}
            <motion.div
              variants={itemVariants}
              className="relative group rounded-lg border border-crimson/30 bg-gradient-to-br from-charcoal/80 to-charcoal/40 p-6 md:p-8 overflow-hidden shadow-xl"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 to-transparent opacity-50"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.3), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className="font-cinzel text-2xl md:text-3xl text-crimson mb-2">
                    THE IMMORTAL QUEST
                  </h3>
                  <p className="font-cormorant-upright text-xl text-ivory/90 italic">
                    MONTHLY MEMBERSHIP
                  </p>
                </div>

                {/* Price */}
                <div className="bg-crimson/10 border border-crimson/30 rounded-sm py-3 px-6 mb-6 text-center">
                  <span className="font-cinzel text-2xl text-crimson">
                    $111
                  </span>
                  <span className="text-ivory/80 ml-2">per month</span>
                </div>

                {/* Description */}
                <p className="text-ivory/90 mb-6 text-center">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {membershipFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-crimson"
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
                      <p className="text-ivory/80 text-sm md:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA to Final Section */}
                <div className="text-center">
                  <Link
                    href="#offerings"
                    className="inline-block px-8 py-3 bg-crimson/10 border border-crimson/30 text-crimson hover:bg-crimson/20 uppercase tracking-wider font-medium text-base overflow-hidden rounded-sm transition-all duration-300 flame-button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down to Final CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="font-cormorant-upright text-xl text-ivory/70 italic mb-4">
              Scroll down to claim your transformation
            </p>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-gold/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Initialize shimmer effect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const shimmerElements = document.querySelectorAll('.shimmer-text');
            shimmerElements.forEach(element => {
              element.animate(
                [
                  { backgroundPosition: '-100% 0' },
                  { backgroundPosition: '200% 0' }
                ],
                {
                  duration: 8000,
                  iterations: Infinity,
                  easing: 'linear'
                }
              );
            });
          });
        `,
        }}
      />
    </section>
  );
}
