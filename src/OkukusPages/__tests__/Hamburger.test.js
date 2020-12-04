import React from "react";
import ReactDOM from "react-dom";
import Hamburger from "../Hamburger/Hamburger";

it("Hamburger renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hamburger />, div);
});
