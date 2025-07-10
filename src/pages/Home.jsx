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

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
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
