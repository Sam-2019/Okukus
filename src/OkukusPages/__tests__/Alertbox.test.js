import React from "react";
import { render, screen } from '@testing-library/react';
import AlertBox from "../DialogBox/AlertBox";

describe("AlertBox renders without crashing", () => {
  test("renders AlertBox component", () => {
    render(<AlertBox />);
    screen.debug();
  });
});