import React from "react";
import { render, screen } from '@testing-library/react';
import ProfileHistory from "../User/Profile/History";

describe("ProfileHistory renders without crashing", () => {
  test("renders ProfileHistory component", () => {
    render(<ProfileHistory />);
    screen.debug();
  });
});
