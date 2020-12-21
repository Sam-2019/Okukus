import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { okukus } from "../endpoints";

const Slider = () => {
  return (
    <Carousel indicators={false}     slide={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${okukus}/img/slides/okuks0.jpg`}
          alt=" slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${okukus}/img/slides/okuks1.jpg`}
          alt=" slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${okukus}/img/slides/okuks2.jpg`}
          alt=" slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${okukus}/img/slides/okuks3.jpg`}
          alt=" slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
