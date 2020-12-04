import React from "react";
import ReactDOM from "react-dom";
import ResetPassword from "../User/ResetPassword";

it("ResetPassword renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResetPassword />, div);
});
