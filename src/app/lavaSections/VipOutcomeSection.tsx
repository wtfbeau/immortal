// components/VipOutcomesSection.tsx
'use client';
import { useRef, useEffect } from 'react';

interface Outcome {
  number: string;
  title: string;
  description: string;
}

interface VipOutcomesSectionProps {
  title: string;
  subtitle?: string;
  outcomes: Outcome[];
  ctaText?: string;
  ctaHref?: string;
  videoPath?: string;
}

export default function VipOutcomesSection({
  title,
  subtitle,
  outcomes,
  ctaText,
  ctaHref,
  videoPath = '/videos/gym-walk.mp4',
}: VipOutcomesSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }

    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.outcome-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative bg-gradient-to-b from-[#090009] to-[#0f0f0f] overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#090009]/95 via-[#0f0f0f]/90 to-[#090009]/95 z-10"></div>
        <video
          ref={videoRef}
          className="absolute h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>

      {/* Mystical particle elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gold rounded-full animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-6 text-gold sacred-glow tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="outcome-card sacred-glow bg-gradient-to-b from-charcoal/90 to-charcoal/60 backdrop-blur-sm p-8 rounded-sm border-t-2 border-gold transition-all duration-500 hover:transform hover:-translate-y-2 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="font-cinzel text-4xl text-crimson mr-4 sacred-glow">
                  {outcome.number}
                </span>
                <h3 className="font-cinzel text-xl text-gold tracking-wide">
                  {outcome.title}
                </h3>
              </div>
              <p className="text-ivory/90 font-inter leading-relaxed">
                {outcome.description}
              </p>

              {/* Subtle divider */}
              <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-4"></div>

              {/* Visual indicator showing this is real/tangible */}
              <div className="flex items-center text-ivory/60 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Guaranteed Result</span>
              </div>
            </div>
          ))}
        </div>

        {ctaText && ctaHref && (
          <div className="text-center mt-16">
            <a
              href={ctaHref}
              className="flame-button inline-block sacred-glow bg-gradient-to-r from-crimson to-crimson/80 text-ivory hover:from-crimson hover:to-crimson/90 font-cinzel text-xl px-10 py-4 rounded-sm transition-all duration-500 transform hover:scale-105 shadow-lg shadow-crimson/30"
            >
              {ctaText}
            </a>
            <p className="mt-6 max-w-xl mx-auto text-ivory/70 text-base italic font-cormorant-upright">
              Those who have experienced transformation know it is not a
              question of if, but when. The flame calls to those ready to
              answer. — Paul Rataul
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
