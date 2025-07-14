import React from "react";
import { FiArrowRight } from "react-icons/fi";

const machines = [
  {
    name: "BLOWROOM SYSTEM",
    image: "/img/products/blowroom.jpg",
  },
  {
    name: "RING SPINNING SYSTEM",
    image: "/img/products/ring.jpg",
  },
  {
    name: "COMBER SYSTEM",
    image: "/img/products/comber.jpg",
  },
  {
    name: "COMPACT SPINNING SYSTEM",
    image: "/img/products/compact.jpg",
  },
  {
    name: "Mill Network System",
    image: "/img/products/mill.jpg",
  },
  {
    name: "CARDING SYSTEM",
    image: "/img/products/carding.jpg",
  },
];

export default function LmwMachines() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        Main Machines from LMW
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {machines.map((machine, index) => (
          <div key={index} className="rounded-xl bg-white">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-80 mb-4 rounded-xl object-cover"
            />
            <div className="bg-[#0D3B66] text-white rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold">{machine.name.toUpperCase()}</span>
              <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0D3B66] hover:rotate-[-30deg] transition-colors">
                <FiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
