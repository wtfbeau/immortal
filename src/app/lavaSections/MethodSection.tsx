'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function MethodSection() {
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

  // Method steps
  const methodSteps = [
    {
      number: '1',
      title: 'Starting Point Assessment',
      description:
        'Where are you now? Honest evaluation of your current reality',
    },
    {
      number: '2',
      title: 'Vision Crafting',
      description: 'Where do you truly want to go? Beyond superficial goals',
    },
    {
      number: '3',
      title: 'Pattern Recognition',
      description:
        "What's really holding you back? Identifying the core blockages",
    },
    {
      number: '4',
      title: 'Divine Mirror',
      description: 'See yourself clearly, without illusion or limitation',
    },
    {
      number: '5',
      title: 'Strategic Roadmap',
      description: 'Your 90-day path forward with precise first steps',
    },
    {
      number: '6',
      title: 'Path Activation',
      description:
        'Receiving your custom blueprint across mind, body, soul, and mission',
    },
    {
      number: '7',
      title: 'World Impact',
      description: 'Moving beyond personal success to create lasting change',
    },
  ];

  return (
    <section
      id="method"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-charcoal text-ivory overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/90"></div>

      {/* Subtle glow and sacred geometry in background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="500"
            cy="500"
            r="400"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="300"
            stroke="#D4AF37"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="500"
            cy="500"
            r="200"
            stroke="#D4AF37"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Connecting Lines */}
          <line
            x1="500"
            y1="100"
            x2="500"
            y2="900"
            stroke="#D4AF37"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
          <line
            x1="100"
            y1="500"
            x2="900"
            y2="500"
            stroke="#D4AF37"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          />
          {/* Sacred Triangles */}
          <polygon
            points="500,200 800,700 200,700"
            stroke="#9D0B0B"
            strokeWidth="0.5"
            fill="none"
          />
          <polygon
            points="500,800 200,300 800,300"
            stroke="#9D0B0B"
            strokeWidth="0.5"
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
          className="max-w-7xl mx-auto"
        >
          {/* Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column - Portrait Image */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 relative"
            >
              <div className="relative">
                {/* Portrait image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl sacred-glow">
                  <Image
                    src="/images/shiva.webp"
                    alt="The Immortal Method"
                    width={600}
                    height={900}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                </div>

                {/* Artistic light effects */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-crimson/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 space-y-6"
            >
              {/* Bold Headline */}
              <div className="mb-8">
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
                  The Immortal Method:{' '}
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
                    Strategic Vision & Spiritual Awakening
                  </span>
                </h2>
                <div className="h-0.5 w-24 bg-gold mt-6 mb-8"></div>
                <p className="font-inter text-lg md:text-xl text-ivory/90 leading-relaxed">
                  Paul&apos;s proven approach is both methodical and
                  transformative. This isn&apos;t abstract theory—this is a
                  practical system that has worked for hundreds of clients.
                </p>
              </div>

              {/* Method Steps - Presented in a clear, scannable way */}
              <div className="space-y-6">
                {methodSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 group bg-charcoal/30 border-l-4 border-gold p-4 rounded-r-sm transform hover:translate-x-1 transition-transform duration-300"
                  >
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/50 flex items-center justify-center text-gold font-cinzel text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div>
                      <h3 className="font-cinzel text-xl text-gold mb-1">
                        {step.title}
                      </h3>
                      <p className="font-inter text-ivory/80">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Proof Statement */}
              <motion.div variants={itemVariants} className="mt-10">
                <div className="py-4 px-6 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-sm">
                  <p className="font-inter text-lg text-ivory/90">
                    This method has been refined through years of work with
                    visionary entrepreneurs, executives, and creators who were
                    ready to step into their true power.
                  </p>
                </div>
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
                  className="inline-block px-8 py-3 bg-gradient-to-r from-crimson via-crimson/90 to-crimson text-gold uppercase tracking-wider font-medium text-base overflow-hidden flame-button rounded-sm relative border border-gold/40 shadow-md shadow-crimson/20"
                >
                  <span className="relative z-10">EXPERIENCE THE METHOD</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
