import React from "react";
import { render, screen } from '@testing-library/react';
import CartItems from "../Container/View/CartItems";

describe("CartItems renders without crashing", () => {
  test("renders CartItems component", () => {
    render(<CartItems />);
    screen.debug();
  });
});
