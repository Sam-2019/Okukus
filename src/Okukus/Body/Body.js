import React from "react";
import All from "./all";
import Carousel from "./Carousel/Carousel";

import "./body.css";

const Body = () => {
  return (
    <div className=''>
      <Carousel />
      <All />
    </div>
  );
};

export default Body;
