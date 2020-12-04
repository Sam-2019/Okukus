import React from "react";
import ReactDOM from "react-dom";
import WishItems from "../Container/View/WishItems";

it("WishItems renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WishItems />, div);
});
