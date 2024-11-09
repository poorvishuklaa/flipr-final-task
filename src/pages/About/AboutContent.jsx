import React from 'react';
import Image1 from "../../assets/images/growthhands.svg";
import Image2 from "../../assets/images/posts5.svg";
import shape from "../../assets/images/shape.svg";

const AboutContent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 sm:p-8 space-y-8 sm:space-y-0 sm:space-x-8">
      {/* Left Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold">Our team of creatives</h2>
          <p className="text-gray-600 font-bold mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor.
          </p>
        </div>
        <div className="relative w-full mt-4">
          <img src={Image2} alt="Team hands" className="w-full h-60 object-cover rounded-lg" />
          <img src={shape} alt="Yellow block" className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
        <div className="relative w-full mt-4 sm:mt-0">
          <img src={Image1} alt="People talking" className="w-full h-60 object-cover rounded-lg" />
          <img src={shape} alt="Yellow block" className="absolute top-7 left-0 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="text-center sm:text-left mt-4">
          <h2 className="text-2xl font-bold">Why we started this Blog</h2>
          <p className="text-gray-600 font-bold mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
