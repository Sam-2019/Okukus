import React from "react";
import { render, screen } from '@testing-library/react';
import WishItems from "../Container/View/WishItems";

describe("WishItems renders without crashing", () => {
  test("renders WishItems component", () => {
    render(<WishItems />);
    screen.debug();
  });
});
