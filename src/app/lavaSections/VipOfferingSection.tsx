'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function VIPOfferingSection() {
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
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  // VIP features with icons
  const vipFeatures = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: '1:1 Private Prophetic Session',
      description: '60-90 mins with Paul Rataul',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Custom Immortal Path Activation Map',
      description: 'Your sacred blueprint across mind, body, soul, and mission',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      title: '3 Days of Integration Support',
      description: 'Voxer/Telegram access for questions and guidance',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: 'Exclusive Access to the Immortal Vault',
      description:
        'Premium teachings from The Path, The Warrior, and Worldcraft',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Inner Circle Ritual Invitation',
      description: 'One exclusive Zoom call with fellow initiates',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: 'Immortal Warrior Audio Pack',
      description: 'Sacred sonic tools for daily activation',
    },
  ];

  // VIP benefits
  const vipBenefits = [
    'Absolute clarity on your current situation and blocks',
    'A bold, specific 30-day action plan',
    'Strategic guidance from a world-class mind',
    "Personal diagnosis of what's truly holding you back",
    'Custom tools, practices, and recommendations',
    'Unfiltered answers to your most pressing questions',
  ];

  return (
    <section
      id="vip-activation"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-ivory/95 to-ivory/85 text-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 mystical-pattern opacity-20"></div>

      {/* Golden light effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/3 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212,175,55,0.3) 0%, transparent 70%)',
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="h-0.5 w-20 bg-gold mx-auto mb-4"></div>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-3 tracking-wide">
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
                THE IMMORTAL IGNITION
              </span>
            </h2>
            <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4">
              VIP ACTIVATION
            </h3>
            <p className="font-cormorant-upright text-xl md:text-2xl text-charcoal/80 italic max-w-3xl mx-auto">
              A sacred immersion to awaken your inner flame, strip away
              illusions, and prepare you for divine remembrance and
              world-shifting action.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left Column - Main Offering Details */}
            <motion.div variants={itemVariants}>
              {/* Price card - more prominent */}
              <div className="bg-gradient-to-br from-white to-white/70 rounded-lg border-2 border-gold/30 p-6 shadow-xl mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="font-cinzel text-2xl text-gold mb-2">
                      Premium Package
                    </h3>
                    <p className="font-cormorant-upright text-lg text-charcoal/80 italic">
                      One-time investment for lasting transformation
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gold/20 to-gold/10 py-3 px-6 rounded-lg border-2 border-gold/40 sacred-glow">
                    <span className="font-cinzel text-3xl text-gold">$500</span>
                  </div>
                </div>

                <div className="mt-5 border-t border-gold/20 pt-5">
                  <div className="bg-gold/10 px-4 py-3 rounded-lg">
                    <p className="font-medium text-charcoal flex items-center">
                      <svg
                        className="w-5 h-5 text-gold mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Schedule your session within 24 hours of purchase
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits - Enhanced visual presentation */}
              <div className="bg-white/80 border-2 border-gold/20 rounded-lg p-6 mb-8">
                <h3 className="font-cinzel text-2xl text-gold mb-5 border-b border-gold/30 pb-2">
                  What You&apos;ll Gain:
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {vipBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gradient-to-r from-gold/5 to-transparent p-3 rounded-md"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-6 h-6 text-gold"
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
                      <p className="font-inter text-charcoal/90 font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divine Guarantee - Trust builder */}
              <div className="bg-white/80 border-2 border-gold/20 rounded-lg p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-10 h-10 text-gold"
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
                    <p className="font-inter text-charcoal/90">
                      If you don&apos;t experience breakthrough clarity and a
                      clear path forward by the end of our session, you will
                      receive a full refund. No questions asked.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="text-center mb-8">
                <motion.a
                  href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-gold/40 to-gold/20 text-gold border-2 border-gold/40 rounded-lg font-cinzel text-xl uppercase tracking-wide shadow-lg hover:shadow-gold/20 hover:from-gold/50 hover:to-gold/30 transition-all duration-300 flame-button"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  ACTIVATE YOUR IMMORTAL FLAME
                </motion.a>
              </div>

              {/* Testimonial */}
              <div className="bg-white/70 border-l-4 border-crimson rounded-r-lg p-5">
                <p className="font-cormorant-upright text-lg text-charcoal/90 italic mb-3">
                  &ldquo;After spinning my wheels for 2 years, one session with
                  Paul helped me identify the true bottleneck in my business. I
                  restructured my team based on his guidance and closed a
                  $450,000 deal within 30 days.&rdquo;
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-cinzel text-crimson">
                    — Jason M., E-commerce Founder
                  </p>
                  <span className="bg-gold/20 px-3 py-1 rounded-sm text-gold font-medium text-sm border border-gold/30">
                    $450,000 deal
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Features Cards */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 rounded-lg border-2 border-gold/20 p-6 shadow-xl mb-8">
                <h3 className="font-cinzel text-2xl text-gold mb-5 border-b border-gold/30 pb-2 text-center">
                  What&apos;s Included:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {vipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-b from-white/80 to-white/40 border border-gold/10 p-4 rounded-lg group hover:border-gold/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1 text-gold/80 group-hover:text-gold">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-cinzel text-base text-gold/90 mb-1 group-hover:text-gold">
                            {feature.title}
                          </h4>
                          <p className="font-inter text-sm text-charcoal/80">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* After Purchasing Info */}
              <div className="bg-gold/10 border-2 border-gold/20 rounded-lg p-5 mb-8">
                <h4 className="font-cinzel text-xl text-gold mb-3 text-center">
                  After Purchasing:
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-gold/20 w-8 h-8 flex items-center justify-center rounded-full">
                      <span className="text-gold font-cinzel">1</span>
                    </div>
                    <p className="font-inter text-charcoal/90">
                      You&apos;ll receive an email within 15 minutes with access
                      to the scheduling system
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-gold/20 w-8 h-8 flex items-center justify-center rounded-full">
                      <span className="text-gold font-cinzel">2</span>
                    </div>
                    <p className="font-inter text-charcoal/90">
                      Complete your brief preparation questionnaire
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-gold/20 w-8 h-8 flex items-center justify-center rounded-full">
                      <span className="text-gold font-cinzel">3</span>
                    </div>
                    <p className="font-inter text-charcoal/90">
                      Have your transformative 1:1 session with Paul
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1 bg-gold/20 w-8 h-8 flex items-center justify-center rounded-full">
                      <span className="text-gold font-cinzel">4</span>
                    </div>
                    <p className="font-inter text-charcoal/90">
                      Receive your customized Path Activation Map and resources
                    </p>
                  </div>
                </div>
              </div>

              {/* Action card */}
              <div className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg border-2 border-gold/30 p-5 text-center">
                <h4 className="font-cinzel text-xl text-gold mb-3">
                  Limited Availability
                </h4>
                <p className="font-inter text-charcoal/90 mb-5">
                  Paul only takes a select number of VIP clients each month to
                  ensure the highest quality of service and attention.
                </p>
                <motion.a
                  href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-crimson/70 to-crimson/50 text-ivory font-medium rounded-lg border border-crimson/40 hover:from-crimson/80 hover:to-crimson/60 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  SECURE YOUR SPOT NOW
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
