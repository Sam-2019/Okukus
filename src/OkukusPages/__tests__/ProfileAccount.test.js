import React from "react";
import ReactDOM from "react-dom";
import ProfileAccount from "../User/Profile/Account";

it("ProfileAccount renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileAccount />, div);
});
