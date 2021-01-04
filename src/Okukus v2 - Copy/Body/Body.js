import React from "react";
import Products from "../Product/Products";
import Carousel from "../Carousel/Carousel";
import Welcome from "../Welcome/Welcome";
import "./body.css";

const Body = () => {
  return (
    <>
      <Welcome />
      <Carousel />
      <Products />
    </>
  );
};

export default Body;
