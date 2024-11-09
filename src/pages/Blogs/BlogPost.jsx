// BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ category, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-8">
      {/* Image Section */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover md:w-1/3 md:h-auto rounded-lg"
      />
      
      {/* Text Section */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-purple-600 font-semibold uppercase text-xs sm:text-sm">
            {category}
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {description}
          </p>
        </div>
        
        <Link
          to="/BlogInformation"
          className="text-purple-600 font-semibold mt-3 inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;

