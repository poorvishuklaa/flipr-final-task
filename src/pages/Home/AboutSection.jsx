import React from 'react';
import yellowLine from '../../assets/images/shape.svg'
import purpleLine from '../../assets/images/shape1.svg'; // Replace with the actual path to your purple line image

const AboutSection = () => {
  return (
    // max-w-screen-lg mx-auto p-8
    <div className="bg-[#F4F0F8] p-10 md:px-20 lg:px-32 relative">
    {/* Top right corner lines */}
    <div className="absolute top-0 right-0 flex">
      <img src={yellowLine} alt="Yellow Line" className="w-[500px] h-[30px]" style={{ marginRight: '-2px' }} />
      <img src={purpleLine} alt="Purple Line" className="w-[250px] h-[30px]" />
    </div>

      {/* Content */}
      <div className="pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">About Us</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              We are a community of content writers who share their learnings
            </h2>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-indigo-600 font-medium">
              Read More &gt;
            </a>
          </div>

          {/* Our Mission Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">Our Mission</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;