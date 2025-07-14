import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax setup
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 0]); // background moves slower
  const yTitle = useTransform(scrollY, [0, 300], [0, -50]); // title moves slightly

  return (
    <motion.div
      ref={containerRef}
      initial={{ scale: 1, opacity: 1 }}
      animate={scrolled ? { scale: 0.93, opacity: 0.95 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden transition-all duration-500 ease-out ${
        scrolled ? "rounded-2xl" : ""
      }`}
    >
     
      <motion.div
        style={{ y: yTitle }}
        className="absolute left-[5%] top-[18%] md:top-[18%] md:left-[35%] z-10 flex flex-col justify-center items-center text-center px-6 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: scrolled ? 0.95 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            scale: { duration: 0.6 },
          }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl text-[#298bcb] md:text-6xl font-light tracking-wider uppercase mb-2">
            GROW IN TRUST,
          </h2>
          <h2 className="text-4xl text-[#298bcb] md:text-6xl font-semibold tracking-wider uppercase">
            QUALITY AND SERVICE
          </h2>
        </motion.div>
      </motion.div>

      {/* Background Image with Overlay */}
      <div className={`relative pt-2  overflow-hidden ` + (scrolled ? "md:pt-0" : "md:pt-50")}>
        <motion.img
          style={{ y: yImage }}
          src="/img/services/hero.png"
          alt="Textile Industry"
          className="w-full relative z-10 h-full object-cover hidden md:block"
        />
        <motion.img
          style={{ y: yImage }}
          src="/img/services/herom.png"
          alt="Textile Industry Mobile"
          className="w-full h-full object-cover block md:hidden"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>
    </motion.div>
  );
};

export default HeroSection;
