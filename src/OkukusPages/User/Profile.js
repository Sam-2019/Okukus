import React, { useState } from "react";
import Account from "./Profile/Account";
import OrderHistory from "./Profile/History";

import Sidebar from "./Profile/Sidebar";
import "./profile.css";

const Profile = () => {
  const [active, setActive] = useState("account");

  const account = active === "account";

  function okukus_account() {
    setActive("account");
  }

  function order_history() {
    setActive("order");
  }

  return (
    <div>
      <h2 className="text-center "> {account ? "Account" : "Order"}</h2>

      <div className="profile-content">
        <div className=" sidebar ">
          <Sidebar
            okukus_account={okukus_account}
            order_history={order_history}
            active={active}
          />
        </div>
        <div className=" view">{account ? <Account /> : <OrderHistory />}</div>
      </div>
    </div>
  );
};

export default Profile;
