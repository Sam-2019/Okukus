import React from "react";
import { render, screen } from '@testing-library/react';
import Signup from "../User/Signup";

describe("Signup renders without crashing", () => {
  test("renders Signup component", () => {
    render(<Signup />);
    screen.debug();
  });
});
