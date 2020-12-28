import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../User/Profile/Sidebar";

describe("Sidebar renders without crashing", () => {
  test("renders Sidebar component", () => {
    render(<Sidebar />);



    screen.getByRole("button");


  });
});
