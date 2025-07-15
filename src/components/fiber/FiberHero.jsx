import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function FiberHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [bubbleRotation, setBubbleRotation] = useState("-16deg");
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const shadowControls = useAnimation();
  const textControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.4 });

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        right: isMobile ? "-23px" : "0%",
        top: isMobile ? "115%" : "110%",
        width: isMobile ? "50%" : "26%",
        opacity: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      });
      shadowControls.start({
        opacity: 0.3,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
      textControls.start("visible");
      setBubbleRotation("0deg");
    } else {
      controls.start({
        right: "-200px",
        top: "50%",
        width: isMobile ? "239px" : "240px",
        opacity: 1,
        transition: { duration: 0.8, ease: "easeIn" },
      });
      shadowControls.start({
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.8, ease: "easeIn" },
      });
      textControls.start("hidden");
      setBubbleRotation("-16deg");
    }
  }, [isInView, isMobile, controls, shadowControls, textControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="relative bg-white  overflow-hidden">
      {/* Video Section with Scroll Effect */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={scrolled ? { scale: 0.89, opacity: 0.9 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 transition-all duration-500 ease-out ${
          scrolled ? "rounded-2xl shadow-2xl" : "rounded-none"
        }`}
      >
        {/* Top Hero Video */}
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <motion.h1
            className="absolute z-11 bottom-10 left-8 text-center text-xl md:text-4xl font-semibold text-[#fff] mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            High-Quality Fiber Solutions for the Spinning Industry
          </motion.h1>
          
          {/* Desktop Video */}
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            src="/video/fiber.mp4"
            className={`w-full rounded-xl  hidden md:block  ${scrolled ? "rounded-3xl " : "rounded-none"}`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          />

          {/* Mobile Fullscreen Video */}
          <div className="relative w-full h-screen block md:hidden">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              src="/video/fiber-mobile.mp4"
              className={`absolute top-0 left-0 w-screen h-screen object-cover  ${scrolled ? "rounded-xl " : "rounded-none"}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Animated Bubble (shared for both) */}
          <motion.div
            initial={{ position: "absolute", right: "-200px", top: "70%", rotate: bubbleRotation }}
            animate={controls}
            style={{ rotate: bubbleRotation, position: "absolute" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/img/fiber/fiber.png"
              alt="fiber Ball"
              className="rounded-xl w-full"
            />
            <motion.div
              animate={shadowControls}
              className="w-full h-6 bg-black rounded-md mx-auto mt-[-20px] blur-sm"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text + Info Section (unaffected by scroll) */}
      <div className="mt-0 p-6 md:p-20">
        <motion.h1
          className="text-2xl text-center md:text-3xl font-semibold mb-4 text-[#1C1C1C]"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          fiber
        </motion.h1>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 mt-10 items-center"
        >
          <motion.div
            initial="hidden"
            animate={textControls}
            variants={textVariants}
          >
            <motion.p
              className="text-[#4B4B4B] mb-6 pr-30 md:pr-0"
              variants={paragraphVariants}
            >
              To promote sustainability in Vietnam's textile and nonwoven
              sectors, COTCO expanded into distributing viscose and specialty
              fibers for nonwovens through a partnership with Birla Cellulose.
            </motion.p>

            <motion.p
              className="text-[#4B4B4B] mb-6  md:pr-0"
              variants={paragraphVariants}
            >
              In line with global sustainability trends, viscose fiber has
              increasingly become the preferred choice for many fashion brands
              thanks to its softness, breathability, dyeability, and
              eco-friendliness, viscose is widely used in textiles, apparel,
              nonwoven fabrics, and consumer products, yarn producers, and
              export markets, adding distinctive environmental value to the
              final products.
            </motion.p>
          </motion.div>

          {/* Placeholder Right Column */}
          <motion.div
            className="flex justify-center items-center md:h-[300px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.4, duration: 0.8 },
            }}
          />
        </div>
      </div>
    </section>
  );
}