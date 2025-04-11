// components/MembershipBenefits.tsx
'use client';
import { useState, useEffect, useRef } from 'react';

interface Benefit {
  id: number;
  title: string;
  description: string[];
  value: string;
  icon: React.ReactNode;
}

const MembershipBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define benefits array
  const benefits: Benefit[] = [
    {
      id: 1,
      title: 'Weekly IMMORTAL TRANSMISSIONS',
      description: [
        'Video or audio drops directly from Amarjit Paul Rataul',
        'High-frequency strategy + energetic codes',
        'Topics: Branding, Power, Sales, Myth, Identity, Empire, Execution',
      ],
      value: '$500/month',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5L17 12L11 19M6 19L12 12L6 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'LIVE IMMORTAL CALLS (Bi-Weekly)',
      description: [
        'Group Zooms for coaching, Q&A, energy calibrations',
        'Guest sessions (James, elite creators, hidden billionaires, archetypal mystics)',
        'Call replays available inside the vault',
      ],
      value: '$1,000/month',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13V17M12 17H10M12 17H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'IMMORTAL BRIEF VAULT',
      description: [
        'Full access to drop library (past transmissions + tools)',
        'Includes PDF playbooks, mindset weapons, brand formulas, rituals',
      ],
      value: '$333/month',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9V2H18V9M6 9H18M6 9C4.89543 9 4 9.89543 4 11V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11C20 9.89543 19.1046 9 18 9M12 13V17M15 15H9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'TELEGRAM INNER SANCTUM',
      description: [
        'Daily voice notes, reminders, coaching pulses',
        'Private updates from the frontlines',
        'Ability to DM and interact with Amarjit + team',
      ],
      value: '$200/month',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'IMMORTAL AFFILIATE CIRCLE',
      description: [
        'Get paid for spreading the signal',
        'High-commission offers coming soon',
        'Early access to new product drops to monetize first',
      ],
      value: '$ Opportunity',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14.5714L10.5 12L8 9.42857M16 9.42857L13.5 12L16 14.5714"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'DISCOUNTS + PRIORITY ACCESS',
      description: [
        'Coaching Intensives',
        'Luxonse drops',
        'Immortal Tech',
        '1:1s + Artifacts',
      ],
      value: 'Infinite',
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  // Animated entrance effect - Fixed to store ref in variable and add benefits.length to deps array
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setIsVisible((prev) => {
              const next = prev.length;
              if (next < benefits.length) {
                return [...prev, next];
              }
              clearInterval(timer);
              return prev;
            });
          }, 200);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    // Store current ref value in a variable to use in cleanup
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [benefits.length]); // Added benefits.length to dependency array

  // Auto-rotation for benefits - Fixed to add benefits.length to deps array
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % benefits.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [benefits.length]); // Added benefits.length to dependency array

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-[#0f0f0f] to-black relative overflow-hidden"
    >
      {/* Light beam effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-6 tracking-wider sacred-glow">
            WHAT YOU GET EACH MONTH
          </h2>
          <p className="font-cormorant-upright text-xl italic text-ivory/90 max-w-3xl mx-auto">
            Not mere content. Divine transmissions calibrated to transform your
            reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side: Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`
                  bg-gradient-to-r cursor-pointer transition-all duration-500
                  ${
                    isVisible.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }
                  ${
                    activeIndex === index
                      ? 'from-charcoal/90 to-charcoal/60 border-l-4 border-gold shadow-lg shadow-gold/10'
                      : 'from-charcoal/50 to-charcoal/30 border-l-2 border-gold/50 hover:border-gold'
                  }
                `}
                onClick={() => setActiveIndex(index)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex items-center">
                  <div
                    className={`text-gold mr-4 ${
                      activeIndex === index ? 'text-gold' : 'text-gold/60'
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl text-gold mb-1">
                      {benefit.title}
                    </h3>
                    <p
                      className={`text-ivory/60 transition-colors ${
                        activeIndex === index ? 'text-ivory/80' : ''
                      }`}
                    >
                      Value:{' '}
                      <span className="text-crimson font-bold">
                        {benefit.value}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Active benefit details */}
          <div className="bg-gradient-to-b from-black/80 to-charcoal/30 border border-gold/30 p-8 rounded-sm sacred-glow">
            <div className="flex items-center mb-6">
              <div className="text-gold mr-4">{benefits[activeIndex].icon}</div>
              <h3 className="font-cinzel text-2xl text-gold">
                {benefits[activeIndex].title}
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {benefits[activeIndex].description.map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="text-gold mr-3 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-ivory/90 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-black/40 border-t border-gold/20 pt-4 mt-6">
              <div className="flex justify-between items-center">
                <p className="text-ivory/70">Market Value:</p>
                <p className="text-crimson font-cinzel text-xl">
                  {benefits[activeIndex].value}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Total value summary */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-charcoal/50 to-black/50 border-t border-b border-gold/30 py-8 px-6 sacred-glow">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-ivory/70 font-inter mb-2">
                TOTAL MONTHLY VALUE:
              </p>
              <p className="font-cinzel text-3xl text-gold">$2,033+</p>
            </div>

            <div className="my-6 md:my-0 w-px h-12 bg-gold/30 hidden md:block"></div>

            <div>
              <p className="text-ivory/70 font-inter mb-2">
                YOUR MONTHLY INVESTMENT:
              </p>
              <p className="font-cinzel text-3xl text-crimson">$111/month</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-ivory/80 italic font-cormorant-upright text-lg">
              Cancel anytime. But few ever do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
