import React from "react";
import { render, screen } from '@testing-library/react';
import ProfilePassword from "../User/Profile/Password";

describe("ProfilePassword renders without crashing", () => {
  test("renders ProfilePassword component", () => {
    render(<ProfilePassword />);
    screen.debug();
  });
});