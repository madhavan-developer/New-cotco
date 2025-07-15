import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certificateImages = [
  "/img/cotton/certificates/certification1.png",
  "/img/cotton/certificates/certification2.jpg",
  "/img/cotton/certificates/certification3.jpg",
  "/img/cotton/certificates/certification4.jpg",
];

export default function CertificationSliderSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const controls = useAnimation();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 });

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificateImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificateImages.length - 1 ? 0 : prev + 1));
  };

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear existing
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Auto slide control with visibility
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
      startAutoSlide();
    } else {
      controls.start({ opacity: 0, x: 100 });
      stopAutoSlide();
    }
    return stopAutoSlide;
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-20 sm:py-2 bg-white overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-black">
            Proud member of the <br />
            International Cotton Association (ICA)
          </h2>
          <button className="mt-4 px-6 py-3 bg-[#0A1C2E] text-white font-semibold rounded-md inline-flex items-center gap-2 hover:bg-[#0b263f] transition">
            Explore Certifications <FaArrowRight className="text-sm mt-[1px]" />
          </button>
        </div>

        {/* Right Side - Slider */}
        <motion.div
          ref={inViewRef}
          animate={controls}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full flex flex-col items-center justify-center"
        >
          {/* Certificate Stack */}
          <div className="relative w-full h-full md:h-80">
            {certificateImages.map((src, i) => {
              const isActive = i === current;

              return (
                <img
                  key={i}
                  src={src}
                  alt={`Certificate ${i + 1}`}
                  className={`absolute top-0 left-0 w-full h-100 rounded-2xl transition-all duration-700 ease-in-out
                    ${isActive ? "z-30 scale-100 rotate-0 opacity-100" : "z-10 opacity-40 scale-[0.95]"}
                  `}
                  style={{
                    transform: isActive
                      ? "rotate(0deg) translateX(0)"
                      : "rotate(-7deg) translateX(25px)",
                  }}
                />
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-33 certification-slider-controls">
            <button
              onClick={() => {
                prevSlide();
                startAutoSlide();
              }}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => {
                nextSlide();
                startAutoSlide();
              }}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-[#0A1C2E] text-white flex items-center justify-center hover:bg-[#122b45] transition-colors duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
