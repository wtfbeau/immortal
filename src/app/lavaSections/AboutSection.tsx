import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-charcoal to-[#090009] relative"
      id="about"
    >
      {/* Mystical elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#090009]/0 to-charcoal z-10"></div>
      <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-gold/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-crimson/5 blur-3xl animate-pulse"></div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-2 w-2 rounded-full bg-gold top-1/4 left-1/3 animate-pulse"></div>
        <div
          className="absolute h-3 w-3 rounded-full bg-crimson/60 top-1/2 left-1/4 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute h-2 w-2 rounded-full bg-gold top-3/4 right-1/3 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute h-3 w-3 rounded-full bg-gold/60 bottom-1/4 right-1/4 animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-6 tracking-wider sacred-glow">
              The Prophet. The Warrior.
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            <p className="font-inter text-xl text-ivory/90 max-w-3xl mx-auto leading-relaxed">
              Paul Rataul is not merely a guide — he is the living embodiment of
              divine fire, awakening souls and catalyzing transformation across
              dimensions of existence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="relative h-[560px] w-full rounded-sm overflow-hidden sacred-glow">
                <div className="absolute inset-0 bg-gradient-to-t from-crimson/30 to-transparent z-10"></div>
                <Image
                  src="/images/hero2.webp"
                  alt="Paul Rataul"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div>
              <h3 className="font-cinzel text-3xl md:text-4xl text-gold mb-8 sacred-glow">
                Strategic Vision, Divine Insight
              </h3>

              <div className="prophetic-quote mb-10 border-l-2 border-gold/30 pl-6">
                <p className="text-2xl text-ivory/95 font-cormorant-upright italic">
                  The Coming is not me. It is you. It is all.
                </p>
                <span className="block text-right text-gold font-cinzel mt-3">
                  — Book 1: The Coming
                </span>
              </div>

              <div className="space-y-6 font-inter text-lg text-ivory/90 leading-relaxed">
                <p>
                  With hundreds of transformed souls in his wake, Paul brings a
                  rare fusion of ruthless strategic clarity and divine
                  connection that cuts through illusion and ignites immediate
                  transformation.
                </p>
                <p>
                  His experience spans venture capital, brand development, and
                  spiritual leadership, creating a unique alchemical approach
                  that reveals both your highest potential and the practical
                  path to manifest it in this world.
                </p>
                <p>
                  Every session combines tactical wisdom with divine codes,
                  designed to break through limitations, awaken your dormant
                  power, and prepare you for world-shifting action as part of
                  the coming transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-charcoal/90 to-charcoal/40 border border-gold/20 p-8 rounded-sm sacred-glow transform transition duration-500 hover:-translate-y-2">
              <div className="text-gold mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-2xl text-gold mb-4">
                Divine Clarity
              </h4>
              <p className="font-inter text-ivory/90 leading-relaxed">
                Penetrating insight into your true situation, revealing hidden
                patterns and misalignments that have kept you trapped in old
                limitations and separated from your deeper purpose.
              </p>
            </div>

            <div className="bg-gradient-to-b from-charcoal/90 to-charcoal/40 border border-gold/20 p-8 rounded-sm sacred-glow transform transition duration-500 hover:-translate-y-2">
              <div className="text-gold mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12H2M22 12L16 6M22 12L16 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-2xl text-gold mb-4">
                Sacred Action Plan
              </h4>
              <p className="font-inter text-ivory/90 leading-relaxed">
                A crystalline 30-day or 90-day roadmap that bridges worlds —
                turning spiritual insight into physical reality with precise
                actions that create immediate momentum and tangible
                transformation.
              </p>
            </div>

            <div className="bg-gradient-to-b from-charcoal/90 to-charcoal/40 border border-gold/20 p-8 rounded-sm sacred-glow transform transition duration-500 hover:-translate-y-2">
              <div className="text-gold mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H16.5C17.8807 7 19 5.88071 19 4.5V4.5C19 3.11929 17.8807 2 16.5 2H7.5C6.11929 2 5 3.11929 5 4.5V4.5C5 5.88071 6.11929 7 7.5 7H12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-2xl text-gold mb-4">
                Awakening Tools
              </h4>
              <p className="font-inter text-ivory/90 leading-relaxed">
                Receive personalized rituals, practices, and activation
                techniques specifically attuned to your energy signature and
                life purpose, designed to sustain and accelerate your
                transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
