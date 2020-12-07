import React from "react";
import { render, screen } from '@testing-library/react';
import NotFound from "../404/404";

describe("NotFound renders without crashing", () => {
  test("renders NotFound component", () => {
    render(<NotFound />);
    screen.debug();
  });
});
