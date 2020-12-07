import React from "react";
import { render, screen } from '@testing-library/react';
import CheckoutSummary from "../Checkout/Summary";

describe("CheckoutSummary renders without crashing", () => {
  test("renders CheckoutSummary component", () => {
    render(<CheckoutSummary />);
    screen.debug();
  });
});
