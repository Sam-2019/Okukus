import React from "react";
import { render, screen } from '@testing-library/react';
import Welcome from "../Welcome/Welcome";

describe("Welcome renders without crashing", () => {
  test("renders Welcome component", () => {
    render(<Welcome />);
    screen.debug();
  });
});