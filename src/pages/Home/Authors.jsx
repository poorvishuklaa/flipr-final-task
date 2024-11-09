import React from 'react';

import Instagram from "../../assets/icons/negative(2).svg";
import Facebook from "../../assets/icons/negative.svg";
import LinkedIn from "../../assets/icons/negative(3).svg";
import Twitter from "../../assets/icons/negative(4).svg";

import authorImage1 from '../../assets/images/cutegirl.svg';
import authorImage2 from '../../assets/images/cuteshoes.svg';
import authorImage3 from '../../assets/images/manbutton.svg';
import authorImage4 from '../../assets/images/womaneglasses.svg';

import logo1 from '../../assets/images/logo1.svg';
import logo2 from '../../assets/images/logo2.svg';
import logo3 from '../../assets/images/logo3.svg';
import logo4 from '../../assets/images/logo4.svg';
import logo5 from '../../assets/images/logo5.svg';

const Authors = () => {
  const authors = [
    { name: 'Floyd Miles', role: 'Content Writer @Company', image: authorImage1 },
    { name: 'Dianne Russell', role: 'Content Writer @Company', image: authorImage2 },
    { name: 'Jenny Wilson', role: 'Content Writer @Company', image: authorImage3 },
    { name: 'Leslie Alexander', role: 'Content Writer @Company', image: authorImage4 },
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: LinkedIn, href: '#' },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">List of Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {authors.map((author, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-8 text-center transition-colors duration-300 hover:bg-yellow-50">
            <a href="/AuthorsAbout" target="_blank" rel="noopener noreferrer">
              <img src={author.image} alt={author.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            </a>

            <h2 className="text-xl font-semibold mb-1">{author.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{author.role}</p>
            <div className="flex justify-center space-x-3">
              {socialIcons.map(({ Icon, href }, idx) => (
                <a key={idx} href={href} className="text-gray-400 hover:text-gray-600">
                  <img src={Icon} alt="" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-2">We are</p>
        <h2 className="text-2xl font-semibold mb-8">Featured in</h2>
        <div className="flex justify-center items-center space-x-8 flex-wrap">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt={`Featured logo ${idx + 1}`} className="h-8 mb-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
