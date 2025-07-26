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
    background: "/img/cotton/suppliers/viterra-bg.png",
    content: [
      "Founded: 2016 (from Glencore Agriculture), Netherlands",
      "Operations: Over 37 countries",
      "Leading cotton trading group with a large market share in Asia, Europe, and North America",
      "Strong sourcing from the USA, Australia, and West Africa",
      "Integrated supply chain: warehousing, processing, modern transportation",
      "Solid finances ensuring stable supply and large delivery capacity",
      "BCI member, committed to environmental protection and community investment",
    ],
  },
  {
    name: "ECOM",
    logo: "/img/cotton/suppliers/ecom_logo.png",
    background: "/img/cotton/suppliers/ecom-bg.jpg",
    content: [
      "Founded: 1849, Switzerland",
      "Founded: 1849, Switzerland",
      "One of the oldest and most reputable companies in the international cotton industry",
      "Procures and distributes a large volume of diverse cotton from the USA, Brazil, India, and Africa",
      "Strict quality control, serving many leading global textile groups",
      "BCI member, reducing environmental impact and supporting farming communities",
    ],
  },
  {
    name: "REINHART",
    logo: "/img/cotton/suppliers/reinhart_logo.jpg",
    background: "/img/cotton/suppliers/paul-bg.jpg",
    content: [
      "Founded: 1788, Switzerland",
      "Over 230 years of experience as one of the world’s largest and oldest cotton suppliers",
      "Stable supply from the USA, West Africa, Brazil, and India",
      "Extensive logistics network, rigorous quality control",
      "Highly regarded by partners for reputation, quality, and timely delivery",
      "BCI member, focused on sustainable development and efficient resource use",
    ],
  },
  {
    name: "DEVCOT",
    logo: "/img/cotton/suppliers/devcot_logo.png",
    background: "/img/cotton/suppliers/devcot-bg.jpg",
    content: [
      "Headquarters: Le Havre, France",
      "One of Europe’s leading cotton trading companies",
      "Strong sourcing from the USA, Brazil, West Africa, and India",
      "Clients include high-end textile manufacturers in France, Germany, Italy, and Spain",
      "Strategic location in Le Havre port, optimizing delivery costs and time",
      "BCI member, committed to a green supply chain and supporting agricultural communities",
    ],
  },
  {
    name: "CAM NEGOCE",
    logo: "/img/cotton/suppliers/cam_logo.png",
    background: "/img/cotton/suppliers/cam-bg1.png",
    content: [
      "Headquarters: France",
      "A reputable cotton trading company in Europe",
      "Main sourcing from the USA, Brazil, and West Africa",
      "Clients: textile manufacturers in France, Spain, Portugal, Morocco, Tunisia",
      "Wide procurement network, professional logistics and documentation services",
      "BCI member, committed to sustainable development and supporting farming communities",
    ],
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
    <section ref={sectionRef} className="relative h-[300vh] ">
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

        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div
          style={{ alignItems: "flex-start" }}
          className="relative z-10 h-full p-6 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center px-6 md:px-20 gap-6 md:gap-0"
        >
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            style={{ paddingTop: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mt-28 md:mt-0 suppliers-content"
          >
            <h2 className="text-3xl font-semibold mb-12 text-white">
              SUPPLIERS
            </h2>

            <div className="bg-white text-black rounded-full inline-block px-5 py-2 mb-4 font-medium shadow-lg">
              {suppliers[index].name}
            </div>
            <img
              src={suppliers[index].logo}
              alt="Logo"
              className="w-40 h-auto mb-6 md:hidden suppliers-logo"
            />
            <hr className="border-white w-4/6 my-4 border-1" />
            <ul className="space-y-2 pt-4 text-white/90 leading-relaxed text-base md:text-lg">
              {suppliers[index].content.map((line, idx) => (
                <li key={idx}>• {line}</li>
              ))}
            </ul>
          </motion.div>

          {/* Logo List */}
          <div className="hidden my-auto md:flex flex-col gap-4 items-end p-6 bg-white/30 rounded-lg shadow-lg backdrop-blur-md">
            {suppliers.map((supplier, i) => (
              <div
                key={supplier.name}
                onClick={() => setIndex(i)}
                className={clsx(
                  "p-2 bg-white rounded-md w-40 shadow-md cursor-pointer transition-all duration-300",
                  i === index
                    ? "scale-105 ring-2 ring-blue-500"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <img
                  src={supplier.logo}
                  alt={supplier.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
