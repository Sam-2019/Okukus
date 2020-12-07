import React from "react";
import { render, screen } from "@testing-library/react";
import CartNotEmpty from "../Cart/NotEmpty";

describe("CartNotEmpty renders without crashing", () => {
  test("renders CartNotEmpty component", () => {
    render(<CartNotEmpty />);
    screen.debug();
  });
});
