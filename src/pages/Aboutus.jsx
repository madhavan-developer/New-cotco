import React from "react";

import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/aboutus/HeroSection";
import CoreValues from "../components/aboutus/CoreValues";
import VissionMission from "../components/aboutus/VissionMission";
import OurTeam from "../components/aboutus/OurTeam";
import Certification from "../components/aboutus/Certification";
import Partner from "../components/aboutus/Partners";
import Footer from "../components/layout/Footer";
import ExpertiseTimeline from "../components/aboutus/ExpertiseTimeline";

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VissionMission />
      <CoreValues />
      <OurTeam />
      <ExpertiseTimeline />
      <Certification />
      <Partner />
      <Footer />
    </div>
  );
};

export default Aboutus;
