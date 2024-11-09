import React from 'react';
import GroupImage from "../../assets/images/holdinghandsbg.svg";

const Story = () => {
  return (
    <div className="relative max-w-6xl mx-auto p-4">
      {/* Image Section */}
      <div className="w-full md:w-2/3">
        <img 
          src={GroupImage} 
          alt="Friends enjoying a view" 
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="absolute top-4 md:top-10 right-0 bg-white w-full md:w-1/2 p-6 md:p-8 lg:p-12 shadow-lg max-w-md md:max-w-none">
        <h3 className="text-gray-600 text-xs md:text-sm font-semibold mb-2 md:mb-4 uppercase">
          WHY WE STARTED
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <button className="bg-yellow-400 text-black font-semibold py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-yellow-500 transition duration-300">
          Discover our story
        </button>
      </div>
    </div>
  );
};

export default Story;
