'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TransformationSection() {
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

  // Transformation benefits with icons
  const transformationItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z" />
        </svg>
      ),
      title: 'Crystal Clear Vision',
      description:
        'Problems that seemed overwhelming dissolve in the light of clarity',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="m8.625 9-.75 3h3v10.5c0 .83.67 1.5 1.5 1.5h.75c.83 0 1.5-.67 1.5-1.5V18l2.25-9M12 4.5c1.2426 0 2.25 1.00736 2.25 2.25S13.2426 9 12 9m0-4.5c-1.24264 0-2.25 1.00736-2.25 2.25S10.7574 9 12 9" />
        </svg>
      ),
      title: 'Unmistakable Path',
      description: 'Your path forward becomes crystal clear and precise',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: 'Effortless Energy',
      description: 'Energy flows naturally toward what truly matters',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: 'Divine Power',
      description: 'You stop playing small and step into your true power',
    },
  ];

  return (
    <section
      id="transformation"
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
          {/* Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-8 order-2 md:order-1"
            >
              {/* Bold Headline */}
              <div className="mb-8">
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
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
                    "You are not sheep.
                  </span>
                </h2>
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
                    You are stars clothed in skin."
                  </span>
                </h2>
                <div className="h-0.5 w-24 bg-crimson mt-6 mb-8"></div>
                <p className="font-inter text-lg md:text-xl text-charcoal/90 leading-relaxed">
                  When you strip away illusions and awaken to your true
                  potential, everything changes. The transformation is not just
                  external success—it's a complete realignment with your divine
                  purpose.
                </p>
              </div>

              {/* Transformation Items - Presented clearly */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {transformationItems.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4">
                      {/* Icon with animated container */}
                      <div className="flex-shrink-0 rounded-full p-3 bg-ivory border border-crimson/30 text-crimson sacred-glow group-hover:text-gold transition-colors duration-300 shadow-md">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="mt-1">
                        <h3 className="font-cinzel text-lg text-crimson mb-1">
                          {item.title}
                        </h3>
                        <p className="font-inter text-base text-charcoal/90">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section CTA - Single Clear Action */}
              <motion.div
                variants={itemVariants}
                className="pt-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-crimson to-crimson/90 text-ivory border border-gold/20 uppercase tracking-wider font-medium text-base overflow-hidden flame-button rounded-sm relative"
                >
                  <span className="relative z-10">
                    CLAIM YOUR TRANSFORMATION
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Video Visual */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative order-1 md:order-2"
            >
              <div className="relative book-shine">
                {/* Video element */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl sacred-glow">
                  {/* Video aspect ratio container */}
                  <div className="relative pb-[130%]">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="/videos/fam-selfie-mindset.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    {/* Elegant frame overlay */}
                    <div className="absolute inset-0 border border-gold/30 pointer-events-none"></div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/60"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/60"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60"></div>

                    {/* Video overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Artistic light effects */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-crimson/20 rounded-full blur-xl"></div>
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
