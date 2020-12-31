import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";

const Sidebar = ({
  active,
  okukus_account,
  order_history,
  wish_list,
  change_password,
}) => {
  return (
    <div className="sidebar_wrapper ">
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
          WishList
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

Sidebar.propTypes = {
  active: PropTypes.string,
  okukus_account: PropTypes.func,
  order_history: PropTypes.func,
  wish_list: PropTypes.func,
  change_password: PropTypes.func,
};
