import React from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/cotton/hero";
import Footer from "../components/layout/Footer";
import SuppliersSection from "../components/cotton/SuppliersSection";
import CottonTrustSection from "../components/cotton/CottonTrustSection";
import CertificationSliderSection from "../components/cotton/CertificationSliderSection";
const Cotton = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SuppliersSection />
      <CottonTrustSection />
      <CertificationSliderSection />
      <Footer />
    </div>
  );
};

export default Cotton;
