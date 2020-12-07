import React from "react";
import { render, screen } from '@testing-library/react';
import ProfileMenu from "../DialogBox/ProfileMenu";

describe("ProfileMenu renders without crashing", () => {
  test("renders ProfileMenu component", () => {
    render(<ProfileMenu />);
    screen.debug();
  });
});