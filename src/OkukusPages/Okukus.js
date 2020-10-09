import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./okukus.css";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Search from "./Search/Content";
import Product from "./Product/Product(offline)";
import Order from "./Order/Order";
import Confirm from "./Confirmation/Confirm";
import Cart from "./Cart//Cart(offline)";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import Profile from "./User/Profile";
import TagContent from "./Tag/Content";
import NotFound from "./404/404";
import Footer from "./Footer/Footer";
import ResetPassword from "./User/ResetPassword";
import NewPassword from "./User/NewPassword";

const Okukus = () => {
  return (
    <Router>
      <Navigation />
      <div className="contain  ">
        <Route exact path="/" component={Body} />
        <Route path="/order/:id" component={Order} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:id" component={Product} />
        <Route path="/tag/:id" component={TagContent} />
        <Route path="/search/:id" component={Search} />

        <Route path="/reset" component={ResetPassword} />
        <Route path="/newpassword" component={NewPassword} />
        {/* <Route component={NotFound} /> */}
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
