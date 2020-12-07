import React from "react";
import { render, screen } from '@testing-library/react';
import Confirm from "../Confirmation/Confirm";

describe("Confirm renders without crashing", () => {
  test("renders Confirm component", () => {
    render(<Confirm />);
    screen.debug();
  });
});
