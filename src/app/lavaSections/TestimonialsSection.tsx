'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function TestimonialsSection() {
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

  // Testimonial data
  const testimonials = [
    {
      name: 'Jason M.',
      title: 'E-commerce Founder',
      image: '/images/James_Holder_testimonial.webp',
      quote:
        'After spinning my wheels for 2 years, one session with Paul helped me identify the true bottleneck in my business. I restructured my team based on his guidance and closed a $450,000 deal within 30 days. The clarity was worth 10x what I paid.',
    },
    {
      name: 'Elena K.',
      title: 'Creative Director',
      image: '/images/Sophia_testimonial.webp',
      quote:
        "I was burnt out, uninspired, and considering leaving my dream career. Paul's Immortal Ignition session revealed the exact patterns keeping me stuck. Within 3 months of following his roadmap, I launched my own agency and doubled my income while working fewer hours.",
    },
    {
      name: 'David R.',
      title: 'Investment Banker',
      image: '/images/Alexander_L_testimonial.webp',
      quote:
        "I was skeptical about the spiritual aspects, but Paul's strategic mind won me over completely. His insights into my leadership patterns helped me secure a promotion I'd been chasing for years. The ROI is immeasurable.",
    },
    {
      name: 'Sophia T.',
      title: 'Wellness Entrepreneur',
      image: '/images/Leeor_Chabat_testimonial.webp',
      quote:
        'The Immortal Quest membership has transformed not just my business but my entire approach to life. The daily guidance keeps me focused, and the community has led to multiple five-figure collaborations. Within 90 days, I launched my first sold-out retreat.',
    },
  ];

  return (
    <section
      id="testimonials"
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
              Flames Awakened,{' '}
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
                Lives Transformed
              </span>
            </h2>
            <div className="h-0.5 w-24 bg-gold mx-auto my-6"></div>
            <p className="font-cormorant-upright text-xl md:text-2xl text-crimson/90 italic max-w-3xl mx-auto">
              Real Results, Real People
            </p>
          </motion.div>

          {/* Main Content - Following Headline > Subhead > Copy > Visual Structure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Left Column - Portrait Video */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 relative"
            >
              <div className="relative book-shine">
                {/* Featured Video element */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl sacred-glow">
                  {/* Video aspect ratio container */}
                  <div className="relative pb-[130%]">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      poster="/images/gym-meditating.webp"
                      controls
                    >
                      <source src="/videos/gym-walk.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Elegant frame overlay */}
                    <div className="absolute inset-0 border border-gold/30 pointer-events-none"></div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/60"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/60"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/60"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/60"></div>

                    {/* Play button overlay - visible when video is not playing */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none group">
                      <div className="w-20 h-20 rounded-full bg-crimson/80 flex items-center justify-center sacred-glow group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-10 h-10 text-gold"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial owner name */}
                  </div>
                </div>

                {/* Artistic light effects */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-crimson/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Right Column - Testimonial Cards */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 space-y-6"
            >
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-charcoal/5 to-charcoal/10 p-5 md:p-6 rounded-sm border border-gold/10 shadow-xl mystical-card group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30 sacred-glow">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div>
                      <h4 className="font-cinzel text-xl text-crimson mb-0.5">
                        {testimonial.name}
                      </h4>
                      <p className="font-inter text-charcoal/70">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="ml-2 prophetic-quote">
                    <p className="font-cormorant-upright text-lg text-charcoal/90 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}

              {/* Section CTA - Single Clear Action */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <a
                  href="#final-cta"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-crimson to-crimson/90 text-ivory uppercase tracking-wider font-medium text-base overflow-hidden flame-button rounded-sm relative border border-gold/20"
                >
                  <span className="relative z-10">
                    BE THE NEXT SUCCESS STORY
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Golden decorative element - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
    </section>
  );
}
