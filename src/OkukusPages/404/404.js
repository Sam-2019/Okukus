import React from "react";
import { NavLink } from "react-router-dom";

import "./404.css";

const NotFound = () => {
  return (
    <div className="not-found-wrapper item">

      <NavLink to="/" className="not-found ">
        <b>404</b>
      </NavLink>

      <div>The requested page was not found on our server.</div>
      <div className="not-found-message">
        Either you the url you typed in is incorrect, you do not have access
        privileges to the page, or the page you are looking for has been
        removed.
      </div>
    </div>
  );
};

export default NotFound;
