import React from "react";
import card1 from "../Images/card2.png";
import card2 from "../Images/card1.png";
import card3 from "../Images/card3.png";
import Card from "../../Components/Card";

const Cards = () => {
  return (
    <div>
      <div className="m-auto max-w-3xl p-2">
        <hr className="border-gray-300 my-4 mx-auto sm:mx-0 sm:w-full border-2" />
        <h1 className="text-4xl font-bold text-center">HOW THE APP WORKS</h1>
      </div>

      {/* card 1 div */}
      <Card
        images={card1}
        title="Create an account"
        title1="Create/login to an existing account to get started"
        paragraph="An account is created with your email and a desired password"
      />
      {/* 2nd card start */}
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <p class="text-2xl mt-3 font-bold text-orange-500">
                Explore varieties
              </p>
              <h1 class="text-4xl mt-3 font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Shop for your favorites meal as e dey hot
              </h1>

              <p class="mt-3 text-2xl text-gray-500 font-24">
                Shop for your favorite meals or drinks and enjoy while doing it.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-3/4 h-full drop-shadow-2xl lg:w-auto"
              src={card2}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ends;
      {/* card3 div  */}
      <Card
        images={card3}
        title="Checkout"
        title1="When you're done, check out and get it delivered with ease."
        paragraph="When you're done, check out and get it delivered."
      />
    </div>
  );
};

export default Cards;
