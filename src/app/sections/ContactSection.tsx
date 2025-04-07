'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Social media links
  const socialLinks = [
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'TikTok', icon: 'tiktok', url: '#' },
  ];

  // Contact methods
  const contactMethods = [
    {
      title: 'Email',
      content: 'prophecy@paulrataul.com',
      icon: 'mail',
    },
    {
      title: 'Headquarters',
      content: 'Dubai, UAE',
      icon: 'location',
    },
    {
      title: 'Bookings',
      content: 'bookings@paulrataul.com',
      icon: 'calendar',
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        interests: {
          prophecy: false,
          modeling: false,
          business: false,
          speaking: false,
        },
        subscribe: true,
      });
    }, 5000);
  };

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
      case 'facebook':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
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
      case 'linkedin':
        return (
          <svg
            className="w-5 h-5 text-[#D4AF37]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
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
      className="py-24 bg-[#F5F5F5] text-[#1E1E1E]"
    >
      <div className="container mx-auto px-6 md:px-12">
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
          <div className="h-[1px] w-24 bg-[#9D0B0B] mx-auto"></div>
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
              <div className="bg-[#1E1E1E] text-[#F5F5F5] p-8 mb-8">
                <h3 className="font-cinzel text-2xl mb-6 text-[#D4AF37]">
                  The Inner Circle
                </h3>
                <p className="text-[#F5F5F5]/80 mb-6">
                  Join the select group of visionaries, seekers, and
                  change-makers who receive direct messages, event invitations,
                  and early access to movement initiatives.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
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
              <div className="bg-[#1E1E1E] text-[#F5F5F5] p-8">
                <h3 className="font-cinzel text-2xl mb-6 text-[#D4AF37]">
                  Follow The Flame
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center py-3 px-4 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-3">
                        {renderSocialIcon(social.icon)}
                      </span>
                      <span className="group-hover:text-[#D4AF37] transition-colors">
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-cinzel text-[#1E1E1E]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#F5F5F5] border border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-cinzel text-[#1E1E1E]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#F5F5F5] border border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-cinzel text-[#1E1E1E]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#F5F5F5] border border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors"
                    placeholder="Message Subject"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-cinzel text-[#1E1E1E]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 bg-[#F5F5F5] border border-[#1E1E1E]/20 focus:border-[#9D0B0B] outline-none transition-colors resize-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                {/* Interest Checkboxes */}
                <div>
                  <p className="font-cinzel text-[#1E1E1E] mb-3">
                    I am interested in:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="prophecy"
                        checked={formData.interests.prophecy}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-[#9D0B0B] border-[#1E1E1E]/20"
                      />
                      <span>The Prophecy & Writings</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="modeling"
                        checked={formData.interests.modeling}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-[#9D0B0B] border-[#1E1E1E]/20"
                      />
                      <span>Modeling & Fashion</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="business"
                        checked={formData.interests.business}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-[#9D0B0B] border-[#1E1E1E]/20"
                      />
                      <span>Business & Investment</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="speaking"
                        checked={formData.interests.speaking}
                        onChange={handleCheckboxChange}
                        className="form-checkbox text-[#9D0B0B] border-[#1E1E1E]/20"
                      />
                      <span>Speaking & Events</span>
                    </label>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="pt-4 border-t border-[#1E1E1E]/10">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-[#9D0B0B] border-[#1E1E1E]/20"
                    />
                    <span className="text-[#1E1E1E]/80">
                      Become a Flamebearer: Receive exclusive prophecies,
                      updates and early access.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1E1E1E] text-[#F5F5F5] uppercase tracking-wider font-medium hover:bg-[#9D0B0B] transition-colors"
                  >
                    Send Message
                  </button>
                </div>

                {/* Form submission message */}
                {formSubmitted && (
                  <div className="bg-[#9D0B0B]/10 border border-[#9D0B0B] p-4 text-[#9D0B0B] font-medium">
                    Your message has been sent. Paul will respond to your
                    inquiry soon.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
