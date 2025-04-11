import React from 'react';
import Image from 'next/image';

const WhyThisWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>

      {/* Sacred geometry background pattern */}
      <div className="absolute inset-0 mystical-pattern opacity-5"></div>

      {/* Light rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-6 tracking-wider sacred-glow">
              WHY THIS WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side image */}
            <div className="relative rounded-sm overflow-hidden sacred-glow">
              <div className="aspect-w-4 aspect-h-5 relative">
                <Image
                  src="/images/mythic-alignment.webp"
                  alt="Mythic Alignment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="font-cinzel text-gold text-lg tracking-wider">
                  The Immortal Frequency
                </p>
              </div>
            </div>

            {/* Right side content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-charcoal/40 to-transparent p-6 border-l-2 border-gold/50 transform transition duration-500 hover:border-l-4 hover:border-gold">
                <p className="font-cormorant-upright text-2xl text-ivory/90 italic leading-relaxed">
                  You are not just buying coaching.
                </p>
                <p className="font-cormorant-upright text-2xl text-gold italic leading-relaxed mt-2">
                  You are buying mythic alignment.
                </p>
              </div>

              <div className="space-y-6 font-inter text-ivory/80 leading-relaxed">
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.5 12H16.5"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 7.5V16.5"
                      ></path>
                    </svg>
                  </div>
                  <p>
                    You are entering the{' '}
                    <span className="text-gold">immortal frequency</span> – a
                    field of potentiality where your highest self becomes
                    accessible through strategic transmissions and energetic
                    calibration.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.5 12H16.5"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 7.5V16.5"
                      ></path>
                    </svg>
                  </div>
                  <p>
                    This is not just information – it is{' '}
                    <span className="text-gold">transformation</span> delivered
                    through precise modalities that rewire your neural pathways
                    and energetic signature.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.5 12H16.5"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 7.5V16.5"
                      ></path>
                    </svg>
                  </div>
                  <p>
                    <span className="text-gold">
                      One decision can change the entire year.
                    </span>{' '}
                    The Room of Light becomes your constant source of
                    recalibration and realignment, ensuring you never drift from
                    your highest timeline.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-1/4 h-px bg-gradient-to-r from-gold/50 to-transparent my-8"></div>

              {/* Testimonial */}
              <div className="bg-black/40 p-6 border border-gold/20 sacred-glow">
                <div className="flex items-start">
                  <div className="text-gold/60 mr-3">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-ivory/90 italic font-cormorant-upright text-lg leading-relaxed mb-4">
                      The moment I entered the Room of Light, everything
                      shifted. The clarity, the direction, the access to
                      Amarjits mind... One month here has been worth years of
                      conventional strategies.
                    </p>
                    <p className="text-gold font-cinzel text-sm">
                      — Member since 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorksSection;
