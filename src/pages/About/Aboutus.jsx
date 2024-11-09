import React from 'react';
import GroupImage from "../../assets/images/holdinghandsbg.svg";

const Aboutus = () => {
  return (
    <div className="p-6 sm:p-8 space-y-12 bg-gray-100">
      {/* Top Content Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">
        <div className="w-full sm:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">About Us</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            We are a team of content writers who share their learnings
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-full sm:w-1/2 relative">
          <img src={GroupImage} alt="People with arms around each other" className="w-full h-64 sm:h-80 object-cover rounded-lg" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-center text-white py-3 px-8 rounded-lg shadow-lg w-11/12 max-w-xl flex justify-around space-x-4 sm:space-x-6">
            <div>
              <p className="text-2xl sm:text-3xl font-bold">12+</p>
              <p className="text-sm">Blogs Published</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">18K+</p>
              <p className="text-sm">Views on Finsweet</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">30K+</p>
              <p className="text-sm">Total active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8 bg-[#F4F0F8] p-6 sm:p-8 rounded-lg shadow-md">
        {/* Left Block */}
        <div className="w-full sm:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Our Mission</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Creating valuable content for creatives all around the world</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        {/* Right Block */}
        <div className="w-full sm:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Our Vision</p>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">A platform that empowers individuals to improve</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

