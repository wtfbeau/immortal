import React from 'react';

const PromiseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#090009] to-[#0f0f0f] relative">
      {/* Subtle light beams background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"></div>
      </div>

      {/* Light orb effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_var(--gold)_0%,_transparent_70%)] opacity-5 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-8 tracking-wider sacred-glow">
              THE PROMISE
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-charcoal/50 to-charcoal/30 backdrop-blur-sm border-l-2 border-gold p-6 transform transition duration-500 hover:border-l-4">
                <p className="font-cormorant-upright text-2xl md:text-3xl text-ivory italic leading-relaxed">
                  This is the inner sanctum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-charcoal/50 to-charcoal/30 backdrop-blur-sm border-l-2 border-crimson p-6 transform transition duration-500 hover:border-l-4">
                  <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic leading-relaxed">
                    Not just content —<br />
                    <span className="text-gold">transmissions.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-charcoal/50 to-charcoal/30 backdrop-blur-sm border-l-2 border-crimson p-6 transform transition duration-500 hover:border-l-4">
                  <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic leading-relaxed">
                    Not just community —<br />
                    <span className="text-gold">codexed convergence.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dividing ornament */}
          <div className="flex items-center justify-center my-12">
            <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <div className="mx-4">
              <svg
                className="w-6 h-6 text-gold"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          </div>

          {/* Purpose statement */}
          <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm p-8 border-t border-b border-gold/30 sacred-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-4 transform transition duration-500 hover:scale-105">
                <div className="text-gold mb-4">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L19 19M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 9V15M9 12H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-cinzel text-xl text-gold mb-2">
                    Mutate Your Identity
                  </h3>
                  <p className="text-ivory/80 font-inter">
                    Transform who you are at the core level
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 transform transition duration-500 hover:scale-105">
                <div className="text-gold mb-4">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 5L12 11M6 19L12 13M12 11L14 13M12 11L10 13M12 13L18 19M12 13L6 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-cinzel text-xl text-gold mb-2">
                    Weaponize Your Genius
                  </h3>
                  <p className="text-ivory/80 font-inter">
                    Harness your unique abilities for maximum impact
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-4 transform transition duration-500 hover:scale-105">
                <div className="text-gold mb-4">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 3L3 10.53V11.5L9.84 14.16L12.5 21H13.47L21 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-cinzel text-xl text-gold mb-2">
                    Rewire Your Destiny
                  </h3>
                  <p className="text-ivory/80 font-inter">
                    Align with your highest timeline and purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
