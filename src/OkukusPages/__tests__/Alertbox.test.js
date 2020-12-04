import React from "react";
import ReactDOM from "react-dom";
import AlertBox from "../DialogBox/AlertBox";

it("AlertBox renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AlertBox />, div);
});
