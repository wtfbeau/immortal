'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type FinalCTASectionProps = {
  id: string;
};

export default function FinalCTASection({
  id = 'final-cta',
}: FinalCTASectionProps) {
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

  // Offering benefits
  const vipBenefits = [
    'Absolute clarity on your current situation and blocks',
    'A bold, specific 30-day action plan',
    'Strategic guidance from a world-class mind',
    "Personal diagnosis of what's truly holding you back",
    'Custom tools, practices, and recommendations',
    'Unfiltered answers to your most pressing questions',
  ];

  const questBenefits = [
    'Daily guidance to maintain clarity and focus',
    'A structured 90-day system for real transformation',
    'Community support from like-minded individuals',
    'Weekly strategic insights on business, purpose, and performance',
    'Tools to track your progress and celebrate victories',
    "Ongoing access to Paul's most powerful teachings",
  ];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-ivory/5 to-charcoal/95 text-ivory overflow-hidden"
    >
      {/* Ethereal background light effects */}
      <div className="absolute inset-0">
        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(157,11,11,0.1) 60%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        ></div>

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(212,175,55,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-96 opacity-20"
          style={{
            background:
              'linear-gradient(to top, rgba(157,11,11,0.2), transparent)',
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Sacred geometry background element */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Large sacred circle */}
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
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />

          {/* Sacred triangles */}
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

          {/* Center mandala */}
          <circle
            cx="50"
            cy="50"
            r="15"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="5"
            stroke="#D4AF37"
            strokeWidth="0.1"
            fill="none"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Sacred Quote - Larger, more impactful */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="prophetic-quote mb-10 max-w-4xl mx-auto">
              <h2
                className="font-cinzel text-3xl sm:text-4xl md:text-5xl shimmer-text"
                style={{
                  background:
                    'linear-gradient(90deg, #D4AF37 0%, #fff6d9 25%, #D4AF37 50%, #fff6d9 75%, #D4AF37 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  textShadow: '0 0 10px rgba(212,175,55,0.4)',
                  lineHeight: '1.3',
                }}
              >
                "The Coming is not me. It is you. It is all."
              </h2>
            </div>

            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic mt-8 mb-4">
              The portal is open. This is where your journey begins.
            </p>
            <p className="font-inter text-lg md:text-xl text-ivory/80 mb-6 max-w-2xl mx-auto">
              If you feel the call — that subtle fire stirring in your chest —
              trust it. That's the signal.
            </p>
          </motion.div>

          {/* Offering Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-16">
            {/* VIP Activation */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg border border-gold/30 bg-gradient-to-br from-charcoal/80 to-charcoal/40 p-8 shadow-xl overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-50"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-10"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.3), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title and Price */}
                <div className="text-center mb-6">
                  <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-2">
                    THE IMMORTAL IGNITION
                  </h3>
                  <p className="font-cormorant-upright text-xl text-ivory/90 italic">
                    VIP ACTIVATION
                  </p>

                  <div className="mt-4 inline-block bg-gold/10 border border-gold/30 rounded-sm py-3 px-6">
                    <span className="font-cinzel text-2xl text-gold">$500</span>
                    <span className="text-ivory/80 ml-2">
                      One-time investment
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-cinzel text-xl text-gold mb-4 text-center">
                    What You'll Gain:
                  </h4>
                  <div className="space-y-3">
                    {vipBenefits.map((benefit, index) => (
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
                        <p className="text-ivory/80">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.a
                    href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-gold/30 to-gold/20 border border-gold/50 text-gold hover:from-gold/40 hover:to-gold/30 uppercase tracking-wider font-medium text-lg rounded-sm transition-all duration-300 sacred-glow"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    ACTIVATE YOUR FLAME
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Monthly Membership */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg border border-crimson/30 bg-gradient-to-br from-charcoal/80 to-charcoal/40 p-8 shadow-xl overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/5 to-transparent opacity-50"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-10"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.3), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title and Price */}
                <div className="text-center mb-6">
                  <h3 className="font-cinzel text-2xl md:text-3xl text-crimson mb-2">
                    THE IMMORTAL QUEST
                  </h3>
                  <p className="font-cormorant-upright text-xl text-ivory/90 italic">
                    MONTHLY MEMBERSHIP
                  </p>

                  <div className="mt-4 inline-block bg-crimson/10 border border-crimson/30 rounded-sm py-3 px-6">
                    <span className="font-cinzel text-2xl text-crimson">
                      $111
                    </span>
                    <span className="text-ivory/80 ml-2">per month</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-cinzel text-xl text-crimson mb-4 text-center">
                    Practical Benefits:
                  </h4>
                  <div className="space-y-3">
                    {questBenefits.map((benefit, index) => (
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
                        <p className="text-ivory/80">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.a
                    href="https://buy.stripe.com/bIY9Bt39L0QHdMceUV"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-crimson/30 to-crimson/20 border border-crimson/50 text-crimson hover:from-crimson/40 hover:to-crimson/30 uppercase tracking-wider font-medium text-lg rounded-sm transition-all duration-300 sacred-glow"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    JOIN THE QUEST
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-charcoal/40 border border-gold/20 rounded-sm p-6 md:p-8 mb-10">
              <h3 className="font-cinzel text-xl text-gold mb-3">
                Vision Statement:
              </h3>
              <p className="font-inter text-lg text-ivory/90">
                Join a global movement that's fusing ancient wisdom with modern
                power, building a world of truth, love, and mastery.
              </p>
            </div>

            <p className="font-cormorant-upright text-2xl text-gold italic mb-2">
              Your transformation begins instantly.
            </p>
            <p className="font-inter text-lg text-ivory/70 italic">
              The flame awaits. Your destiny calls.
            </p>
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
