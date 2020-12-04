import React from "react";
import ReactDOM from "react-dom";
import Wrong404 from "../404/404";

it("Wrong404 renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Wrong404 />, div);
});
