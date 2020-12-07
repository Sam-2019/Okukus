import React from "react";
import { render, screen } from '@testing-library/react';
import NewPassword from "../User//NewPassword";

describe("NewPassword renders without crashing", () => {
  test("renders NewPassword component", () => {
    render(<NewPassword />);
    screen.debug();
  });
});

