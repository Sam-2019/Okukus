import React from "react";
import ReactDOM from "react-dom";
import TagContent from "../Tag/Content";

it("TagContent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TagContent />, div);
});