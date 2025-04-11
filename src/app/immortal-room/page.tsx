// app/room-of-light/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from '../lavaSections/Header';
import RoomOfLightHero from '../ir-components/RoomOfLightHero';
import PromiseSection from '../ir-components/PromiseSection';
import MembershipBenefits from '../ir-components/MembershipBenefits';

import PropheticQuote from '../lavaSections/PropheticQuote';
import Footer from '../lavaSections/Bottom';
import ValueComparisonSection from '../ir-components/ValueComparison';
import WhyThisWorksSection from '../ir-components/WhyThisWorks';
import RoomTestimonialsSection from '../ir-components/RoomTestimonials';
import NextStepsSection from '../ir-components/NextSteps';

export default function RoomOfLightPage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'promise',
        'benefits',
        'value',
        'why',
        'testimonials',
        'join',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Items for Header - Tailored for Room of Light
  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'The Promise', href: '#promise' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Value', href: '#value' },
    { name: 'Why It Works', href: '#why' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Join Now', href: '#join' },
  ];

  return (
    <main
      className={`min-h-screen bg-[#090009] text-ivory transition-opacity duration-1000 ${
        isPageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Header/Navigation */}
      <Header
        activeSection={activeSection}
        navigationItems={navigationItems}
        ctaText="Join for $111/month"
        ctaHref="#join"
      />

      {/* Hero Section */}
      <section id="hero">
        <RoomOfLightHero />
      </section>

      {/* The Promise Section */}
      <section id="promise">
        <PromiseSection />
      </section>

      {/* Prophetic Quote */}
      <PropheticQuote
        quote="The transformation you seek is not external. It is already within you, waiting to be activated through the right transmission frequency."
        source="Amarjit Paul Rataul"
        backgroundImage="/images/stars-bg.webp"
      />

      {/* Benefits Section */}
      <section id="benefits">
        <MembershipBenefits />
      </section>

      {/* Value Comparison Section */}
      <section id="value">
        <ValueComparisonSection />
      </section>

      {/* Why This Works Section */}
      <section id="why">
        <WhyThisWorksSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <RoomTestimonialsSection />
      </section>

      {/* Prophetic Quote */}
      <PropheticQuote
        quote="You don't join for information. You join to mutate your identity, weaponize your genius, and rewire your destiny."
        source="Immortal Room of Light"
        backgroundImage="/images/light-rays-bg.webp"
        ctaText="Enter The Room of Light"
        ctaHref="#join"
      />

      {/* Next Steps Section */}
      <section id="join">
        <NextStepsSection />
      </section>

      {/* Footer */}
      <Footer
        siteName="Immortal Room of Light"
        description="The inner sanctum for chosen ones. Not just content — transmissions. Not just community — codexed convergence."
        navigationItems={navigationItems}
        ctaText="Join for $111/month"
        ctaHref="#join"
      />
    </main>
  );
}
