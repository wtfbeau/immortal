'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BeforeAfterSection() {
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

  // Before and After comparison data
  const comparisonData = [
    {
      category: 'Vision',
      before: 'Foggy, reactive, short-term',
      after: 'Crystal clear, proactive, legacy-focused',
    },
    {
      category: 'Action',
      before: 'Scattered efforts, burnout, overthinking',
      after: 'Precise focus, calm execution, strategic moves',
    },
    {
      category: 'Results',
      before: 'Plateau, frustration, diminishing returns',
      after: 'Breakthrough growth, recognition, expansion',
    },
    {
      category: 'Energy',
      before: 'Drained, conflicted, second-guessing',
      after: 'Energized, aligned, confident in direction',
    },
    {
      category: 'Impact',
      before: 'Limited by self-doubt and unclear messaging',
      after: 'Amplified by clarity and authentic power',
    },
  ];

  return (
    <section
      id="transformation-comparison"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/90 text-ivory overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/90"></div>

      {/* Enhanced glow and sacred geometry in background */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Enhanced energy glow effect */}
      <div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/3 opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 space-y-6 order-2 md:order-1"
            >
              {/* Bold Headline with enhanced shimmer effect */}
              <div className="mb-6">
                <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
                  What Becomes Possible{' '}
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
                    With Clarity
                  </span>
                </h2>
                <div className="h-1 w-24 bg-gold mt-5 mb-6 rounded-full"></div>
                <p className="font-cormorant-upright text-xl md:text-2xl text-gold/90 italic">
                  This is the difference between drifting and destiny.
                </p>
              </div>

              {/* Before & After Table - Enhanced styling for more vibrancy */}
              <motion.div
                variants={itemVariants}
                className="overflow-hidden rounded-md shadow-2xl"
                style={{
                  boxShadow: '0 0 30px rgba(157,11,11,0.3)',
                  border: '2px solid rgba(212,175,55,0.3)',
                }}
              >
                {/* Table Header */}
                <div className="grid grid-cols-3 text-ivory">
                  <div className="py-4 px-4 md:px-6 text-center border-r border-gold/40 bg-gradient-to-b from-charcoal/90 to-charcoal">
                    <h3 className="font-cinzel text-lg md:text-xl text-gold">
                      Category
                    </h3>
                  </div>
                  <div className="py-4 px-4 md:px-6 text-center border-r border-gold/40 bg-gradient-to-b from-crimson to-crimson/80">
                    <h3 className="font-cinzel text-lg md:text-xl text-ivory font-bold">
                      <span className="opacity-80">❌</span> Before
                    </h3>
                  </div>
                  <div className="py-4 px-4 md:px-6 text-center bg-gradient-to-b from-gold/50 to-gold/30">
                    <h3 className="font-cinzel text-lg md:text-xl text-charcoal font-bold">
                      <span className="opacity-90">✓</span> After
                    </h3>
                  </div>
                </div>

                {/* Table Rows with enhanced contrast */}
                {comparisonData.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 ${
                      index % 2 === 0 ? 'bg-charcoal/40' : 'bg-charcoal/20'
                    }`}
                  >
                    <div className="py-4 px-4 md:px-6 border-r border-gold/20 flex items-center bg-gradient-to-r from-transparent to-gold/5">
                      <h4 className="font-cinzel text-base md:text-lg text-gold text-center w-full">
                        {item.category}
                      </h4>
                    </div>
                    <div className="py-4 px-4 md:px-6 border-r border-gold/20 bg-crimson/10">
                      <p className="font-inter text-sm md:text-base text-ivory/90 text-center">
                        {item.before}
                      </p>
                    </div>
                    <div className="py-4 px-4 md:px-6 bg-gold/10">
                      <p className="font-inter text-sm md:text-base text-gold font-medium text-center">
                        {item.after}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Section CTA - Enhanced button */}
              <motion.div
                variants={itemVariants}
                className="pt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-gold/60 to-gold/40 text-charcoal uppercase tracking-wider font-bold text-base overflow-hidden rounded-sm relative"
                  style={{
                    boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                    border: '1px solid rgba(212,175,55,0.5)',
                  }}
                >
                  <span className="relative z-10 font-cinzel">
                    CLAIM YOUR TRANSFORMATION
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Portrait Video with enhanced glow effects */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 relative order-1 md:order-2"
            >
              <div className="relative book-shine">
                {/* Enhanced glow behind video */}
                <div
                  className="absolute -inset-4 opacity-70 rounded-lg"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(212,175,55,0.3), rgba(157,11,11,0.2), transparent)',
                    filter: 'blur(20px)',
                  }}
                ></div>

                {/* Video element */}
                <div
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 0 30px rgba(157,11,11,0.3)',
                    border: '2px solid rgba(212,175,55,0.3)',
                  }}
                >
                  {/* Video aspect ratio container */}
                  <div className="relative pb-[130%]">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/videos/gym-walk.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Enhanced frame overlay */}
                    <div className="absolute inset-0 border-2 border-gold/50 pointer-events-none"></div>

                    {/* Enhanced corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/90"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/90"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/90"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/90"></div>

                    {/* Enhanced video overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Enhanced inspirational quote overlay */}
                <div
                  className="absolute bottom-6 left-6 right-6 bg-charcoal/80 backdrop-blur-sm p-4 rounded-sm"
                  style={{
                    border: '2px solid rgba(212,175,55,0.5)',
                    boxShadow: '0 0 15px rgba(212,175,55,0.3)',
                  }}
                >
                  <p className="font-cormorant-upright text-lg text-ivory/95 italic">
                    &ldquo;The choice is yours: continue drifting, or step into
                    your destiny.&rdquo;
                  </p>
                </div>

                {/* Enhanced artistic light effects */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-gold/40 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-crimson/40 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
