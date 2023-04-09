import React from "react";

const Card = ({ images, title, title1, paragraph }) => {
  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class=" w-3/4 h-full drop-shadow-2xl lg:w-auto"
            src={images}
            alt=""
          />
        </div>
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <p class="text-2xl mt-3 font-bold text-orange-500">{title}</p>
            <h1 class="text-4xl mt-3 font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {title1}
            </h1>
            <p class="mt-3 text-2xl text-gray-500 font-24">{paragraph} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
