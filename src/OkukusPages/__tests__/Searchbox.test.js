import React from "react";
import { render, screen } from '@testing-library/react';
import Searchbox from "../Search/Searchbox";

describe("Searchbox renders without crashing", () => {
  test("renders Searchbox component", () => {
    render(<Searchbox />);
    screen.debug();
  });
});