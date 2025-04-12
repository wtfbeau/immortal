'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(-1);

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

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  // FAQ items
  const faqItems = [
    {
      question: 'Is this spiritual coaching or business strategy?',
      answer:
        "It's both. Paul integrates his background in high-level business strategy with a profound understanding of personal transformation. The result is a holistic approach that addresses both your external success and inner fulfillment.",
    },
    {
      question: 'Who is this for?',
      answer:
        "This is for visionaries, entrepreneurs, and seekers who know they're capable of far more than their current reality reflects. If you're ready to strip away illusions and step into your true power, this is for you.",
    },
    {
      question: 'How is this different from other programs?',
      answer:
        "Most coaches focus on either tactical business advice OR spiritual development. Paul's unique approach fuses world-class strategic thinking with profound inner work to create breakthroughs where conventional methods have failed.",
    },
    {
      question: 'What makes Paul qualified to guide me?',
      answer:
        'Beyond his elite business background (BCG, private equity, advising billion-dollar companies), Paul has developed a proven system for helping people see their blind spots, recognize their true potential, and take aligned action that creates real-world results.',
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-ivory text-charcoal overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 mystical-pattern opacity-40"></div>

      {/* Enhanced top decorative element */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      {/* Additional background glow effect */}
      <div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/3 opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(157,11,11,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block">
              <div className="h-1 w-12 bg-crimson mx-auto mb-3 rounded-full"></div>
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-2 tracking-wide text-charcoal">
                Common <span className="text-crimson">Questions</span>
              </h2>
              <div className="h-1 w-12 bg-crimson mx-auto mt-3 rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced FAQ Accordion */}
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 rounded-md ${
                    activeIndex === index
                      ? 'bg-gold/20 border-l-4 border-gold rounded-tl-sm'
                      : 'bg-charcoal/10 hover:bg-charcoal/15'
                  }`}
                  style={{
                    boxShadow:
                      activeIndex === index
                        ? '0 0 15px rgba(212,175,55,0.2)'
                        : 'none',
                  }}
                >
                  <h3 className="font-cinzel text-lg md:text-xl text-charcoal">
                    {item.question}
                  </h3>
                  <span
                    className={`text-gold transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden bg-charcoal/5 rounded-b-sm"
                    >
                      <div className="p-5 border-l-4 border-gold">
                        <p className="font-inter text-base md:text-lg text-charcoal/90 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Additional Question Prompt */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="prophetic-quote inline-block max-w-2xl mx-auto p-6 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-md">
              <p className="font-cormorant-upright text-xl text-crimson/90 italic">
                Have more questions? Book a session and get answers directly
                from Paul.
              </p>
            </div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <div className="relative group">
                {/* Enhanced glow effect */}
                <span
                  className="absolute -inset-0.5 bg-gradient-to-r from-crimson/70 via-gold/50 to-crimson/70 opacity-80 group-hover:opacity-100 blur group-hover:blur-md rounded-sm transition-all duration-500"
                  style={{
                    boxShadow: '0 0 15px rgba(157,11,11,0.3)',
                  }}
                ></span>

                {/* Main button */}
                <a
                  href="#final-cta"
                  className="relative block px-8 py-4 bg-gradient-to-r from-crimson to-crimson/90 text-gold uppercase tracking-wider font-bold text-base overflow-hidden border border-gold/30 rounded-sm"
                >
                  <span className="relative z-10 flex items-center justify-center font-cinzel">
                    BOOK YOUR SESSION NOW
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
    </section>
  );
}
