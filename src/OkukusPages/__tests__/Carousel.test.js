import React from "react";
import ReactDOM from "react-dom";
import Carousel from "../Carousel/Carousel";

it("Carousel renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Carousel />, div);
});