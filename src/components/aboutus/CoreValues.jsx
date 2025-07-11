import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};


export default function CoreValuesSection() {
  return (
    <section className="px-4 md:px-20 py-16 bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[320px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Core Values with overlapping image */}
        <motion.div
          variants={fadeInUp}
          className="relative bg-[#edf3fb] rounded-xl md:p-20 p-6 flex items-center justify-center text-center"
        >
          <h2 className="text-2xl font-bold z-10">Core Values</h2>
        </motion.div>

        {/* Trust */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#edf3fb] rounded-xl md:p-20 p-6 place-content-center"
        >
          <h3 className="text-lg font-bold mb-2">Trust</h3>
          <p className="text-medium text-gray-700">
            We act with integrity, ensuring reliability in every transaction
          </p>
        </motion.div>

        {/* Quality */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#edf3fb] rounded-xl md:p-20 p-6 place-content-center"
        >
          <h3 className="text-lg font-bold mb-2">Quality</h3>
          <p className="text-medium text-gray-700">
            We insist on premium standards for all products and services.
          </p>
        </motion.div>

        {/* Cotton Field Image */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-2 rounded-xl"
        >
          <img
            src="/img/services/image3.png"
            alt="Cotton Field"
            className="w-full md:-mt-[198px] relative"
          />
        </motion.div>

        {/* Service */}
        <motion.div
          variants={fadeInUp}
          className="bg-[#edf3fb] rounded-xl md:p-20 p-6 place-content-center"
        >
          <h3 className="text-lg font-bold mb-2">Service</h3>
          <p className="text-medium text-gray-700">
            We provide attentive, expert support from inquiry to delivery and
            beyond.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
