import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchbox.css";

const Search = ({ alert }) => {
  const [query, setQuery] = useState("");

  let history = useHistory();

  function Query() {
    if (query === "") {
      alert();
    } else {
      history.push(`/search/${query}`);
    }
  }
  return (
    <>
      <div className="search_object">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="search-button" onClick={Query}>
          Search
        </button>
      </div>

      {/* {alert && <AlertBox />} */}
    </>
  );
};

export default Search;
