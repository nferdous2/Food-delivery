import React from "react";
import backgroundImage from "../Images/offer.png";
import Button from "../../Components/Button";

const DownloadSection = () => {
  return (
    <div className="relative p-3">
      <img
        src={backgroundImage}
        className="hidden sm:block w-full h-full object-cover"
        alt="Background"
      />
      <div className="bg-custom sm:bg-transparent sm:visible lg:absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold  text-white  mb-2 text-center">
          Download the app now.
        </h1>
        <p className="text-2xl text-gray-300  text-center">
          Available on your favorite store. Start your premium experience now{" "}
        </p>
        <div className="flex justify-center items-center flex-col sm:flex-row mt-4">
        <Button title1="Playstore" title2="App Store" rounded="rounded"textColor="text-white"
        />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
