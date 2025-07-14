import React from "react";

import Navbar from "../components/layout/Navbar";
import FiberHero from "../components/fiber/hero";
import Footer from "../components/layout/Footer";
import SupplierSection from "../components/fiber/SuppliersSection";
import FiberHighlightsSection from "../components/fiber/FiberHighlightsSection";
const Fiber = () => {
  return (
    <div>
      <Navbar />
      <FiberHero />
      <SupplierSection />
      <FiberHighlightsSection />
      <Footer />
    </div>
  );
};

export default Fiber;
