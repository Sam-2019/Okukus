import React from "react";
import { render, screen } from '@testing-library/react';
import ProfileAccount from "../User/Profile/Account";

describe("ProfileAccount renders without crashing", () => {
  test("renders ProfileAccount component", () => {
    render(<ProfileAccount />);
    screen.debug();
  });
});
