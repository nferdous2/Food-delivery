import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import headerIcon from "../Images/headericon.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
// for menu otpion 
  const menuClass = isMenuOpen
    ? 'block lg:flex lg:items-center w-full lg:w-auto'
    : 'hidden lg:flex lg:items-center w-full lg:w-auto';

  return (
    <nav className="flex p-2 items-center justify-between">
      <div className="flex items-center">
        <img src={headerIcon} className="w-1/2 lg:w-1/4" alt=''/>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 lg:hidden"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* map the navlists */}
        <div className={menuClass}>
          {[
            ['Home'],
            ['Product'],
            ['FAQ'],
            ['Contact'],
          ].map(([title]) => (
            <a
             href=''
              className={`block mt-4 mr-12 lg:inline-block lg:mt-0 ml-12 ${title === 'Home' ? 'text-orange-500 font-bold' : 'font-bold'}`}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
