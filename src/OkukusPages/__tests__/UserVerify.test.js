import React from "react";
import ReactDOM from "react-dom";
import UserVerify from "../User/UserVerify";

it("UserVerify renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserVerify />, div);
});
