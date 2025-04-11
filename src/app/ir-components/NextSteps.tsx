import React from 'react';
import Link from 'next/link';

const NextStepsSection = () => {
  return (
    <section
      id="join"
      className="py-28 bg-gradient-to-b from-[#080808] to-black relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-10 animate-pulse"></div>

      {/* Light particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-6 tracking-wider sacred-glow">
              NEXT STEPS
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl italic text-ivory/90 max-w-3xl mx-auto">
              Your path into the Immortal Room of Light begins here
            </p>
          </div>

          <div className="bg-gradient-to-b from-charcoal/40 to-black/40 border border-gold/30 rounded-sm overflow-hidden sacred-glow">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side: Join process */}
              <div className="p-8 md:p-12">
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-8 tracking-wide">
                  The Initiation Process
                </h3>

                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/60 border border-gold/40 rounded-full flex items-center justify-center mr-6">
                      <span className="font-cinzel text-gold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xl text-gold mb-2">
                        Join at $111/month
                      </h4>
                      <p className="text-ivory/80 font-inter">
                        Secure your place in the Room of Light with a simple
                        monthly investment. Cancel anytime.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/60 border border-gold/40 rounded-full flex items-center justify-center mr-6">
                      <span className="font-cinzel text-gold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xl text-gold mb-2">
                        Receive Immediate Access
                      </h4>
                      <p className="text-ivory/80 font-inter">
                        Instantly receive welcome email, vault login
                        credentials, and Telegram invitation.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-black/60 border border-gold/40 rounded-full flex items-center justify-center mr-6">
                      <span className="font-cinzel text-gold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-cinzel text-xl text-gold mb-2">
                        Begin Transformation
                      </h4>
                      <p className="text-ivory/80 font-inter">
                        Access begins immediately. Enter the Telegram sanctum,
                        explore the vault, and prepare for your first
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  {/* Form submission with proper email address for Paul */}
                  <form
                    action="https://formsubmit.co/immortalpaulrataul@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* Hidden fields for formsubmit.co */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Room of Light Membership Inquiry"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://immortalflame.com/thank-you"
                    />

                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-black/50 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full bg-black/50 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flame-button block w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold hover:to-gold/90 text-charcoal font-cinzel text-xl py-5 rounded-sm transition-all duration-500 transform hover:scale-105 shadow-lg shadow-gold/20 text-center tracking-wider"
                    >
                      ENTER THE ROOM OF LIGHT
                    </button>
                  </form>

                  <p className="text-ivory/60 text-center mt-4 text-sm font-inter">
                    Secure payment. Instant access. Cancel anytime.
                  </p>
                </div>
              </div>

              {/* Right side: Onboarding preview */}
              <div className="bg-black/80 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gold/30">
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-8 tracking-wide">
                  Telegram Onboarding Preview
                </h3>

                <div className="bg-black/60 border border-gold/20 rounded-sm p-6 sacred-glow">
                  <div className="space-y-6 font-inter text-ivory/90">
                    <p className="text-gold font-cinzel text-lg">
                      You have entered the Immortal Room of Light.
                    </p>

                    <p>
                      This is not a group.
                      <br />
                      It is a convergence of signal.
                      <br />
                      It is a chamber for chosen ones only.
                    </p>

                    <p className="text-gold/80">Here is how this works:</p>

                    <div className="space-y-4 pl-4">
                      <div>
                        <p className="text-gold/90 font-cinzel text-base mb-1">
                          1. Your Identity
                        </p>
                        <p className="text-sm text-ivory/80">
                          Introduce yourself in one sentence:
                          <br />
                          Who are you becoming?
                          <br />
                          <span className="italic text-ivory/50">
                            (Example: I am becoming the most influential brand
                            in culture.)
                          </span>
                        </p>
                      </div>

                      <div>
                        <p className="text-gold/90 font-cinzel text-base mb-1">
                          2. Immortal Transmission Schedule
                        </p>
                        <p className="text-sm text-ivory/80">
                          • Weekly drops arrive here or in the Vault
                          <br />
                          • Bi-weekly Live Calls announced in advance
                          <br />• Daily codes via voice/text pulses from Amarjit
                        </p>
                      </div>

                      <div>
                        <p className="text-gold/90 font-cinzel text-base mb-1">
                          3. Your Vault Access
                        </p>
                        <p className="text-sm text-ivory/80">
                          You will get an email shortly with your private login.
                          <br />
                          It includes past recordings, PDFs, and exclusive
                          trainings.
                        </p>
                      </div>
                    </div>

                    <p className="text-gold font-cinzel text-lg pt-4">
                      Welcome to the fire.
                      <br />
                      <span className="text-gold/80 text-base">
                        You are not here by accident.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="mt-8 p-4 border-t border-gold/20">
                  <p className="text-ivory/70 font-inter text-sm">
                    For direct inquiries:
                  </p>
                  <a
                    href="mailto:immortalpaulrataul@gmail.com"
                    className="text-gold hover:text-gold/80 transition-colors font-inter"
                  >
                    immortalpaulrataul@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees and trust elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black/40 border border-gold/20 p-6 rounded-sm text-center transform transition duration-500 hover:border-gold/40">
              <div className="text-gold mb-4 flex justify-center">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-lg text-gold mb-2">
                Secure Investment
              </h4>
              <p className="text-ivory/80 text-sm font-inter">
                Cancel anytime. No long-term contracts. Immediate access upon
                joining.
              </p>
            </div>

            <div className="bg-black/40 border border-gold/20 p-6 rounded-sm text-center transform transition duration-500 hover:border-gold/40">
              <div className="text-gold mb-4 flex justify-center">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-lg text-gold mb-2">
                Exclusive Community
              </h4>
              <p className="text-ivory/80 text-sm font-inter">
                Join fellow chosen ones in a convergence of signal, not noise.
                High-frequency interactions only.
              </p>
            </div>

            <div className="bg-black/40 border border-gold/20 p-6 rounded-sm text-center transform transition duration-500 hover:border-gold/40">
              <div className="text-gold mb-4 flex justify-center">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-cinzel text-lg text-gold mb-2">
                Immediate Transformation
              </h4>
              <p className="text-ivory/80 text-sm font-inter">
                Feel the shift from day one. Immediate access to tools,
                strategies, and transmissions.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <p className="font-cormorant-upright text-2xl italic text-gold mb-8">
              One decision can change the entire year.
            </p>

            <Link
              href="#join"
              className="flame-button inline-block bg-gradient-to-r from-gold to-gold/80 hover:from-gold hover:to-gold/90 text-charcoal font-cinzel text-xl px-12 py-5 rounded-sm transition-all duration-500 transform hover:scale-105 shadow-lg shadow-gold/20 tracking-wider"
            >
              JOIN NOW FOR $111/MONTH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
