import React from "react";
import ReactDOM from "react-dom";
import SearchContent from "../Search/Content";

it("SearchContent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchContent />, div);
});
