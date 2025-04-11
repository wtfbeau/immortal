// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from '../lavaSections/Header';
import HeroSection from '../lavaSections/HeroSection1';
import About from '../lavaSections/AboutSection';
import PropheticQuote from '../lavaSections/PropheticQuote';
import VipOutcomesSection from '../lavaSections/VipOutcomeSection';
import CountdownTimer from '../lavaSections/CountDownTimer';
import OfferingCard from '../lavaSections/OfferingCard';
import BenefitsSection from '../lavaSections/BenefitsSection';
import FAQSection from '../lavaSections/FAQsection';
import CTASection from '../lavaSections/CTASection';
import Footer from '../lavaSections/Bottom';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Calculate end date for countdown (7 days from now)
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  // Page load animation
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'benefits',
        'vip',
        'membership',
        'testimonials',
        'faq',
        'contact',
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

  // VIP Offering Data with enhanced descriptions
  const vipFeatures = [
    {
      title: 'Private Prophetic Session',
      description: '(60–90 mins) with Paul Rataul to ignite your divine flame',
    },
    {
      title: 'Immortal Path Activation Map',
      description: 'Custom sacred blueprint for your unique journey',
    },
    {
      title: 'Divine Integration Support',
      description: '3 Days of direct Voxer/Telegram guidance post-session',
    },
    {
      title: 'The Immortal Vault Access',
      description:
        'Premium teachings from The Path, The Warrior, and Worldcraft',
    },
    {
      title: 'Inner Circle Ritual Access',
      description: 'Invitation to exclusive transformational Zoom gathering',
    },
    {
      title: 'Warrior Initiation Audio Pack',
      description: 'Cinematic audio for daily practice and spiritual power',
    },
    {
      title: "Founder's Insignia Badge",
      description: 'Recognition as an official Flamebearer in the movement',
    },
  ];

  // Membership Offering Data with enhanced descriptions
  const membershipFeatures = [
    {
      title: 'Daily Prophetic Transmissions',
      description:
        'Text, audio & cinematic drops to ignite your daily practice',
    },
    {
      title: 'The Immortal Library',
      description:
        'Weekly strategic wisdom teachings for real-world embodiment',
    },
    {
      title: 'Monthly Live Ritual Experience',
      description: 'Sacred group transmission and personalized Q&A',
    },
    {
      title: 'Divine Progress Tracker',
      description: 'Notion-based system to monitor your spiritual evolution',
    },
    {
      title: 'Sacred Community Access',
      description: 'Private space to connect with fellow Flamebearers',
    },
    {
      title: 'Priority Pathways',
      description: 'First access to exclusive events and mentorship',
    },
    {
      title: 'Creative Transmissions',
      description: 'Exclusive music, art and previews before public release',
    },
    {
      title: 'Immortal Discounts',
      description: '10% off all premium products and experiences',
    },
  ];

  // VIP Outcomes - Tangible results from coaching
  const vipOutcomes = [
    {
      number: '1',
      title: 'Absolute Clarity on Your Current Situation',
      description:
        "Precise illumination of what's truly happening in your life or business, why you feel blocked, and what's misaligned with your deeper purpose and divine potential.",
    },
    {
      number: '2',
      title: 'A Bold, Specific Action Plan',
      description:
        'Crystal-clear 30-day sacred roadmap with exact decisions to make now and precise steps to move forward with unstoppable momentum and tangible transformation.',
    },
    {
      number: '3',
      title: 'Strategic Guidance from a World-Class Mind',
      description:
        "Direct access to Paul's rare fusion of venture capital expertise, brand strategy mastery, content creation wisdom, and spiritual leadership.",
    },
    {
      number: '4',
      title: "Personal Diagnosis of What's Holding You Back",
      description:
        "Identification of the exact patterns sabotaging your potential, core beliefs requiring transformation, and where you're playing small in relation to your divine purpose.",
    },
    {
      number: '5',
      title: 'Custom Tools, Practices, and Activations',
      description:
        'Specific mindset and performance tools, daily rituals to sustain your flame, and customized activations designed specifically for your energy signature.',
    },
    {
      number: '6',
      title: 'Full Access to Ask Anything',
      description:
        "Whether it's career decisions, mental transformation, personal power, audience building, or content strategy—receive unfiltered truth and practical solutions.",
    },
  ];

  // FAQs with enhanced answers
  const faqs = [
    {
      question: 'What exactly happens during the 1:1 Prophetic Session?',
      answer:
        "The 60-90 minute session is a powerful fusion of intuitive insight and strategic guidance. Paul will first identify the deeper patterns and soul-level blockages in your life or business, then provide both mystical wisdom and practical roadmaps tailored to your unique energy signature and path. You'll leave with absolute clarity, a clear action plan, and specific tools for implementation that bridge spiritual awakening with tangible results.",
    },
    {
      question: 'How is this different from regular coaching or consulting?',
      answer:
        "The Immortal Ignition transcends conventional coaching by combining high-level strategic business expertise with spiritual illumination and energetic activation. Unlike traditional approaches that address symptoms, Paul identifies root patterns at the soul level while providing both practical strategy and spiritual technologies for transformation. It's the rare fusion of business strategist, spiritual guide, and activation catalyst—creating change that ripples across all dimensions of your being and doing.",
    },
    {
      question: 'Do I need to prepare anything before the session?',
      answer:
        "Upon enrollment, you'll receive a sacred preparatory questionnaire to help Paul understand your current situation and highest vision. While extensive preparation isn't required, arriving with specific questions and areas you wish to transform will maximize your session. The more open you are to both strategic guidance and energetic transmission, the more profound your transformation will be. Many clients report shifts beginning from the moment they commit to the journey.",
    },
    {
      question: 'How soon will I see results after the session?',
      answer:
        'Many experience immediate clarity and energetic shifts during the session itself. Your custom action plan is designed for implementation over 30 days, with significant transformations typically reported within the first week of applying the guidance. The 3-day post-session support ensures you can receive additional clarity as you begin embodying your new trajectory. Unlike incremental approaches, The Immortal Ignition is designed for quantum leaps rather than gradual steps.',
    },
    {
      question: "What if I'm not spiritual? Will I still benefit?",
      answer:
        "Absolutely. While Paul's approach integrates both strategic wisdom and spiritual illumination, the guidance is always tailored to meet you where you are. Many pragmatic, business-focused clients have found tremendous value in the strategic aspects while remaining open to the intuitive insights that accelerate their results. The language and framework can be adjusted to suit your comfort level, while still delivering profound transformation.",
    },
    {
      question: 'Can I upgrade from membership to VIP later?',
      answer:
        "Yes, many members choose to deepen their journey through the VIP experience after feeling the initial flame ignite within the membership. We offer special sacred pathways for existing members to upgrade, receiving additional bonuses as recognition of your commitment to the journey. The Immortal Quest membership provides daily sustenance, while The Immortal Ignition offers a quantum leap activation when you're ready for profound transformation.",
    },
  ];

  // Navigation Items for Header
  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'VIP Offering', href: '#vip' },
    { name: 'Membership', href: '#membership' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
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
        ctaText="Begin Your Journey"
        ctaHref="#contact"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* VIP Outcomes Section - Tangible results */}
      <section id="benefits">
        <VipOutcomesSection
          title="Tangible Divine Outcomes From Your VIP Session"
          subtitle="Beyond vague promises—here's exactly what you'll experience and receive:"
          outcomes={vipOutcomes}
          videoPath="/videos/gym-walk.mp4"
          ctaText="Secure Your Divine Activation Now"
          ctaHref="#contact"
        />
      </section>

      {/* Countdown Timer - Create urgency */}
      <CountdownTimer
        endDate={endDate}
        title="Limited Sacred Opportunity Closing Soon"
        subtitle="Only 3 VIP activations available this month"
        ctaText="Claim Your Divine Activation Now"
        ctaHref="#contact"
      />

      {/* VIP Offering */}
      <section
        id="vip"
        className="py-28 bg-gradient-to-b from-[#080008] to-[#090009]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-6 text-gold sacred-glow tracking-wider">
              The Immortal Ignition
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic">
              A sacred immersion to awaken your inner flame, strip away
              illusions, and prepare you for divine remembrance and
              world-shifting action.
            </p>
          </div>

          <OfferingCard
            id="vip-offering"
            title="The Immortal Ignition"
            subtitle="Divine Activation & Strategic Transformation"
            price="$500 One-time Sacred Investment"
            description="A powerful fusion of spiritual activation and strategic guidance designed to ignite your dormant flame, strip away limiting illusions, and equip you with both mystical and practical tools for profound transformation."
            features={vipFeatures.map((f) => ({
              title: f.title,
              description: f.description,
            }))}
            ctaText="Ignite Your Divine Flame"
            ctaHref="#contact"
            ctaStyle="primary"
            imagePath="/images/hero2.webp"
            mostPopular={true}
          />
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Prophetic Quote Section */}
      <PropheticQuote
        quote="The flame is not given. It is remembered. What sleeps in you is ancient, divine, and ready to burn through the illusions of this world."
        source="Book 1: The Coming"
        backgroundImage="/images/stars-bg.webp"
        ctaText="Awaken Your Flame"
        ctaHref="#contact"
      />

      {/* Membership Offering */}
      <section
        id="membership"
        className="py-28 bg-gradient-to-b from-charcoal to-[#080008]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-6 text-gold sacred-glow tracking-wider">
              The Immortal Quest
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic">
              Your daily path of awakening, guided by prophecy, wisdom, and
              flame. A living scripture in motion — your rebirth, month by
              month.
            </p>
          </div>

          <OfferingCard
            id="membership-offering"
            title="The Immortal Quest"
            subtitle="Monthly Sacred Journey & Community"
            price="$111/month"
            description="A continuous sacred journey of daily transmissions, weekly teachings, and monthly rituals designed to sustain and deepen your divine flame. Join a community of fellow seekers walking the path of awakening together."
            features={membershipFeatures.map((f) => ({
              title: f.title,
              description: f.description,
            }))}
            ctaText="Begin Your Immortal Quest"
            ctaHref="#contact"
            ctaStyle="secondary"
            imagePath="/images/g-wagon.webp"
            reversed={true}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection
          title="Sacred Questions Answered"
          description="Everything you need to know about beginning your divine journey"
          faqs={faqs}
          ctaText="Ask Your Question Directly"
          ctaHref="#contact"
        />
      </section>

      {/* Contact/CTA Section */}
      <section id="contact">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer
        siteName="Immortal Flame"
        description="Join the sacred movement of awakening with Paul Rataul - prophet, artist, warrior, and global reformer igniting divine transformation in those ready to burn."
        navigationItems={navigationItems.concat([
          { name: 'Contact', href: '#contact' },
        ])}
        ctaText="Begin Your Divine Journey"
        ctaHref="#contact"
      />
    </main>
  );
}
