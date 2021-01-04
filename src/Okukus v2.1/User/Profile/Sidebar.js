import React from "react";
import "./sidebar.css";

const Sidebar = ({
  okukus_account,
  order_history,
  wish_list,
  active,
  change_password,
}) => {
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
          onClick={wish_list}
          className={
            active === "wishlist" ? "sidebarbtn sidebarbtn-view" : "sidebarbtn"
          }
        >
          Wish List
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
