import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import "./searchbox.css";

const Search = ({ alert }) => {
  const [query, setQuery] = useState("");

  let history = useHistory();

  function Query() {
    if (query === "") {
      // alert();
    } else {
      history.push(`/search?q=${query}`);
    }
  }

  return (
    <>
      <div className="search_object ">
        {/* <Input
          type="search"
          placeholder="Search"
          class_name="search-input"
          action={(e) => setQuery(e.target.value)}
          content={query}
        /> */}

        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="search-button" onClick={Query}>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-search "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;

Search.propTypes = {
  alert: PropTypes.func,
};
