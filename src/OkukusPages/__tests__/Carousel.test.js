import React from "react";
import { render, screen } from '@testing-library/react';
import Carousel from "../Carousel/Carousel";

describe("Carousel renders without crashing", () => {
  test("renders Carousel component", () => {
    render(<Carousel />);
    screen.debug();
  });
});
