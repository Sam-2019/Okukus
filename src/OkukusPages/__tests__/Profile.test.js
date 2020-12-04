import React from "react";
import ReactDOM from "react-dom";
import Profile from "../User/Profile";

it("Profile renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Profile />, div);
});
