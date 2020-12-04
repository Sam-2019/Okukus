import React from "react";
import ReactDOM from "react-dom";
import ProfileWishList from "../User/Profile/WishList";

it("ProfileWishList renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProfileWishList />, div);
});