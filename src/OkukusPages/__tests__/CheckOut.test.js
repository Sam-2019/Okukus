import React from "react";
import { render, screen } from '@testing-library/react';
import Checkout from "../Checkout/Checkout";

describe("Checkout renders without crashing", () => {
  test("renders Checkout component", () => {
    render(<Checkout />);
    screen.debug();
  });
});