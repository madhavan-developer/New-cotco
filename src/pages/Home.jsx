import HeroSection from "../components/home/HeroSection";
import ProductShowcase from "../components/home/ProductShowcase";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import VisionMissionSection from "../components/home/VisionMissionSection ";
import PartnerSection from "../components/home/PartnerSection";
import CoreStrengthSection from "../components/home/CoreStrengthSection";
import ContactToday from "../components/home/ContactToday";
import NewsEventsSection from "../components/home/NewsLetter";
import WhoWeAreSection from "../components/home/WhoWeAreSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhoWeAreSection/>
        <ProductShowcase />
        <VisionMissionSection />
        <PartnerSection />
        <CoreStrengthSection />
        <NewsEventsSection />
        <ContactToday />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
