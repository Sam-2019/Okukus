import React from "react";
import Tag from "../Tag/Tag";
import "./hamburger.css";

const Hamburger = ({ hamburger }) => {
  return (
    <>
      <div className="hamburger_wrapper ">
        <div className="hamburger_topline">
          <div>
            {/* <NavLink to="/" className=" okukus" onClick={hamburger}>
              OKUKUS.COM
            </NavLink> */}
          </div>

          <div className="back " onClick={hamburger}>
      
            <svg  viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
          </div>
        </div>

        <Tag hamburgerClick={hamburger} />
      </div>
    </>
  );
};

export default Hamburger;
