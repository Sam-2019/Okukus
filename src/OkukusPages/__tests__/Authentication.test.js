import React from "react";
import { render, screen } from '@testing-library/react';
import Authentication from "../Auth/Authentication";

describe("Authentication renders without crashing", () => {
  test("renders Authentication component", () => {
    render(<Authentication />);
    screen.debug();
  });
});