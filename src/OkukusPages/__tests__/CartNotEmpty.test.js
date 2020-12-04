import React from "react";
import ReactDOM from "react-dom";
import CartNotEmpty from "../Cart/NotEmpty";

it("CartNotEmpty renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CartNotEmpty />, div);
});
