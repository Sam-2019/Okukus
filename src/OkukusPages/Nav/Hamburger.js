import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Context/authContext";
import "./hamburger.css";

const Hamburger = ({ hamburger }) => {
  return (
    <div className="grid-container ">
      <div className="main">
        <div className="text-right ">
          <div className=" " onClick={hamburger}>
            <i className="fas fa-angle-left back"></i>
          </div>
        </div>

        <Tags hamburgerClick={hamburger} />
      </div>

      <div className="backdrop" onClick={hamburger} />
    </div>
  );
};

export default Hamburger;

const Tags = ({ hamburgerClick }) => {
  const { getTags } = useContext(auth);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTags();
      setTags(data);
    };
    fetchData();
  }, [getTags]);

  let content = tags.map(({ id, title }) => (
    <div key={id} className="selector text-center">
      <NavLink
        to={`/tags/${title}`}
        className=" text-uppercase selector-link"
        onClick={hamburgerClick}
      >
        {title}
      </NavLink>
    </div>
  ));
  return <>{content}</>;
};
