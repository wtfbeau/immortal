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

// Define TypeScript interfaces
interface ChapterMedia {
  type: 'image' | 'video';
  src: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
  priority?: boolean;
}

interface ChapterTheme {
  primaryColor: string;
  accentColor: string;
  motif: 'flame' | 'vessel' | 'mountain' | 'fire' | 'water' | 'human';
  symbolPosition: 'left' | 'right';
}

interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  media: {
    primary: ChapterMedia;
    secondary: ChapterMedia;
    accent: string;
  };
  theme: ChapterTheme;
}

interface SacredSymbolProps {
  motif: 'flame' | 'vessel' | 'mountain' | 'fire' | 'water' | 'human';
  position: 'left' | 'right';
  color: string;
  isActive: boolean;
}

interface VideoRevelationProps {
  src: string;
  poster: string;
  isPlaying: boolean;
  onClose: () => void;
}

interface DivineArtifactProps {
  media: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    poster?: string;
    priority?: boolean;
  };
  isVideo: boolean;
  onVideoClick?: (src: string, poster: string) => void;
  color: string;
  transform?: Record<string, unknown>;
}

interface DivineLineProps {
  orientation?: 'vertical' | 'horizontal';
  position: string;
  color: string;
  length?: number;
  delay?: number;
}

interface VideoState {
  src: string;
  poster: string;
}

// The Divine Chronicle - Story Chapters
const divineSaga: Chapter[] = [
  {
    id: 'genesis',
    title: 'Genesis',
    subtitle: 'Divine & Human Awakening',
    quote:
      '"I emerged from silence, carrying both human passion and divine insight."',
    description:
      'The immortal flame awakened in Auckland, blending youthful rebellion with sacred purpose. A mortal vessel chosen to carry transcendent visions.',
    media: {
      primary: {
        type: 'image',
        src: '/images/meditating-bg.png',
        alt: 'Paul in meditation',
        width: 1200,
        height: 1200,
        priority: true,
      },
      secondary: {
        type: 'video',
        src: '/videos/beach-selfie.mp4',
        poster: '/images/nature-free.webp',
        alt: 'Connection with elemental forces',
      },
      accent: '/images/gym-meditating.webp',
    },
    theme: {
      primaryColor: '#D4AF37',
      accentColor: '#9D0B0B',
      motif: 'flame',
      symbolPosition: 'right',
    },
  },
  {
    id: 'revelation',
    title: 'Revelation',
    subtitle: 'Form & Expression',
    quote:
      '"The body becomes the canvas where human creativity meets divine expression."',
    description:
      'Through fashion and art, the rebellious spirit channels higher purpose. Youth and divinity intertwined in visual storytelling that transcends convention.',
    media: {
      primary: {
        type: 'video',
        src: '/videos/modeling.mp4',
        poster: '/images/modelling-1.webp',
        alt: 'Creative expression through modeling',
      },
      secondary: {
        type: 'image',
        src: '/images/modelling-2.webp',
        alt: 'Artistic self-expression',
        width: 800,
        height: 1000,
      },
      accent: '/images/melbourne-fashion-festival.webp',
    },
    theme: {
      primaryColor: '#9D0B0B',
      accentColor: '#D4AF37',
      motif: 'vessel',
      symbolPosition: 'left',
    },
  },
  {
    id: 'ascension',
    title: 'Ascension',
    subtitle: 'Rising Through Worlds',
    quote:
      '"I navigate between earth and sky, embracing both luxury and purpose."',
    description:
      'Ascending beyond limitations while remaining grounded in authentic experience. The human enjoying worldly heights while the prophet fulfills higher calling.',
    media: {
      primary: {
        type: 'image',
        src: '/images/dubai-pic.webp',
        alt: 'Global influence',
        width: 800,
        height: 1000,
      },
      secondary: {
        type: 'video',
        src: '/videos/burj-khalifa.mp4',
        poster: '/images/burji-pic.webp',
        alt: 'Heights of consciousness',
      },
      accent: '/images/ferarri-night.webp',
    },
    theme: {
      primaryColor: '#D4AF37',
      accentColor: '#9D0B0B',
      motif: 'mountain',
      symbolPosition: 'right',
    },
  },
  {
    id: 'crucible',
    title: 'Crucible',
    subtitle: 'Strength & Discipline',
    quote:
      '"The rebellious youth forges discipline; the vessel strengthens for its purpose."',
    description:
      'Human determination meets divine calling. Through rigorous training of body and mind, youthful energy transforms into focused power with higher purpose.',
    media: {
      primary: {
        type: 'video',
        src: '/videos/gym-weights.mp4',
        poster: '/images/knockout-training.webp',
        alt: 'Physical discipline',
      },
      secondary: {
        type: 'image',
        src: '/images/gym-selfie.webp',
        alt: 'Personal strength',
        width: 800,
        height: 1000,
      },
      accent: '/images/basketball-fashion.webp',
    },
    theme: {
      primaryColor: '#9D0B0B',
      accentColor: '#D4AF37',
      motif: 'fire',
      symbolPosition: 'left',
    },
  },
  {
    id: 'communion',
    title: 'Communion',
    subtitle: 'Connection & Humanity',
    quote:
      '"To be divine is not to abandon humanity, but to celebrate and elevate it."',
    description:
      'The most sacred journey begins with authentic human connection. Through friendship, joy, and genuine emotion, the prophet stays anchored to the world he seeks to transform.',
    media: {
      primary: {
        type: 'image',
        src: '/images/river-group.webp',
        alt: 'Authentic connections',
        width: 800,
        height: 1000,
      },
      secondary: {
        type: 'video',
        src: '/videos/be-nice.mp4',
        poster: '/images/beautiful-doggy.webp',
        alt: 'Simple human connections',
      },
      accent: '/images/good-selfie.webp',
    },
    theme: {
      primaryColor: '#D4AF37',
      accentColor: '#9D0B0B',
      motif: 'human',
      symbolPosition: 'right',
    },
  },
];

// Sacred symbols for each motif
const SacredSymbol: React.FC<SacredSymbolProps> = ({
  motif,
  position,
  color,
  isActive,
}) => {
  // Different symbols based on the chapter motif
  const symbolPaths: Record<string, React.ReactNode> = {
    flame: (
      <path
        d="M25,5 Q40,25 25,45 Q10,25 25,5 Z"
        fill={color}
        fillOpacity={0.9}
      />
    ),
    vessel: (
      <path
        d="M15,5 L35,5 L40,25 L35,45 L15,45 L10,25 Z"
        fill={color}
        fillOpacity={0.9}
      />
    ),
    mountain: <path d="M5,45 L25,5 L45,45 Z" fill={color} fillOpacity={0.9} />,
    fire: (
      <>
        <path
          d="M25,5 Q40,20 25,30 Q10,20 25,5 Z"
          fill={color}
          fillOpacity={0.9}
        />
        <path
          d="M25,20 Q35,30 25,45 Q15,30 25,20 Z"
          fill={color}
          fillOpacity={0.9}
        />
      </>
    ),
    water: (
      <path
        d="M5,25 Q15,5 25,25 Q35,5 45,25 Q35,45 25,25 Q15,45 5,25 Z"
        fill={color}
        fillOpacity={0.9}
      />
    ),
    human: (
      <>
        <circle cx="25" cy="15" r="10" fill={color} fillOpacity={0.9} />
        <path
          d="M15,30 L35,30 L30,45 L20,45 Z"
          fill={color}
          fillOpacity={0.9}
        />
        <line x1="25" y1="25" x2="25" y2="35" stroke={color} strokeWidth="2" />
        <line x1="15" y1="35" x2="35" y2="35" stroke={color} strokeWidth="2" />
      </>
    ),
  };

  return (
    <div
      className={`absolute top-0 bottom-0 ${
        position === 'left' ? 'left-0' : 'right-0'
      } pointer-events-none z-10`}
    >
      <motion.div
        className="relative h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          className={`absolute ${
            position === 'left' ? '-left-6' : '-right-6'
          } opacity-60`}
          initial={{ y: 100 }}
          animate={{
            y: [100, 120, 100],
            rotate: position === 'left' ? [0, -5, 0] : [0, 5, 0],
          }}
          transition={{
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {symbolPaths[motif]}
        </motion.svg>

        {/* Additional decorative elements based on motif */}
        {['flame', 'fire'].includes(motif) &&
          Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-gold/80"
              style={{
                left:
                  position === 'left'
                    ? `-${10 + Math.random() * 10}px`
                    : 'auto',
                right:
                  position === 'right'
                    ? `-${10 + Math.random() * 10}px`
                    : 'auto',
              }}
              initial={{ y: 200 + i * 100 }}
              animate={{
                y: [200 + i * 100, 0 - i * 50],
                opacity: [0, 0.8, 0],
                x: position === 'left' ? [0, -10 - i * 5] : [0, 10 + i * 5],
              }}
              transition={{
                duration: 7 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: 'easeOut',
              }}
            />
          ))}

        {['water', 'human'].includes(motif) &&
          Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`water-${i}`}
              className="absolute w-10 h-[1px] bg-gold/40"
              style={{
                left: position === 'left' ? `-${15 + i * 5}px` : 'auto',
                right: position === 'right' ? `-${15 + i * 5}px` : 'auto',
              }}
              initial={{ y: 200 + i * 150 }}
              animate={{
                y: [200 + i * 150, 400 + i * 150],
                opacity: [0, 0.3, 0],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 10 + i * 3,
                repeat: Infinity,
                delay: i * 3,
                ease: 'easeInOut',
              }}
            />
          ))}
      </motion.div>
    </div>
  );
};

// Video Revelation Component
const VideoRevelation: React.FC<VideoRevelationProps> = ({
  src,
  poster,
  isPlaying,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.error('Video playback failed:', error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mystical backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md">
        {/* Sacred geometry background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="500"
              cy="500"
              r="300"
              stroke="#D4AF37"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="500"
              cy="500"
              r="400"
              stroke="#D4AF37"
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx="500"
              cy="500"
              r="200"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M500,100 L900,700 L100,700 Z"
              stroke="#D4AF37"
              strokeWidth="0.5"
              fill="none"
            />
            <path
              d="M500,900 L100,300 L900,300 Z"
              stroke="#D4AF37"
              strokeWidth="0.5"
              fill="none"
            />
            <line
              x1="100"
              y1="500"
              x2="900"
              y2="500"
              stroke="#D4AF37"
              strokeWidth="0.3"
            />
            <line
              x1="500"
              y1="100"
              x2="500"
              y2="900"
              stroke="#D4AF37"
              strokeWidth="0.3"
            />
          </svg>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto aspect-video z-10">
        {/* Ancient manuscript frame */}
        <div className="absolute -inset-4 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-transparent to-gold/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gold/30 via-transparent to-gold/30"></div>
          <div className="absolute inset-[3px] border border-gold/50"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold"></div>
        </div>

        {/* Video player */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black"
          src={src}
          poster={poster}
          controls
          playsInline
        />

        {/* Close revelation button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-12 -right-12 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-charcoal text-gold border border-gold/50 hover:text-ivory hover:bg-crimson/70 transition-colors duration-300"
          aria-label="Close divine revelation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

// Media Artifact Component
const DivineArtifact: React.FC<DivineArtifactProps> = ({
  media,
  isVideo,
  onVideoClick,
  color,
  transform = {},
}) => {
  const [hovered, setHovered] = useState(false);
  const artifactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(artifactRef, { once: false, amount: 0.3 });

  // Handle video click with fallback
  const handleVideoClick = () => {
    if (isVideo && onVideoClick && media.poster) {
      onVideoClick(media.src, media.poster);
    }
  };

  return (
    <motion.div
      ref={artifactRef}
      className={`relative overflow-hidden ${isVideo ? 'cursor-pointer' : ''}`}
      style={{ transform: String(transform) }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={isVideo ? handleVideoClick : undefined}
    >
      {/* Mystical glow effect on hover */}
      <motion.div
        className="absolute -inset-4 z-0 opacity-0 rounded-full blur-xl"
        animate={{
          opacity: hovered ? 0.5 : 0,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />

      {/* Sacred frame */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute inset-0 border border-gold/40 opacity-70"></div>
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold"></div>
      </motion.div>

      {/* Image or Video thumbnail */}
      <div className="relative overflow-hidden">
        <Image
          src={isVideo ? media.poster || '' : media.src}
          alt={media.alt}
          width={media.width || 800}
          height={media.height || 1000}
          className="w-full h-full object-cover transition-transform duration-1000"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          priority={media.priority || false}
        />

        {/* Video play indicator */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-black/30 text-gold border border-gold/50"
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: hovered ? 1 : 0.7,
                scale: hovered ? [1, 1.1, 1] : 1,
              }}
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 1.5, repeat: Infinity },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Divine Parallel Lines
const DivineLine: React.FC<DivineLineProps> = ({
  orientation = 'vertical',
  position,
  color,
  length = 100,
  delay = 0,
}) => (
  <motion.div
    className={`absolute pointer-events-none ${
      orientation === 'vertical' ? 'w-px' : 'h-px'
    }`}
    style={{
      background: `linear-gradient(${
        orientation === 'vertical' ? 'to bottom' : 'to right'
      }, transparent, ${color}, transparent)`,
      left: orientation === 'vertical' ? position : 0,
      top: orientation === 'horizontal' ? position : 0,
      height: orientation === 'vertical' ? `${length}%` : undefined,
      width: orientation === 'horizontal' ? `${length}%` : undefined,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.7, 0], scale: 1 }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: 5,
    }}
  />
);

// Main Divine Chronicle Component
export default function DivineChronicleSection() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoState | null>(null);
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Set current chapter
  const handleSetChapter = (index: number) => {
    if (index >= 0 && index < divineSaga.length) {
      setActiveChapter(index);
    }
  };

  // Handle video reveal
  const handleVideoReveal = (src: string, poster: string) => {
    setSelectedVideo({ src, poster });
    setVideoPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  // Close video revelation
  const closeVideoRevelation = () => {
    setVideoPlaying(false);
    setSelectedVideo(null);
    document.body.style.overflow = '';
  };

  // Get current chapter data
  const currentChapter = divineSaga[activeChapter];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleSetChapter(activeChapter + 1);
      } else if (e.key === 'ArrowLeft') {
        handleSetChapter(activeChapter - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setMounted(true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeChapter]);

  return (
    <section
      id="divine-chronicle"
      ref={sectionRef}
      className="relative min-h-[90vh] bg-black overflow-hidden py-10 md:py-12"
      aria-label="The Divine Chronicle"
    >
      {/* Mystical background with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Sacred geometry background */}
        <motion.div className="absolute inset-0 opacity-10" style={{ y: bgY }}>
          {mounted && (
            <>
              {/* Golden radial gradient */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Sacred geometry lines - reduced for performance */}
              <DivineLine
                orientation="vertical"
                position="20%"
                color="#D4AF37"
                length={60}
                delay={0}
              />
              <DivineLine
                orientation="vertical"
                position="80%"
                color="#D4AF37"
                length={60}
                delay={1.5}
              />
              <DivineLine
                orientation="horizontal"
                position="30%"
                color="#9D0B0B"
                length={40}
                delay={1}
              />
              <DivineLine
                orientation="horizontal"
                position="70%"
                color="#9D0B0B"
                length={40}
                delay={2.5}
              />

              {/* Subtle animated celestial elements - reduced count for performance */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`celestial-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: 2 + Math.random() * 4,
                    height: 2 + Math.random() * 4,
                    backgroundColor: i % 2 === 0 ? '#D4AF37' : '#9D0B0B',
                    left: `${5 + Math.random() * 90}%`,
                    top: `${5 + Math.random() * 90}%`,
                    opacity: 0.3 + Math.random() * 0.3,
                    boxShadow:
                      i % 2 === 0
                        ? '0 0 8px rgba(212,175,55,0.8)'
                        : '0 0 8px rgba(157,11,11,0.8)',
                  }}
                  animate={{
                    opacity: [
                      0.3 + Math.random() * 0.3,
                      0.7 + Math.random() * 0.3,
                      0.3 + Math.random() * 0.3,
                    ],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </div>

      {/* Sacred Title with parallax - more compact */}
      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6 mb-6"
        style={{ y: titleY }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-gold mb-2 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The Divine Chronicle
          </motion.h2>

          <motion.div
            className="h-[2px] w-40 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-3"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-hidden="true"
          />

          <motion.p
            className="font-cormorant-upright text-lg md:text-xl text-ivory/90 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Where divine purpose meets human passion across realms
          </motion.p>
        </div>
      </motion.div>

      {/* Chapter Navigation - more compact */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 mb-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Sacred timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold/30 -translate-y-1/2"></div>

          {/* Chapter indicators with improved accessibility */}
          <div className="relative flex justify-between items-center py-3">
            {divineSaga.map((chapter, index) => (
              <motion.button
                key={chapter.id}
                className="relative z-10 flex flex-col items-center"
                onClick={() => handleSetChapter(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={activeChapter === index}
                aria-label={`View ${chapter.title} chapter`}
              >
                {/* Chapter circle */}
                <div className="relative mb-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      activeChapter === index
                        ? 'bg-gold border-gold'
                        : 'bg-transparent border-gold/50'
                    }`}
                  />

                  {/* Active glow effect */}
                  {activeChapter === index && (
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(212,175,55,0)',
                          '0 0 8px rgba(212,175,55,0.8)',
                          '0 0 0px rgba(212,175,55,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Chapter title with improved contrast */}
                <span
                  className={`font-cinzel text-xs md:text-sm whitespace-nowrap ${
                    activeChapter === index ? 'text-gold' : 'text-gold/60'
                  }`}
                >
                  {chapter.title}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Divine Chronicle Content - more compact layout */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`chapter-${activeChapter}`}
            className="relative max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sacred Symbol */}
            <SacredSymbol
              motif={currentChapter.theme.motif}
              position={currentChapter.theme.symbolPosition}
              color={currentChapter.theme.primaryColor}
              isActive={true}
            />

            {/* Chapter Content - more compact grid layout */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Left Column - Divine Text */}
              <div className="order-2 md:order-1 flex flex-col justify-center">
                {/* Chapter Subtitle */}
                <motion.h3
                  className="font-cinzel text-xl md:text-2xl lg:text-3xl text-gold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  {currentChapter.subtitle}
                </motion.h3>

                {/* Sacred Quote */}
                <motion.div
                  className="mb-3 md:mb-4 pl-4 border-l-2"
                  style={{ borderColor: currentChapter.theme.primaryColor }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <p className="font-cormorant-upright text-base md:text-lg italic text-ivory/90">
                    {currentChapter.quote}
                  </p>
                </motion.div>

                {/* Chapter Description */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <p className="font-cormorant text-sm md:text-base text-ivory/80 leading-relaxed">
                    {currentChapter.description}
                  </p>
                </motion.div>

                {/* Supporting Media - more compact */}
                <motion.div
                  className="mt-2 grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                >
                  {/* Secondary Media */}
                  <DivineArtifact
                    media={currentChapter.media.secondary}
                    isVideo={currentChapter.media.secondary.type === 'video'}
                    onVideoClick={handleVideoReveal}
                    color={currentChapter.theme.primaryColor}
                  />

                  {/* Accent Image */}
                  <DivineArtifact
                    media={{
                      src: currentChapter.media.accent,
                      alt: `${currentChapter.title} supporting revelation`,
                      width: 800,
                      height: 1000,
                    }}
                    isVideo={false}
                    color={currentChapter.theme.accentColor}
                  />
                </motion.div>
              </div>

              {/* Right Column - Featured Divine Revelation */}
              <div className="order-1 md:order-2">
                <div className="sticky top-20">
                  <DivineArtifact
                    media={currentChapter.media.primary}
                    isVideo={currentChapter.media.primary.type === 'video'}
                    onVideoClick={handleVideoReveal}
                    color={currentChapter.theme.primaryColor}
                  />
                </div>
              </div>
            </div>

            {/* Chapter Navigation Controls - more compact */}
            <div className="mt-6 md:mt-8 flex justify-between">
              <motion.button
                className={`flex items-center font-cinzel text-sm ${
                  activeChapter > 0
                    ? 'text-gold/90 hover:text-gold'
                    : 'text-gold/30 cursor-not-allowed'
                }`}
                onClick={() =>
                  activeChapter > 0 && handleSetChapter(activeChapter - 1)
                }
                disabled={activeChapter === 0}
                whileHover={activeChapter > 0 ? { x: -5 } : {}}
                transition={{ duration: 0.2 }}
                aria-label="Previous chapter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {activeChapter > 0
                  ? divineSaga[activeChapter - 1].title
                  : 'Beginning'}
              </motion.button>

              <motion.button
                className={`flex items-center font-cinzel text-sm ${
                  activeChapter < divineSaga.length - 1
                    ? 'text-gold/90 hover:text-gold'
                    : 'text-gold/30 cursor-not-allowed'
                }`}
                onClick={() =>
                  activeChapter < divineSaga.length - 1 &&
                  handleSetChapter(activeChapter + 1)
                }
                disabled={activeChapter === divineSaga.length - 1}
                whileHover={
                  activeChapter < divineSaga.length - 1 ? { x: 5 } : {}
                }
                transition={{ duration: 0.2 }}
                aria-label="Next chapter"
              >
                {activeChapter < divineSaga.length - 1
                  ? divineSaga[activeChapter + 1].title
                  : 'Culmination'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Revelation Modal with accessibility improvements */}
      <AnimatePresence>
        {videoPlaying && selectedVideo && (
          <VideoRevelation
            src={selectedVideo.src}
            poster={selectedVideo.poster}
            isPlaying={videoPlaying}
            onClose={closeVideoRevelation}
          />
        )}
      </AnimatePresence>

      {/* Sacred Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 w-full h-8"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          }}
        ></div>
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </div>
    </section>
  );
}
