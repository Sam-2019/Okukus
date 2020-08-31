import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { okukus } from "../apis";

const Slider = () => {
  return (
    <Carousel indicators={false}>
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

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${okukus}/img/slides/okuksslider.png`}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;