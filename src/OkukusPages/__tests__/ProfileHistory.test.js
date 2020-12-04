import React from "react";
import ReactDOM from "react-dom";
import ProfileHistory from "../User/Profile/History";

it("ProfileHistory renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileHistory />, div);
});