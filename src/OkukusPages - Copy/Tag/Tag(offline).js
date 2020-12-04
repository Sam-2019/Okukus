import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import tags from "../files/product_tags";
import "./tag.css";

const Tag = ({ hamburgerClick }) => {

  let history = useHistory();

  let tenet = tags.map(({ id, title }) => (
    <button
      key={id}
      onClick={() => {
        history.push(`/tag/${title}`);
        hamburgerClick();
      }}
      className="selector"
    >
      {title}
    </button>
  ));

  return <div className="tag_wrapper">{tenet}</div>;
};

export default Tag;
