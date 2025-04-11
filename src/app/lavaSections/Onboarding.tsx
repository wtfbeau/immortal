'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EnhancedOnboardingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const onboardingSteps = [
    {
      number: '01',
      title: 'Join The Room',
      description:
        'Complete the simple enrollment form and secure your spot at $111/month',
    },
    {
      number: '02',
      title: 'Instant Access',
      description:
        'Receive welcome email, vault login, and Telegram invitation within minutes',
    },
    {
      number: '03',
      title: 'Enter The Flame',
      description:
        'Introduce yourself in Telegram with one sentence: Who are you becoming?',
    },
    {
      number: '04',
      title: 'Immerse Yourself',
      description:
        'Access all past transmissions and prepare for your first live call',
    },
  ];

  return (
    <section
      id="onboarding"
      className="py-20 bg-gradient-to-b from-[#090009] to-[#0f0f0f] relative"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gold/20 rotate-45 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/3 w-px h-24 bg-gold/20 -rotate-45 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory px-4 py-1 rounded-sm text-sm font-cinzel mb-4 tracking-widest">
            THE SACRED PATH
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-4 sacred-glow tracking-wider">
            YOUR JOURNEY BEGINS
          </h2>
          <p className="font-cormorant-upright text-xl text-ivory/90 italic">
            Simple steps to transform your reality
          </p>
        </motion.div>

        {/* Onboarding steps - Mobile-optimized grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-gradient-to-b from-charcoal/90 to-charcoal/50 border border-gold/20 rounded-sm p-5 sacred-glow transform transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-2 bg-crimson text-ivory font-cinzel text-sm px-3 py-1 rounded-sm">
                {step.number}
              </div>

              {/* Connected line for desktop (hidden on mobile) */}
              {index < onboardingSteps.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-px bg-gold/30 hidden lg:block"></div>
              )}

              <h3 className="font-cinzel text-xl text-gold mb-3 mt-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-ivory/90 font-inter text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Telegram preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-md mx-auto mt-12 bg-black/60 border border-gold/20 rounded-sm p-5 sacred-glow"
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-crimson/80 rounded-full flex items-center justify-center mr-3">
              <span className="text-ivory font-cinzel">IF</span>
            </div>
            <div>
              <h4 className="font-cinzel text-gold text-lg">
                Immortal Room of Light
              </h4>
              <p className="text-ivory/60 text-xs">Private Telegram Channel</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="bg-charcoal/60 p-3 rounded-sm">
              <p className="text-ivory/90 font-inter text-sm mb-1">
                You have entered the Immortal Room of Light.
              </p>
              <p className="text-ivory/90 font-inter text-sm mb-1">
                This is not a group. It is a convergence of signal.
              </p>
              <p className="text-ivory/90 font-inter text-sm">
                It is a chamber for chosen ones only.
              </p>
            </div>

            <div className="bg-charcoal/60 p-3 rounded-sm">
              <p className="text-crimson font-inter text-sm">
                Welcome to the fire. You are not here by accident.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#join"
              className="inline-block text-gold text-sm border-b border-gold/50 hover:border-gold transition-all"
            >
              Begin your journey now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedOnboardingSection;
