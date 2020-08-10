import React, { useState, useEffect, Component } from "react";
import All from "./all";
import Bags from "./bags";
import Books from "./books";
import Clothes from "./clothes";
import Shoes from "./shoes";
import ButtonBar from "./ButtonBar";
import Carousel from "./Carousel/Carousel";
import axios from "axios";
import data from "../files/data";

import "./body.css";
import products from "../files/products";

const Body = () => {


  return (
    <>
      <div className="">
        <Carousel />

        <div className="p-1 body-background">
          <All />
        </div>
      </div>
    </>
  );
};

export default Body;
