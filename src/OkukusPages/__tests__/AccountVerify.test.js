import React from "react";
import ReactDOM from "react-dom";
import AccountVerify from "../User/AccountVerify";

it("AccountVerify renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountVerify />, div);
});
