import React from "react";
import ReactDOM from "react-dom";
import Order from "../Order/newOrder";

it("Order renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Order />, div);
});