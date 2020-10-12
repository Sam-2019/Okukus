import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./okukus.css";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Search from "./Search/Content";
import Product from "./Product/Product";
import Order from "./Order/newOrder";
import Confirm from "./Confirmation/Confirm";
import Cart from "./Cart/Cart";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import Profile from "./User/Profile";
import TagContent from "./Tag/Content";

import Footer from "./Footer/Footer";
import ResetPassword from "./User/ResetPassword";
import NewPassword from "./User/NewPassword";
import AccountVerify from "./User/AccountVerify";

const Okukus = () => {
  return (
    <Router>
      <Navigation />
      <div className="contain  ">
        <Route exact path="/" component={Body} />
        
        <Route path="/confirm" component={Confirm} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />

        <Route path="/order/:id" component={Order} />
        <Route path="/product/:id" component={Product} />
        <Route path="/tag/:id" component={TagContent} />
        <Route path="/search/:id" component={Search} />
        <Route path="/verify/:id" component={AccountVerify} />
        <Route path="/search/:id" component={Search} />

        <Route path="/reset" component={ResetPassword} />

        <Route path="/newpassword" component={NewPassword} />
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
