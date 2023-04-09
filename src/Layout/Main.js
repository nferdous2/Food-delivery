import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header"

const Main = () => {
  return (
    <div>
    <Header/>
      <Outlet />
      <Home/>

    </div>
  );
};

export default Main;
