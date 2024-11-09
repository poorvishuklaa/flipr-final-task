import React from 'react';
import heroImg from "../../assets/images/posts3.svg";

const BlogsHero = () => {
  return (
    <div className="bg-purple-50 w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
              <div className="uppercase text-yellow-500 font-semibold text-xs sm:text-sm mb-2">
                FEATURED POST
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">
                Step-by-step guide to choosing great font pairs
              </h1>
              <div className="text-gray-600 text-xs sm:text-sm mb-3">
                By John Doe | May 23, 2022
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-md hover:bg-yellow-500 transition duration-300">
                Read More &gt;
              </button>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img 
                src={heroImg}
                alt="Man working at desk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
