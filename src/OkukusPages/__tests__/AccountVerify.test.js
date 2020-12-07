import React from "react";
import { render, screen } from '@testing-library/react';
import AccountVerify from "../User/AccountVerify";

describe("AccountVerify renders without crashing", () => {
  test("renders AccountVerify component", () => {
    render(<AccountVerify />);
    screen.debug();
  });
});