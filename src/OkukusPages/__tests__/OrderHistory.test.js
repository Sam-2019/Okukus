import React from "react";
import { render, screen } from '@testing-library/react';
import OrderHistory from "../Container/View/OrderHistory";

describe("OrderHistory renders without crashing", () => {
  test("renders OrderHistory component", () => {
    render(<OrderHistory />);
    screen.debug();
  });
});