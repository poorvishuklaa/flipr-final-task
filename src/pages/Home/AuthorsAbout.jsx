import React from 'react';
import Image from "../../assets/images/yellowflower.svg";
import Image2 from "../../assets/images/posts4.svg";
import Image3 from "../../assets/images/building.svg";

import Instagram from "../../assets/icons/negative(2).svg";
import Facebook from "../../assets/icons/negative.svg";
import LinkedIn from "../../assets/icons/negative(3).svg";
import Twitter from "../../assets/icons/negative(4).svg";


const AuthorsAbout = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-[#F4F0F8] pt-16 pb-12 px-6">
                <div className="max-w-5xl mx-auto flex items-center space-x-8">
                    {/* Profile Image */}
                    <img
                        src={Image} // Replace with your profile image URL
                        alt="Author"
                        className="w-45 h-45 object-cover"
                    />
                    {/* Text Content */}
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Hey there, I’m Andrew Johnson<br />and welcome to my Blog
                        </h1>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                            Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-4 text-gray-600">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={Twitter} alt="Twitter" className="w-4 h-4" /> {/* Replace with your Twitter icon URL */}
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} alt="Facebook" className="w-4 h-4" /> {/* Replace with your Facebook icon URL */}
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" className="w-4 h-4" /> {/* Replace with your Instagram icon URL */}
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4" /> {/* Replace with your LinkedIn icon URL */}
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* My Posts Section */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-8">My Posts</h2>

                {/* Post 1 */}
                <div className="flex items-start space-x-8 mb-10">
                    {/* Post Image */}
                    <img
                        src={Image2} // Replace with your first post image URL
                        alt="Post 1"
                        className="w-60 h-40 object-cover rounded-lg"
                    />
                    {/* Post Content */}
                    <div>
                        <span className="text-purple-600 uppercase font-semibold text-sm">Business</span>
                        <h3 className="text-2xl font-bold mt-2 mb-4">
                            Font sizes in UI design: The complete guide to follow
                        </h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* Post 2 */}
                <div className="flex items-start space-x-8">
                    {/* Post Image */}
                    <img
                        src={Image3} // Replace with your second post image URL
                        alt="Post 2"
                        className="w-60 h-40 object-cover rounded-lg"
                    />
                    {/* Post Content */}
                    <div>
                        <span className="text-green-600 uppercase font-semibold text-sm">Economy</span>
                        <h3 className="text-2xl font-bold mt-2 mb-4">
                            How to build rapport with your web design clients
                        </h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorsAbout;
