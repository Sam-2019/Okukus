import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import "./hamburger.css";
import product_tags from "../files/product_tags";

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

      <div className="backdrop" />
    </div>
  );
};

export default Hamburger;

const Tags = () => {
  const [tags] = useState(product_tags);

  let content = tags.map(({ id, title }) => (
    <div key={id}>
      <NavLink
        to={`/tag/${title}`}
        className="selector text-center text-uppercase"
      >
        {title}
      </NavLink>
    </div>
  ));
  return <>{content}</>;
};
