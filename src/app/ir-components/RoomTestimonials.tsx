import React from 'react';
import Image from 'next/image';

const RoomTestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The Room of Light isn't just another membership. It's a frequency adjustment. Since joining, my strategic clarity has 10x'd and my revenue has followed. The direct access to Amarjit is worth multiples of the investment alone.",
      name: 'Michael K.',
      role: '7-Figure Brand Strategist',
      result: '3x revenue in 60 days',
      image: '/images/testimonial-1.webp',
    },
    {
      quote:
        "I've been in many high-level masterminds and paid $25k+ for coaching. Nothing comes close to the value of the Room of Light. The transmissions aren't just content—they're energetic downloads that have completely transformed how I approach my business and life.",
      name: 'Sarah L.',
      role: 'Luxury Brand Founder',
      result: 'Launched 6-figure product in 30 days',
      image: '/images/testimonial-2.webp',
    },
    {
      quote:
        'The moment I joined the Room of Light, everything shifted. The weekly transmissions are like getting direct access to a blueprint for success. What would take me months to figure out, Amarjit distills into actionable strategies I can implement immediately.',
      name: 'James T.',
      role: 'Creator & Investor',
      result: 'Closed $500k deal using Room strategies',
      image: '/images/testimonial-3.webp',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5 animate-pulse"></div>

      {/* Light rays */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0"
            style={{ left: `${30 + i * 20}%` }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-6 tracking-wider sacred-glow">
              FROM THE INNER SANCTUM
            </h2>
            <p className="font-cormorant-upright text-xl italic text-ivory/90 max-w-3xl mx-auto">
              Hear from those who have already entered the Immortal Room of
              Light
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-8"></div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-black/80 to-charcoal/30 border border-gold/20 rounded-sm p-8 sacred-glow transform transition duration-500 hover:-translate-y-2 hover:border-gold/30"
              >
                <div className="flex flex-col h-full">
                  {/* Quote */}
                  <div className="mb-6 flex-grow">
                    <svg
                      className="h-8 w-8 text-gold/40 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-ivory/90 font-inter leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Result banner */}
                  <div className="bg-gradient-to-r from-gold/10 to-transparent border-l-2 border-gold p-3 mb-6">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gold mr-2"
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
                    <div className="mr-4 w-12 h-12 relative overflow-hidden rounded-full border-2 border-gold/30">
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

          {/* Social proof stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/40 border border-gold/20 rounded-sm p-6 text-center transform transition duration-500 hover:border-gold/40">
              <p className="font-cinzel text-3xl text-gold mb-2">93%</p>
              <p className="text-ivory/70 font-inter text-sm">
                Retention rate
                <br />
                after 6 months
              </p>
            </div>

            <div className="bg-black/40 border border-gold/20 rounded-sm p-6 text-center transform transition duration-500 hover:border-gold/40">
              <p className="font-cinzel text-3xl text-gold mb-2">378+</p>
              <p className="text-ivory/70 font-inter text-sm">
                Active members
                <br />
                in the Inner Sanctum
              </p>
            </div>

            <div className="bg-black/40 border border-gold/20 rounded-sm p-6 text-center transform transition duration-500 hover:border-gold/40">
              <p className="font-cinzel text-3xl text-gold mb-2">76%</p>
              <p className="text-ivory/70 font-inter text-sm">
                Report significant
                <br />
                revenue increase
              </p>
            </div>

            <div className="bg-black/40 border border-gold/20 rounded-sm p-6 text-center transform transition duration-500 hover:border-gold/40">
              <p className="font-cinzel text-3xl text-gold mb-2">12+</p>
              <p className="text-ivory/70 font-inter text-sm">
                Months average
                <br />
                membership duration
              </p>
            </div>
          </div>

          {/* Final testimonial quote */}
          <div className="mt-16 text-center">
            <div className="prophetic-quote max-w-3xl mx-auto">
              <p className="font-cormorant-upright text-2xl italic text-ivory/95 leading-relaxed">
                The Room of Light does not just give you strategies. It
                transforms who you are. And when you transform who you are,
                everything you do transforms with you.
              </p>
              <p className="text-gold font-cinzel text-right mt-4">
                — Room of Light Member since 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomTestimonialsSection;
