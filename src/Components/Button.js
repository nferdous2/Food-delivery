import React from "react";

const Button = ({ title1, title2, rounded ,textColor,borderSm}) => {
  return (
    <div>
      <button
        className={`bg-button-custom  text-white font-bold px-4 py-2 m-2 ${rounded}`}
      >
        {title1}
      </button>
      <button
        className={`border-2 ${borderSm} lg:border-white lg:text-white ${textColor} sm:text-orange-500 sm:border-orange-500 font-bold py-2 px-4  bg-transparent ${rounded}`}
      >
        {title2}
      </button>
    </div>
  );
};

export default Button;
