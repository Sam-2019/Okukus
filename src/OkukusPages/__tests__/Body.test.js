import React from "react";
import { render, screen } from '@testing-library/react';
import Body from "../Body/Body";

describe("Body renders without crashing", () => {
  test("renders Body component", () => {
    render(<Body />);
    screen.debug();
  });
});