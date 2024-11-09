import React from 'react';
import Image from "../../assets/images/wearingglasses.svg";
import logo from "../../assets/images/Image.svg";
import icon from "../../assets/icons/icon(2).svg";

import GroupImage from "../../assets/images/twowomen.svg";
import GroupImage2 from "../../assets/images/handshake.svg";
import GroupImage3 from "../../assets/images/posts4.svg";

const BlogInformation = () => {
    return (
        <div className="bg-white text-gray-900 font-sans max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Author and Title Section */}
            <div className="py-10">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                        <img src={logo} alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">
                        <p className="text-blue-600 font-semibold">Andrew Jonson</p>
                        <p className="text-gray-500">Posted on 27th January 2022</p>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mt-6 leading-tight">
                    Step-by-step guide to choosing<br className="hidden sm:block" /> great font pairs
                </h1>
                <div className="flex items-center mt-4">
                    <img src={icon} alt="Icon" className="w-5 h-5 mr-2" />
                    <span className="text-gray-500 font-medium">Startup</span>
                </div>
            </div>

            {/* Main Image */}
            <div className="w-full h-64 sm:h-80 bg-gray-300 overflow-hidden rounded-lg">
                <img src={Image} alt="Main" className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="py-8 space-y-3">
                <p className="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <ul className="list-disc list-inside space-y-1 text-gray-600 font-bold">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt</li>
                </ul>

                <p className="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            {/* Recommended Articles Section */}
            <div className="py-10 bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">What to read next</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Article Card 1 */}
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <img src={GroupImage} alt="Article 1" className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">By Andrew Jonson | Startup</p>
                        <p className="font-semibold">A UX Case Study Creating a Studious Environment for Students</p>
                    </div>

                    {/* Article Card 2 */}
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <img src={GroupImage2} alt="Article 2" className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">By Andrew Jonson | Startup</p>
                        <p className="font-semibold">A UX Case Study Creating a Studious Environment for Students</p>
                    </div>

                    {/* Article Card 3 */}
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        <img src={GroupImage3} alt="Article 3" className="w-full h-40 object-cover rounded-md mb-4" />
                        <p className="text-gray-500 text-sm mb-2">By Andrew Jonson | Startup</p>
                        <p className="font-semibold">A UX Case Study Creating a Studious Environment for Students</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogInformation;
