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

          <div className="back_icon " onClick={hamburger}>
            <i className="fas fa-angle-left back"></i>
          </div>
        </div>

        <Tag hamburgerClick={hamburger} />
      </div>
    </>
  );
};

export default Hamburger;
