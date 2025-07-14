import React from "react";

const sections = [
  {
    title: "KEY STRENGTHS",
    lines: [
      "Global distribution network across Asia, Europe, and the Americas",
      "Strict quality control systems",
      "Integrated production from raw materials to finished fiber",
    ],
  },
  {
    title: "SUSTAINABILITY",
    lines: [
      "Pioneer in circular economy technologies",
      "Reducing CO2 emissions and water consumption",
      "Member of global initiatives such as Canopy, ZDHC, Higg Index",
    ],
  },
  {
    title: "FEATURED",
    lines: [
      "Birla Viscose – high-quality standard viscose fiber",
      "Birla Modal – premium fiber with softness and colorfastness",
      "Birla Excel – eco-friendly lyocell fiber",
    ],
  },
];

export default function FiberInfoBlocks() {
  return (
    <section className="w-full divide-y divide-gray-200">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden bg-white"
        >
          {/* Door effect - top and bottom */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#0A4A78] z-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0A4A78] z-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

          {/* Content Row */}
          <div className="relative z-10 px-6 md:px-20 py-16 transition-all duration-500 group-hover:text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-20">
            {/* Title */}
            <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide  min-w-[180px] outlined-text">
              {section.title}
            </h3>

            {/* Lines */}
            <ul className="space-y-3 text-sm md:text-base leading-relaxed">
              {section.lines.map((line, i) => (
                <li
                  key={i}
                  className="relative pl-6 before:absolute before:left-0 before:top-1 before:content-['--']"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
