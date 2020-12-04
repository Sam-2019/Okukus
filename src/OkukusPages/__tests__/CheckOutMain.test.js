import React from "react";
import ReactDOM from "react-dom";
import CheckoutMain from "../Checkout/Main";

it("CheckoutMain renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CheckoutMain />, div);
});
