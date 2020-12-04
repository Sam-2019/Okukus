import React from "react";
import ReactDOM from "react-dom";
import CheckoutComplete from "../Checkout/Complete";

it("CheckoutComplete renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CheckoutComplete />, div);
});
