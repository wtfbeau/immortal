'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    offering: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Clear form after submission
      setFormState({
        name: '',
        email: '',
        offering: '',
        message: '',
      });

      // Reset submission state after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Animation on scroll into view
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
      id="join"
      className="py-28 bg-gradient-to-b from-charcoal to-black relative"
      ref={sectionRef}
    >
      {/* Mystical background pattern */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/book-upcoming.webp"
          alt="Sacred symbols"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--gold)_0%,_transparent_70%)] opacity-10 z-5 animate-pulse"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-block">
              <span className="inline-block bg-gradient-to-r from-crimson/90 to-crimson/70 text-ivory px-6 py-2 rounded-sm text-sm font-cinzel tracking-widest">
                JOIN THE CHOSEN ONES
              </span>
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-gold mb-6 sacred-glow tracking-wider">
              Enter The Room of Light
            </h2>
            <p className="font-cormorant-upright text-xl md:text-2xl italic text-ivory/90 max-w-3xl mx-auto">
              One decision can change the entire year
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-b from-charcoal/90 to-charcoal/60 border border-gold/30 rounded-sm p-8 sacred-glow transform transition duration-500 hover:border-gold/50"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-6 tracking-wide">
                Begin Your Sacred Journey
              </h3>

              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div className="inline-block mb-4 p-3 rounded-full bg-gold/20 text-gold">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-cinzel text-xl text-gold mb-4">
                    Welcome to the Room of Light
                  </h4>
                  <p className="text-ivory/90 mb-6">
                    Your application has been received. Check your email within
                    the next 15 minutes for access.
                  </p>
                  <p className="font-cormorant-upright italic text-gold/80">
                    &quot;The flame awaits those ready to burn.&quot;
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-cinzel text-gold mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-black/60 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-cinzel text-gold mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/60 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="Enter your email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="offering"
                      className="block font-cinzel text-gold mb-2"
                    >
                      Choose Your Divine Path
                    </label>
                    <select
                      id="offering"
                      name="offering"
                      required
                      className="w-full bg-black/60 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      value={formState.offering}
                      onChange={handleChange}
                    >
                      <option value="">Select your journey</option>
                      <option value="room-of-light">
                        The Room of Light ($111/month)
                      </option>
                      <option value="immortal-ignition">
                        The Immortal Ignition ($500)
                      </option>
                      <option value="custom">Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-cinzel text-gold mb-2"
                    >
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full bg-black/60 border border-gold/30 rounded-sm p-3 text-ivory font-inter focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300"
                      placeholder="Share what calls you to this flame..."
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flame-button bg-gradient-to-r from-crimson to-crimson/80 text-ivory font-cinzel text-lg py-4 rounded-sm shadow-lg transform transition duration-500 hover:scale-105 hover:from-crimson hover:to-crimson/90 sacred-glow ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-ivory"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Enter the Room of Light — $111/month'
                    )}
                  </button>

                  <div className="text-center text-ivory/60 text-sm">
                    <p>Cancel anytime. But few ever do.</p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Benefits and Next Steps */}
            <motion.div
              className="flex flex-col space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-gradient-to-b from-black/90 to-black/70 border border-gold/30 rounded-sm p-8 sacred-glow transform transition duration-500 hover:border-gold/50">
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-6 tracking-wide">
                  Your Transformation Begins Instantly
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-crimson shrink-0 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-cinzel text-gold text-lg mb-1">
                        Immediate Access
                      </p>
                      <p className="text-ivory/90 font-inter">
                        Within minutes, receive your welcome email with vault
                        login and personal Telegram invitation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-crimson shrink-0 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-cinzel text-gold text-lg mb-1">
                        Complete Library Access
                      </p>
                      <p className="text-ivory/90 font-inter">
                        Instant access to the entire Immortal Brief Vault with
                        all past transmissions, tools, and resources.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-crimson shrink-0 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-cinzel text-gold text-lg mb-1">
                        Telegram Inner Sanctum
                      </p>
                      <p className="text-ivory/90 font-inter">
                        Connect to the private Telegram channel for daily voice
                        notes and direct access to Paul.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-crimson shrink-0 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-cinzel text-gold text-lg mb-1">
                        Next Live Call Details
                      </p>
                      <p className="text-ivory/90 font-inter">
                        Receive calendar invite for the next bi-weekly live call
                        with Paul and special guests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What members are saying */}
              <div className="bg-gradient-to-r from-black to-crimson/20 border border-gold/30 rounded-sm p-8 sacred-glow transform transition duration-500 hover:border-gold/50 mt-auto">
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4 tracking-wide">
                  What Members Are Saying
                </h3>
                <div className="space-y-4">
                  <div className="bg-black/50 p-4 rounded-sm border-l-2 border-gold/40">
                    <p className="text-ivory/90 font-cormorant-upright italic text-lg">
                      &quot;The transmissions completely rewired how I think
                      about influence and audience building. My identity
                      transformation happened within weeks.&quot;
                    </p>
                    <p className="text-right text-gold/80 text-sm mt-2">
                      — Marcus T.
                    </p>
                  </div>

                  <div className="bg-black/50 p-4 rounded-sm border-l-2 border-crimson/40">
                    <p className="text-ivory/90 font-cormorant-upright italic text-lg">
                      &quot;The Room of Light showed me exactly where I was
                      playing small. Now I command $15K+ for strategy work with
                      a 3-month waitlist.&quot;
                    </p>
                    <p className="text-right text-gold/80 text-sm mt-2">
                      — Sarah L.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gold/20">
                  <p className="font-cinzel text-gold text-lg mb-4">
                    The Divine Guarantee
                  </p>
                  <p className="text-ivory/90 font-inter mb-2">
                    If after your first 30 days in the Room of Light, you do not
                    experience a profound shift in clarity, purpose, and power,
                    you will receive a full refund.
                  </p>
                  <p className="text-ivory/70 font-inter text-sm">
                    No questions asked.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
