import React from "react";
import { render, screen } from '@testing-library/react';
import Order from "../Order/newOrder";

describe("Order renders without crashing", () => {
  test("renders Order component", () => {
    render(<Order />);
    screen.debug();
  });
});