'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define TypeScript interfaces
interface VideoData {
  id: string;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  featured?: boolean;
}

interface VisualsCategoryData {
  id: string;
  name: string;
  description: string;
  videos: VideoData[];
}

// Define video categories and content
const visualsCategories: VisualsCategoryData[] = [
  {
    id: 'cinematic',
    name: 'CINEMATIC',
    description:
      'Immersive visual narratives that transcend conventional boundaries, offering a window into divine perspective.',
    videos: [
      {
        id: 'video-1',
        title: 'The Eternal Flame Awakens',
        description:
          "A journey through Dubai's architectural wonders, reflecting the sacred geometry of existence.",
        src: '/videos/burj-khalifa.mp4',
        thumbnail: '/images/dubai-pic.webp',
        featured: true,
      },
      {
        id: 'video-2',
        title: 'Luxury as Vessel',
        description:
          'The duality of material luxury as both illusion and vessel for divine expression.',
        src: '/videos/balenciaga-ferrari.mp4',
        thumbnail: '/images/ferarri-night.webp',
      },
      {
        id: 'video-3',
        title: 'Night Revelations',
        description:
          'The veils of consciousness thin as darkness reveals new dimensions of understanding.',
        src: '/videos/dubai-night-party.mp4',
        thumbnail: '/images/dior-night-2.webp',
      },
    ],
  },
  {
    id: 'movement',
    name: 'MOVEMENT',
    description:
      'The physical expression of spiritual principles through form and motion, where discipline meets divine purpose.',
    videos: [
      {
        id: 'video-4',
        title: 'Embodied Knowledge',
        description:
          'The sacred temple of the body, forged through iron discipline and prophetic intention.',
        src: '/videos/gym-weights.mp4',
        thumbnail: '/images/gym-selfie.webp',
        featured: true,
      },
      {
        id: 'video-5',
        title: 'Divine Rhythm',
        description:
          'Movement as meditation—each step a prayer, each gesture an offering to the eternal.',
        src: '/videos/dancing-modeling.mp4',
        thumbnail: '/images/modelling-catwalk.mp4',
      },
      {
        id: 'video-6',
        title: 'The Path of Discipline',
        description:
          "Walking the warrior's path requires both external strength and internal stillness.",
        src: '/videos/gym-walk.mp4',
        thumbnail: '/images/gym-meditating.webp',
      },
    ],
  },
  {
    id: 'prophecy',
    name: 'PROPHECY',
    description:
      'Visual revelations that pierce the veil between worlds and timelines, offering glimpses of divine consciousness.',
    videos: [
      {
        id: 'video-7',
        title: 'New World Vision',
        description:
          'Glimpses of the world that awaits us beyond the current paradigm of limitation.',
        src: '/videos/boat-new-home.mp4',
        thumbnail: '/images/boat-white.webp',
        featured: true,
      },
      {
        id: 'video-8',
        title: 'Kindness Revolution',
        description:
          'The most radical act in a world of division is the simple yet profound practice of kindness.',
        src: '/videos/be-nice.mp4',
        thumbnail: '/images/bros.webp',
      },
      {
        id: 'video-9',
        title: 'Family Consciousness',
        description:
          'The microcosm of family as template for global harmonious existence.',
        src: '/videos/fam-selfie-mindset.mp4',
        thumbnail: '/images/bros-2.webp',
      },
    ],
  },
];

const VideoPlayer: React.FC<{
  video: VideoData | null;
  onClose: () => void;
}> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Focus trap for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    // Auto-play when video changes
    if (videoRef.current && video) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, show play button or silent fail
        });
      }
    }
  }, [video]);

  if (!video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="relative w-full max-w-5xl aspect-video overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Frame Decoration */}
        <div className="absolute inset-0 border border-gold/30 pointer-events-none z-10">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/60"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/60"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/60"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/60"></div>
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full"
          controls
          playsInline
          preload="metadata"
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
          <h3 className="font-cinzel text-xl text-gold mb-2">{video.title}</h3>
          <p className="font-cormorant text-ivory/80 text-base">
            {video.description}
          </p>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-ivory/80 hover:text-gold transition-colors duration-300 z-20 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

// Video thumbnail component
const VideoThumbnail: React.FC<{
  video: VideoData;
  onClick: () => void;
  featured?: boolean;
}> = ({ video, onClick, featured = false }) => {
  return (
    <motion.div
      className={`relative overflow-hidden group cursor-pointer rounded-sm sacred-glow ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent z-10"></div>

      {/* Thumbnail Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${video.thumbnail})` }}
        ></div>
      </div>

      {/* Divine frame */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/60"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/60"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/60"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/60"></div>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-gold/40 group-hover:border-gold/80 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gold/80 group-hover:text-gold transition-colors duration-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </div>

      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="font-cinzel text-gold text-lg md:text-xl mb-1 group-hover:text-gold/100 transition-colors duration-300">
          {video.title}
        </h3>

        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
          <p className="font-cormorant-upright text-ivory/80 text-sm md:text-base mt-2 line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Sacred flame particles component
const FlameParticle: React.FC<{
  delay?: number;
  duration?: number;
  size?: number;
  left?: string;
  opacity?: number;
}> = ({ delay = 0, duration = 15, size = 20, left = '50%', opacity = 0.3 }) => (
  <motion.div
    className="absolute z-10"
    style={{
      left,
      bottom: '-5%',
      width: size,
      height: size * 1.5,
    }}
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [0, -400],
      opacity: [0, opacity, opacity, 0],
      rotate: [0, 10, -10, 5, -5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: [0.1, 0.25, 0.3, 1],
    }}
  >
    <div
      className="w-full h-full"
      style={{
        background:
          'radial-gradient(circle at 50% 30%, rgba(255,85,0,0.5), rgba(157,11,11,0.5))',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        filter: 'blur(4px)',
      }}
    />
  </motion.div>
);

export default function VisualsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('cinematic');
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useRef<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // Simple IntersectionObserver for performance
    if (typeof window !== 'undefined' && sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          isInView.current = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );

      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, []);

  // Find the active category object
  const activeCategoryObj = visualsCategories.find(
    (cat) => cat.id === activeCategory
  );

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Handle video click to open player
  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
    setIsPlayerOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle close player
  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  return (
    <section
      id="visuals"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-black to-charcoal overflow-hidden"
      aria-labelledby="visuals-section-title"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/90 to-black"></div>

        {/* Animated texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23D4AF37" fill-opacity="0.2" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        ></div>
      </div>

      {/* Subtle flame particles - only render when mounted and section is in view */}
      {mounted && (
        <>
          {[...Array(8)].map((_, i) => (
            <FlameParticle
              key={i}
              delay={i * 0.5}
              duration={12 + Math.random() * 8}
              size={8 + Math.random() * 15}
              left={`${5 + Math.random() * 90}%`}
              opacity={0.15 + Math.random() * 0.15}
            />
          ))}
        </>
      )}

      {/* Section heading with luxury styling */}
      <div className="container mx-auto px-4 md:px-8 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <h2
            id="visuals-section-title"
            className="font-cinzel text-4xl md:text-5xl text-gold tracking-wider mb-4"
          >
            PROPHETIC CINEMA
          </h2>

          {/* Decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gold/30"></div>
            <p className="text-ivory/80 font-cormorant-upright text-lg md:text-xl italic px-4">
              Moving revelations of the immortal flame
            </p>
            <div className="h-px w-12 bg-gold/30"></div>
          </div>

          <p className="text-ivory/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Beyond mere imagery, these cinematic experiences provide direct
            transmission of divine consciousness. Each video offers a glimpse
            into the intersection of human experience and prophetic revelation.
          </p>
        </motion.div>

        {/* Category navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center mt-12 mb-10 border-b border-gold/10 overflow-x-auto thin-scrollbar"
        >
          {visualsCategories.map((category) => (
            <button
              key={category.id}
              className={`relative px-4 py-3 md:px-8 md:py-4 font-cinzel text-sm md:text-base transition-colors duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'text-gold'
                  : 'text-ivory/50 hover:text-ivory/80'
              }`}
              onClick={() => handleCategoryChange(category.id)}
              aria-pressed={activeCategory === category.id}
              aria-controls="video-grid"
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeVisualsCategoryIndicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Category description */}
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-ivory/70 font-cormorant-upright text-base md:text-lg italic max-w-2xl mx-auto">
              {activeCategoryObj?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Grid */}
      <div id="video-grid" className="container mx-auto px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {activeCategoryObj?.videos.map((video) => (
              <VideoThumbnail
                key={video.id}
                video={video}
                featured={video.featured}
                onClick={() => handleVideoClick(video)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="h-px w-24 bg-gold/30 mx-auto mb-8"></div>
          <h3 className="font-cinzel text-gold text-xl md:text-2xl mb-6">
            WITNESS THE DIVINE NARRATIVE
          </h3>
          <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
            Explore these visual prophecies as they continue to unfold. Each
            revelation provides a glimpse into dimensions beyond ordinary
            perception, connecting viewers to the eternal flame of divine
            consciousness.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal border border-gold/50 text-gold uppercase tracking-wider font-medium overflow-hidden flame-button focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal hover:bg-crimson/80 hover:text-ivory hover:border-crimson/60 transition-colors duration-300"
            aria-label="Join the visual journey"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {/* Flame animation on hover */}
            <span
              className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-crimson/40 via-gold/20 to-transparent group-hover:h-full transition-all duration-700 ease-in-out"
              aria-hidden="true"
            ></span>

            <span className="relative flex items-center">
              Join The Visual Journey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {isPlayerOpen && (
          <VideoPlayer video={selectedVideo} onClose={handleClosePlayer} />
        )}
      </AnimatePresence>

      {/* CSS for thin scrollbar */}
      <style jsx global>{`
        .thin-scrollbar::-webkit-scrollbar {
          height: 2px;
        }
        .thin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .thin-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(212, 175, 55, 0.3);
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
}
