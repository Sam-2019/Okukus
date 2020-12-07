import React from "react";
import { render, screen } from '@testing-library/react';
import Cart from "../Cart/Cart";

describe("Cart renders without crashing", () => {
  test("renders Cart component", () => {
    render(<Cart />);
    screen.debug();
  });
});

