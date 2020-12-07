import React from "react";
import { render, screen } from '@testing-library/react';
import Tag from "../Tag/Tag";

describe("Tag renders without crashing", () => {
  test("renders Tag component", () => {
    render(<Tag />);
    screen.debug();
  });
});
