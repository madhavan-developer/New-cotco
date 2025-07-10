import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SlideButton from '../common/SlideButton';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const { scrollY } = useScroll();

  // Scale & opacity for main section
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.9]);
  const smoothScale = useSpring(scale, { stiffness: 150, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 150, damping: 20 });

  // Parallax translate for text (moves up slightly on scroll)
  const textTranslate = useTransform(scrollY, [0, 300], [0, -50]);
  const textOpacity = useTransform(scrollY, [0, 150], [1, 0.7]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <motion.div
      style={{
        scale: smoothScale,
        opacity: smoothOpacity,
      }}
      className={`relative overflow-hidden min-h-screen transition-all duration-300 ${
        scrolled ? 'rounded-2xl shadow-2xl' : ''
      }`}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
  playsInline
            loop
            autoPlay
            muted
        src="/video/hero.mp4"
      />

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center px-12 text-white"
        style={{ y: textTranslate, opacity: textOpacity }}
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Your Trusted Partner in Quality Cotton, Fibers & Textile Machinery
        </h1>
        <p className="mt-4 text-lg">
          Empowering Vietnam’s Textile Industry Since 2016
        </p>
        <div className="mt-6">
          <SlideButton
            bgColor="#fff"
            textColor="#143A59"
            hoverBgColor="#143A59"
            hoverTextColor="#fff"
          >
            Golden Button
          </SlideButton>
        </div>
      </motion.div>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-white/60 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition"
      >
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </motion.div>
  );
}
