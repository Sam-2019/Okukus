import React from "react";
import Carousel from "react-bootstrap/Carousel";
import okuks2 from "./okuks2.jpg";
import okuks4 from "./okuks4.png";
import "./carousel.css";

const Slider = () => {
  return (
    <Carousel indicators={false} slide={true}>
      <Carousel.Item>
        <img className="d-block w-100 carousel" src={okuks2} alt=" slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel" src={okuks4} alt=" slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
