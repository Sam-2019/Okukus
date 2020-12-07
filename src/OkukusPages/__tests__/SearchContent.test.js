import React from "react";
import { render, screen } from '@testing-library/react';
import SearchContent from "../Search/Content";

describe("SearchContent renders without crashing", () => {
  test("renders SearchContent component", () => {
    render(<SearchContent />);
    screen.debug();
  });
});
