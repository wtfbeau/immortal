'use client';

import { useState, useRef, useEffect } from 'react';
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

// Video Player component for enhanced media playback
interface VideoPlayerProps {
  video: {
    src: string;
    title?: string;
    description?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

// Enhanced video player component
const VideoPlayer: React.FC<VideoPlayerProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Handle video playback and keyboard controls
    if (isOpen && videoRef.current && video) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, video]);

  if (!video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
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
          className="w-full h-full object-contain bg-black"
          src={video.src}
          controls
          controlsList="nodownload"
          playsInline
        />

        {/* Video Title Overlay */}
        {(video.title || video.description) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
            {video.title && (
              <h3 className="font-cinzel text-xl text-gold mb-2">
                {video.title}
              </h3>
            )}
            {video.description && (
              <p className="font-cormorant text-ivory/80 text-base">
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
  );
};

// Enhanced thumbnail component with interactive elements
interface MediaThumbnailProps {
  media: JourneyMedia;
  onClick: (media: JourneyMedia) => void;
  priority?: boolean;
  featured?: boolean;
  className?: string;
}

const MediaThumbnail: React.FC<MediaThumbnailProps> = ({
  media,
  onClick,
  priority = false,
  featured = false,
  className = '',
}) => {
  const [, setIsHovered] = useState(false);
  const isVideo = media.type === 'video';

  return (
    <motion.div
      className={`relative overflow-hidden group cursor-pointer rounded-sm sacred-glow ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      } ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(media)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent z-10"></div>

      {/* Media Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={media.src}
          alt={media.alt}
          width={800}
          height={450}
          className={`w-full h-full object-cover ${
            media.position || ''
          } transition-transform duration-700 ease-in-out group-hover:scale-105`}
          priority={priority}
        />
      </div>

      {/* Play Button for videos */}
      {isVideo && (
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
      )}

      {/* Media Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="overflow-hidden">
          <h4 className="font-cinzel text-gold text-lg md:text-xl mb-1 group-hover:text-gold/100 transition-colors duration-300">
            {media.alt}
          </h4>
        </div>
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
    },
    secondaryMedia: [
      {
        src: '/images/nature-free.webp',
        alt: 'Connection with nature',
        type: 'image',
      },
      {
        src: '/images/gym-meditating.webp',
        alt: 'Disciplined spiritual practice',
        type: 'image',
      },
      {
        src: '/videos/beach-selfie.mp4',
        alt: 'Divine revelation journey',
        type: 'video',
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
    },
    secondaryMedia: [
      {
        src: '/images/melbourne-fashion-festival.webp',
        alt: 'Fashion as prophecy',
        type: 'image',
      },
      {
        src: '/images/modelling-2.webp',
        alt: 'The vessel as creative canvas',
        type: 'image',
      },
      {
        src: '/videos/modeling.mp4',
        alt: 'Movement as divine expression',
        type: 'video',
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
    },
    secondaryMedia: [
      {
        src: '/images/basketball-fashion.webp',
        alt: 'Athletic expression',
        type: 'image',
      },
      {
        src: '/images/knockout-training.webp',
        alt: 'Warrior training',
        type: 'image',
      },
      {
        src: '/videos/gym-weights.mp4',
        alt: 'Physical temple cultivation',
        type: 'video',
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
    },
    secondaryMedia: [
      {
        src: '/images/ferarri-night.webp',
        alt: 'Luxury as divine vessel',
        type: 'image',
      },
      {
        src: '/images/burji-pic.webp',
        alt: 'Ascending between worlds',
        type: 'image',
      },
      {
        src: '/videos/burj-khalifa.mp4',
        alt: 'The Eternal Flame Awakens',
        type: 'video',
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
    },
    secondaryMedia: [
      {
        src: '/images/good-selfie.webp',
        alt: 'The human behind the prophet',
        type: 'image',
      },
      {
        src: '/images/bros.webp',
        alt: 'Friendship as spiritual practice',
        type: 'image',
      },
      {
        src: '/videos/be-nice.mp4',
        alt: 'Kindness Revolution',
        type: 'video',
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

    // Keyboard navigation
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
  const handleMediaClick = (media: JourneyMedia) => {
    if (media.type === 'video') {
      setCurrentVideo({
        src: media.src,
        title: media.alt,
      });
      setVideoPlaying(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  };

  // Close video player
  const closeVideoPlayer = () => {
    setVideoPlaying(false);
    setCurrentVideo(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Get current facet
  const currentFacet = journeyFacets[activeFacet];

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

        {/* Facet Navigation */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            {/* Journey timeline */}
            <div className="relative flex justify-between items-center py-3">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold/30 -translate-y-1/2"></div>

              {/* Facet navigation */}
              {journeyFacets.map((facet, index) => (
                <motion.button
                  key={facet.id}
                  className="relative z-10 flex flex-col items-center"
                  onClick={() => setActiveFacet(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  aria-pressed={activeFacet === index}
                  aria-label={`View ${facet.title} facet`}
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

        {/* Facet Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`facet-${activeFacet}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Left Column - Content */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mb-3"
                >
                  <h3
                    className="font-cinzel text-xl md:text-2xl lg:text-3xl"
                    style={{ color: currentFacet.color }}
                  >
                    {currentFacet.subtitle}
                  </h3>
                  <div
                    className="w-16 h-px mt-2"
                    style={{ backgroundColor: currentFacet.color }}
                  ></div>
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mb-6"
                >
                  <div
                    className="prophetic-quote relative pl-4 border-l-2 mb-3 md:mb-4"
                    style={{ borderColor: currentFacet.color }}
                  >
                    <p className="font-cormorant-upright text-base md:text-lg italic text-ivory/90">
                      {currentFacet.quote}
                    </p>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mb-8"
                >
                  <p className="text-ivory/80 leading-relaxed">
                    {currentFacet.description}
                  </p>
                </motion.div>

                {/* Gallery Grid - Enhanced with MediaThumbnail component */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {currentFacet.secondaryMedia.map((media, i) => (
                    <MediaThumbnail
                      key={`${currentFacet.id}-media-${i}`}
                      media={media}
                      onClick={handleMediaClick}
                      featured={i === 2}
                      className={i === 2 ? 'col-span-2' : ''}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Feature Image */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="sticky top-24">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                  >
                    {/* Primary Media - Enhanced with interactivity */}
                    <MediaThumbnail
                      media={currentFacet.primaryMedia}
                      onClick={handleMediaClick}
                      priority={true}
                      featured={true}
                    />

                    {/* Facet Symbol */}
                    <div
                      className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-charcoal border border-gold/40 flex items-center justify-center text-2xl"
                      aria-hidden="true"
                    >
                      <span>{currentFacet.symbol}</span>
                    </div>
                  </motion.div>
                </div>
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
            onClick={() => activeFacet > 0 && setActiveFacet(activeFacet - 1)}
            disabled={activeFacet === 0}
            whileHover={activeFacet > 0 ? { x: -5 } : {}}
            transition={{ duration: 0.2 }}
            aria-label="Previous facet"
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
              setActiveFacet(activeFacet + 1)
            }
            disabled={activeFacet === journeyFacets.length - 1}
            whileHover={activeFacet < journeyFacets.length - 1 ? { x: 5 } : {}}
            transition={{ duration: 0.2 }}
            aria-label="Next facet"
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
