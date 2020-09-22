import React from "react";

const SearchBox = () => {
  export const SearchDesktop = () => {
    return (
      <div className=" ">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </div>
    );
  };

  const SearchMobile = () => {
    return (
      <div className="text-center pb-2 ">
        <input
          className="search-input mobile"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="search-button mobile" type="submit">
          Search
        </button>
      </div>
    );
  };
};

export { SearchMobile, SearchDesktop };

export default SearchBox;

<NavLink to={/search/ + query}>Search</NavLink>