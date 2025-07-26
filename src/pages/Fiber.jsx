import React from "react";

import Navbar from "../components/layout/Navbar";
import FiberHero from "../components/fiber/FiberHero";
import Footer from "../components/layout/Footer";
import SupplierSection from "../components/fiber/SuppliersSection";
import FiberHighlightsSection from "../components/fiber/FiberHighlightsSection";
import SustainabilitySection from "../components/fiber/SustainabilitySection";
import WhyChooseViscose from "../components/fiber/WhyChooseViscose";
const Fiber = () => {
  return (
    <div>
      <Navbar />
      <FiberHero />
      <SustainabilitySection/>
      <WhyChooseViscose/>
      <SupplierSection />
      <FiberHighlightsSection />
      <Footer />
    </div>
  );
};

export default Fiber;
