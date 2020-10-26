import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuthentication } from "./Auth/Context";
import "./okukus.css";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Search from "./Search/Content";
import Product from "./Product/Product";
import Order from "./Order/newOrder";
import Confirm from "./Confirmation/Confirm";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import Profile from "./User/Profile";
import TagContent from "./Tag/Content";
import UserVerify from "./User/UserVerify";

import NotFound from "./404/404";

import ResetPassword from "./User/ResetPassword";
import AccountVerify from "./User/AccountVerify";

import Footer from "./Footer/Footer";

const Okukus = () => {
  const { Auth } = useAuthentication();
  return (
    <Router>
      <Navigation />
      <div className="contain ">
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          {Auth && (
            <Route path="/confirm_orders">
              <Checkout />
            </Route>
          )}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          {Auth && (
            <Route path="/profile">
              <Profile />
            </Route>
          )}

          {Auth && (
            <Route path="/confirm">
              <Confirm />
            </Route>
          )}

          {Auth && (
            <Route path="/order/:id">
              <Order />
            </Route>
          )}

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

          <Route path="/user_verify/:id">
            <UserVerify />
          </Route>

          <Route path="/reset">
            <ResetPassword />
          </Route>

          <Route>
            <NotFound />
          </Route>

          {Auth && <Redirect from="/login" to="/" />}
          {Auth && <Redirect from="/signup" to="/" />}

          {!Auth && <Redirect from="/order/:id" to="/" />}
          {!Auth && <Redirect from="/profile" to="/" />}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
