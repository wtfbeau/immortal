import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RoomOfLightHero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mystical background with light rays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-charcoal/80 to-black/90 z-10"></div>

      {/* Light rays emanating from center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-20 z-5 animate-pulse"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/light-room-bg.webp"
          alt="Room of Light"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Animated light particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="transform transition-all duration-700 hover:scale-105">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4 text-gold sacred-glow tracking-wider">
            IMMORTAL ROOM OF LIGHT
          </h1>
          <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/90 max-w-3xl mx-auto mb-6 italic">
            The Inner Sanctum for the Chosen Ones
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 border-t border-gold/30 text-gold font-cinzel">
            $111/month
          </div>
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 border-t border-gold/30 text-ivory/80 font-cinzel">
            Cancel anytime
          </div>
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 border-t border-gold/30 text-ivory/80 font-cinzel">
            Built for Chosen Ones
          </div>
        </div>

        <div className="prophetic-quote mb-12 max-w-2xl mx-auto py-6 px-4">
          <p className="font-cormorant-upright text-xl md:text-2xl text-ivory/95 italic leading-relaxed">
            You do not join for information. You join to mutate your identity,
            weaponize your genius, and rewire your destiny.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="#join"
            className="flame-button bg-gradient-to-r from-gold to-gold/80 hover:from-gold hover:to-gold/90 text-charcoal font-cinzel px-10 py-5 rounded-sm shadow-lg transform transition duration-500 hover:-translate-y-1 sacred-glow text-xl tracking-wider"
          >
            ENTER THE IMMORTAL ROOM
          </Link>

          <p className="mt-6 text-ivory/70 font-inter text-sm">
            Limited memberships available. Access begins immediately upon
            joining.
          </p>
        </div>

        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RoomOfLightHero;
