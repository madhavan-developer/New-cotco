import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={scrolled ? { scale: 0.93, opacity: 0.95 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative   overflow-hidden  transition-all duration-500 ease-out ${
        scrolled ? "rounded-2xl " : ""
      }`}
    >

         <div className="absolute left-[5%] top-[18%] md:top-[18%] md:left-[35%] z-10 flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: scrolled ? 0.95 : 1
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            scale: { duration: 0.6 }
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
      </div>

      {/* Background Image with Dark Overlay */}
      <div className="relative pt-2 md:pt-20">
       <img
          src="/img/services/hero.png"
          alt="Textile Industry"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src="/img/services/herom.png" // 🔁 Replace with your actual mobile image
          alt="Textile Industry Mobile"
          className="w-full h-full object-cover block md:hidden"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Text Content */}
   
    </motion.div>
  );
};

export default HeroSection;