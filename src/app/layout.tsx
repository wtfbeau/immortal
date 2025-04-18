import './globals.css';
import type { Metadata } from 'next';
import {
  Cinzel,
  Playfair_Display,
  Inter,
  Cormorant_Garamond,
  Cormorant_Upright,
} from 'next/font/google';
import Script from 'next/script';

// Font definitions using Next.js font system
const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const cormorantUpright = Cormorant_Upright({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-upright',
});

export const metadata: Metadata = {
  title: 'Join Paul Rataul | Artist. Warrior. Reformer',
  description:
    'Welcome to the world of Paul Rataul — artist, creative force, and global voice for change. This is where bold ideas, raw truth, and artistic energy come to life.',
  metadataBase: new URL('https://immortalpaul.com'),
  openGraph: {
    title: 'Immortal Paul Rataul | Artist. Warrior. Reformer',
    description:
      'Welcome to the world of Paul Rataul — artist, creative force, and global voice for change. This is where bold ideas, raw truth, and artistic rebellion come to life.',
    url: 'https://immortalpaul.com',
    siteName: 'Immortal Paul Rataul',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Immortal Paul Rataul',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immortal Paul Rataul | Artist. Warrior. Reformer',
    description:
      'Welcome to the world of Paul Rataul — artist, creative force, and global voice for change. This is where bold ideas, raw truth, and artistic rebellion come to life.',
    images: ['/images/hero.webp'],
  },
  icons: {
    icon: '/images/favicon.webp',
    apple: '/images/favicon.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://immortalpaul.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cinzel.variable} ${playfair.variable} ${inter.variable} ${cormorant.variable} ${cormorantUpright.variable}`}
    >
      <body className="font-inter bg-charcoal text-ivory">
        <div className="overflow-hidden">{children}</div>
        <Script id="site-script">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              // Smooth Scroll
              document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();

                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    window.scrollTo({
                      top: target.offsetTop,
                      behavior: 'smooth',
                    });
                  }
                });
              });

              // Scroll Animation
              const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
              };

              const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                  }
                });
              }, observerOptions);

              document.querySelectorAll('section > div').forEach((section) => {
                observer.observe(section);
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
