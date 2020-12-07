import React from "react";
import { render, screen } from '@testing-library/react';
import ProfileWishList from "../User/Profile/WishList";

describe("ProfileWishList renders without crashing", () => {
  test("renders ProfileWishList component", () => {
    render(<ProfileWishList />);
    screen.debug();
  });
});
