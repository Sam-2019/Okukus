import React from "react";
import { render, screen } from '@testing-library/react';
import Footer from "../Footer/Footer";

describe("Footer renders without crashing", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    screen.debug();
  });
});
