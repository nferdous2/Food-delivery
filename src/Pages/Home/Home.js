import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import DownloadSection from "./DownloadSection";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Banner />
     <Cards/>
     <DownloadSection/>
     <Footer/>
    </div>
  );
};

export default Home;
