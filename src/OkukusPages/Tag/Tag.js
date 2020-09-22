import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsyncc } from "../helpers";
import product_tag from "../files/product_tags";
import "./tag.css";

const Tag = ({ hamburgerClick }) => {
  const { getTags } = useAuthentication();

  const resource = useAsyncc(getTags);

  const [tags] = useState(product_tag);

  let history = useHistory();

  let tenet = resource.value.map(({ id, title }) => (
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
