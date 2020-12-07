import React from "react";
import { render, screen } from '@testing-library/react';
import CartEmpty from "../Cart/Empty Cart";

describe("CartEmpty renders without crashing", () => {
  test("renders CartEmpty component", () => {
    render(<CartEmpty />);
    screen.debug();
  });
});
