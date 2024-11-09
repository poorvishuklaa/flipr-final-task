import React from 'react';
import GroupImage from "../../assets/images/twowomen.svg";
import GroupImage2 from "../../assets/images/handshake.svg";
import GroupImage3 from "../../assets/images/posts4.svg";
import GroupImage4 from "../../assets/images/posts5.svg";

export default function CategoryPage() {
  return (
    <div>
      {/* Title Section with Purple Background */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Business</h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <p className="text-gray-500 mt-2">Blog {'>'} Business</p>
          </div>
        </div>
      </div>

        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex mb-8">
              <img src={GroupImage} alt="Business" className="w-32 h-32 object-cover rounded-lg mr-6" />
              <div>
                <span className="text-purple-600 font-semibold uppercase">Business</span>
                <h2 className="text-2xl font-semibold text-gray-800 mt-2">
                  {`Title of the Blog Post ${item}`}
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </div>
            </div>
          ))}
        </div>

          {/* Sidebar Section */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Categories */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center p-2 border rounded-lg hover:bg-yellow-300 transition-colors">
                  <img src={GroupImage} alt="Startup" className="w-5 h-5 mr-2" />
                  <span className="text-gray-800">Startup</span>
                </a>
                <a href="#" className="flex items-center p-2 border rounded-lg hover:bg-yellow-300 transition-colors">
                  <img src={GroupImage2} alt="Business" className="w-5 h-5 mr-2" />
                  <span className="text-gray-800">Business</span>
                </a>
                <a href="#" className="flex items-center p-2 border rounded-lg hover:bg-yellow-300 transition-colors">
                  <img src={GroupImage3} alt="Economy" className="w-5 h-5 mr-2" />
                  <span className="text-gray-800">Economy</span>
                </a>
                <a href="#" className="flex items-center p-2 border rounded-lg hover:bg-yellow-300 transition-colors">
                  <img src={GroupImage4} alt="Technology" className="w-5 h-5 mr-2" />
                  <span className="text-gray-800">Technology</span>
                </a>
              </div>
            </div>

            {/* Tags Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">All Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

