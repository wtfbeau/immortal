'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function ShivaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // SHIVA elements data from the HTML mockup
  const shivaElements = [
    {
      letter: 'S',
      word: 'Startups',
      description:
        "Empowering visionary founders who create technologies and businesses that advance humanity's collective evolution. We identify and nurture companies with both profit potential and spiritual alignment.",
      icon: 'rocket',
    },
    {
      letter: 'H',
      word: 'Human Impact',
      description:
        'Initiatives that directly uplift and transform human consciousness through education, healthcare, art, and community building. We focus on projects that honor both ancient wisdom and modern innovation.',
      icon: 'users',
    },
    {
      letter: 'I',
      word: 'Investment',
      description:
        'Prophecy-backed investing that channels resources into ventures aligned with the coming global renaissance. We create wealth that serves as a vehicle for planetary transformation.',
      icon: 'chart',
    },
    {
      letter: 'V',
      word: 'Vision',
      description:
        "Prophetic insight that guides all our endeavors. We operate not from short-term market analysis but from a divine understanding of humanity's trajectory and potential.",
      icon: 'eye',
    },
    {
      letter: 'A',
      word: 'Awakening',
      description:
        'The ultimate purpose of all our work—to facilitate individual and collective consciousness evolution. We believe business, art, and spirituality must unite to create lasting change.',
      icon: 'fire',
    },
  ];

  // Initiatives from the HTML mockup
  const initiatives = [
    {
      title: 'Founder Revolution Fund',
      description:
        "Supporting visionary founders building conscious technology companies that align with prophetic vision for humanity's evolution.",
      icon: 'dollar',
    },
    {
      title: 'Awakening Academy',
      description:
        'Educational initiative blending ancient wisdom with modern leadership practices. Transforming consciousness through immersive learning experiences.',
      icon: 'education',
    },
    {
      title: 'Global Reform Council',
      description:
        'Assembling visionary leaders to address systemic corruption and create new models for governance, economics, and social wellbeing.',
      icon: 'people',
    },
  ];

  // Icons for SHIVA elements
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'rocket':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path
              fillRule="evenodd"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        );
      case 'users':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        );
      case 'chart':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
        );
      case 'eye':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        );
      case 'fire':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
        );
      case 'dollar':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 000 1.5h1.5a3.75 3.75 0 003.75-3.75v-.75a.75.75 0 00-.75-.75H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'education':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
        );
      case 'people':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-[#9D0B0B]"
          >
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="movement"
      ref={sectionRef}
      className="py-24 bg-[#F5F5F5] text-[#1E1E1E]"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl tracking-wider mb-4">
            THE SHIVA MOVEMENT
          </h2>
          <div className="h-[1px] w-24 bg-[#9D0B0B] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Left Column - Acronym Explanation */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="shiva-acronym space-y-8">
              {shivaElements.map((element, index) => (
                <div key={index} className="flex items-start">
                  <div className="letter-box w-16 h-16 flex items-center justify-center bg-[#1E1E1E] text-[#D4AF37] font-cinzel text-3xl mr-6">
                    {element.letter}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-2xl mb-2">
                      {element.word}
                    </h3>
                    <p className="text-[#1E1E1E]/80">{element.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Movement Image and Quote */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="bg-[#1E1E1E] p-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/shiva-movement.jpg"
                  alt="Paul Rataul - SHIVA Movement"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />

                {/* Quote Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent flex items-end p-8">
                  <blockquote className="text-[#F5F5F5] font-cormorant-upright text-xl italic">
                    The SHIVA Movement is not merely an organization—it is the
                    embodiment of divine destruction and creation. We tear down
                    corrupt systems and build anew with sacred intention.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#9D0B0B] z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#9D0B0B] z-10"></div>
          </motion.div>
        </div>

        {/* Current Initiatives */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <h3 className="font-cinzel text-3xl text-center mb-12">
            Current Initiatives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="initiative-card bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="icon-wrapper mb-6 w-16 h-16 rounded-full bg-[#9D0B0B]/10 flex items-center justify-center">
                  {renderIcon(initiative.icon)}
                </div>

                <h4 className="font-cinzel text-xl mb-4">{initiative.title}</h4>
                <p className="text-[#1E1E1E]/70 mb-6">
                  {initiative.description}
                </p>
                <a
                  href="#"
                  className="text-[#9D0B0B] font-medium flex items-center"
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work With Paul */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <h3 className="font-cinzel text-3xl mb-6">Join The Movement</h3>
          <p className="max-w-3xl mx-auto text-[#1E1E1E]/80 mb-8">
            Whether you are a visionary founder, spiritual seeker, or
            revolutionary change-maker, there are many ways to contribute to the
            SHIVA Movement. Connect with Paul to explore collaboration
            opportunities.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-[#1E1E1E] text-[#F5F5F5] uppercase tracking-wider font-medium hover:bg-[#9D0B0B] transition-colors group"
          >
            <span>Work With Paul</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
