import React from "react";
import ReactDOM from "react-dom";
import ProfleSidebar from "../User/Profile/Sidebar";

it("ProfleSidebar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfleSidebar />, div);
});
