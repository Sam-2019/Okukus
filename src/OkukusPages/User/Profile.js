import React, { useState } from "react";
import Account from "./Profile/Account";
import OrderHistory from "./Profile/History";
import Password from "./Profile/Password";

import Sidebar from "./Profile/Sidebar";
import "./profile.css";

const Profile = () => {
  const [active, setActive] = useState("account");

  const account = active === "account";
  const order = active === "order";

  function okukus_account() {
    setActive("account");
  }

  function order_history() {
    setActive("order");
  }

  function change_password() {
    setActive("password");
  }

  return (
    <div>


      <div className="profile-content ">
        <div className=" sidebar ">
          <Sidebar
            okukus_account={okukus_account}
            order_history={order_history}
            change_password={change_password}
            active={active}
          />
        </div>
        <div className=" view ">
        <h4 className="view_title">
        {account ? "Account" : order ? "Order" : "Change Password"}
      </h4>
          {account ? <Account /> : order ? <OrderHistory /> : <Password />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
