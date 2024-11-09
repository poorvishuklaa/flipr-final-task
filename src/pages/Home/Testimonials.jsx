import React from 'react';
import arrowIcon from '../../assets/icons/arrow1.svg'; 
import authorImage from '../../assets/images/cutegirl.svg'; 

const Testimonial = () => {
  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Section */}
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">TESTIMONIALS</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What people say about our blog</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-between relative">
            <p className="text-xl font-medium text-gray-900 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center mb-4">
              <img
                src={authorImage}
                alt="Jonathan Vallem"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">Jonathan Vallem</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
            
            <div className="absolute right-4 bottom-4 flex space-x-2">
              {/* Previous Button */}
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-gray-900 hover:border-gray-900">
                <img
                  src={arrowIcon}
                  alt="Previous"
                  className="transform rotate-180 w-5 h-5 transition-colors duration-200"
                />
              </button>
              {/* Next Button */}
              <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 hover:bg-gray-900 hover:border-gray-900">
                <img src={arrowIcon} alt="Next" className="w-5 h-5 transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
