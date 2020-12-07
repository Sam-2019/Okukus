import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "../Nav/Nav";

describe("Nav renders without crashing", () => {
  test("renders Nav component", () => {
    render(<Nav />);
    screen.debug();
  });
});
