'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PodcastSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Cities for the podcast launch
  const cities = ['Dubai', 'Auckland', 'Sydney'];

  return (
    <section
      id="podcast"
      ref={sectionRef}
      className="py-20 md:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-6 relative inline-block">
              THE IMMORTAL PODCAST
              <span className="absolute -bottom-3 left-0 right-0 mx-auto w-24 h-0.5 bg-gold"></span>
            </h2>
            <p className="font-cormorant text-xl text-ivory/80 max-w-2xl mx-auto">
              Sacred conversations that awaken the soul and ignite the immortal
              flame within.
            </p>
          </motion.div>

          <motion.div
            className="bg-charcoal/40 backdrop-blur-sm border border-gold/20 p-8 md:p-12 text-center rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto border border-gold/30">
                <svg
                  className="w-10 h-10 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <h3 className="font-cinzel text-3xl md:text-4xl text-gold mb-4">
              Coming Soon
            </h3>

            <p className="font-cormorant text-xl text-ivory/90 mb-6">
              The divine wisdom will soon be shared through the sacred medium of
              sound.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={city}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className="font-cinzel text-gold text-lg md:text-xl">
                    {city}
                  </div>
                  <div className="font-cormorant text-ivory/70">2025</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center font-cinzel text-charcoal bg-gold px-8 py-3 hover:bg-ivory transition-colors duration-300"
              >
                <span>JOIN THE WAITLIST</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
