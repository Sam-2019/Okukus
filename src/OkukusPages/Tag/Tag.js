import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsyncc } from "../helpers";
import "./tag.css";

// const tags = [
//   {
//     id: "20",
//     product_name: "The Merchant of Venice",
//   },
//   {
//     id: "21",
//     product_name: "The Man God Uses",
//   },
//   {
//     id: "22",
//     product_name: "A Short History People",
//   },
// ];

const Tag = ({ hamburgerClick }) => {
  const { getTags } = useAuthentication();

  const resource = useAsyncc(getTags);

  let history = useHistory();

  let tenet = resource.value.map(({ id, title }) => (
    <div
      key={id}
      onClick={() => {
        history.push(`/tag/${title}`);
        hamburgerClick();
      }}
      className="selector"
    >
      {title}
    </div>
  ));

  return <div className="tag_wrapper">{tenet}</div>;
};

export default Tag;
