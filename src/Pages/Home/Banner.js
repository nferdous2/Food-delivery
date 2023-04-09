import React from 'react';
import backgroundImage from '../Images/banner.png';
import banner2 from '../Images/banner2.png'
import Button from '../../Components/Button';
const Banner = () => {
  return (
<div className="relative">
  <img
    src={backgroundImage}
    className="hidden sm:block w-full h-full object-cover"
    alt="Background"
  />
   {/* info div  */}
  <div className="lg:mb-40 p-2 sm:visible lg:absolute inset-0 flex flex-col justify-center items-center">
    <p className="text-xl font-bold  mb-4 text-center lg:text-white sm:text-black-800">
      Food App
    </p>
    <h1 className="text-4xl font-semibold  lg:text-white sm:text-black-800 mb-2 text-center">
      Why stay hungry when you can order form Bella Onojie
    </h1>
    <p className="text-2xl lg:text-gray-300 sm:text-black-800 text-center">
      Download the Bella Onojie’s food app now on
    </p>
  
    <div className="flex justify-center items-center flex-col sm:flex-row mt-4">
    <Button  title1="Playstore" title2="App Store" rounded="rounded-full" textColor="text-orange-500" borderSm="border-orange-500"/>
    </div>
   
  </div>
  {/* 2nd image */}
  <img
      src={banner2}
      className="mx-auto w-3/4 sm:w-auto sm:h-auto lg:-mt-32 drop-shadow-2xl 	"
      alt="Second Background"
    />
</div>


  );
};

export default Banner;
