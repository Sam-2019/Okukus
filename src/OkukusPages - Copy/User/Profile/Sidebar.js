import React from "react";
import "./sidebar.css";

const Sidebar = ({ okukus_account, order_history, active, change_password }) => {
  return (
    <div className="sidebar_wrapper">
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
      <div className="sidelist">
        <button
          onClick={change_password}
          className={
            active === "password" ? "sidebarbtn sidebarbtn-view" : "sidebarbtn"
          }
        >
         Change Password
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
