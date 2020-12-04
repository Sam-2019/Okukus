import React from "react";
import ReactDOM from "react-dom";
import View from "../Container/View/View";

it("View renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<View />, div);
});
