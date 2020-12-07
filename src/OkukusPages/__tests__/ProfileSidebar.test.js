import React from "react";
import { render, screen } from '@testing-library/react';
import ProfleSidebar from "../User/Profile/Sidebar";

describe("ProfleSidebar renders without crashing", () => {
  test("renders ProfleSidebar component", () => {
    render(<ProfleSidebar />);
    screen.debug();
  });
});

