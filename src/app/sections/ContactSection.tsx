'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: {
      prophecy: false,
      modeling: false,
      business: false,
      speaking: false,
    },
    subscribe: true,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Social media links
  const socialLinks = [
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
    { name: 'TikTok', icon: 'tiktok', url: '#' },
  ];

  // Contact methods
  const contactMethods = [
    {
      title: 'Headquarters',
      content: 'Dubai, UAE',
      icon: 'location',
    },
  ];

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'subscribe') {
      setFormData((prev) => ({
        ...prev,
        subscribe: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormLoading(false);
      setFormSubmitted(true);

      // Scroll to top of form
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  // Reset form after success
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: '',
          interests: {
            prophecy: false,
            modeling: false,
            business: false,
            speaking: false,
          },
          subscribe: true,
        });
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  // Function to render social icons
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'tiktok':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Function to render contact method icons
  const renderContactIcon = (icon: string) => {
    switch (icon) {
      case 'mail':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        );
      case 'location':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        );
      case 'calendar':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#F5F5F5] to-[#F0F0F0] text-[#1E1E1E] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl tracking-wider mb-4">
            JOIN THE CIRCLE
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#9D0B0B] to-transparent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#1E1E1E]/80 font-cormorant-upright italic">
            Connect with the movement and receive divine transmissions directly
            from Paul
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-[#1E1E1E] text-[#F5F5F5] p-8 mb-8 border border-[#D4AF37]/20 relative">
                {/* Golden corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]"></div>

                <h3 className="font-cinzel text-2xl mb-4 text-[#D4AF37]">
                  The Inner Circle
                </h3>
                <p className="text-[#F5F5F5]/90 mb-6 leading-relaxed">
                  Join an elite community of visionaries, seekers, and
                  change-makers who receive:
                </p>

                <ul className="mb-8 space-y-3 text-[#F5F5F5]/80">
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span>Exclusive prophecies and revelations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span>Early invitations to private events</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span>Access to limited movement initiatives</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span>Direct transmissions from Paul</span>
                  </li>
                </ul>

                {/* Contact Methods */}
                <div className="space-y-6 border-t border-[#D4AF37]/20 pt-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 text-[#D4AF37]">
                        {renderContactIcon(method.icon)}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-[#F5F5F5] text-lg mb-1">
                          {method.title}
                        </h4>
                        <p className="text-[#F5F5F5]/70">{method.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#1E1E1E] text-[#F5F5F5] p-8 border border-[#D4AF37]/20 relative">
                {/* Golden corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]"></div>

                <h3 className="font-cinzel text-2xl mb-6 text-[#D4AF37]">
                  Follow The Flame
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center py-3 px-4 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-3 transition-transform duration-300 group-hover:scale-110">
                        {renderSocialIcon(social.icon)}
                      </span>
                      <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="bg-[#F5F5F5] border border-[#1E1E1E]/10 p-8 shadow-sm relative">
                {/* Form submission success message */}
                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      className="absolute inset-0 bg-[#1E1E1E] text-[#F5F5F5] flex flex-col items-center justify-center p-8 z-20 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#D4AF37]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="font-cinzel text-2xl mb-4 text-[#D4AF37]">
                        Message Received
                      </h3>
                      <p className="text-[#F5F5F5]/80 mb-6">
                        Your message has been sent to Paul. Expect a response
                        soon as divine timing allows.
                      </p>
                      <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  ref={formRef}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-cinzel text-xl mb-6 text-[#1E1E1E] border-b border-[#1E1E1E]/10 pb-4">
                    Send A Direct Message
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 font-cinzel text-[#1E1E1E]"
                      >
                        Your Name <span className="text-[#9D0B0B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border-b-2 border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-cinzel text-[#1E1E1E]"
                      >
                        Your Email <span className="text-[#9D0B0B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-transparent border-b-2 border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-cinzel text-[#1E1E1E]"
                    >
                      Your Message <span className="text-[#9D0B0B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 bg-transparent border-2 border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                      placeholder="Share your message or inquiry for Paul"
                      required
                    ></textarea>
                  </div>

                  {/* Interest Checkboxes */}
                  <div>
                    <p className="font-cinzel text-[#1E1E1E] mb-3">
                      Areas of Interest:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative w-5 h-5 border border-[#1E1E1E]/30 group-hover:border-[#9D0B0B] transition-colors">
                          {formData.interests.prophecy && (
                            <div className="absolute inset-0 m-0.5 bg-[#9D0B0B]"></div>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name="prophecy"
                          checked={formData.interests.prophecy}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span className="group-hover:text-[#9D0B0B] transition-colors">
                          The Prophecy & Writings
                        </span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative w-5 h-5 border border-[#1E1E1E]/30 group-hover:border-[#9D0B0B] transition-colors">
                          {formData.interests.modeling && (
                            <div className="absolute inset-0 m-0.5 bg-[#9D0B0B]"></div>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name="modeling"
                          checked={formData.interests.modeling}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span className="group-hover:text-[#9D0B0B] transition-colors">
                          Modeling & Fashion
                        </span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative w-5 h-5 border border-[#1E1E1E]/30 group-hover:border-[#9D0B0B] transition-colors">
                          {formData.interests.business && (
                            <div className="absolute inset-0 m-0.5 bg-[#9D0B0B]"></div>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name="business"
                          checked={formData.interests.business}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span className="group-hover:text-[#9D0B0B] transition-colors">
                          Business & Investment
                        </span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <div className="relative w-5 h-5 border border-[#1E1E1E]/30 group-hover:border-[#9D0B0B] transition-colors">
                          {formData.interests.speaking && (
                            <div className="absolute inset-0 m-0.5 bg-[#9D0B0B]"></div>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name="speaking"
                          checked={formData.interests.speaking}
                          onChange={handleCheckboxChange}
                          className="sr-only"
                        />
                        <span className="group-hover:text-[#9D0B0B] transition-colors">
                          Speaking & Events
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="pt-4 border-t border-[#1E1E1E]/10">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative w-5 h-5 border border-[#1E1E1E]/30 group-hover:border-[#9D0B0B] transition-colors">
                        {formData.subscribe && (
                          <div className="absolute inset-0 m-0.5 bg-[#9D0B0B]"></div>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleCheckboxChange}
                        className="sr-only"
                      />
                      <span className="text-[#1E1E1E]/80 group-hover:text-[#1E1E1E] transition-colors">
                        Join the{' '}
                        <span className="italic text-[#9D0B0B]">
                          Flamebearers
                        </span>
                        : Receive exclusive prophecies, updates and early
                        access.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="relative w-full py-4 bg-[#1E1E1E] text-[#F5F5F5] uppercase tracking-wider font-medium hover:bg-[#9D0B0B] transition-colors overflow-hidden group"
                    >
                      <span
                        className={`transition-all duration-300 ${
                          formLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        Send Message
                      </span>

                      {/* Loading indicator */}
                      {formLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 text-[#D4AF37]"
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
                        </div>
                      )}

                      {/* Button background animation */}
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
