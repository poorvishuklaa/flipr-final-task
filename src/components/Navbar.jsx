import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#232536] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          {'{'}Finsweet
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm">
          <Link to="/" className="hover:text-[#FFD050]">Home</Link>
          <Link to="/blogs" className="hover:text-[#FFD050]">Blog</Link>
          <Link to="/aboutus" className="hover:text-[#FFD050]">About Us</Link>
          <Link to="/contactus" className="hover:text-[#FFD050]">Contact Us</Link>
        </div>

        {/* Subscribe Button for Desktop */}
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 hidden md:block">
          Subscribe
        </button>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (shown/hidden based on state) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to="/" className="hover:text-[#FFD050]">Home</Link>
          <Link to="/blogs" className="hover:text-[#FFD050]">Blog</Link>
          <Link to="/aboutus" className="hover:text-[#FFD050]">About Us</Link>
          <Link to="/contactus" className="hover:text-[#FFD050]">Contact Us</Link>
          {/* Subscribe Button for Mobile */}
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

