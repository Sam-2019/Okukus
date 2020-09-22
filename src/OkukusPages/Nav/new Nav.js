import React, { useRef, useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Search from "./Search";

import "./nav.css";

const Navigation = () => {
  return (
    <header>
      <nav className="nav_header item mt-5">
        <div className=" item">Hi</div>

        <div className="item">Hello</div>

        <div className="item dual">
          <div className=" show">Hello2</div>
          <div className="show2 ">
            <Search />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
