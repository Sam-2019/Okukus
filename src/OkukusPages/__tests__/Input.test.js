import React from "react";
import ReactDOM from "react-dom";
import Input from "../Input/Input";

it("Input renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Input />, div);
});