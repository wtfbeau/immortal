'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  endDate: Date;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CountdownTimer({
  endDate,
  title = 'FOUNDING MEMBER RATE CLOSING SOON',
  subtitle = 'Exclusive invitation to the Room of Light at the Chosen Ones rate',
  ctaText = 'Enter The Room of Light — $111/month',
  ctaHref = '#join',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [activePulse, setActivePulse] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const timerRef = useRef<HTMLDivElement>(null);

  // Calculate viewers - randomly between 5-12
  const [viewers] = useState(Math.floor(Math.random() * 7) + 5);
  // Calculate time since last action - randomly between 1-59 minutes
  const [timeAgo] = useState(Math.floor(Math.random() * 58) + 1);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date();

      if (difference > 0) {
        const timeObj = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };

        setTimeLeft(timeObj);

        // Make seconds blink when they change
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 500);
      } else {
        // Time has ended
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Calculate time left immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Setup the pulse animation for each number block
    const pulseCycle = setInterval(() => {
      setActivePulse((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2000);

    // Intersection observer for fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Store current ref value in a variable to use in cleanup
    const currentRef = timerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      clearInterval(timer);
      clearInterval(pulseCycle);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [endDate]);

  return (
    <section
      className="py-16 bg-gradient-to-b from-black to-[#090009] relative overflow-hidden"
      id="countdown"
      ref={timerRef}
    >
      {/* Mystical animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--crimson)_0%,_transparent_70%)] opacity-10 animate-pulse"></div>

      {/* Animated particles for urgency */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-crimson/40 rounded-full animate-pulse"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto sacred-glow p-8 md:p-12 bg-gradient-to-b from-charcoal/90 to-charcoal/70 backdrop-blur-sm rounded-sm border border-crimson/40 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Top Bar - limited spots indicator */}
          <div className="bg-black/60 rounded-sm mb-8 p-3 flex items-center justify-center border-l-2 border-crimson">
            <div className="w-2 h-2 rounded-full bg-crimson animate-pulse mr-3"></div>
            <p className="text-ivory/90 text-sm font-inter">
              <span className="text-crimson font-bold">
                LIMITED OPPORTUNITY:
              </span>{' '}
              Only <span className="text-gold font-bold">3 spots</span>{' '}
              remaining at founding member rate
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-crimson mb-4 tracking-wider sacred-glow">
              {title}
            </h3>
            {subtitle && (
              <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6 mb-10">
            <div
              className={`flex flex-col items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-charcoal/80 rounded-sm border ${
                activePulse === 0
                  ? 'border-crimson border-2 shadow-lg shadow-crimson/20'
                  : 'border-gold/40'
              } transform transition-all duration-500 hover:border-gold/70 sacred-glow`}
            >
              <span className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-gold mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-ivory/80 font-cinzel tracking-wider">
                DAYS
              </span>
            </div>
            <div
              className={`flex flex-col items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-charcoal/80 rounded-sm border ${
                activePulse === 1
                  ? 'border-crimson border-2 shadow-lg shadow-crimson/20'
                  : 'border-gold/40'
              } transform transition-all duration-500 hover:border-gold/70 sacred-glow`}
            >
              <span className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-gold mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-ivory/80 font-cinzel tracking-wider">
                HOURS
              </span>
            </div>
            <div
              className={`flex flex-col items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-charcoal/80 rounded-sm border ${
                activePulse === 2
                  ? 'border-crimson border-2 shadow-lg shadow-crimson/20'
                  : 'border-gold/40'
              } transform transition-all duration-500 hover:border-gold/70 sacred-glow`}
            >
              <span className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-gold mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-ivory/80 font-cinzel tracking-wider">
                MINUTES
              </span>
            </div>
            <div
              className={`flex flex-col items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-charcoal/80 rounded-sm border ${
                activePulse === 3
                  ? 'border-crimson border-2 shadow-lg shadow-crimson/20'
                  : 'border-gold/40'
              } transform transition-all duration-500 hover:border-gold/70 sacred-glow`}
            >
              <span
                className={`font-cinzel text-3xl md:text-5xl lg:text-6xl text-gold mb-2 ${
                  isBlinking ? 'animate-pulse' : ''
                }`}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base text-ivory/80 font-cinzel tracking-wider">
                SECONDS
              </span>
            </div>
          </div>

          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-center bg-black/40 rounded-sm p-3 border border-gold/20">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse mr-3"></div>
              <p className="text-ivory/80 text-sm">
                <span className="text-gold font-semibold">
                  {viewers} people
                </span>{' '}
                viewing this offer right now
              </p>
            </div>

            <div className="flex items-center justify-center bg-black/40 rounded-sm p-3 border border-gold/20">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse mr-3"></div>
              <p className="text-ivory/80 text-sm">
                Last sign-up{' '}
                <span className="text-gold font-semibold">
                  {timeAgo} minutes
                </span>{' '}
                ago
              </p>
            </div>
          </div>

          {ctaText && ctaHref && (
            <div className="text-center">
              <Link
                href={ctaHref}
                className="flame-button inline-block sacred-glow bg-gradient-to-r from-crimson to-crimson/80 text-ivory hover:from-crimson hover:to-crimson/90 font-cinzel text-xl px-10 py-5 rounded-sm transition-all duration-500 transform hover:scale-105 shadow-lg shadow-crimson/30 w-full md:w-auto mb-4"
              >
                {ctaText}
              </Link>

              <div className="mt-6 max-w-2xl mx-auto">
                <p className="text-ivory/70 text-sm font-inter mb-4">
                  <span className="text-crimson font-bold">* URGENT:</span>{' '}
                  After timer expires, founding member rate ends and price
                  increases to $147/month.
                </p>
                <div className="flex justify-center gap-4 py-1">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gold mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-ivory/80 text-xs">
                      Cancel anytime
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gold mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-ivory/80 text-xs">
                      Secure checkout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
