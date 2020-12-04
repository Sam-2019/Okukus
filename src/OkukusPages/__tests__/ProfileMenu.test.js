import React from "react";
import ReactDOM from "react-dom";
import ProfileMenu from "../DialogBox/ProfileMenu";

it("ProfileMenu renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileMenu />, div);
});
