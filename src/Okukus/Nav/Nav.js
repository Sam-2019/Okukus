import React, { useState, useRef } from "react";
import DialogBox from "./Dialog_Box";
import MenuDialog from "./MenuDialog";
import Hamburger from './Hamburger'

import "./nav.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  //d-none d-sm-block - desktop
  // d-none d-block d-sm-none -mobile

  const [dialog, setDialog] = useState(false);
  const [menudialog, setMenudialog] = useState(false);
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState(true);

  const userDialog = () => {
    setDialog(!dialog);
  };

  const menuDialog = () => {
    setMenudialog(!menudialog);
  };

  const Authenticated = () => {
    setAuth(true);
    setLogin(false);
  };

  const slide = useRef(null);

  const hamburgerClick = () => {
    const slider = slide.current;
    slider.classList.toggle("is-slideRight-open");
  };

  return (
    <>
      <div className="d-none d-sm-block ">
        <Desktop
          auth={auth}
          login={login}
          Authenticated={Authenticated}
          hamburger={hamburgerClick}
        />
      </div>

      <div className="d-none d-block d-sm-none   ">
        <Mobile
          auth={auth}
          login={login}
          Authenticated={Authenticated}
          hamburger={hamburgerClick}
        />
      </div>

      {dialog && <DialogBox />}

      {menudialog && <MenuDialog />}

      <div ref={slide} className="slideRight ">
        <Hamburger hamburger={hamburgerClick} />
      </div>
    </>
  );
};

export default Navigation;

const Desktop = (props) => {
  return (
    <div className=" d-flex justify-content-between  shadow  nav_bg p-2">
      <div className="bd-highlight  ">
        <div className="" onClick={props.hamburger}>
          <span className="stack  ">
            <i className="fa fa-bars stack-1x"></i>
          </span>
        </div>
      </div>

      <div className="bd-highlight inline in-content">
        <div className="mr-2">
          <NavLink to="/">OKUKUS</NavLink>
        </div>
      </div>

      <div className="bd-highlight inline in-content">
        {props.auth && (
          <div className="mr-2">
            <span className="stack  ">
              <i className="far fa-user-circle stack-1x"></i>
            </span>
          </div>
        )}

        {props.login && (
          <div className="mr-2">
            <span className="">
              <NavLink to="/login">Login</NavLink>
            </span>
          </div>
        )}

        <div className="mr-2">
          <span className="stack  ">
            <i className="fas fa-shopping-cart stack-1x fa-flip-horizontal"></i>
          </span>
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

const Mobile = (props) => {
  return (
    <div className=" nav_bg p-1">
      <div className="d-flex justify-content-between  ">
        <div className="p-2 bd-highlight  ">
          <div className=" " onClick={props.hamburger}>
            <i className="fa fa-bars font-mobile " />
          </div>
        </div>

        <div className="p-2bd-highlight inline in-content">
          <div className="mr-1 p-2">
            <NavLink to="/">OKUKUS</NavLink>
          </div>
        </div>

        <div className="p-2bd-highlight inline in-content">
          {props.auth && (
            <div className="mr-1 p-2">
              <i className="far fa-user-circle font-mobile" />
            </div>
          )}

          {props.login && (
            <div className="mr-1 p-2">
              <NavLink to="/login">Login</NavLink>
            </div>
          )}

          <div className="p-2 ">
            <i className="fas fa-shopping-cart font-mobile fa-flip-horizontal" />
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

