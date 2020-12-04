import React from "react";
import ReactDOM from "react-dom";
import NewPassword from "../User//NewPassword";

it("NewPassword renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewPassword />, div);
});
