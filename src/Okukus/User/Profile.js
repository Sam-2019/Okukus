import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./user.css";
import Okukus from "../Okukus";

const User = () => {
  const [state, setstate] = useState(true);

  const handler = () => {
    setstate(!state);
  };

  return (
    <div className="user-background">
      <div className="user col-md-9">
        <div className="product_page product_bg">
          <div className="row py-5 ">
            <div className="col-5 col-md-4  item">
              <Sidebar />
            </div>

            <div className="col-7 col-md item">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

const Sidebar = (props) => {
  return (
    <div className=" text-center ">
      <div>OKUKUS Account</div>
      <div>Order History</div>
      <div>Change Password</div>
    </div>
  );
};

const Main = (props) => {
  return (
    <>
      <OkukusAccount />
      <OrderHistory />
    </>
  );
};

const OkukusAccount = (props) => {
  return (
    <div className="product_detail ">
      <div className="product_name ">Acccount Overview</div>

      <div className="product_review item">
        <span className="">Account Details</span>
        <div className="">Ken Joe</div>
        <div className="">kenjoe@gmail.com</div>
      </div>

      <div className="product_review mt-3 item">
        <span className="">Address Book</span>
        <div className="">Ken Joe</div>
        <div className="">kenjoe@gmail.com</div>
      </div>
    </div>
  );
};

const OrderHistory = (props) => {
  return (
    <>
      <div className="row ">
        <div className="col-12 col-md   inline  ">
          <img src="" className=" cart_image item" alt=" slide" />
          <div className="cart_detail item ">jgojrpoj</div>
        </div>

        <div className="col-12 col-md-4  ">
          <div className="cart_detail  item">jrlgn34rnh4</div>
        </div>
      </div>
    </>
  );
};
