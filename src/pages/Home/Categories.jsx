import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import technology from "../../assets/icons/business.svg";
import startup from "../../assets/icons/icon(3).svg";
import economy from "../../assets/icons/icon(1).svg";
import business from "../../assets/icons/icon(3).svg";

export default function CategorySection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Choose A Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Business Category */}
          <Link to="/category" className="group">
            <div className="p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  <img src={business} alt="Business" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Business</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>

          {/* Startup Category */}
          <Link to="/category" className="group">
            <div className="p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  <img src={startup} alt="Startup" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Startup</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>

          {/* Economy Category */}
          <Link to="/category" className="group">
            <div className="p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  <img src={economy} alt="Economy" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Economy</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>

          {/* Technology Category */}
          <Link to="/category" className="group">
            <div className="p-8 border-2 border-gray-200 rounded-lg text-center transition-all duration-300 hover:bg-yellow-400">
              <div className="mb-4">
                <span className="inline-block bg-yellow-100 p-3 rounded-full">
                  <img src={technology} alt="Technology" className="w-8 h-8" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">Technology</h3>
              <p className="text-gray-600 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
