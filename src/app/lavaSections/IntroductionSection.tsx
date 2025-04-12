'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function IntroductionSection() {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-ivory text-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 mystical-pattern opacity-30"></div>

      {/* Golden decorative element - top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header - Bold Headline Style */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide text-charcoal">
              Meet Paul Rataul —{' '}
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
                  textShadow: '0 0 10px rgba(212,175,55,0.3)',
                }}
              >
                The Immortal
              </span>
            </h2>
            <div className="h-0.5 w-24 bg-gold mx-auto my-6"></div>
            <p className="font-cormorant-upright text-xl md:text-2xl text-crimson/90 italic max-w-3xl mx-auto font-medium">
              Prophet. Warrior. Artist. Reformer.
            </p>
          </motion.div>

          {/* Main Content - Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-6 order-2 md:order-1"
            >
              <p className="font-inter text-lg md:text-xl leading-relaxed">
                Paul Rataul walked away from{' '}
                <span className="font-semibold">millions</span>. VC deals,
                investment banking offers, private equity roles, and elite
                strategy consulting jobs across the globe — all turned down.
              </p>

              <p className="font-inter text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-crimson">
                  Why? Because Paul chose destiny over dollars.
                </span>
              </p>

              <p className="font-inter text-lg md:text-xl leading-relaxed">
                A former BCG consultant and private equity investor who advised
                CEOs and CFOs of billion-dollar companies, Paul now leads a new
                global movement under The Immortal Brand —{' '}
                <span className="italic">
                  fusing ancient wisdom with modern power
                </span>
                , and building a world of truth, love, and mastery.
              </p>

              <div className="prophetic-quote my-8 px-8 py-6 bg-charcoal/5 border-l-4 border-gold rounded-r-lg">
                <p className="font-cormorant-upright text-2xl md:text-3xl text-crimson italic">
                  I'm not here to play the game. I'm here to change it.
                </p>
              </div>

              <p className="font-inter text-lg md:text-xl leading-relaxed">
                His proven approach:{' '}
                <span className="font-medium">
                  First understanding where you are
                </span>
                ,{' '}
                <span className="font-medium">
                  defining where you want to go
                </span>
                ,{' '}
                <span className="font-medium">
                  identifying what's holding you back
                </span>
                , and then{' '}
                <span className="font-medium">
                  creating a precise roadmap forward
                </span>
                .
              </p>

              {/* Social Proof */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-charcoal/5 border-l-4 border-gold rounded-r-lg shadow-sm"
              >
                <p className="font-inter text-lg italic mb-3">
                  "One session with Paul revealed patterns I'd been blind to for
                  years. The clarity I gained was worth more than months of
                  conventional coaching."
                </p>
                <p className="font-cinzel text-base text-crimson">
                  - Sarah J., Fintech Founder
                </p>
                <p className="text-sm text-charcoal/70">
                  ($2M raised after our work)
                </p>
              </motion.div>

              {/* Section CTA - Anchors to Final CTA */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-crimson to-crimson/90 text-ivory border border-gold/20 uppercase tracking-wider font-medium text-base overflow-hidden flame-button rounded-sm relative"
                >
                  <span className="relative z-10">
                    DISCOVER YOUR IMMORTAL PATH
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Portrait Image with Effects */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative order-1 md:order-2"
            >
              <div className="relative book-shine">
                {/* Subtle glow behind image */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-gold/20 via-transparent to-crimson/20 rounded-lg blur-md"></div>

                {/* Main portrait image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl sacred-glow">
                  <Image
                    src="/images/gym-meditating.webp"
                    alt="Paul Rataul - The Immortal"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />

                  {/* Elegant frame overlay */}
                  <div className="absolute inset-0 border border-gold/30 pointer-events-none"></div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold/60"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold/60"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold/60"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold/60"></div>
                </div>

                {/* Artistic light effect */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-crimson/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Golden decorative element - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
    </section>
  );
}
