import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-[#0A1C2E] text-white px-6 md:px-40 pt-40 pb-20 footer-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Logo + Social */}
          <div className="space-y-8">
            <div>
              <img src="/img/home/footerLogo.png" alt="Cotco Logo" className="h-26" />
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded border border-gray-500 hover:bg-white group">
                <FaFacebookF className="text-white group-hover:text-[#0A1C2E]" />
              </a>
              <a href="#" className="p-2 rounded border border-gray-500 hover:bg-white group">
                <FaTwitter className="text-white group-hover:text-[#0A1C2E]" />
              </a>
              <a href="#" className="p-2 rounded border border-gray-500 hover:bg-white group">
                <FaPinterestP className="text-white group-hover:text-[#0A1C2E]" />
              </a>
              <a href="#" className="p-2 rounded border border-gray-500 hover:bg-white group">
                <FaInstagram className="text-white group-hover:text-[#0A1C2E]" />
              </a>
              <a href="#" className="p-2 rounded border border-gray-500 hover:bg-white group">
                <FaLinkedinIn className="text-white group-hover:text-[#0A1C2E]" />
              </a>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="grid grid-cols-2 gap-10 text-sm md:pl-20">
            <div className="space-y-5">
              <p className="font-medium text-white text-lg">Product</p>
              <p className="font-medium text-white text-lg">Solutions</p>
              <p className="font-medium text-white text-lg">Customers</p>
              <p className="font-medium text-white text-lg">Blog</p>
            </div>
            <div className="space-y-5">
              <p className="font-medium text-white text-lg">Contact Us</p>
              <p className="font-medium text-white text-lg">Press</p>
              <p className="font-medium text-white text-lg">Support</p>
            </div>
          </div>
        </div>

        {/* Newsletter Form: Right Bottom Corner */}
        <div className="flex justify-end mt-12">
          <div className="w-full md:w-[500px]">
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 md:px-4 px-2 py-3 bg-transparent text-white border border-gray-400 rounded-l-md placeholder-gray-300 focus:outline-none"
              />
              <button className="bg-white text-[#0A1C2E] md:px-6 px-3 py-3 rounded-r-md hover:bg-gray-100 font-medium flex items-center gap-2">
                Get Started <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-700 mt-20 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
