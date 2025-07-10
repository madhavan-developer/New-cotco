import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cotton", href: "/services" },
  { label: "Fiber", href: "/contact" },
  { label: "Products", href: "/" },
  { label: "Resources", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 80);
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  } ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`;

  const linkClass = `transition-colors duration-300 font-medium ${
    scrolled ? "text-[#121E2B] hover:text-blue-600" : "text-white hover:text-blue-300"
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-16">
            {menuLinks.map(({ label, href }) => (
              <a key={label} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div
            className={`md:hidden text-2xl cursor-pointer z-[60] ${
              isOpen ? "text-white" : "text-gray-800"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#0A1C2E] text-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Close Button Top Right */}
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>

            {/* Menu Items */}
            <div className="space-y-8 grid text-center">
              {menuLinks.map(({ label, href }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={toggleMenu}
                  className="text-2xl font-semibold hover:text-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
