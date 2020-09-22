import React from "react";
import "./sidebar.css";

const Sidebar = ({ okukus_account, order_history, active }) => {
  return (
    <div className="d-flex flex-wrap in-view">
      <div className="sidelist">
        <button
          onClick={okukus_account}
          className={
            active === "account" ? "sidebarbtn sidebarbtn-view" : "sidebarbtn"
          }
        >
          Account
        </button>
      </div>
      <div className="sidelist">
        <button
          onClick={order_history}
          className={
            active === "order" ? "sidebarbtn sidebarbtn-view" : "sidebarbtn"
          }
        >
          Order History
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
