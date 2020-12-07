import React from "react";
import { render, screen } from '@testing-library/react';
import Profile from "../User/Profile";

describe("Profile renders without crashing", () => {
  test("renders Profile component", () => {
    render(<Profile />);
    screen.debug();
  });
});