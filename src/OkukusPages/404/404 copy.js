import React from "react";
import { useHistory } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import "./404.css";

const NotFound = () => {
  let history = useHistory();
  return (
    <div className="not-found-wrapper item">
      <div className="not-found-header">
        The requested page was not found on our server.
      </div>

      <div className="not-found-body">
        Either you the url you typed in is incorrect, you do not have access
        privileges to the page, or the page you are looking for has been
        removed.
      </div>

      <Button name="Go home" class_name="primary" action={history.push("/")} />
    </div>
  );
};

export default NotFound;
