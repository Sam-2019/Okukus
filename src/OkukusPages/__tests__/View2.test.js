import React from "react";
import { render, screen } from '@testing-library/react';
import View2 from "../Container/View/View2";

describe("View2 renders without crashing", () => {
  test("renders View2 component", () => {
    render(<View2 />);
    screen.debug();
  });
});

