import React from "react";
import ReactDOM from "react-dom";
import Login from "../User/Login";

it("Login renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
});
