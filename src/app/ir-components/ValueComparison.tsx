import React from 'react';

const ValueComparisonSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0c0c0c] to-[#080808] relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-black/70 to-charcoal/30 border border-gold/30 rounded-sm p-8 md:p-12 sacred-glow">
            <h2 className="font-cinzel text-3xl md:text-4xl text-gold mb-10 tracking-wide text-center">
              THE VALUE PROPOSITION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left column: What you pay */}
              <div className="text-center">
                <h3 className="font-cinzel text-xl text-ivory/90 mb-4">
                  What You Pay
                </h3>
                <div className="bg-black/50 border border-gold/30 p-6 rounded-sm">
                  <p className="font-cinzel text-4xl text-crimson mb-2">$111</p>
                  <p className="text-ivory/70 font-inter text-sm">per month</p>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-4"></div>
                  <p className="text-ivory/80 font-inter text-sm">
                    Cancel anytime
                  </p>
                </div>
              </div>

              {/* Middle column: What you get */}
              <div className="text-center md:col-span-2">
                <h3 className="font-cinzel text-xl text-ivory/90 mb-4">
                  What You Receive
                </h3>
                <div className="bg-black/50 border border-gold/30 p-6 rounded-sm">
                  <p className="font-cinzel text-4xl text-gold mb-2">$2,033+</p>
                  <p className="text-ivory/70 font-inter text-sm">
                    monthly value
                  </p>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-left">
                      <p className="text-gold/90 font-cinzel text-sm mb-1">
                        Weekly Transmissions
                      </p>
                      <p className="text-ivory/70 font-inter text-xs">
                        $500/month value
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-gold/90 font-cinzel text-sm mb-1">
                        Live Immortal Calls
                      </p>
                      <p className="text-ivory/70 font-inter text-xs">
                        $1,000/month value
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-gold/90 font-cinzel text-sm mb-1">
                        Immortal Brief Vault
                      </p>
                      <p className="text-ivory/70 font-inter text-xs">
                        $333/month value
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="text-gold/90 font-cinzel text-sm mb-1">
                        Telegram Inner Sanctum
                      </p>
                      <p className="text-ivory/70 font-inter text-xs">
                        $200/month value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings calculation */}
            <div className="bg-gradient-to-r from-charcoal/30 to-black/50 p-6 rounded-sm border-t border-b border-gold/20 mb-10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-ivory/80 font-inter">
                    Total Monthly Savings:
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-cinzel text-3xl text-gold">$1,922+</p>
                  <p className="text-ivory/60 font-inter text-sm">
                    that is <span className="text-gold/80">94%</span> off the
                    combined value
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison to alternatives */}
            <div className="space-y-6">
              <h3 className="font-cinzel text-2xl text-gold mb-6 text-center">
                Compare to Alternatives
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/40 p-5 border border-gold/10 rounded-sm transform transition duration-500 hover:border-gold/30">
                  <h4 className="font-cinzel text-lg text-gold mb-2">
                    Premium Coaching
                  </h4>
                  <p className="text-ivory/90 font-inter text-2xl mb-1">
                    $1,500+
                  </p>
                  <p className="text-ivory/60 font-inter text-sm">
                    per month for similar access
                  </p>
                </div>

                <div className="bg-black/40 p-5 border border-gold/10 rounded-sm transform transition duration-500 hover:border-gold/30">
                  <h4 className="font-cinzel text-lg text-gold mb-2">
                    Elite Masterminds
                  </h4>
                  <p className="text-ivory/90 font-inter text-2xl mb-1">
                    $2,000+
                  </p>
                  <p className="text-ivory/60 font-inter text-sm">
                    per month without direct access
                  </p>
                </div>

                <div className="bg-black/40 p-5 border border-gold/10 rounded-sm transform transition duration-500 hover:border-gold/30">
                  <h4 className="font-cinzel text-lg text-gold mb-2">
                    1:1 Mentorship
                  </h4>
                  <p className="text-ivory/90 font-inter text-2xl mb-1">
                    $5,000+
                  </p>
                  <p className="text-ivory/60 font-inter text-sm">
                    per month with limited availability
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="font-cormorant-upright text-xl italic text-ivory/90">
                  The Room of Light is not merely an investment.
                  <br />
                  <span className="text-gold">
                    It is a portal to your highest timeline.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparisonSection;
