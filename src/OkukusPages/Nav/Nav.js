import React, { useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Searchbox from "../Search/Searchbox";
import AlertBox from "../DialogBox/AlertBox";
import Hamburger from "../Hamburger/Hamburger";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";

import "./nav.css";

const NavHandler = () => {
  const [dialog, setDialog] = useState(false);
  const [alert, noAlert] = useState(false);
  const hamburger = useRef(null);
  const alertbox = useRef(null);

  const hamburgerShow = () => {
    setDialog(!dialog);
    const slider = hamburger.current;
    slider.classList.toggle("is-slideRight-open");
  };

  const showAlert = () => {
    noAlert(!alert);
    const slider = alertbox.current;
    slider.classList.toggle("is-slideBottom-open");
  };

  return (
    <header>
      <div ref={hamburger} className="slideRight">
        <Hamburger hamburger={hamburgerShow} />
      </div>

      <div ref={alertbox} className="slideBottom">
        <AlertBox alert={showAlert} />
      </div>

      <Navigation hamburger={hamburgerShow} showAlert={showAlert} />

      {/* {dialog && <div className="backdrop"></div>} */}
    </header>
  );
};

const Navigation = ({ hamburger, showAlert }) => {
  const { Auth, countCart, uniqueID, logoutUser } = useAuthentication();
  let history = useHistory();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(countCart, formData);


  return (
    <header>
      <nav className="nav_header ">
        <div className="sub_header_one ">
          <div onClick={hamburger}>
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
          <div>
            <NavLink to="/" className=" name">
              OKUKUS
            </NavLink>
          </div>
        </div>

        <div className="nav_search ">
          <Searchbox alert={showAlert} />
        </div>

        <div className="sub_header_two  ">
          <div>
            {Auth ? (
              <NavLink to="/profile" className="link">
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
              </NavLink>
            ) : null}
          </div>

          <div className="item ">
            <NavLink to="/cart" className="link ">
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
            </NavLink>
            <span className="cart3000 item">200</span>
          </div>

          <div className="item">
            {Auth ? (
              <span className="link logout " onClick={logoutUser}>
                Logout
              </span>
            ) : (
              <span
                className="link login"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavHandler;