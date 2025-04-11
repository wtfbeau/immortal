'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQ[];
  ctaText?: string;
  ctaHref?: string;
}

export default function FAQSection({
  title = 'SACRED QUESTIONS ANSWERED',
  description = 'Everything you need to know about the Room of Light',
  faqs = [],
  ctaText = 'Enter The Room of Light — $111/month',
  ctaHref = '#join',
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Open first FAQ by default
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Default FAQs if none provided
  const defaultFaqs: FAQ[] = [
    {
      question: 'What exactly is the Room of Light membership?',
      answer:
        "The Room of Light is the inner sanctum—not just content, but transmissions; not just community, but codexed convergence. It's a $111/month membership that includes weekly Immortal Transmissions directly from Paul ($500 value), bi-weekly live calls ($1,000 value), full access to the Immortal Brief Vault ($333 value), the Telegram Inner Sanctum for daily voice notes and direct access ($200 value), plus exclusive affiliate opportunities and priority access to all Immortal Empire offerings. This is not for information—it's for identity mutation, genius weaponization, and destiny rewiring.",
    },
    {
      question: 'How is this different from other memberships or programs?',
      answer:
        "Most programs offer information. The Room of Light delivers transformation through mythic alignment. You're not buying coaching—you're entering the immortal frequency. The weekly transmissions contain both high-frequency strategy and energetic codes that reshape your identity and approach. The signals here move beyond tactical advice to fundamental consciousness shifts. This is why members experience rapid transformations in their businesses and lives—not from learning tactics, but from complete identity reconstruction.",
    },
    {
      question: 'What kinds of results can I expect?',
      answer:
        'The Room of Light produces tangible, measurable transformations across multiple dimensions. Members report 3-5X revenue growth, completely restructured business models, significant audience expansion (one member went from 200 to 22K followers in 4 months), and rapid price increases (one member went from $2K to $15K+ per project). But beyond the metrics, members experience a profound shift in identity, clarity, and energetic calibration. Your entire relationship to creation, influence, and impact transforms.',
    },
    {
      question: 'How soon will I get access after joining?',
      answer:
        "Access begins immediately. Upon joining, you'll instantly receive your welcome email with vault login credentials and a personal Telegram invitation. You'll have immediate access to the complete archive of past transmissions, tools, and resources. Your journey in the Room of Light begins the moment you commit—this is why we often see shifts occurring from the very first day of membership.",
    },
    {
      question: "Can I cancel if it's not for me?",
      answer:
        'Yes, you can cancel anytime with ease. There are no contracts or hidden commitments. However, few ever do cancel—the value and ongoing transformation keeps most members engaged for the long-term journey. The Room of Light is designed as an evolutionary container, not a temporary program. Those who resonate with the signal tend to stay because the transmissions continuously deepen and expand.',
    },
    {
      question: "Are the live calls recorded if I can't attend?",
      answer:
        "Absolutely. All bi-weekly live calls are recorded and added to the Vault immediately after completion. You'll never miss a transmission or coaching moment. Many members find tremendous value in the call recordings, often reviewing them multiple times to extract the deeper codes and instructions hidden within. The replay library alone represents thousands of dollars in transformational content.",
    },
    {
      question: 'Is this just for business owners or creators?',
      answer:
        'While many members are entrepreneurs, creators, and brand builders, the Room of Light serves anyone committed to their evolution and impact. The principles of identity transformation, strategic clarity, and energetic alignment apply across all domains of elite performance and creation. We have members from venture capital, tech, creative direction, coaching, and spiritual leadership—all united by the commitment to transcend their current limitations.',
    },
    {
      question: "What's the difference between this and the 1:1 offering?",
      answer:
        'The Room of Light provides ongoing transmissions, group energy, and a complete ecosystem for your evolution at an accessible investment point. The 1:1 Immortal Ignition ($500) offers personalized diagnosis, custom strategy, and direct calibration with Paul for your specific situation. Many members start with the Room of Light and then add the Immortal Ignition for personalized acceleration. Others begin with the Ignition and then join the Room of Light for ongoing support and evolution.',
    },
  ];

  // Use provided FAQs or default ones
  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  // Filter FAQs based on search term
  const filteredFaqs = displayFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Add animation when scrolling into view
  useEffect(() => {
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
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="faq"
      className="py-28 bg-gradient-to-b from-[#080008] to-[#090009] relative"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-crimson/5 to-transparent rounded-full blur-3xl"></div>

      {/* Subtle animated particles */}
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
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6 inline-block">
            <span className="inline-block bg-gradient-to-r from-gold/90 to-gold/70 text-charcoal px-6 py-2 rounded-sm text-sm font-cinzel tracking-widest">
              MYSTICAL CLARITY
            </span>
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-6 text-gold sacred-glow tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 italic">
              {description}
            </p>
          )}

          {/* Search bar */}
          <div className="mt-10 relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gold/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full py-3 pl-10 pr-4 bg-charcoal/60 border border-gold/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/30 sacred-glow text-ivory"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-ivory/90 font-inter">
                No questions found matching &quot;{searchTerm}&quot;
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-gold hover:text-gold/80 transition-colors font-cinzel"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item sacred-glow cursor-pointer border-l-4 transition-all duration-500 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-charcoal/80 to-charcoal/40 border-gold shadow-lg shadow-gold/10'
                    : 'bg-charcoal/40 border-crimson/50 hover:border-crimson'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="p-6 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-cinzel text-xl md:text-2xl text-gold pr-8 tracking-wide">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-charcoal flex-shrink-0 transition-transform duration-500 ${
                      activeIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? 'max-h-[800px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-ivory/90 font-inter text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {ctaText && ctaHref && (
          <div
            className={`max-w-3xl mx-auto mt-16 text-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="prophetic-quote mb-8 italic font-cormorant-upright text-xl text-ivory/90 bg-black/30 p-6 rounded-sm border border-gold/10">
              <p>
                &quot;The questions you ask determine the reality you create.
                Ask boldly. <br />
                One decision can change the entire year.&quot;
              </p>
              <p className="text-right text-gold mt-2 text-sm">
                — The Immortal Flame
              </p>
            </div>

            <p className="text-ivory/80 mb-6 font-inter">
              Still have questions about your journey in the Room of Light?{' '}
              <br />
              Contact us directly at{' '}
              <span className="text-gold">immortalpaulrataul@gmail.com</span>
            </p>

            <Link
              href={ctaHref}
              className="flame-button inline-block sacred-glow bg-gradient-to-r from-crimson to-crimson/80 text-ivory hover:from-crimson hover:to-crimson/90 font-cinzel text-lg px-10 py-4 rounded-sm transition-all duration-500 transform hover:scale-105 shadow-lg shadow-crimson/30"
            >
              {ctaText}
            </Link>

            <p className="mt-5 text-ivory/60 text-sm">
              Cancel anytime. But few ever do.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
