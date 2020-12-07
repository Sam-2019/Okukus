import React from "react";
import { render, screen } from '@testing-library/react';
import TagContent from "../Tag/Content";

describe("TagContent renders without crashing", () => {
  test("renders TagContent component", () => {
    render(<TagContent />);
    screen.debug();
  });
});
