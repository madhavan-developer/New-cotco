import React from "react";

import Navbar from "../components/layout/Navbar";
import ProductsHero from "../components/coctoproducts/ProductsHero";
import Footer from "../components/layout/Footer";
import LmwMachines from "../components/coctoproducts/LmwMachines";
import ContactToday from "../components/common/ContactToday";
const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductsHero />
      <LmwMachines />
      <ContactToday />
      <Footer />
    </div>
  );
};

export default Products;
