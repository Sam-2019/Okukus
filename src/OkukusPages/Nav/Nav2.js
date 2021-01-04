import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

import "./nav.css";

const Navigation = () => {
  const slide = useRef(null);

  const hamburgerClick = () => {
    const slider = slide.current;
    slider.classList.toggle("is-slideRight-open");
  };

  return (
    <>
      <div className=" d-flex justify-content-between  shadow  nav_bg ">
        <div className="bd-highlight inline in-content ">
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-justify "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          <NavLink to="/" className="link name">
            Home
          </NavLink>

          <NavLink to="/profile" className="link name">
            Profile
          </NavLink>

          <NavLink to="/cart" className="link name">
            Cart
          </NavLink>

          <NavLink to="/product/:id" className="link name">
            Product
          </NavLink>

          <NavLink to="/tag/:id" className="link name">
            Tag
          </NavLink>

          <NavLink to="/search/:id" className="link name">
            Search
          </NavLink>

    

          <NavLink to="/login" className="link name" hidden>
            Login
          </NavLink>

          <NavLink to="/signup" className="link name" hidden>
            Signup
          </NavLink>

          <NavLink to="/confirm" className="link name" hidden>
            Confirm
          </NavLink>
          <NavLink to="/order/:id" className="link name" hidden>
            Order
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
