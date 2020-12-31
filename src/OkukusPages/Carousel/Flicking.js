import React from "react";
import Flicking from "@egjs/react-flicking";
import { okukus } from "../endpoints";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

const Slider = () => {
  this.plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
  return (
    <>
      <Flicking
        className="flicking"
        circular={true}
        gap={10}
        duration={500}
        plugins={this.plugins}
      >
        <div className="panel">
          <img src={`${okukus}/img/slides/okuks0.jpg`} />
        </div>
        <div className="panel">
          <img src={`${okukus}/img/slides/okuks1.jpg`} />
        </div>
        <div className="panel">
          <img src={`${okukus}/img/slides/okuks2.jpg`} />
        </div>
      </Flicking>
    </>
  );
};

export default Slider;
