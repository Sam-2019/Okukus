import React from "react";
import { render, screen } from '@testing-library/react';
import CheckoutComplete from "../Checkout/Complete";

describe("CheckoutComplete renders without crashing", () => {
  test("renders CheckoutComplete component", () => {
    render(<CheckoutComplete />);
    screen.debug();
  });
});
