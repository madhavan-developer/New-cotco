import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiUser } from "react-icons/fi";
import SlideIn from "../common/SlideIn";

export default function ProductsHero() {
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
    <section className="relative bg-white  md:pt-0 overflow-x-hidden overflow-hidden">
      {/* Video Section with Scroll Effect */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={scrolled ? { scale: 0.89, opacity: 0.9 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 transition-all duration-500 ease-out ${
          scrolled ? "rounded-2xl shadow-2xl" : ""
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
            src="/video/products.mp4"
            className="w-full rounded-xl  hidden md:block"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          />
          <div className={`absolute inset-0 bg-black/20 z-10 ${scrolled ? "rounded-3xl " : "rounded-none"}`} />
          {/* Mobile Fullscreen Video */}
          <div className="relative w-full h-screen block md:hidden">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              src="/video/fiber-mobile.mp4"
              className="absolute top-0 left-0 w-screen h-screen object-cover rounded-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Text + Info Section (unaffected by scroll) */}
      <div
        ref={ref}
        className="p-6 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto items-center"
      >
        {/* Right Column: Image shown first on mobile */}
        <motion.div
          className="flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, duration: 0.8 },
          }}
        >
          <SlideIn direction="right">
            <img
              src="/img/products/hero.png"
              alt="Fiber Placeholder"
              className="w-full h-auto object-cover rounded-xl"
            />
          </SlideIn>
        </motion.div>

        {/* Left Column: Text shown second on mobile */}
        <motion.div
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="order-2 md:order-1"
        >
          <motion.p
            className="text-[#4B4B4B] mb-6 pr-30 md:pr-0 products-description"
            variants={paragraphVariants}
          >
            With an agreement signed in 2022, COTCO became the official agent of
            Lakshmi Machine Works (LMW), India's largest textile machinery
            manufacturer, for Vietnam's spinning mills, including
            export-oriented factories from Korea, Taiwan, China, etc. LMW is one
            of the few companies worldwide capable of manufacturing a complete
            range of spinning machinery, from blowroom systems to ring frames,
            providing integrated solutions for various applications and
            processing diverse raw materials.
          </motion.p>

          <motion.div
            className="bg-[#11456C] rounded-xl text-white grid gap-4 p-10"
            variants={paragraphVariants}
          >
            <FiUser className="text-[#fff] text-6xl mr-2" />
            <span className="text-[#fff] text-2xl font-semibold">
              Customer Benefits
            </span>
            <ul className="list-disc list-inside">
              <li>Lower production costs & improved quality standards.</li>
              <li>
                Genuine spare parts at competitive prices to optimize equipment
                reliability.
              </li>
              <li>Guaranteed machine quality & performance.</li>
              <li>Precise interaction between machinery components.</li>
              <li>
                Smart tech applications for automated production, offering
                efficient management solutions.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}