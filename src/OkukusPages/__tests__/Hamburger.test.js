import React from "react";
import { render, screen } from '@testing-library/react';
import Hamburger from "../Hamburger/Hamburger";

describe("Hamburger renders without crashing", () => {
  test("renders Hamburger component", () => {
    render(<Hamburger />);
    screen.debug();
  });
});
