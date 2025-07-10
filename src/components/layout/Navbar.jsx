import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Toggle white background when scrolled
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center transition-colors duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xl">
          <img src="/logo/logo.png" alt="Company Logo" className="h-8 w-auto" />
          <span>Cotco</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Cotton</a>
          <a href="/contact">Fiber</a>
          <a href="/">Products</a>
          <a href="/about">Resources</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md rounded-b-lg space-y-3 text-gray-700 font-medium">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/about" onClick={toggleMenu}>About</a>
          <a href="/services" onClick={toggleMenu}>Cotton</a>
          <a href="/contact" onClick={toggleMenu}>Fiber</a>
          <a href="/" onClick={toggleMenu}>Products</a>
          <a href="/about" onClick={toggleMenu}>Resources</a>
          <a href="/contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
