import React from "react";
import { render, screen } from '@testing-library/react';
import Spinner from "../Spinner/Spinner";

describe("Spinner renders without crashing", () => {
  test("renders Spinner component", () => {
    render(<Spinner />);
    screen.debug();
  });
});