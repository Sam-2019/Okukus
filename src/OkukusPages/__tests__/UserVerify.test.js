import React from "react";
import { render, screen } from '@testing-library/react';
import UserVerify from "../User/UserVerify";

describe("UserVerify renders without crashing", () => {
  test("renders UserVerify component", () => {
    render(<UserVerify />);
    screen.debug();
  });
});
