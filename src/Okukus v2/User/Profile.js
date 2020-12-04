import React, { useState } from "react";
import Account from "./Profile/Account";
import OrderHistory from "./Profile/History";
import Password from "./Profile/Password";
import WishList from "./Profile/WishList";

import Sidebar from "./Profile/Sidebar";
import "./profile.css";

const Profile = () => {
  const [active, setActive] = useState("wishlist");

  const account = active === "account";
  const order = active === "order";
  const wishlist = active === "wishlist";

  function okukus_account() {
    setActive("account");
  }

  function order_history() {
    setActive("order");
  }

  function wish_list() {
    setActive("wishlist");
  }

  function change_password() {
    setActive("password");
  }

  return (
    <div className="profile-content ">
      <div className=" sidebar ">
        <Sidebar
          okukus_account={okukus_account}
          order_history={order_history}
          change_password={change_password}
          wish_list={wish_list}
          active={active}
        />
      </div>
      <div className=" view  ">
        <div className="page_title">
          {account
            ? "Account"
            : order
            ? "Order"
            : wishlist
            ? "      Wish List "
            : "Change Password"}
        </div>
        {account ? (
          <Account />
        ) : order ? (
          <OrderHistory />
        ) : wishlist ? (
          <WishList />
        ) : (
          <Password />
        )}
      </div>
    </div>
  );
};

export default Profile;
