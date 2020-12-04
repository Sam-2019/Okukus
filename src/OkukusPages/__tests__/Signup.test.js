import React from "react";
import ReactDOM from "react-dom";
import Signup from "../User/Signup";

it("Signup renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Signup />, div);
});
