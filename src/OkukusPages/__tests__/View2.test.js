import React from "react";
import ReactDOM from "react-dom";
import View2 from "../Container/View/View2";

it("View2 renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<View2 />, div);
});
