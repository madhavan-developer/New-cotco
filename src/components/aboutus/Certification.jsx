import React from "react";

export default function Certification() {
  const logos = [
    "/img/services/certificate1.png",
    "/img/services/certificate2.png",
    "/img/services/certificate3.png",
    "/img/services/certificate4.png",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">
            Strategic alliances and certifications
          </h2>
        </div>

        {/* Logo Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Certification ${index + 1}`}
              className="h-30 w-[250px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
