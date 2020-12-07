import React from "react";
import { render, screen } from '@testing-library/react';
import Okukus from "../Okukus";

describe("Okukus renders without crashing", () => {
  test("renders Okukus component", () => {
    render(<Okukus />);
    screen.debug();
  });
});