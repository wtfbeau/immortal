'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function VIPOfferingSection() {
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      title: "Founder's Insignia Badge",
      description: 'Recognition as a Flamebearer in the community',
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
      className="relative py-24 md:py-28 bg-charcoal text-ivory overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal/90"></div>

      {/* Subtle sacred geometry background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
          <polygon
            points="50,5 95,80 5,80"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
          <polygon
            points="50,95 5,20 95,20"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Golden light effect */}
      <div className="absolute top-0 left-0 right-0 h-40 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(212,175,55,0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-2 tracking-wide">
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
            <div className="h-0.5 w-24 bg-gold/50 mx-auto my-6"></div>
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/80 italic max-w-3xl mx-auto">
              A sacred immersion to awaken your inner flame, strip away
              illusions, and prepare you for divine remembrance and
              world-shifting action.
            </p>
          </motion.div>

          {/* Price Tag - Premium design */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 px-8 py-4 rounded-sm border border-gold/40 sacred-glow">
                <span className="font-cinzel text-3xl text-gold">$500</span>
                <span className="text-ivory/80 ml-2">One-time investment</span>
              </div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/80"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/80"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/80"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/80"></div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Features */}
            <motion.div variants={itemVariants}>
              <h3 className="font-cinzel text-2xl text-gold mb-6 text-center lg:text-left">
                What's Included:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vipFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-charcoal/50 border border-gold/20 p-4 rounded-sm group hover:bg-gold/5 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1 text-gold/80 group-hover:text-gold transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-base text-gold/90 mb-1 group-hover:text-gold">
                          {feature.title}
                        </h4>
                        <p className="font-inter text-sm text-ivory/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Benefits & CTA */}
            <motion.div variants={itemVariants}>
              <div className="bg-charcoal/30 border border-gold/20 p-6 md:p-8 rounded-sm mb-8">
                <h3 className="font-cinzel text-2xl text-gold mb-6 text-center">
                  What You'll Gain:
                </h3>
                <div className="space-y-4">
                  {vipBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-gold"
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
              </div>

              {/* After Purchasing */}
              <div className="bg-gold/5 border-l-4 border-gold p-5 rounded-r-sm mb-8">
                <h4 className="font-cinzel text-xl text-gold mb-3">
                  After Purchasing:
                </h4>
                <p className="font-inter text-ivory/90">
                  You'll receive an email within 15 minutes to schedule your
                  session and complete your preparation questionnaire.
                </p>
              </div>

              {/* Divine Guarantee */}
              <div className="bg-charcoal/30 border border-gold/20 p-6 rounded-sm mb-8">
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
                    <h4 className="font-cinzel text-lg text-gold mb-2">
                      Divine Guarantee:
                    </h4>
                    <p className="font-inter text-ivory/80">
                      If you don't experience breakthrough clarity and a clear
                      path forward by the end of our session, you will receive a
                      full refund. No questions asked.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="text-center">
                <motion.a
                  href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-gold/20 to-gold/10 text-gold border border-gold/30 rounded-sm font-cinzel text-lg uppercase tracking-wide shadow-lg hover:shadow-gold/20 hover:bg-gold/20 transition-all duration-300 flame-button"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  ACTIVATE YOUR IMMORTAL FLAME
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-3xl mx-auto bg-charcoal/50 border border-gold/20 rounded-sm p-6 md:p-8"
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-10 h-10 text-gold/60 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-cormorant-upright text-xl text-ivory/90 italic text-center mb-4">
                "After spinning my wheels for 2 years, one session with Paul
                helped me identify the true bottleneck in my business. I
                restructured my team based on his guidance and closed a $450,000
                deal within 30 days. The clarity was worth 10x what I paid."
              </p>
              <p className="font-cinzel text-gold">
                — Jason M., E-commerce Founder
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
