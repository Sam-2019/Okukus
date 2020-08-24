import React, { useState, useEffect } from "react";
import {  NavLink } from "react-router-dom";
import axios from "axios";
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

        <Tags hamburger={hamburger} />
      </div>

      <div className="backdrop" onClick={hamburger} />
    </div>
  );
};

export default Hamburger;

const Tags = ({ hamburger }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://okukus.com/api_call/get_book_tags.php"
      );
      setTags(result.data);
    };
    fetchData();
  }, []);

  console.log(tags);

  let content = tags.map(({ id, title }) => (
    <div key={id} className="selector text-center">
      <NavLink
        to={`/tags/${title}`}
        className=" text-uppercase selector-link"
        onClick={hamburger}
      >
        {title}
      </NavLink>
    </div>
  ));
  return <>{content}</>;
};
