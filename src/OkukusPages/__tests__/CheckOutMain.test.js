import React from "react";
import { render, screen } from '@testing-library/react';
import CheckoutMain from "../Checkout/Main";

describe("CheckoutMain renders without crashing", () => {
  test("renders CheckoutMain component", () => {
    render(<CheckoutMain />);
    screen.debug();
  });
});
