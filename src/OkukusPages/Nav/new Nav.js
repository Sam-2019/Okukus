import React, { useRef, useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Search from "../Search/Searchbox";

import "./newNav.css";

const Navigation = () => {
  const [auth, setAuth] = useState(true);
  const [menu, setMenu] = useState(false);

  const logout = () => {
    console.log("hi");
  };

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="nav_header ">
        <div className=" one ">
          <div className=" justify  ">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-justify navIcon "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          <div className="  insider2">
            <NavLink to="/" activeClassName=" home">
              OKUKUS
            </NavLink>
          </div>
        </div>

        <div className="two ">
          <div className="cart  ">
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart3 navIcon"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>

            <span className="cart3000 ">30</span>
          </div>

          {auth === true ? (
            <div className=" profile " onClick={showMenu}>
              <svg
                viewBox="0 0 16 16"
                className="bi bi-person-circle navIcon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </div>
          ) : (
            <div className="profile">Login</div>
          )}

          {/* <ul>
            <li>Profile</li>
            <li>Cart</li>
            <li>Login</li>
          </ul> */}
        </div>

        <div className="three ">
          <NavLink to="/" activeClassName=" home">
            OKUKUS
          </NavLink>
        </div>

        <div className="four  ">
          <Search />
        </div>
      </nav>

      {menu ? <ProfileMenu logout={logout} showMenu={showMenu} /> : null}
    </header>
  );
};

export default Navigation;

const ProfileMenu = ({ logout, showMenu }) => {
  const Logout = () => {
    logout();
    showMenu();
  };
  return (
    <div className="profile_menu">
      <div className="menu_item" onClick={showMenu}>
        Profile
      </div>
      <div className="menu_item" onClick={Logout}>
        Logout
      </div>
    </div>
  );
};
