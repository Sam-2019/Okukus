import React from "react";
import ReactDOM from "react-dom";
import Context from "../Auth/Context";

it("Context renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Context />, div);
});