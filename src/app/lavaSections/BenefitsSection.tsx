'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ title, value, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gradient-to-b from-charcoal/90 to-charcoal/50 border border-gold/20 rounded-sm p-6 sacred-glow transition-all duration-500 hover:-translate-y-2 hover:border-gold/40"
    >
      <div className="flex justify-between items-start mb-5">
        <h3 className="font-cinzel text-xl text-gold tracking-wider">
          {title}
        </h3>
        <div className="text-crimson text-2xl">{icon}</div>
      </div>

      <p className="font-inter text-ivory/90 leading-relaxed mb-4">
        {description}
      </p>

      <div className="bg-black/30 py-2 px-4 rounded-sm border-l-2 border-crimson">
        <p className="text-gold font-cinzel">Value: {value}</p>
      </div>
    </motion.div>
  );
};

const EnhancedBenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'IMMORTAL TRANSMISSIONS',
      value: '$500/month',
      description:
        'Weekly video/audio drops with high-frequency strategy + energetic codes that rewire your approach to branding, power, sales, and identity.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
        </svg>
      ),
    },
    {
      title: 'LIVE IMMORTAL CALLS',
      value: '$1,000/month',
      description:
        'Bi-weekly Zoom sessions for direct Q&A and breakthroughs with Paul and elite guest speakers. All call replays available in the vault.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
        </svg>
      ),
    },
    {
      title: 'IMMORTAL BRIEF VAULT',
      value: '$333/month',
      description:
        'Full access to the complete library of transmissions, playbooks, mindset weapons, brand formulas, and sacred rituals for identity transformation.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
          <path
            d="M8 11a1 1 0 100-2 1 1 0 000 2zm0 0a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2zm0-12a1 1 0 100-2 1 1 0 000 2z"
            strokeWidth="0.5"
            stroke="currentColor"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#080008] to-[#0f0f0f] relative"
      id="benefits"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-crimson/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory px-4 py-1 rounded-sm text-sm font-cinzel mb-4 tracking-widest">
            IMMORTAL ROOM OF LIGHT
          </span>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-4 sacred-glow tracking-wider">
            WHAT YOU GET EACH MONTH
          </h2>
          <p className="font-cormorant-upright text-xl text-ivory/90 italic mb-4">
            Total Monthly Value: $2,033+ — Your Price: $111/month
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="font-inter text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            You do not join for information. You join to{' '}
            <span className="text-crimson font-bold">mutate your identity</span>
            , weaponize your genius, and{' '}
            <span className="text-gold">rewire your destiny</span>.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              value={benefit.value}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>

        {/* Additional benefits in smaller format */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-black/40 p-5 rounded-sm border border-gold/20"
          >
            <h3 className="font-cinzel text-lg text-gold mb-3">
              MORE INCLUDED BENEFITS
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-crimson mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-ivory/90">
                  <span className="text-gold">Telegram Inner Sanctum:</span>{' '}
                  Daily voice notes and direct access to Paul
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-crimson mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-ivory/90">
                  <span className="text-gold">Affiliate Circle:</span> Get paid
                  for spreading the signal
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-crimson mt-1 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-ivory/90">
                  <span className="text-gold">Priority Access:</span> Discounts
                  on all Immortal Empire offerings
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-gradient-to-b from-charcoal/60 to-black/60 p-5 rounded-sm border border-crimson/30"
          >
            <h3 className="font-cinzel text-lg text-gold mb-3">
              WHY THIS WORKS
            </h3>
            <div className="space-y-3 font-cormorant-upright text-lg italic text-ivory/90">
              <p>
                You are not just buying coaching.
                <br />
                You are buying mythic alignment.
              </p>
              <p>You are entering the immortal frequency.</p>
              <p className="text-crimson">
                One decision can change the entire year.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="#join"
            className="inline-block bg-gradient-to-r from-crimson to-crimson/80 text-ivory hover:from-crimson/90 hover:to-crimson font-cinzel px-10 py-4 rounded-sm transform transition duration-300 hover:-translate-y-1 sacred-glow text-xl"
          >
            Enter For $111/month
          </a>
          <p className="mt-4 text-ivory/60 text-sm">
            Cancel anytime. But few ever do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedBenefitsSection;
