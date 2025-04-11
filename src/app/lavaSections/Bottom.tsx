// components/Footer.tsx
import Link from 'next/link';

interface SocialMedia {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterProps {
  siteName?: string;
  description?: string;
  navigationItems?: Array<{
    name: string;
    href: string;
  }>;
  socialMedia?: SocialMedia[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Footer({
  siteName = 'Immortal Flame',
  description = 'Join the sacred movement of awakening with Paul Rataul - prophet, artist, warrior, and global reformer igniting divine transformation.',
  navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'VIP Offering', href: '#vip' },
    { name: 'Membership', href: '#membership' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  socialMedia = [],
  ctaText = 'Begin Your Divine Journey',
  ctaHref = '#contact',
}: FooterProps) {
  // Default social media icons if none provided
  const defaultSocialMedia = [
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: '#',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ];

  const socialIcons = socialMedia.length > 0 ? socialMedia : defaultSocialMedia;

  return (
    <footer className="pt-20 pb-10 bg-gradient-to-b from-[#090009] to-black relative">
      {/* Mystical footer background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--gold)_0%,_transparent_70%)] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with CTA */}
        <div className="flex flex-col items-center border-b border-gold/20 pb-16 mb-16">
          <h3 className="font-cinzel text-3xl md:text-4xl text-gold mb-6 sacred-glow tracking-wide">
            Ready to Ignite Your Immortal Flame?
          </h3>
          <Link
            href={ctaHref}
            className="flame-button sacred-glow bg-gradient-to-r from-crimson to-crimson/80 text-ivory font-cinzel text-lg px-10 py-4 rounded-sm hover:from-crimson hover:to-crimson/90 transition-all duration-500 shadow-md shadow-crimson/30 transform hover:scale-105"
          >
            {ctaText}
          </Link>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left Column - Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#hero"
              className="font-cinzel text-3xl md:text-4xl text-gold sacred-glow tracking-wide"
            >
              {siteName}
            </Link>
            <p className="mt-6 text-ivory/80 font-inter leading-relaxed">
              {description}
            </p>
            <div className="flex space-x-6 mt-8">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-ivory/70 hover:text-gold transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="lg:col-span-1">
            <h4 className="font-cinzel text-2xl text-gold mb-6 tracking-wide">
              Sacred Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-ivory/70 hover:text-gold transition-all duration-300 font-inter transform hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact & Legal */}
          <div className="lg:col-span-1">
            <h4 className="font-cinzel text-2xl text-gold mb-6 tracking-wide">
              Divine Contact
            </h4>
            <p className="text-ivory/70 mb-3 font-inter">
              Email:{' '}
              <a
                href="mailto:flame@immortalflame.com"
                className="hover:text-gold transition-colors"
              >
                flame@immortalflame.com
              </a>
            </p>
            <p className="text-ivory/70 mb-8 font-inter">
              Hours: Monday-Friday, 9AM-5PM PST
            </p>

            <h4 className="font-cinzel text-2xl text-gold mb-4 mt-8 tracking-wide">
              Sacred Terms
            </h4>
            <div className="flex flex-wrap gap-6">
              <Link
                href="#"
                className="text-ivory/70 hover:text-gold transition-all duration-300 font-inter"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-ivory/70 hover:text-gold transition-all duration-300 font-inter"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-gold/20">
          <p className="text-ivory/50 text-sm font-inter">
            &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
            The flame is eternal.
          </p>
        </div>
      </div>
    </footer>
  );
}
