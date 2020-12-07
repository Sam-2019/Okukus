import React from "react";
import { render, screen } from '@testing-library/react';
import Login from "../User/Login";

describe("Login renders without crashing", () => {
  test("renders Login component", () => {
    render(<Login />);
    screen.debug();
  });
});

