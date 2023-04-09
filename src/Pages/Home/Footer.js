import React from 'react';
import icon from '../Images/headericon.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <img className="w-1/6 hidden sm:block" src={icon} alt="" />
          <div className="flex -mx-2">
            <FaTwitter className="mx-2 text-button-custom" size={34} />
            <FaFacebook className="mx-2 text-button-custom" size={34} />
            <FaInstagram className="mx-2 text-button-custom" size={34} />
          </div>
          <p className="text-sm text-gray-800">© Copyright 2020 
            Bella Onojie.com
          </p>
        </div>
      </footer>
      
    );
};

export default Footer;