'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

// Define facets of Paul's divine journey
interface JourneyMedia {
  src: string;
  alt: string;
  type: 'image' | 'video';
  position?: 'center' | 'top' | 'bottom';
  description?: string;
}

interface JourneyFacet {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  primaryMedia: JourneyMedia;
  secondaryMedia: JourneyMedia[];
  color: string;
  accentColor: string;
  symbol: string;
}

// Video Player component for full-screen playback
interface VideoPlayerProps {
  video: {
    src: string;
    title?: string;
    description?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && videoRef.current && video) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Auto-play was prevented');
        });
      }
    }
  }, [isOpen, video]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-title"
          ref={modalRef}
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-sm"
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
              className="w-full h-full object-contain bg-black"
              src={video.src}
              controls
              controlsList="nodownload"
              playsInline
              aria-labelledby="video-title video-description"
            />

            {/* Video Title Overlay */}
            {(video.title || video.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                {video.title && (
                  <h3
                    id="video-title"
                    className="font-cinzel text-xl text-gold mb-2"
                  >
                    {video.title}
                  </h3>
                )}
                {video.description && (
                  <p
                    id="video-description"
                    className="font-cormorant text-ivory/80 text-base"
                  >
                    {video.description}
                  </p>
                )}
              </div>
            )}

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
      )}
    </AnimatePresence>
  );
};

// Video background component with autoplay
interface VideoBackgroundProps {
  src: string;
  alt: string;
  description?: string;
  onClick: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  alt,
  description,
  onClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden rounded-sm aspect-[9/16] h-full cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      role="button"
      aria-label={`Play video: ${alt}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <motion.div
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-cinzel text-xl md:text-2xl text-gold uppercase mb-2">
            {alt}
          </h3>
          {description && (
            <p className="font-cormorant text-ivory/90 text-base">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Play button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-gold/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gold"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Portrait image component with overlay
interface PortraitImageProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  priority?: boolean;
  index: number;
}

const PortraitImage: React.FC<PortraitImageProps> = ({
  src,
  alt,
  title,
  description,
  priority = false,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={imageRef}
      className="relative overflow-hidden rounded-sm aspect-[3/4] h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 0.5 : 0.7 }}
        transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="h-full w-full">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={667}
          quality={90}
          priority={priority}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
        <motion.div
          initial={{ y: 10, opacity: 0.8 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {title && (
            <h3 className="font-cinzel text-base md:text-lg text-gold uppercase mb-1">
              {title}
            </h3>
          )}
          {description && (
            <p className="font-cormorant text-ivory/90 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Sacred flame particles for mystical effect
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
    aria-hidden="true"
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

// Define the journey facets data with improved media paths
const journeyFacets: JourneyFacet[] = [
  {
    id: 'prophet',
    title: 'The Prophet',
    subtitle: 'Divine Purpose',
    description:
      "From an early age, Paul has carried the flame of divine purpose. His connection to higher realms of consciousness allows him to channel wisdom that transcends conventional understanding, merging ancient spiritual insights with revolutionary visions for humanity's future.",
    quote:
      '"I was born with the flame of immortality. Not to conform, but to transform. Not to blend, but to transcend."',
    primaryMedia: {
      src: '/images/meditating-bg.png',
      alt: 'Paul in deep meditation, channeling divine wisdom',
      type: 'image',
      description:
        'Connecting with higher consciousness through dedicated meditation practice',
    },
    secondaryMedia: [
      {
        src: '/images/nature-free.webp',
        alt: 'Connection with nature',
        type: 'image',
        description: 'Finding divine harmony in natural surroundings',
      },
      {
        src: '/images/gym-meditating.webp',
        alt: 'Disciplined spiritual practice',
        type: 'image',
        description: 'Merging physical discipline with spiritual awakening',
      },
      {
        src: '/videos/beach-selfie.mp4',
        alt: 'Divine revelation journey',
        type: 'video',
        description:
          'Moments of clarity and vision at the threshold between elements',
      },
      {
        src: '/videos/gym-weights.mp4',
        alt: 'Physical temple cultivation',
        type: 'video',
        description:
          'The dedicated strengthening of the vessel for its divine purpose',
      },
    ],
    color: '#D4AF37',
    accentColor: '#9D0B0B',
    symbol: '☉',
  },
  {
    id: 'artist',
    title: 'The Artist',
    subtitle: 'Creative Expression',
    description:
      "Through modeling and fashion, Paul's artistic expression becomes a physical manifestation of divine creativity. The body becomes a canvas, and style becomes a language through which higher consciousness communicates. His work in front of the camera transcends mere modeling—it's visual prophecy.",
    quote:
      '"The body becomes the canvas where human creativity meets divine expression. My art moves beyond aesthetics to become divine transmission."',
    primaryMedia: {
      src: '/images/modelling-1.webp',
      alt: 'Divine creative expression through modeling',
      type: 'image',
      description: 'The vessel as a vehicle for artistic transcendence',
    },
    secondaryMedia: [
      {
        src: '/images/melbourne-fashion-festival.webp',
        alt: 'Fashion as prophecy',
        type: 'image',
        description: 'Runway moments that transcend conventional fashion',
      },
      {
        src: '/images/modelling-2.webp',
        alt: 'The vessel as creative canvas',
        type: 'image',
        description: 'Form and spirit united in creative expression',
      },
      {
        src: '/videos/modeling.mp4',
        alt: 'Movement as divine expression',
        type: 'video',
        description: 'The fluidity of divine creativity captured in motion',
      },
      {
        src: '/videos/modelling-catwalk.mp4',
        alt: 'Fashion runway divine expression',
        type: 'video',
        description: 'Walking between worlds with purpose and presence',
      },
    ],
    color: '#9D0B0B',
    accentColor: '#D4AF37',
    symbol: '♰',
  },
  {
    id: 'warrior',
    title: 'The Warrior',
    subtitle: 'Strength & Discipline',
    description:
      'The physical temple requires disciplined cultivation. Through rigorous training, Paul forges the strength needed to carry divine purpose in a material world. This warrior aspect represents the fierce commitment to transform not just consciousness, but the physical vessel that houses it.',
    quote:
      '"The rebellious youth forges discipline; the vessel strengthens for its purpose. Divine will requires human determination."',
    primaryMedia: {
      src: '/images/gym-selfie.webp',
      alt: "The warrior's physical discipline",
      type: 'image',
      position: 'top',
      description: 'Forging the physical vessel through dedicated training',
    },
    secondaryMedia: [
      {
        src: '/images/basketball-fashion.webp',
        alt: 'Athletic expression',
        type: 'image',
        description: 'Merging warrior discipline with artistic expression',
      },
      {
        src: '/images/knockout-training.webp',
        alt: 'Warrior training',
        type: 'image',
        description: 'Combat training as spiritual practice',
      },
      {
        src: '/videos/gym-weights.mp4',
        alt: 'Physical temple cultivation',
        type: 'video',
        description:
          'The dedicated strengthening of the vessel for its divine purpose',
      },
      {
        src: '/videos/gym-walk.mp4',
        alt: "Warrior's path",
        type: 'video',
        description: 'Walking the path of physical mastery with purpose',
      },
    ],
    color: '#D4AF37',
    accentColor: '#9D0B0B',
    symbol: '⚔️',
  },
  {
    id: 'reformer',
    title: 'The Reformer',
    subtitle: 'Luxury & Vision',
    description:
      'Transcending traditional spiritual aesthetics, Paul embraces both divine purpose and worldly experience. Luxury becomes not an end but a vehicle—a practical means to extend influence and create platforms for transformation. The reformer understands that to change systems, one must master them first.',
    quote:
      '"I navigate between earth and sky, embracing both luxury and purpose. The human enjoys worldly heights while the prophet fulfills a higher calling."',
    primaryMedia: {
      src: '/images/dubai-pic.webp',
      alt: 'Divine purpose meets worldly influence',
      type: 'image',
      description: 'Ascending to influential heights to spread divine vision',
    },
    secondaryMedia: [
      {
        src: '/images/ferarri-night.webp',
        alt: 'Luxury as divine vessel',
        type: 'image',
        description: 'Worldly excellence as a vehicle for higher purpose',
      },
      {
        src: '/images/burji-pic.webp',
        alt: 'Ascending between worlds',
        type: 'image',
        description: 'Rising above conventional limitations',
      },
      {
        src: '/videos/burj-khalifa.mp4',
        alt: 'The Eternal Flame Awakens',
        type: 'video',
        description: 'Vision from the heights of human achievement',
      },
      {
        src: '/videos/balenciaga-ferrari.mp4',
        alt: 'Luxury with Purpose',
        type: 'video',
        description: 'Material excellence as a vessel for divine mission',
      },
    ],
    color: '#9D0B0B',
    accentColor: '#D4AF37',
    symbol: '🔥',
  },
  {
    id: 'human',
    title: 'The Human',
    subtitle: 'Connection & Authenticity',
    description:
      "At his core, Paul remains deeply human—finding joy in simple connections, friendships, and authentic moments. This aspect reminds us that divinity doesn't separate us from humanity but deepens our experience of it. Even prophets laugh, love, and live in the beautiful mundane.",
    quote:
      '"To be divine is not to abandon humanity, but to celebrate and elevate it. The most profound truths are found in authentic human connection."',
    primaryMedia: {
      src: '/images/river-group.webp',
      alt: 'Authentic human connections',
      type: 'image',
      description: 'Shared moments of genuine connection and joy',
    },
    secondaryMedia: [
      {
        src: '/images/good-selfie.webp',
        alt: 'The human behind the prophet',
        type: 'image',
        description: 'Authentic moments of self-expression',
      },
      {
        src: '/images/bros.webp',
        alt: 'Friendship as spiritual practice',
        type: 'image',
        description: 'Brotherhood and connection as sacred bonds',
      },
      {
        src: '/videos/be-nice.mp4',
        alt: 'Kindness Revolution',
        type: 'video',
        description: 'Spreading humanity through simple authenticity',
      },
      {
        src: '/videos/fam-selfie-mindset.mp4',
        alt: 'Family Connection',
        type: 'video',
        description: 'Building authentic bonds that transcend the ordinary',
      },
    ],
    color: '#D4AF37',
    accentColor: '#9D0B0B',
    symbol: '♥',
  },
];

export default function DivineJourneySection() {
  const [activeFacet, setActiveFacet] = useState<number>(0);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<{
    src: string;
    title?: string;
    description?: string;
  } | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Set mounted state for client-side animations
  useEffect(() => {
    setMounted(true);

    // Keyboard navigation for facets
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveFacet((prev) =>
          prev < journeyFacets.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveFacet((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle media click
  const handleMediaClick = useCallback((media: JourneyMedia) => {
    if (media.type === 'video') {
      setCurrentVideo({
        src: media.src,
        title: media.alt,
        description: media.description,
      });
      setVideoPlaying(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }, []);

  // Close video player
  const closeVideoPlayer = useCallback(() => {
    setVideoPlaying(false);
    setCurrentVideo(null);
    document.body.style.overflow = ''; // Restore scrolling
  }, []);

  // Handle facet change
  const handleFacetChange = useCallback((index: number) => {
    setActiveFacet(index);
  }, []);

  // Get current facet
  const currentFacet = journeyFacets[activeFacet];

  // Preload images for better performance
  useEffect(() => {
    if (mounted) {
      // Preload the next facet's images if not the last facet
      if (activeFacet < journeyFacets.length - 1) {
        const nextFacet = journeyFacets[activeFacet + 1];
        const imagesToPreload = [
          nextFacet.primaryMedia.src,
          ...nextFacet.secondaryMedia
            .filter((media) => media.type === 'image')
            .slice(0, 2)
            .map((media) => media.src),
        ];

        imagesToPreload.forEach((src) => {
          // Create image element for preloading
          const img = document.createElement('img');
          img.src = src;
        });
      }
    }
  }, [activeFacet, mounted]);

  return (
    <section
      id="divine-journey"
      ref={sectionRef}
      className="relative min-h-screen bg-charcoal text-ivory overflow-hidden py-16 md:py-24"
      aria-labelledby="journey-title"
    >
      {/* Mystical Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black"></div>

        {/* Sacred geometry background */}
        {mounted && (
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{ y: backgroundY }}
            aria-hidden="true"
          >
            {/* Subtle sacred patterns */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>

            {/* Subtle flame particles */}
            {[...Array(6)].map((_, i) => (
              <FlameParticle
                key={i}
                delay={i * 0.5}
                duration={12 + Math.random() * 8}
                size={8 + Math.random() * 15}
                left={`${5 + Math.random() * 90}%`}
                opacity={0.15 + Math.random() * 0.15}
              />
            ))}

            {/* Celestial accents */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
                }}
              ></div>

              <div
                className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(157,11,11,0.15) 0%, transparent 70%)',
                }}
              ></div>
            </div>

            {/* Sacred subtle lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
              <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Title with Parallax */}
        <motion.div
          className="text-center mb-16"
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            id="journey-title"
            className="font-cinzel text-4xl md:text-5xl tracking-wider text-gold mb-4"
          >
            THE DIVINE JOURNEY
          </h2>

          {/* Decorative element */}
          <div
            className="relative h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
            aria-hidden="true"
          >
            {mounted && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-full bg-crimson/30 blur-sm" />
              </motion.div>
            )}
          </div>

          <p className="max-w-2xl mx-auto text-ivory/80 font-cormorant-upright italic text-lg md:text-xl">
            <span className="text-gold">Divine purpose</span> manifested through{' '}
            <span className="text-crimson">human expression</span>
          </p>
        </motion.div>

        {/* Facet Navigation - Enhanced Accessibility */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto overflow-x-auto no-scrollbar pb-4">
            {/* Journey timeline */}
            <div
              className="relative flex justify-between items-center py-3 min-w-max px-4"
              role="tablist"
              aria-label="Divine journey facets"
            >
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold/30 -translate-y-1/2"></div>

              {/* Facet navigation */}
              {journeyFacets.map((facet, index) => (
                <motion.button
                  key={facet.id}
                  className="relative z-10 flex flex-col items-center mx-4"
                  onClick={() => handleFacetChange(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  role="tab"
                  id={`tab-${facet.id}`}
                  aria-selected={activeFacet === index}
                  aria-controls={`panel-${facet.id}`}
                  tabIndex={activeFacet === index ? 0 : -1}
                >
                  {/* Facet indicator */}
                  <div className="relative mb-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                        activeFacet === index
                          ? 'bg-gold border-gold'
                          : 'bg-transparent border-gold/50'
                      }`}
                    ></div>

                    {/* Active glow effect */}
                    {activeFacet === index && mounted && (
                      <motion.div
                        className="absolute -inset-2 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 0 rgba(212,175,55,0)',
                            '0 0 8px rgba(212,175,55,0.6)',
                            '0 0 0 rgba(212,175,55,0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Facet title */}
                  <span
                    className={`font-cinzel text-xs md:text-sm whitespace-nowrap transition-colors duration-300 ${
                      activeFacet === index ? 'text-gold' : 'text-gold/60'
                    }`}
                  >
                    {facet.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Facet Content with Tab Panel Structure */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`facet-${activeFacet}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12"
              role="tabpanel"
              id={`panel-${currentFacet.id}`}
              aria-labelledby={`tab-${currentFacet.id}`}
            >
              {/* Left Column - Content & Media */}
              <div className="space-y-8">
                {/* Section Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <h3
                    className="font-cinzel text-2xl md:text-3xl uppercase tracking-wider mb-4"
                    style={{ color: currentFacet.color }}
                  >
                    {currentFacet.subtitle}
                  </h3>
                  <div
                    className="w-16 h-0.5 mb-6"
                    style={{ backgroundColor: currentFacet.color }}
                    aria-hidden="true"
                  ></div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div
                    className="prophetic-quote relative pl-4 border-l-2 mb-6"
                    style={{ borderColor: currentFacet.color }}
                  >
                    <p className="font-cormorant-upright text-lg md:text-xl italic text-ivory/90">
                      {currentFacet.quote}
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mb-8"
                >
                  <p className="text-ivory/80 leading-relaxed text-lg">
                    {currentFacet.description}
                  </p>
                </motion.div>

                {/* Media Items Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 h-[400px]"
                >
                  {/* Two portrait images */}
                  {currentFacet.secondaryMedia
                    .filter((media) => media.type === 'image')
                    .slice(0, 2)
                    .map((media, i) => (
                      <PortraitImage
                        key={`${currentFacet.id}-image-${i}`}
                        src={media.src}
                        alt={media.alt}
                        title={media.alt.toUpperCase()}
                        description={media.description}
                        index={i}
                      />
                    ))}
                </motion.div>
              </div>

              {/* Right Column - Feature Media */}
              <div className="flex flex-col space-y-4">
                {/* Main portrait image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="flex-grow h-[400px]"
                >
                  <PortraitImage
                    src={currentFacet.primaryMedia.src}
                    alt={currentFacet.primaryMedia.alt}
                    title="DIVINE PURPOSE MEETS WORLDLY INFLUENCE"
                    description="Ascending to influential heights to spread divine vision"
                    priority={true}
                    index={0}
                  />
                </motion.div>

                {/* Two autoplay videos */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4 h-[300px]"
                >
                  {currentFacet.secondaryMedia
                    .filter((media) => media.type === 'video')
                    .slice(0, 2)
                    .map((media, i) => (
                      <VideoBackground
                        key={`${currentFacet.id}-video-${i}`}
                        src={media.src}
                        alt={media.alt.toUpperCase()}
                        description={media.description}
                        onClick={() => handleMediaClick(media)}
                      />
                    ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center">
          <motion.button
            className={`flex items-center gap-2 px-4 py-2 font-cinzel text-sm transition-colors duration-300 ${
              activeFacet > 0
                ? 'text-gold/80 hover:text-gold'
                : 'text-gold/30 cursor-not-allowed'
            }`}
            onClick={() =>
              activeFacet > 0 && handleFacetChange(activeFacet - 1)
            }
            disabled={activeFacet === 0}
            whileHover={activeFacet > 0 ? { x: -5 } : {}}
            transition={{ duration: 0.2 }}
            aria-label={
              activeFacet > 0
                ? `Previous facet: ${journeyFacets[activeFacet - 1].title}`
                : 'Beginning of journey'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>
              {activeFacet > 0
                ? journeyFacets[activeFacet - 1].title
                : 'Beginning'}
            </span>
          </motion.button>

          <motion.button
            className={`flex items-center gap-2 px-4 py-2 font-cinzel text-sm transition-colors duration-300 ${
              activeFacet < journeyFacets.length - 1
                ? 'text-gold/80 hover:text-gold'
                : 'text-gold/30 cursor-not-allowed'
            }`}
            onClick={() =>
              activeFacet < journeyFacets.length - 1 &&
              handleFacetChange(activeFacet + 1)
            }
            disabled={activeFacet === journeyFacets.length - 1}
            whileHover={activeFacet < journeyFacets.length - 1 ? { x: 5 } : {}}
            transition={{ duration: 0.2 }}
            aria-label={
              activeFacet < journeyFacets.length - 1
                ? `Next facet: ${journeyFacets[activeFacet + 1].title}`
                : 'End of journey'
            }
          >
            <span>
              {activeFacet < journeyFacets.length - 1
                ? journeyFacets[activeFacet + 1].title
                : 'Completion'}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Video Player */}
      <VideoPlayer
        video={currentVideo}
        isOpen={videoPlaying}
        onClose={closeVideoPlayer}
      />
    </section>
  );
}
