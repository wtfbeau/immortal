'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

type FinalCTASectionProps = {
  id?: string;
};

export default function FinalCTASection({
  id = 'final-cta',
}: FinalCTASectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Add animation to shimmer-text elements
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
      transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  // Offering benefits - simplified for better scanning and more tangible outcomes
  const vipBenefits = [
    'Comprehensive assessment of your current situation',
    'Customized 30-day action plan with specific milestones',
    'Strategic guidance from an elite business mind',
    'Personalized tools and frameworks tailored to your needs',
    'Clear diagnosis of your hidden performance blockers',
    'Direct answers to your most pressing questions',
  ];

  const questBenefits = [
    'Weekly accountability check-ins to maintain momentum',
    'Structured 90-day transformation system with clear metrics',
    'Community support from like-minded high achievers',
    'Strategic insights on business growth and leadership',
    'Progress tracking tools to measure your advancement',
    "Ongoing access to Paul's exclusive training materials",
  ];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-charcoal to-black text-ivory overflow-hidden"
    >
      {/* Background effects - simplified but still visually engaging */}
      <div className="absolute inset-0">
        {/* Center glow - more vibrant */}
        <div
          className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(157,11,11,0.4) 60%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        ></div>

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 opacity-60"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(212,175,55,0.5) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        ></div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-96 opacity-50"
          style={{
            background:
              'linear-gradient(to top, rgba(157,11,11,0.5), transparent)',
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Compelling Headline */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="mb-8 max-w-4xl mx-auto">
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
                Ready to Transform Your Results?
              </h2>
            </div>

            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory italic mt-6 mb-3">
              Take the first step toward the breakthrough you have been seeking.
            </p>
            <p className="font-inter text-lg md:text-xl text-ivory mb-5 max-w-2xl mx-auto">
              If you feel that pull toward something greater — that sense that
              you are capable of so much more — trust it. It is time to act.
            </p>
          </motion.div>

          {/* Offering Cards - Side by Side with improved visibility and clarity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* VIP Activation - Gold Theme */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg bg-gradient-to-br from-[#1E1E1E] to-black p-8 shadow-xl overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(212,175,55,0.4)',
                border: '2px solid rgba(212,175,55,0.5)',
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/30 to-transparent opacity-70"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-40"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.6), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title and Price */}
                <div className="text-center mb-5">
                  <div className="bg-gold/30 py-2 px-4 rounded-sm mb-3 inline-block">
                    <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-1">
                      EXECUTIVE BREAKTHROUGH
                    </h3>
                    <p className="font-cormorant-upright text-lg text-ivory italic">
                      1:1 PRIVATE COACHING
                    </p>
                  </div>

                  <div className="inline-block bg-gold/40 rounded-sm py-3 px-6">
                    <span className="font-cinzel text-2xl text-gold">$500</span>
                    <span className="text-ivory ml-2">One-time investment</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-7">
                  <h4 className="font-cinzel text-xl text-gold mb-4 text-center">
                    What You will Receive:
                  </h4>
                  <div className="space-y-3">
                    {vipBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-gold/10 p-2 rounded"
                      >
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
                        <p className="text-ivory">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Enhanced for better visibility */}
                <div className="text-center">
                  <motion.a
                    href="https://buy.stripe.com/8wMbJB5hTeHxgYoaEE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory uppercase tracking-wider font-medium font-cinzel text-lg rounded-sm transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 25px rgba(212,175,55,0.6)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    style={{ boxShadow: '0 0 15px rgba(212,175,55,0.4)' }}
                  >
                    BOOK YOUR SESSION
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Monthly Membership - Crimson Theme */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-lg bg-gradient-to-br from-[#1E1E1E] to-black p-8 shadow-xl overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(157,11,11,0.4)',
                border: '2px solid rgba(157,11,11,0.5)',
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/30 to-transparent opacity-70"></div>

              {/* Subtle flame animation at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-40 opacity-40"
                style={{
                  background:
                    'linear-gradient(to top, rgba(157,11,11,0.6), transparent)',
                  filter: 'blur(20px)',
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Title and Price */}
                <div className="text-center mb-5">
                  <div className="bg-crimson/30 py-2 px-4 rounded-sm mb-3 inline-block">
                    <h3 className="font-cinzel text-2xl md:text-3xl text-crimson mb-1">
                      EXECUTIVE MASTERY
                    </h3>
                    <p className="font-cormorant-upright text-lg text-ivory italic">
                      ONGOING COACHING
                    </p>
                  </div>

                  <div className="inline-block bg-crimson/40 rounded-sm py-3 px-6">
                    <span className="font-cinzel text-2xl text-crimson">
                      $111
                    </span>
                    <span className="text-ivory ml-2">per month</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-7">
                  <h4 className="font-cinzel text-xl text-crimson mb-4 text-center">
                    Key Benefits:
                  </h4>
                  <div className="space-y-3">
                    {questBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 bg-crimson/10 p-2 rounded"
                      >
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
                        <p className="text-ivory">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Enhanced for better visibility */}
                <div className="text-center">
                  <motion.a
                    href="https://buy.stripe.com/bIY9Bt39L0QHdMceUV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory uppercase tracking-wider font-medium font-cinzel text-lg rounded-sm transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 25px rgba(157,11,11,0.6)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    style={{ boxShadow: '0 0 15px rgba(157,11,11,0.4)' }}
                  >
                    JOIN THE PROGRAM
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
            <div
              className="bg-charcoal/60 rounded-sm p-6 md:p-8 mb-8"
              style={{
                boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                border: '2px solid rgba(212,175,55,0.3)',
              }}
            >
              <h3 className="font-cinzel text-xl text-gold mb-3">
                My Promise to You:
              </h3>
              <p className="font-inter text-lg text-ivory">
                You will receive practical, actionable guidance that combines
                strategic thinking with personal development – helping you
                achieve both your business goals and personal fulfillment.
              </p>
            </div>

            <p className="font-cormorant-upright text-2xl text-gold italic mb-2">
              Your transformation begins the moment you decide.
            </p>
            <p className="font-inter text-lg text-ivory italic">
              The breakthrough you have been waiting for is just one decision
              away.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
