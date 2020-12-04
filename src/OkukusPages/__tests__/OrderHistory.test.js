import React from "react";
import ReactDOM from "react-dom";
import OrderHistory from "../Container/View/OrderHistory";

it("OrderHistory renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OrderHistory />, div);
});
