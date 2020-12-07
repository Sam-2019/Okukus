import React from "react";
import { render, screen } from '@testing-library/react';
import Context from "../Auth/Context";

describe("Context renders without crashing", () => {
  test("renders Context component", () => {
    render(<Context />);
    screen.debug();
  });
});