import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./okukus.css";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Search from "./Search/Content";
import Product from "./Product/Product";
import Order from "./Order/newOrder";
import Confirm from "./Confirmation/Confirm";
import Cart from "./Cart/Cart(offline)";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import Profile from "./User/Profile";
import TagContent from "./Tag/Content";
import Checkout from './Checkout/Checkout'

import NotFound from './404/404'

import Footer from "./Footer/Footer";
import ResetPassword from "./User/ResetPassword";
import AccountVerify from "./User/AccountVerify";

const Okukus = () => {
  return (
    <Router>
      <Navigation />
      <div className="contain ">
      <Switch>
          <Route exact path="/">
            <Body />
          </Route>

          <Route path="/confirm">
            <Confirm />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/order/:id">
            <Order />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="/tag/:id">
            <TagContent />
          </Route>

          <Route path="/search/:id">
            <Search />
          </Route>

          <Route path="/verify/:id">
            <AccountVerify />
          </Route>

          <Route path="/reset">
            <ResetPassword />
          </Route>


          <Route>
            <NotFound />
          </Route>


        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
