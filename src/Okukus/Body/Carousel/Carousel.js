import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Slider extends React.Component {
  render() {
    return (
      <Carousel indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src='https://www.okukus.com/img/slides/okuks0.jpg' alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='http://okukus.com/img/slides/okuks1.jpg' alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='http://okukus.com/img/slides/okuks2.jpg' alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='http://okukus.com/img/slides/okuks3.jpg' alt=" slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src='http://okukus.com/img/slides/okuksslider.png' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    );
  }
}
