import React from "react";
import { render, screen } from '@testing-library/react';
import Message from "../Message/Message";

describe("Message renders without crashing", () => {
  test("renders Message component", () => {
    render(<Message />);
    screen.debug();
  });
});