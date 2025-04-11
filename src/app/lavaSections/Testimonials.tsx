'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  result: string;
  highlight?: boolean;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define testimonials data
  const testimonials: Testimonial[] = [
    {
      name: 'Jake M.',
      role: 'eCommerce Founder',
      quote:
        'The Room of Light transmissions completely reshaped how I approach my business. Before joining, I was stuck at $12K/month for 8 months straight with no clear growth strategy. Within just 8 weeks, one transmission from Paul completely transformed my brand positioning, helping me close a $170K partnership deal and 3.2X my revenue. The daily codes are my new non-negotiable morning ritual.',
      image: '/images/testimonial-1.webp',
      result: 'Revenue 3.2X increase in 8 weeks',
      highlight: true,
    },
    {
      name: 'Sarah L.',
      role: 'Brand Strategist',
      quote:
        'I was charging under $2K for projects, constantly chasing clients, with no real positioning in my market. The Room of Light showed me exactly where I was playing small and how to step into my true value. Within 6 weeks, I completely restructured my offers. Now I command $15K+ for strategy work, have a 3-month waitlist, and have been featured on top industry podcasts. The bi-weekly calls provide the exact clarity I need.',
      image: '/images/testimonial-2.webp',
      result: 'Raised rates from $2K to $15K+ per client',
    },
    {
      name: 'Marcus T.',
      role: 'Creator & Coach',
      quote:
        "For 18 months, I bounced between niches with only 200 followers and no real traction. The systems and daily codes from Paul completely rewired how I think about influence and audience building. The identity transformation happened within weeks. Four months after joining, I've grown to 22K targeted followers, sold out my coaching program at $5K per client, and been featured in major publications.",
      image: '/images/testimonial-3.webp',
      result: '22K followers in 4 months from 200',
    },
  ];

  // Auto-cycling through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation on scroll
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

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-black to-[#090009] relative"
      ref={sectionRef}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>
      </div>

      {/* Subtle flame overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/book-upcoming.webp"
          alt="Sacred flame"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-6 inline-block">
              <span className="inline-block bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory px-6 py-2 rounded-sm text-sm font-cinzel tracking-widest">
                CHOSEN ONES SPEAK
              </span>
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-6 sacred-glow tracking-wider">
              Room of Light Transformations
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl italic text-ivory/90 max-w-3xl mx-auto">
              Not just testimonials — evidence of identity mutation and destiny
              rewiring
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-8"></div>
          </div>

          {/* Featured Testimonial Spotlight - Optimized for Mobile */}
          <div
            className={`max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-b from-charcoal/80 to-charcoal/40 border-2 border-gold/30 rounded-sm p-6 md:p-8 sacred-glow relative overflow-hidden">
              {/* Background subtle effect */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>

              {/* Testimonial Navigation - Improved for mobile with horizontal scrolling */}
              <div className="flex mb-6 overflow-x-auto pb-2 no-scrollbar">
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`whitespace-nowrap px-3 sm:px-5 py-2 mr-2 rounded-sm transition-all duration-300 font-cinzel text-sm ${
                      activeIndex === idx
                        ? 'bg-gold/20 text-gold border border-gold/40'
                        : 'bg-black/30 text-ivory/70 border border-transparent hover:text-ivory'
                    }`}
                  >
                    {testimonial.name}
                  </button>
                ))}
              </div>

              {/* Main Testimonial Content - Responsive grid for mobile */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Person Image */}
                <div className="text-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 border-2 border-gold/30 rounded-full overflow-hidden sacred-glow">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-cinzel text-gold mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-ivory/60 text-sm font-inter">
                    {testimonials[activeIndex].role}
                  </p>

                  {/* Result Label */}
                  <div className="mt-4 bg-black/40 inline-block px-4 py-2 rounded-sm border-l-2 border-crimson shadow-inner shadow-crimson/10">
                    <p className="text-gold font-cinzel text-sm">
                      {testimonials[activeIndex].result}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="md:col-span-2 relative mt-6 md:mt-0">
                  {/* Quote marks */}
                  <svg
                    className="h-10 w-10 text-gold/20 absolute top-0 left-0 -translate-x-4 -translate-y-4 hidden md:block"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <div className="bg-black/30 p-4 md:p-5 rounded-sm border border-gold/10">
                    <p className="text-ivory/90 font-inter leading-relaxed text-base md:text-lg">
                      &quot;{testimonials[activeIndex].quote}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards - Mobile Optimized Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-charcoal/80 to-charcoal/40 border ${
                  testimonial.highlight ? 'border-crimson/40' : 'border-gold/20'
                } rounded-sm p-6 md:p-8 sacred-glow transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } hover:-translate-y-2 hover:border-gold/40`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Quote */}
                  <div className="mb-6 flex-grow">
                    <svg
                      className="h-10 w-10 text-gold/40 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-ivory/90 font-inter leading-relaxed">
                      {testimonial.quote.substring(0, 150)}...
                    </p>
                  </div>

                  {/* Result banner - highlighting tangible results */}
                  <div
                    className={`bg-gradient-to-r ${
                      testimonial.highlight
                        ? 'from-crimson/20 to-crimson/5 border-l-2 border-crimson'
                        : 'from-gold/10 to-gold/5 border-l-2 border-gold'
                    } p-3 mb-6`}
                  >
                    <div className="flex items-center">
                      <svg
                        className={`w-5 h-5 ${
                          testimonial.highlight ? 'text-crimson' : 'text-gold'
                        } mr-2`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <p className="text-gold font-cinzel text-sm">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>

                  {/* Person */}
                  <div className="flex items-center mt-auto">
                    <div className="mr-4 w-12 h-12 md:w-14 md:h-14 relative overflow-hidden rounded-full border-2 border-gold/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-cinzel text-gold">
                        {testimonial.name}
                      </h4>
                      <p className="text-ivory/60 text-sm font-inter">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional social proof - Mobile optimized */}
          <div
            className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-black/30 p-6 rounded-sm border border-gold/10 max-w-4xl mx-auto">
              <h3 className="font-cinzel text-2xl text-gold mb-4">
                Who Enters The Room Of Light
              </h3>
              <p className="text-ivory/70 font-inter mb-6">
                Trusted by leaders, creators, and change-makers across
                industries and dimensions
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 items-center">
                <div className="text-gold/50 font-cinzel text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-crimson"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Venture Capital
                </div>
                <div className="text-gold/50 font-cinzel text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-crimson"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Tech Founders
                </div>
                <div className="text-gold/50 font-cinzel text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-crimson"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Creative Directors
                </div>
                <div className="text-gold/50 font-cinzel text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-crimson"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Spiritual Leaders
                </div>
                <div className="text-gold/50 font-cinzel text-lg flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-crimson"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Coaches
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
