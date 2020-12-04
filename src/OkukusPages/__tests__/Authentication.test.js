import React from "react";
import ReactDOM from "react-dom";
import Authentication from "../Auth/Authentication";

it("Authentication renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Authentication />, div);
});