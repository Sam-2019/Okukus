import React from "react";
import { render, screen } from '@testing-library/react';
import ResetPassword from "../User/ResetPassword";

describe("ResetPassword renders without crashing", () => {
  test("renders ResetPassword component", () => {
    render(<ResetPassword />);
    screen.debug();
  });
});
