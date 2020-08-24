import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import useAsync from "../useAync";
import Spinner from "../Spinner/Spinner";
import { booktags } from "../api";
import "./hamburger.css";

const Hamburger = (props) => {
  return (
    <div className="grid-container ">
      <div className="main">
        <div className="text-right ">
          <div className=" " onClick={props.hamburger}>
            <i className="fas fa-angle-left back"></i>
          </div>
        </div>

        <Tags />
      </div>

      <div className="backdrop" onClick={props.hamburger} />
    </div>
  );
};

export default Hamburger;

const Tags = () => {
  const tags = useAsync(booktags);

  let content = tags.map(({ id, title }) => (
    <div key={id} className="selector text-center">
      <NavLink to={`/tag/${title}`} className=" text-uppercase selector-link">
        {title}
      </NavLink>
    </div>
  ));

  if (tag.error) return <span className="text-danger">{tag.error}</span>;

  return <> {tag.loading ? <Spinner /> : <>{content}</>} </>;
};
