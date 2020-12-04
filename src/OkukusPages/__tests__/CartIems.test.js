import React from "react";
import ReactDOM from "react-dom";
import CartItems from "../Container/View/CartItems";

it("CartItems renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CartItems />, div);
});
