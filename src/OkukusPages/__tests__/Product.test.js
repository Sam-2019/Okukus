import React from "react";
import { render, screen } from '@testing-library/react';
import Product from "../Product/Product";

describe("Product renders without crashing", () => {
  test("renders Product component", () => {
    render(<Product />);
    screen.debug();
  });
});