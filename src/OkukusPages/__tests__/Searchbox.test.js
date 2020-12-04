import React from "react";
import ReactDOM from "react-dom";
import Searchbox from "../Search/Searchbox";

it("Searchbox renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Searchbox />, div);
});
