import React from "react";
import HeroImg from "../../assets/images/posts2.svg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-start text-left px-6 md:px-8 lg:px-16 text-white">
        {/* Upper small heading */}
        <p className="text-sm text-yellow-400 mb-2">POSTED ON STARTUP</p>
        
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mt-2">
          Step-by-step guide to choosing <br className="hidden md:block" /> 
          great font pairs
        </h1>
        
        {/* Subheading */}
        <p className="mt-4 text-md md:text-lg lg:text-xl max-w-2xl">
          Your subheading or tagline can be placed here, explaining the purpose of your website or product.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-[#FFD050] text-[#232536] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300">
            Read More &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
