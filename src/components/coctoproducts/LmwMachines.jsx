import React from "react";
import { FiArrowRight } from "react-icons/fi";
import SlideIn from "../common/SlideIn";

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
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        MAIN MACHINE FROM LMW
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15">
        {machines.map((machine, index) => (
            <SlideIn direction="up" key={index}>
  <div className="rounded-xl bg-white overflow-hidden shadow-md">
    <img
      src={machine.image}
      alt={machine.name}
      className="w-full h-80 object-cover"
    />
    <div className="bg-[#0D3B66] text-white p-4 flex justify-between items-center">
      <span className="font-semibold uppercase">{machine.name}</span>
      <button
        className="w-10 h-10 rounded-full border border-white flex items-center justify-center 
                   hover:bg-white hover:text-[#0D3B66] hover:rotate-[-30deg] transition-all duration-300"
      >
        <FiArrowRight />
      </button>
    </div>
  </div>
</SlideIn>

        ))}
      </div>
    </section>
  );
}
