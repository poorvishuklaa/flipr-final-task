import React, { useState } from "react";
import Instagram from "../assets/icons/negative(2).svg";
import Facebook from "../assets/icons/negative.svg";
import LinkedIn from "../assets/icons/negative(3).svg";
import Twitter from "../assets/icons/negative(4).svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      // Perform subscription logic here
      setIsSubscribed(true);
      alert("Thank you for subscribing!");
      setEmail(""); // Reset the email input
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-[#1a1a2e] text-white p-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        {/* Top section with logo and navigation links */}
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center mb-8">
          {/* Logo */}
          <a href="/" className="text-3xl font-semibold mb-4 md:mb-0">
            {'{'}Finsweet
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-lg">
            <a href="/" className="hover:text-[#FFD050]">
              Home
            </a>
            <a href="/blogs" className="hover:text-[#FFD050]">
              Blog
            </a>
            <a href="/aboutus" className="hover:text-[#FFD050]">
              About Us
            </a>
            <a href="/contactus" className="hover:text-[#FFD050]">
              Contact Us
            </a>
            <a href="/privacypolicy" className="hover:text-[#FFD050]">
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Subscription Section */}
        <div className="w-full bg-[#2e2e4d] py-6 px-8 rounded-md flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <p className="text-center md:text-left text-xl font-medium">
            Subscribe to our newsletter to get <br className="hidden md:block" />
            the latest updates and news
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded-md bg-white text-black outline-none w-full md:w-auto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Information and Social Media Links */}
        <div className="text-center">
          <p>Finstreet 118 2561 Fintown</p>
          <p>hello@finsweet.com | 020 7993 2905</p>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-2 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" className="w-6 h-6 text-gray-400 hover:text-gray-500" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 text-gray-400 hover:text-gray-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="w-6 h-6 text-gray-400 hover:text-gray-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6 text-gray-400 hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


