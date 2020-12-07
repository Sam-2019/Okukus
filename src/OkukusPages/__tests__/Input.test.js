import React from "react";
import { render, screen } from '@testing-library/react';
import Input from "../Input/Input";

describe("Input renders without crashing", () => {
  test("renders Input component", () => {
    render(<Input />);
    screen.debug();
  });
});