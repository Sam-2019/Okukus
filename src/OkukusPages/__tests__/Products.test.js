import React from "react";
import ReactDOM from "react-dom";
import Products from "../Product/Products";

it("Products renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Products />, div);
});
