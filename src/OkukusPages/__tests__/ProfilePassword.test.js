import React from "react";
import ReactDOM from "react-dom";
import ProfilePassword from "../User/Profile/Password";

it("ProfilePassword renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfilePassword />, div);
});