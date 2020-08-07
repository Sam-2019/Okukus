import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import okuks0 from "./okuks0.jpg";
import okuks1 from "./okuks1.jpg";
import okuks2 from "./okuks2.jpg";
import okuks3 from "./okuks3.jpg";
import okuksslider from "./okuksslider.png";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={okuks0} alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={okuks1} alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={okuks2} alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={okuks3} alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={okuksslider} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}
