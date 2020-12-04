import React from "react";
import ReactDOM from "react-dom";
import CheckoutSummary from "../Checkout/Summary";

it("CheckoutSummary renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CheckoutSummary />, div);
});
