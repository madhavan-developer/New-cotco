import React from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/coctoproducts/hero";
import Footer from "../components/layout/Footer";
import LmwMachines from "../components/coctoproducts/LmwMachines";
import ContactToday from "../components/common/ContactToday";
const Products = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LmwMachines />
      <ContactToday />
      <Footer />
    </div>
  );
};

export default Products;
