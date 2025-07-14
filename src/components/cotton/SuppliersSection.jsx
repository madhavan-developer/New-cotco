import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const suppliers = [
  {
    name: "Louis Dreyfus Company (LDC)",
    logo: "/img/cotton/suppliers/louis_logo.png",
    background: "/img/cotton/suppliers/louis_bg.jpg",
    content: [
      "Founded: 1851, Netherlands",
      "Operations: Over 100 countries",
      "One of the world’s largest cotton suppliers, holding a significant share of global raw cotton exports",
      "Extensive procurement network in the USA, Brazil, India, and Africa",
      "Strong financial position and optimized logistics costs",
      "Member of the Better Cotton Initiative (BCI), committed to emission reduction and sustainable development",
    ],
  },
  {
    name: "Viterra",
    logo: "/img/cotton/suppliers/viterra_logo.png",
    background: "/img/home/cotton2.png",
    content: ["Global network in agricultural supply chains", "Efficient procurement & delivery", "Trusted cotton exporter"],
  },
  {
    name: "ECOM",
    logo: "/img/cotton/suppliers/ecom_logo.png",
    background: "/img/home/cottonmac.png",
    content: ["Established in 1849", "Sustainable practices in cotton trading", "Active across Latin America and Africa"],
  },
  {
    name: "REINHART",
    logo: "/img/cotton/suppliers/reinhart_logo.jpg",
    background: "/img/home/upperFooter.jpg",
    content: ["Swiss-based cotton trading group", "Trusted since 1788", "Focus on traceability & transparency"],
  },
  {
    name: "DEVCOT",
    logo: "/img/cotton/suppliers/devcot_logo.png",
    background: "/img/home/cotton2.png",
    content: ["Specialists in African cotton", "Reliable sourcing & delivery", "Modern logistics support"],
  },
  {
    name: "CAM NEGOCE",
    logo: "/img/cotton/suppliers/cam_logo.png",
    background: "/img/home/cotton3.png",
    content: ["Trusted cotton merchants", "Serving clients since 1952", "Reliable logistics & trade expertise"],
  },
];

export default function SuppliersSection() {
  const [index, setIndex] = useState(0);
  const [scrollingLocked, setScrollingLocked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || scrollingLocked) return;

      const bounds = sectionRef.current.getBoundingClientRect();
      const inView = bounds.top <= 0 && bounds.bottom >= window.innerHeight;

      if (inView) {
        const delta = e.deltaY;
        setScrollingLocked(true);

        setIndex((prev) => {
          if (delta > 0 && prev < suppliers.length - 1) return prev + 1;
          if (delta < 0 && prev > 0) return prev - 1;
          return prev;
        });

        setTimeout(() => {
          setScrollingLocked(false);
        }, 600); // lock for 600ms

        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollingLocked]);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Backgrounds */}
        {suppliers.map((supplier, i) => (
          <motion.img
            key={supplier.name}
            src={supplier.background}
            alt={`${supplier.name} background`}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
            animate={{ opacity: index === i ? 1 : 0 }}
          />
        ))}

        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs z-0" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center px-6 md:px-20 gap-6 md:gap-0">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mt-28 md:mt-0"
          >
            <h2 className="text-3xl font-semibold mb-12 text-white">Suppliers</h2>

            <div className="bg-white text-black rounded-full inline-block px-5 py-2 mb-4 font-medium shadow-lg">
              {suppliers[index].name}
            </div>
            <img src={suppliers[index].logo} alt="Logo" className="w-40 h-auto mb-6 md:hidden " />
            <hr className="border-white w-4/6 my-4 border-1" />
            <ul className="space-y-2 pt-4 text-white/90 leading-relaxed text-base md:text-lg">
              {suppliers[index].content.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>
          </motion.div>

          {/* Logo List */}
          <div className="hidden md:flex flex-col gap-4 items-end p-6 bg-white/30 rounded-lg shadow-lg backdrop-blur-md">
            {suppliers.map((supplier, i) => (
              <div
                key={supplier.name}
                onClick={() => setIndex(i)}
                className={clsx(
                  "p-2 bg-white rounded-md w-40 shadow-md cursor-pointer transition-all duration-300",
                  i === index ? "scale-105 ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
                )}
              >
                <img src={supplier.logo} alt={supplier.name} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
