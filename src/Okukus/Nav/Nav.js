import React, { useState, useRef, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { auth } from "../User/authContext";
// import DialogBox from "./Dialog_Box";
// import MenuDialog from "./MenuDialog";
import Hamburger from "./Hamburger";

import "./nav.css";
import { NavLink } from "react-router-dom";



const Navigation = () => {
  //d-none d-sm-block - desktop
  // d-none d-block d-sm-none -mobile

  // const [dialog, setDialog] = useState(false);
  // const [menudialog, setMenudialog] = useState(false);

  // const userDialog = () => {
  //   setDialog(!dialog);
  // };

  // const menuDialog = () => {
  //   setMenudialog(!menudialog);
  // };

  const slide = useRef(null);

  const hamburgerClick = () => {
    const slider = slide.current;
    slider.classList.toggle("is-slideRight-open");
  };

  return (
    <>
      <div className="d-none d-sm-block ">
        <Desktop hamburger={hamburgerClick} />
      </div>

      <div className="d-none d-block d-sm-none   ">
        <Mobile hamburger={hamburgerClick} />
      </div>

      {/* {dialog && <DialogBox />}

      {menudialog && <MenuDialog />} */}

      <div ref={slide} className="slideRight ">
        <Hamburger hamburger={hamburgerClick} />
      </div>
    </>
  );
};

export default Navigation;

const Desktop = ({ hamburger }) => {
  const { rootState, logoutUser } = useContext(auth);
const { isAuth } = rootState;
  return (
    <div className=" d-flex justify-content-between  shadow  nav_bg p-2">
      <div className="bd-highlight inline in-content ">
        <div className="" onClick={hamburger}>
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
      </div>

      <div className="bd-highlight inline in-content">
        <div className="mr-2">
          <NavLink to="/" className="link name">
            OKUKUS
          </NavLink>
        </div>
      </div>

      <div className="bd-highlight inline in-content">
        {isAuth ? (
          <>
            <div className="mr-3">
              <NavLink to="/profile" className="link">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
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
            </div>

            <div className="mr-3">
              <span className="link" onClick={logoutUser}>
                Logout
              </span>
            </div>
          </>
        ) : (
          <div className="mr-3">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </div>
        )}

        <div className="mr-2">
          <NavLink to="/cart" className="link">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cart3 "
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </NavLink>
        </div>

        <div className=" ">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const Mobile = ({ hamburger }) => {
  const { rootState, logoutUser } = useContext(auth);
  const { isAuth } = rootState;
  return (
    <div className=" nav_bg p-1">
      <div className="d-flex justify-content-between  ">
        <div className="p-2 bd-highlight  ">
          <div className=" " onClick={hamburger}>
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
            </svg>{" "}
          </div>
        </div>

        <div className="p-2bd-highlight inline in-content">
          <div className="mr-1 p-2">
            <NavLink to="/" className="link name">
              OKUKUS
            </NavLink>
          </div>
        </div>

        <div className="p-2bd-highlight inline in-content">
          {isAuth ? (
            <>
              <div className="mr-1 p-2">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
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

              <div className="mr-3">
                <span className="link" onClick={logoutUser}>
                  Logout
                </span>
              </div>
            </>
          ) : (
            <div className="mr-1 p-2">
              <NavLink to="/login" className="link">
                Login
              </NavLink>
            </div>
          )}

          <div className="p-2 ">
            <NavLink to="/cart" className="link">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-cart3 "
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="text-center pb-2 ">
        <input
          className="search-input mobile"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="search-button mobile" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};
