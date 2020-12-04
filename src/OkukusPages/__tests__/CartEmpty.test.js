import React from "react";
import ReactDOM from "react-dom";
import CartEmpty from "../Cart/Empty Cart";

it("CartEmpty renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CartEmpty />, div);
});
