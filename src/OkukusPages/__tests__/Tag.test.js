import React from "react";
import ReactDOM from "react-dom";
import Tag from "../Tag/Tag";

it("Tag renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tag />, div);
});