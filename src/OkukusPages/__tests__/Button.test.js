import React from "react";
import { render, screen } from '@testing-library/react';
import Button from "../Button/Button";

describe("Button renders without crashing", () => {
  test("renders Button component", () => {
    render(<Button />);
    screen.debug();
  });
});