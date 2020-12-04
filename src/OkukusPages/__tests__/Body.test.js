import React from "react";
import ReactDOM from "react-dom";
import Body from "../Body/Body";

it("Body renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Body />, div);
});
