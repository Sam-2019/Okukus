import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsyncc } from "../helpers";
import PropTypes from "prop-types";
import "./tag.css";

const Tag = ({ hamburgerClick }) => {
  const { getTags } = useAuthentication();

  const resource = useAsyncc(getTags);

  let history = useHistory();

  let tenet = resource.value.map(({ id, title }) => (
    <NavLink
      key={id}
      onClick={() => {
        hamburgerClick();
      }}
      className="selector"
      to={`/tag/${title}`}
      activeClassName="selected"
    >
      {title}
    </NavLink>
  ));

  return <div className="tag_wrapper">{tenet}</div>;
};

export default Tag;

Tag.propTypes = {
  hamburgerClick: PropTypes.func,
};
