import React from "react";
import { render, screen } from '@testing-library/react';
import Products from "../Product/Products";

describe("Products renders without crashing", () => {
  test("renders Products component", () => {
    render(<Products />);
    screen.debug();
  });
});
