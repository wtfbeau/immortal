'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Types for streaming platforms
type StreamingPlatform = {
  name: string;
  icon: string;
  link: string;
};

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(70);
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Set mounted state for client-side only animations
  useEffect(() => {
    setMounted(true);

    // Simulate progress animation when playing
    let progressInterval: NodeJS.Timeout;
    if (isPlaying) {
      progressInterval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isPlaying]);

  // Streaming platforms data
  const streamingPlatforms: StreamingPlatform[] = [
    { name: 'Apple Music', icon: 'apple', link: '#contact' },
    { name: 'Spotify', icon: 'spotify', link: '#contact' },
    { name: 'YouTube', icon: 'youtube', link: '#contact' },
    { name: 'SoundCloud', icon: 'soundcloud', link: '#contact' },
  ];

  // Function to render platform icons
  const renderPlatformIcon = (icon: string) => {
    switch (icon) {
      case 'apple':
        return (
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 3.5c.59 0 1.27.19 1.98.57l.05.02c.27.11.53.24.79.39.58.34 1.26.83 2.02 1.49.26.24.47.46.63.65.35.4.53.81.53 1.17v12.01c0 .42-.18.83-.53 1.23-.18.21-.38.43-.63.67-.52.44-1.12.85-1.77 1.22l-.27.15-.08.04c-.72.36-1.39.54-1.99.54-.59 0-1.26-.18-1.98-.54l-.26-.15c-.66-.37-1.26-.78-1.77-1.22-.26-.24-.46-.46-.64-.67-.36-.4-.53-.81-.53-1.23V7.79c0-.36.18-.77.53-1.17.16-.19.37-.41.63-.65.76-.66 1.44-1.15 2.02-1.49.26-.15.52-.28.79-.39l.05-.02c.71-.38 1.39-.57 1.98-.57zM14.19 14.87l6.56-4.5c.17-.12.28-.31.28-.53s-.11-.41-.28-.53l-6.56-4.5c-.24-.17-.56-.15-.79.04-.2.19-.28.48-.18.75.04.1.08.17.13.22l5.71 3.92-5.71 3.92c-.05.05-.09.13-.13.22-.11.27-.02.56.18.75.23.19.56.21.79.04z" />
          </svg>
        );
      case 'spotify':
        return (
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.36 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'soundcloud':
        return (
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.055-.045-.1-.09-.1m-.899.828c-.05 0-.091.037-.1.087l-.203 1.34.203 1.336c.009.05.05.086.1.086.049 0 .09-.037.099-.086l.237-1.336-.237-1.34c-.009-.05-.05-.087-.099-.087m1.83-1.229c-.061 0-.111.06-.12.115l-.21 2.563.226 2.487c.009.06.06.114.12.114.06 0 .11-.054.119-.114l.258-2.487-.258-2.563c-.009-.06-.059-.115-.119-.115m.979-.092c-.076 0-.13.069-.14.14l-.21 2.63.2 2.532c0 .07.059.133.138.133.078 0 .14-.063.149-.133l.22-2.532-.22-2.63c-.01-.07-.07-.14-.14-.14m1.018.009c-.08 0-.149.075-.16.159l-.189 2.601.179 2.559c.01.084.08.151.16.151.077 0 .145-.067.155-.151l.202-2.559-.202-2.601c-.01-.084-.078-.159-.155-.159m1.038.123c-.098 0-.174.091-.183.185l-.171 2.451.171 2.46c.01.094.086.183.183.183.098 0 .175-.09.185-.183l.192-2.46-.192-2.451c-.01-.094-.087-.185-.185-.185m1.056.146c-.107 0-.195.095-.202.201l-.157 2.29.157 2.287c.007.106.095.199.202.199.107 0 .193-.093.202-.199l.177-2.287-.177-2.29c-.009-.106-.095-.201-.202-.201m1.065.152c-.117 0-.208.104-.215.216l-.144 2.132.144 2.137c.007.111.097.214.215.214.117 0 .207-.103.214-.214l.162-2.137-.162-2.132c-.007-.112-.097-.216-.214-.216m.692 4.953c.084 0 .149-.06.157-.142l.228-2.463-.228-2.48c-.008-.082-.073-.144-.157-.144-.084 0-.149.062-.158.144l-.203 2.48.203 2.463c.009.082.074.143.158.143m.78.038c.026-.025.044-.06.044-.1v-.018c-.001-.024-.01-.052-.026-.079-.029-.043-.079-.073-.137-.073-.054 0-.103.027-.132.071-.029.045-.037.098-.02.145.037.103.142.144.233.12.071-.016.134-.06.178-.119.018-.018.032-.034.046-.054.02-.028.036-.061.048-.099l.227-2.391-.227-2.538c-.01-.087-.077-.156-.167-.156s-.157.069-.167.156l-.203 2.538.203 2.428c.007.074.065.135.14.141l.006-.001v.001m.843-.072c.093 0 .172-.067.185-.158l.201-2.3-.201-2.526c-.012-.09-.092-.157-.185-.157s-.172.066-.184.157l-.178 2.526.178 2.3c.012.091.091.158.184.158m-.988-6.294c-.123 0-.222.099-.233.219l-.182 2.357.182 2.306c.01.12.11.217.233.217.122 0 .221-.097.232-.217l.204-2.306-.204-2.357c-.01-.12-.109-.219-.232-.219m9.258 4.794c-.44.008-.904.024-1.424.067-.25.021-.354.191-.354.341v3.473c0 .177.182.402.455.402 1.228 0 2.228-.996 2.228-2.224 0-1.143-.915-2.07-2.05-2.059m1.933-1.7c.124 0 .241.039.344.11a1.05 1.05 0 0 1 .453.862c0 .36-.181.68-.462.871-.116.085-.26.131-.411.131-.198 0-.381-.08-.51-.22-.039-.034-.074-.072-.103-.114-.066-.094-.104-.203-.115-.317-.004-.031-.005-.063-.005-.095 0-.261.107-.496.279-.664.174-.168.401-.25.628-.259.013-.001.024-.005.038-.005h.001.044.001m-8.814-4.991c-.131 0-.239.108-.247.237l-.17 2.9.17 2.826c.008.13.116.233.247.233.13 0 .237-.103.247-.233l.192-2.826-.192-2.9c-.01-.13-.117-.237-.247-.237m1.079.019c-.141 0-.254.114-.265.253l-.179 2.866.179 2.807c.011.139.124.25.265.25.14 0 .254-.112.264-.25l.202-2.807-.202-2.866c-.01-.139-.124-.253-.264-.253m-2.433-.192c-.103 0-.187.084-.196.188l-.221 3.123.221 3.047c.009.103.093.186.196.186.102 0 .186-.083.196-.186l.258-3.047-.258-3.123c-.01-.104-.094-.188-.196-.188m.987-.15c-.114 0-.207.093-.215.207l-.211 3.254.211 3.17c.008.113.101.204.215.204.113 0 .205-.091.214-.204l.241-3.17-.241-3.254c-.009-.114-.101-.207-.214-.207m14.219 9.243c-.391-.095-1.243-.182-1.882-.182-2.374 0-3.223 1.042-3.223 2.129 0 .833.661 1.294 1.656 1.294 1.315 0 2.356-.536 3.235-1.29.139-.118.214-.119.214-.355 0-.579 0-1.596.001-1.596h-.001zm-11.887-8.029c-.104 0-.188.088-.195.19l-.203 3.062.204 3.08c.007.103.09.187.194.187s.188-.084.196-.187l.229-3.08-.229-3.062c-.008-.102-.092-.19-.196-.19m-.996.056c-.104 0-.189.088-.196.19l-.202 3.007.202 3.08c.007.103.092.187.196.187.103 0 .188-.084.195-.187l.222-3.08-.222-3.007c-.007-.102-.092-.19-.195-.19m1.994-.266c-.104 0-.189.088-.196.19l-.202 3.273.202 3.081c.007.103.092.187.196.187s.188-.084.195-.187l.245-3.081-.245-3.273c-.007-.102-.092-.19-.195-.19m1.033.01c-.113 0-.205.097-.212.21l-.192 3.253.192 3.08c.007.114.099.205.212.205.112 0 .204-.091.212-.205l.219-3.08-.219-3.252c-.008-.114-.1-.211-.212-.211m-4.013.009c-.094 0-.171.079-.179.174l-.222 3.29.222 3.079c.008.094.085.169.179.169.094 0 .17-.075.178-.169l.195-3.079-.195-3.29c-.008-.095-.084-.174-.178-.174m1.996-.07c-.105 0-.189.088-.196.19l-.203 3.134.203 3.079c.007.103.091.187.196.187.104 0 .188-.084.196-.187l.219-3.079-.219-3.134c-.008-.102-.092-.19-.196-.19m-2.988.057c-.094 0-.171.079-.179.174l-.222 3.133.222 3.079c.008.094.085.169.179.169.094 0 .17-.075.178-.169l.195-3.079-.195-3.133c-.008-.095-.084-.174-.178-.174" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setAudioProgress(0);
    }
  };

  // Format time from seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Calculate current time from progress percentage
  const getCurrentTime = () => {
    return formatTime((audioProgress / 100) * 260); // 4:20 = 260 seconds
  };

  return (
    <section
      id="music"
      ref={sectionRef}
      className="relative py-24 bg-charcoal text-ivory overflow-hidden"
      aria-labelledby="music-section-title"
    >
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark gradient background with subtle texture */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal to-black"
          style={{
            backgroundImage: "url('/images/subtle-texture.png')",
            backgroundBlendMode: 'overlay',
            opacity: 0.8,
          }}
          aria-hidden="true"
        ></div>

        {/* Music-themed subtle background patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="sound-wave-pattern"
                width="40"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,10 Q5,5 10,10 Q15,15 20,10 Q25,5 30,10 Q35,15 40,10"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sound-wave-pattern)" />
          </svg>
        </div>

        {/* Animated radial gradients */}
        {mounted && (
          <>
            <motion.div
              className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            ></motion.div>

            <motion.div
              className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(157,11,11,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(157,11,11,0.5) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(157,11,11,0.3) 0%, transparent 70%)',
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              aria-hidden="true"
            ></motion.div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2
            id="music-section-title"
            className="font-cinzel text-4xl md:text-5xl tracking-wider text-gold mb-4"
          >
            THE IMMORTAL ANTHEM
          </h2>

          {/* Decorative divider with animation */}
          <div
            className="relative h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
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

          <p className="max-w-2xl mx-auto mt-6 text-ivory/80 font-cormorant-upright italic text-lg md:text-xl">
            Sonic <span className="text-gold">divine transmissions</span> that
            speak directly to the <span className="text-crimson">soul</span>
          </p>
        </motion.div>

        {/* Music Feature - Enhanced layout */}
        <div className="max-w-5xl mx-auto">
          {/* Album Cover and Title - With enhanced styling */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
            {/* Album Cover with elegant frame */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative perspective">
                {/* 3D card effect for album */}
                <motion.div
                  className="relative aspect-square book-shine sacred-glow shadow-xl"
                  whileHover={{
                    rotateY: 5,
                    rotateX: -5,
                    transition: { duration: 0.4 },
                  }}
                >
                  {/* Decorative frame */}
                  <div
                    className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold/40"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold/40"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40"
                    aria-hidden="true"
                  ></div>

                  {/* Album image */}
                  <div className="bg-black/60 border border-gold/30 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <Image
                      src="/images/book1.webp" // Using available asset
                      alt="I'm Here to Save Humanity - Album Cover"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Divine glow overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent opacity-0 mix-blend-overlay"
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Animated sound wave beneath album for visual interest */}
                {mounted && (
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 h-1 flex items-center justify-center gap-0.5"
                    aria-hidden="true"
                  >
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gold/40 rounded-full"
                        animate={
                          isPlaying
                            ? {
                                height: [
                                  2 + Math.random() * 4,
                                  6 + Math.random() * 10,
                                  2 + Math.random() * 4,
                                ],
                              }
                            : { height: 2 }
                        }
                        transition={{
                          duration: 0.8 + Math.random() * 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Music Details with elegant styling */}
            <motion.div
              className="w-full lg:w-3/5 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="font-cinzel text-3xl md:text-4xl text-gold mb-3">
                I&rsquo;m Here to Save Humanity
              </h3>
              <p className="text-ivory/70 text-lg mb-6">
                Debut single from{' '}
                <span className="text-crimson font-medium">
                  The Immortal Flame
                </span>
              </p>

              {/* Divine quote with enhanced styling */}
              <div className="prophetic-quote border-l-2 border-gold pl-4 mb-8 italic font-cormorant text-lg mx-auto lg:mx-0 max-w-xl">
                <p className="text-ivory/90">
                  <span className="text-gold"></span>
                  Music is the{' '}
                  <span className="text-gold">language of the soul</span>—a
                  vehicle for prophecy that bypasses the mind and speaks
                  directly to the heart. This anthem is not merely music, but a
                  <span className="text-crimson">
                    {' '}
                    sonic transmission of divine intention
                  </span>
                  .<span className="text-gold"></span>
                </p>
              </div>

              {/* Music Platforms with enhanced interactivity */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                {streamingPlatforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.link}
                    className="flex items-center gap-2 px-4 py-2 bg-black/50 border border-gold/20 text-ivory/90 transition-all duration-300 group"
                    onMouseEnter={() => setHoveredPlatform(index)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                    whileHover={{
                      y: -2,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      borderColor: 'rgba(212,175,55,0.4)',
                    }}
                    aria-label={`Listen on ${platform.name}`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        hoveredPlatform === index ? 'text-gold' : 'text-gold/80'
                      }`}
                    >
                      {renderPlatformIcon(platform.icon)}
                    </span>
                    <span className="group-hover:text-gold/100 transition-colors duration-300">
                      {platform.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Background about the song */}
              <p className="text-ivory/80 mb-4">
                Recorded in sacred acoustic spaces across{' '}
                <span className="text-gold">Dubai</span>,{' '}
                <span className="text-ivory">Auckland</span>, and{' '}
                <span className="text-crimson">Sydney</span>. The frequencies
                used in this composition are tuned to activate dormant
                consciousness through sound.
              </p>
            </motion.div>
          </div>

          {/* Enhanced Music Player */}
          <motion.div
            className="music-player relative backdrop-blur-md mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Player decorative frame */}
            <div
              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/40"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold/40"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold/40"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/40"
              aria-hidden="true"
            ></div>

            {/* Player content */}
            <div className="bg-black/60 border border-gold/30 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Play Button with pulsing effect */}
                <div className="relative">
                  {/* Pulsing circle animation when playing */}
                  {isPlaying && mounted && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-crimson/20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Play/pause button */}
                  <motion.button
                    className="relative w-16 h-16 bg-gradient-to-r from-gold to-gold/90 rounded-full flex items-center justify-center group focus:outline-none focus-visible:ring focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal z-10"
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    aria-pressed={isPlaying}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: isPlaying ? 0 : 0 }}
                      className="text-charcoal"
                    >
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8 ml-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </motion.button>
                </div>

                {/* Player Details - with enhanced UX */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                    <div>
                      <h4 className="font-cinzel text-lg text-gold mb-1">
                        I&rsquo;m Here to Save Humanity
                      </h4>
                      <p className="text-sm text-ivory/60">
                        The Immortal Flame
                      </p>
                    </div>
                    <span className="text-sm text-ivory/70 font-medium mt-2 sm:mt-0">
                      {getCurrentTime()} / 4:20
                    </span>
                  </div>

                  {/* Progress Bar - Enhanced interactive version */}
                  <div
                    className="relative w-full h-2 bg-charcoal rounded-full overflow-hidden group cursor-pointer"
                    onClick={(e) => {
                      const bounds = e.currentTarget.getBoundingClientRect();
                      const percent =
                        ((e.clientX - bounds.left) / bounds.width) * 100;
                      setAudioProgress(Math.min(Math.max(percent, 0), 100));
                    }}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={audioProgress}
                  >
                    {/* Animated progress bar with gradient */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-crimson via-gold/80 to-gold h-full"
                      style={{ width: `${audioProgress}%` }}
                      initial={{ width: '0%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />

                    {/* Animated waveform in background for visual interest */}
                    {isPlaying && mounted && (
                      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-30">
                        {[...Array(25)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-0.5 bg-ivory/80 rounded-full"
                            animate={{
                              height: [
                                1 + Math.random() * 0.5,
                                1 + Math.random() * 0.8,
                                1 + Math.random() * 0.5,
                              ],
                            }}
                            transition={{
                              duration: 0.5 + Math.random() * 0.3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            style={{
                              opacity: i / 25 > audioProgress / 100 ? 0.3 : 1,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Slider handle */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 rounded-full w-4 h-4 bg-gold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ left: `calc(${audioProgress}% - 8px)` }}
                    ></div>
                  </div>
                </div>

                {/* Volume Control with elegant styling */}
                <div className="flex items-center gap-2">
                  <button
                    className="text-ivory/60 hover:text-gold transition-colors"
                    aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                    onClick={() => setVolume(volume === 0 ? 70 : 0)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      {volume === 0 ? (
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06z" />
                      ) : (
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                      )}
                    </svg>
                  </button>

                  {/* Volume slider */}
                  <div
                    className="w-24 h-1.5 bg-charcoal rounded-full overflow-hidden relative cursor-pointer"
                    onClick={(e) => {
                      const bounds = e.currentTarget.getBoundingClientRect();
                      const percent =
                        ((e.clientX - bounds.left) / bounds.width) * 100;
                      setVolume(Math.min(Math.max(percent, 0), 100));
                    }}
                    role="slider"
                    aria-label="Volume"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={volume}
                  >
                    <div
                      className="bg-gold h-full"
                      style={{ width: `${volume}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lyrics Preview - New section */}
          <motion.div
            className="lyrics-preview mb-16 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <h3 className="font-cinzel text-2xl text-gold mb-6">
              Lyrical Essence
            </h3>

            <div className="relative p-6 bg-black/40 border border-gold/20 backdrop-blur-sm">
              {/* Flame accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-crimson/60 to-gold/40 rounded-full blur-md"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  aria-hidden="true"
                />
              </div>

              {/* Lyrics text with elegant styling */}
              <blockquote className="font-cormorant-upright italic text-xl leading-relaxed mb-4">
                <p className="mb-4">
                  <span className="text-crimson"></span>Through{' '}
                  <span className="text-gold">sacred flame</span> and{' '}
                  <span className="text-crimson">timeless word</span>,<br />I
                  walk between the{' '}
                  <span className="text-ivory">mortal worlds</span>...
                  <span className="text-crimson"></span>
                </p>

                <p className="text-xs uppercase tracking-widest font-cinzel font-normal text-ivory/60">
                  Chorus excerpt
                </p>
              </blockquote>
            </div>
          </motion.div>

          {/* Upcoming Releases - Enhanced with elegant styling */}
          <motion.div
            className="relative text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            {/* Background glow effect */}
            {mounted && (
              <motion.div
                className="absolute inset-0 z-0 opacity-30 rounded-lg overflow-hidden"
                animate={{
                  background: [
                    'radial-gradient(circle at center, rgba(212,175,55,0.2) 0%, transparent 70%)',
                    'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, transparent 70%)',
                    'radial-gradient(circle at center, rgba(212,175,55,0.2) 0%, transparent 70%)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-hidden="true"
              ></motion.div>
            )}

            <div className="relative z-10">
              <h3 className="font-cinzel text-2xl text-gold mb-6">
                Upcoming Musical Prophecies
              </h3>
              <p className="text-ivory/80 mb-8">
                The debut album{' '}
                <span className="text-gold font-medium">Divine Fire</span> will
                feature 7 tracks channeling spiritual awakening through sacred
                sound frequencies. Release performances planned for{' '}
                <span className="text-crimson">Dubai</span>,{' '}
                <span className="text-ivory">Auckland</span>, and{' '}
                <span className="text-gold">Sydney</span> in 2025.
              </p>

              {/* Interactive CTA button */}
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal border border-gold/50 text-gold uppercase tracking-wider font-medium overflow-hidden flame-button focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal hover:bg-crimson/80 hover:text-ivory hover:border-crimson/60 transition-colors duration-300"
                aria-label="Be notified of music releases"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {/* Flame animation on hover */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-crimson/40 via-gold/20 to-transparent group-hover:h-full transition-all duration-700 ease-in-out"
                  aria-hidden="true"
                ></span>

                <span className="relative flex items-center">
                  Join Release Notifications
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
