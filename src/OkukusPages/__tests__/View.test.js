import React from "react";
import { render, screen } from '@testing-library/react';
import View from "../Container/View/View";

describe("View renders without crashing", () => {
  test("renders View component", () => {
    render(<View />);
    screen.debug();
  });
});