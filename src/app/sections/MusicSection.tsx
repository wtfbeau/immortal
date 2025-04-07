'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' });

  // Streaming platforms from HTML mockup
  const streamingPlatforms = [
    { name: 'Apple Music', icon: 'apple' },
    { name: 'Spotify', icon: 'spotify' },
    { name: 'YouTube', icon: 'youtube' },
    { name: 'SoundCloud', icon: 'soundcloud' },
  ];

  // Function to render platform icons
  const renderPlatformIcon = (icon: string) => {
    switch (icon) {
      case 'apple':
        return (
          <svg
            className="w-5 h-5 fill-current text-[#D4AF37]"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 3.5c.59 0 1.27.19 1.98.57l.05.02c.27.11.53.24.79.39.58.34 1.26.83 2.02 1.49.26.24.47.46.63.65.35.4.53.81.53 1.17v12.01c0 .42-.18.83-.53 1.23-.18.21-.38.43-.63.67-.52.44-1.12.85-1.77 1.22l-.27.15-.08.04c-.72.36-1.39.54-1.99.54-.59 0-1.26-.18-1.98-.54l-.26-.15c-.66-.37-1.26-.78-1.77-1.22-.26-.24-.46-.46-.64-.67-.36-.4-.53-.81-.53-1.23V7.79c0-.36.18-.77.53-1.17.16-.19.37-.41.63-.65.76-.66 1.44-1.15 2.02-1.49.26-.15.52-.28.79-.39l.05-.02c.71-.38 1.39-.57 1.98-.57zM14.19 14.87l6.56-4.5c.17-.12.28-.31.28-.53s-.11-.41-.28-.53l-6.56-4.5c-.24-.17-.56-.15-.79.04-.2.19-.28.48-.18.75.04.1.08.17.13.22l5.71 3.92-5.71 3.92c-.05.05-.09.13-.13.22-.11.27-.02.56.18.75.23.19.56.21.79.04z" />
          </svg>
        );
      case 'spotify':
        return (
          <svg
            className="w-5 h-5 fill-current text-[#D4AF37]"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.36 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg
            className="w-5 h-5 fill-current text-[#D4AF37]"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'soundcloud':
        return (
          <svg
            className="w-5 h-5 fill-current text-[#D4AF37]"
            viewBox="0 0 24 24"
          >
            <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.055-.045-.1-.09-.1m-.899.828c-.05 0-.091.037-.1.087l-.203 1.34.203 1.336c.009.05.05.086.1.086.049 0 .09-.037.099-.086l.237-1.336-.237-1.34c-.009-.05-.05-.087-.099-.087m1.83-1.229c-.061 0-.111.06-.12.115l-.21 2.563.226 2.487c.009.06.06.114.12.114.06 0 .11-.054.119-.114l.258-2.487-.258-2.563c-.009-.06-.059-.115-.119-.115m.979-.092c-.076 0-.13.069-.14.14l-.21 2.63.2 2.532c0 .07.059.133.138.133.078 0 .14-.063.149-.133l.22-2.532-.22-2.63c-.01-.07-.07-.14-.14-.14m1.018.009c-.08 0-.149.075-.16.159l-.189 2.601.179 2.559c.01.084.08.151.16.151.077 0 .145-.067.155-.151l.202-2.559-.202-2.601c-.01-.084-.078-.159-.155-.159m1.038.123c-.098 0-.174.091-.183.185l-.171 2.451.171 2.46c.01.094.086.183.183.183.098 0 .175-.09.185-.183l.192-2.46-.192-2.451c-.01-.094-.087-.185-.185-.185m1.056.146c-.107 0-.195.095-.202.201l-.157 2.29.157 2.287c.007.106.095.199.202.199.107 0 .193-.093.202-.199l.177-2.287-.177-2.29c-.009-.106-.095-.201-.202-.201m1.065.152c-.117 0-.208.104-.215.216l-.144 2.132.144 2.137c.007.111.097.214.215.214.117 0 .207-.103.214-.214l.162-2.137-.162-2.132c-.007-.112-.097-.216-.214-.216m.692 4.953c.084 0 .149-.06.157-.142l.228-2.463-.228-2.48c-.008-.082-.073-.144-.157-.144-.084 0-.149.062-.158.144l-.203 2.48.203 2.463c.009.082.074.143.158.143m.78.038c.026-.025.044-.06.044-.1v-.018c-.001-.024-.01-.052-.026-.079-.029-.043-.079-.073-.137-.073-.054 0-.103.027-.132.071-.029.045-.037.098-.02.145.037.103.142.144.233.12.071-.016.134-.06.178-.119.018-.018.032-.034.046-.054.02-.028.036-.061.048-.099l.227-2.391-.227-2.538c-.01-.087-.077-.156-.167-.156s-.157.069-.167.156l-.203 2.538.203 2.428c.007.074.065.135.14.141l.006-.001v.001m.843-.072c.093 0 .172-.067.185-.158l.201-2.3-.201-2.526c-.012-.09-.092-.157-.185-.157s-.172.066-.184.157l-.178 2.526.178 2.3c.012.091.091.158.184.158m-.988-6.294c-.123 0-.222.099-.233.219l-.182 2.357.182 2.306c.01.12.11.217.233.217.122 0 .221-.097.232-.217l.204-2.306-.204-2.357c-.01-.12-.109-.219-.232-.219m9.258 4.794c-.44.008-.904.024-1.424.067-.25.021-.354.191-.354.341v3.473c0 .177.182.402.455.402 1.228 0 2.228-.996 2.228-2.224 0-1.143-.915-2.07-2.05-2.059m1.933-1.7c.124 0 .241.039.344.11a1.05 1.05 0 0 1 .453.862c0 .36-.181.68-.462.871-.116.085-.26.131-.411.131-.198 0-.381-.08-.51-.22-.039-.034-.074-.072-.103-.114-.066-.094-.104-.203-.115-.317-.004-.031-.005-.063-.005-.095 0-.261.107-.496.279-.664.174-.168.401-.25.628-.259.013-.001.024-.005.038-.005h.001.044.001m-8.814-4.991c-.131 0-.239.108-.247.237l-.17 2.9.17 2.826c.008.13.116.233.247.233.13 0 .237-.103.247-.233l.192-2.826-.192-2.9c-.01-.13-.117-.237-.247-.237m1.079.019c-.141 0-.254.114-.265.253l-.179 2.866.179 2.807c.011.139.124.25.265.25.14 0 .254-.112.264-.25l.202-2.807-.202-2.866c-.01-.139-.124-.253-.264-.253m-2.433-.192c-.103 0-.187.084-.196.188l-.221 3.123.221 3.047c.009.103.093.186.196.186.102 0 .186-.083.196-.186l.258-3.047-.258-3.123c-.01-.104-.094-.188-.196-.188m.987-.15c-.114 0-.207.093-.215.207l-.211 3.254.211 3.17c.008.113.101.204.215.204.113 0 .205-.091.214-.204l.241-3.17-.241-3.254c-.009-.114-.101-.207-.214-.207m14.219 9.243c-.391-.095-1.243-.182-1.882-.182-2.374 0-3.223 1.042-3.223 2.129 0 .833.661 1.294 1.656 1.294 1.315 0 2.356-.536 3.235-1.29.139-.118.214-.119.214-.355 0-.579 0-1.596.001-1.596h-.001zm-11.887-8.029c-.104 0-.188.088-.195.19l-.203 3.062.204 3.08c.007.103.09.187.194.187s.188-.084.196-.187l.229-3.08-.229-3.062c-.008-.102-.092-.19-.196-.19m-.996.056c-.104 0-.189.088-.196.19l-.202 3.007.202 3.08c.007.103.092.187.196.187.103 0 .188-.084.195-.187l.222-3.08-.222-3.007c-.007-.102-.092-.19-.195-.19m1.994-.266c-.104 0-.189.088-.196.19l-.202 3.273.202 3.081c.007.103.092.187.196.187s.188-.084.195-.187l.245-3.081-.245-3.273c-.007-.102-.092-.19-.195-.19m1.033.01c-.113 0-.205.097-.212.21l-.192 3.253.192 3.08c.007.114.099.205.212.205.112 0 .204-.091.212-.205l.219-3.08-.219-3.252c-.008-.114-.1-.211-.212-.211m-4.013.009c-.094 0-.171.079-.179.174l-.222 3.29.222 3.079c.008.094.085.169.179.169.094 0 .17-.075.178-.169l.195-3.079-.195-3.29c-.008-.095-.084-.174-.178-.174m1.996-.07c-.105 0-.189.088-.196.19l-.203 3.134.203 3.079c.007.103.091.187.196.187.104 0 .188-.084.196-.187l.219-3.079-.219-3.134c-.008-.102-.092-.19-.196-.19m-2.988.057c-.094 0-.171.079-.179.174l-.222 3.133.222 3.079c.008.094.085.169.179.169.094 0 .17-.075.178-.169l.195-3.079-.195-3.133c-.008-.095-.084-.174-.178-.174" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="music"
      ref={sectionRef}
      className="py-24 bg-[#1E1E1E] text-[#F5F5F5] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#9D0B0B]/10 rounded-full blur-[120px]"></div>
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
            THE IMMORTAL ANTHEM
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        {/* Music Feature */}
        <div className="max-w-5xl mx-auto">
          {/* Album Cover and Title */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Album Cover */}
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="aspect-square bg-[#1E1E1E] border border-[#D4AF37]/30 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Image
                  src="/images/music/album-cover.jpg"
                  alt="I'm Here to Save Humanity - Album Cover"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Music Details */}
            <motion.div
              className="w-full md:w-3/5 text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="font-cinzel text-3xl md:text-4xl text-[#D4AF37] mb-3">
                I&rsquo;m Here to Save Humanity
              </h3>
              <p className="text-[#F5F5F5]/70 text-lg mb-6">
                Debut single from The Immortal Flame
              </p>

              <blockquote className="border-l-2 border-[#D4AF37] pl-4 mb-8 italic text-[#F5F5F5]/90 font-cormorant text-lg">
                Music is the language of the soul—a vehicle for prophecy that
                bypasses the mind and speaks directly to the heart. This anthem
                is not merely music, but a sonic transmission of divine
                intention.
              </blockquote>

              {/* Music Platforms */}
              <div className="flex flex-wrap gap-4 mb-8">
                {streamingPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 transition-colors rounded-sm"
                  >
                    {renderPlatformIcon(platform.icon)}
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Music Player */}
          <motion.div
            className="music-player bg-[#1E1E1E] border border-[#D4AF37]/30 rounded-sm p-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Play Button */}
              <button
                className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#F5F5F5] transition-colors group"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-[#1E1E1E] group-hover:text-[#1E1E1E] ml-0.5"
                >
                  {isPlaying ? (
                    <>
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </>
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>

              {/* Player Details */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-cinzel text-lg text-[#D4AF37]">
                      I&rsquo;m Here to Save Humanity
                    </h4>
                    <p className="text-sm text-[#F5F5F5]/60">
                      The Immortal Flame
                    </p>
                  </div>
                  <span className="text-sm text-[#F5F5F5]/60">0:00 / 4:21</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[#F5F5F5]/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-y-0 left-0 bg-[#D4AF37] w-0"></div>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#F5F5F5]/60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>

                <div className="w-20 h-1 bg-[#F5F5F5]/10 rounded-full overflow-hidden">
                  <div className="bg-[#D4AF37] h-full w-[70%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Music Video */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <h3 className="font-cinzel text-2xl mb-8">Cinematic Teaser</h3>

            <div className="relative aspect-video overflow-hidden rounded-sm">
              {/* Video Placeholder - Replace with actual embed */}
              <div className="absolute inset-0 bg-black">
                <Image
                  src="/images/music/video-thumbnail.jpg"
                  alt="I'm Here to Save Humanity - Music Video"
                  fill
                  className="w-full h-full object-cover object-center opacity-80"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#D4AF37]/90 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-[#1E1E1E] group-hover:scale-110 transition-transform ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Releases */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <h3 className="font-cinzel text-2xl mb-6">Upcoming Releases</h3>
            <p className="text-[#F5F5F5]/80 max-w-2xl mx-auto mb-8">
              The debut album Divine Fire will feature 7 tracks channeling
              spiritual awakening through sound. Release performances planned
              for Dubai, Auckland, and Sydney in 2025.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-wider font-medium hover:bg-[#D4AF37] hover:text-[#1E1E1E] transition-all group"
            >
              <span>Join Release Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
