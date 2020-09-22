import React from "react";
import Carousel from "react-bootstrap/Carousel";
import okuks0 from "./okuks0.jpg";
import okuks1 from "./okuks1.jpg";
import okuks2 from "./okuks2.jpg";
import okuks3 from "./okuks3.jpg";
import okuks4 from "./okuks4.png";

const Slider = () => {
  return (
    <Carousel indicators={false}
    slide={true}
    >
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
        <img className="d-block w-100" src={okuks4} alt=" slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
