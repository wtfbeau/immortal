'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function MembershipSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  // Membership features - clearly structured for scannability
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

  // Practical benefits - concrete outcomes
  const practicalBenefits = [
    'Daily guidance to maintain clarity and focus',
    'A structured 90-day system for real transformation',
    'Community support from like-minded individuals',
    'Weekly strategic insights on business, purpose, and performance',
    'Tools to track your progress and celebrate victories',
  ];

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="relative py-24 bg-ivory text-charcoal overflow-hidden"
    >
      {/* Light background pattern for contrast */}
      <div className="absolute inset-0 mystical-pattern opacity-20"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Two column layout for better structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column - Portrait Visual */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative mx-auto max-w-md">
                {/* Ambient glow behind image */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-60"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(157,11,11,0.2) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                ></div>

                {/* Main portrait image */}
                <div className="relative rounded-lg overflow-hidden border border-crimson/20 shadow-xl">
                  <Image
                    src="/images/dior-soon.webp"
                    alt="The Immortal Quest Membership"
                    width={600}
                    height={900}
                    className="w-full h-auto object-cover"
                    style={{
                      maxHeight: '70vh',
                      minHeight: '400px',
                    }}
                  />

                  {/* Visual overlay for key information */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <div className="mb-3 inline-block bg-crimson/90 text-ivory px-3 py-1 rounded-sm text-sm">
                      Only 33 spots available
                    </div>
                    <h3 className="text-ivory font-cinzel text-xl mb-2">
                      Join by April 25th
                    </h3>
                    <p className="text-ivory/90 text-sm">
                      for access to the upcoming Abundance Ritual + complete
                      archive ($333 value)
                    </p>
                  </div>

                  {/* Decorative frame */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-crimson/60"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-crimson/60"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-crimson/60"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-crimson/60"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content Area */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              {/* Section Header - Compelling and clear */}
              <div className="mb-8">
                <div className="h-0.5 w-16 bg-crimson mb-4"></div>
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">
                  THE IMMORTAL QUEST —{' '}
                  <span className="text-crimson">MONTHLY MEMBERSHIP</span>
                </h2>
                <p className="font-cormorant-upright text-xl md:text-2xl text-charcoal/80 italic mt-4">
                  Not Just Content — Transmissions. Not Just Community —
                  Convergence.
                </p>
              </div>

              {/* Price Tag - Clear and prominent */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-block relative">
                  <div className="bg-gradient-to-r from-crimson/10 via-crimson/20 to-crimson/10 px-8 py-3 rounded-sm border border-crimson/30 sacred-glow">
                    <span className="font-cinzel text-3xl text-crimson">
                      $111
                    </span>
                    <span className="text-charcoal/80 ml-2">per month</span>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-crimson/80"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-crimson/80"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-crimson/80"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-crimson/80"></div>
                </div>
              </motion.div>

              {/* Description - Short and focused */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="font-inter text-lg text-charcoal/90 leading-relaxed">
                  Your daily path of awakening, guided by prophecy, wisdom, and
                  flame. This is a living scripture in motion — your rebirth,
                  month by month.
                </p>
              </motion.div>

              {/* Membership Features - Visually scannable with icons */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="font-cinzel text-xl text-crimson mb-4">
                  Membership Includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {membershipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 border border-crimson/10 rounded-sm bg-white/50 hover:bg-crimson/5 transition-colors duration-300"
                    >
                      <div className="text-2xl mr-3">{feature.icon}</div>
                      <div>
                        <h4 className="font-cinzel text-base text-crimson mb-1">
                          {feature.title}
                        </h4>
                        <p className="font-inter text-sm text-charcoal/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bonus - Highlighted value */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-gold/10 border-l-4 border-gold rounded-r-sm"
              >
                <h4 className="font-cinzel text-lg text-gold mb-2">BONUS:</h4>
                <p className="font-inter text-charcoal/90">
                  Join now and get immediate access to the upcoming April 25th
                  Abundance Ritual + the complete archive of past ritual
                  recordings <span className="font-semibold">($333 value)</span>
                </p>
              </motion.div>

              {/* Practical Benefits - Bullet points for easy scanning */}
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="font-cinzel text-xl text-crimson mb-4">
                  Practical Benefits:
                </h3>
                <ul className="space-y-2">
                  {practicalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-crimson flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-inter text-charcoal/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Divine Guarantee - Trust builder */}
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-gradient-to-br from-ivory via-ivory to-ivory/80 border border-crimson/20 shadow-md rounded-sm"
              >
                <h4 className="font-cinzel text-lg text-crimson mb-2">
                  Divine Guarantee:
                </h4>
                <p className="font-inter text-charcoal/90">
                  If after your first 30 days, you do not experience a profound
                  shift in clarity, purpose, or momentum, you will receive a
                  full refund. No questions asked.
                </p>
              </motion.div>

              {/* Single, focused CTA for this section */}
              <motion.div variants={itemVariants} className="mt-10">
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-crimson to-crimson/90 text-ivory uppercase tracking-wider font-medium text-base rounded-sm relative overflow-hidden group"
                >
                  {/* Button shine effect */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-shine"></div>
                  </div>

                  <span className="relative z-10 flex items-center font-cinzel">
                    BEGIN YOUR QUEST
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
