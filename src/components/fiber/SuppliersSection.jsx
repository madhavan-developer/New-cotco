import React, { useEffect, useState } from "react";

const logos = [
  "/img/fiber/aditya.png",
  "/img/cotton/suppliers/louis_logo.png",
  "/img/cotton/suppliers/ecom_logo.png",
  "/img/cotton/suppliers/devcot_logo.png",
  "/img/fiber/aditya.png",
];

export default function SupplierSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0A4A78] text-white py-20 px-6 md:px-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Text Content */}
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">SUPPLIER</h2>
          <ul className="space-y-3 text-sm md:text-base text-white/90 leading-relaxed">
            <li>
              • One of the world’s largest fiber producers, part of the Aditya Birla Group, India
            </li>
            <li>
              • Main products: viscose staple fiber (VSF), modal, lyocell, supplying the global spinning industry
            </li>
            <li>
              • Market share: Birla Cellulose holds a significant share of the international viscose fiber supply,
              with annual production capacity of millions of tons
            </li>
            <li>
              • Raw materials: Utilizes wood pulp from sustainably managed forests certified by FSC
            </li>
            <li>
              • Applications: Cotton blends, knitting, weaving, nonwoven fabrics, and premium apparel
            </li>
          </ul>
        </div>

        {/* Right Slider Card */}
        <div className="bg-white rounded-xl p-6 shadow-md overflow-hidden h-full fiber-section-slider place-content-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="min-w-full flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Supplier ${index}`}
                  className="w-60 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
