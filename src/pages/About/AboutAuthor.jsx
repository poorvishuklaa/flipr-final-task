// AboutAuthor.js
import React from 'react';

import Instagram from "../../assets/icons/negative(2).svg";
import Facebook from "../../assets/icons/negative.svg";
import LinkedIn from "../../assets/icons/negative(3).svg";
import Twitter from "../../assets/icons/negative(4).svg";

import authorImage1 from '../../assets/images/cutegirl.svg';
import authorImage2 from '../../assets/images/cuteshoes.svg';
import authorImage3 from '../../assets/images/manbutton.svg';
import authorImage4 from '../../assets/images/womaneglasses.svg';

import authorImage5 from '../../assets/images/mantie.svg';
import authorImage6 from '../../assets/images/yellowflower.svg';
import authorImage7 from '../../assets/images/blackstriped.svg';
import authorImage8 from '../../assets/images/cutegirl.svg';

const AboutAuthor = () => {
    const authors = [
      { name: 'Floyd Miles', role: 'Content Writer @Company', image: authorImage1 },
      { name: 'Dianne Russell', role: 'Content Writer @Company', image: authorImage2 },
      { name: 'Jenny Wilson', role: 'Content Writer @Company', image: authorImage3 },
      { name: 'Leslie Alexander', role: 'Content Writer @Company', image: authorImage4 },
      { name: 'Guy Hawkins', role: 'Content Writer @Company', image: authorImage5 },
      { name: 'Eleanor Pena', role: 'Content Writer @Company', image: authorImage6 },
      { name: 'Robert Fox', role: 'Content Writer @Company', image: authorImage7 },
      { name: 'Jacob Jones', role: 'Content Writer @Company', image: authorImage8 },
    ];

    const socialIcons = [
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
      { Icon: LinkedIn, href: '#' },
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">List of Authors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {authors.map((author, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center transition duration-300 hover:bg-yellow-50">
              <img src={author.image} alt={author.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover" />
              <h2 className="text-lg sm:text-xl font-semibold mb-1">{author.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{author.role}</p>
              <div className="flex justify-center space-x-3">
                {socialIcons.map(({ Icon, href }, idx) => (
                  <a key={idx} href={href} className="text-gray-400 hover:text-gray-600">
                    <img src={Icon} alt="social icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AboutAuthor;
