import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import "./okukus.css";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Search from "./Search/Content";
import Product from "./Product/Product";
import OrderItem from "./Order/newOrder";
import Confirm from "./Confirmation/Confirm";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Login from "./User/Login";
import SignUp from "./User/Signup";
import Profile from "./User/Profile";
import TagContent from "./Tag/Content";
import UserVerify from "./User/UserVerify";
import NewPassword from "./User/NewPassword";
import NotFound from "./404/404";
import ResetPassword from "./User/ResetPassword";
import AccountVerify from "./User/AccountVerify";
import Footer from "./Footer/Footer";

const Okukus = () => {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <div className="contain ">
        <Content />
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Body />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/checkout/confirm">
        <Checkout />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/product/:id">
        <Product />
      </Route>

      <Route path="/tag/:id">
        <TagContent />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/order">
        <Order />
      </Route>

      {/* <Route path="/order/confirm">
        <Confirm />
      </Route>

      <Route path="/order/:id">
        <Order />
      </Route> */}

      <Route path="/user">
        <User />
      </Route>

      {/* <Route path="/user/profile">
        <Profile />
      </Route>

      <Route path="/user/verify/:id">
        <UserVerify />
      </Route> */}

      <Route path="/account">
        <Account />
      </Route>

      {/* <Route path="/account/verify/:id">
        <AccountVerify />
      </Route>

      <Route path="/account/reset/pwd">
        <NewPassword />
      </Route>

      <Route path="/account/reset">
        <ResetPassword />
      </Route> */}

      <Route>
        <NotFound />
      </Route>
      
    </Switch>
  );
};

function User() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/profile`}>
        <Profile />
      </Route>

      <Route path={`${path}/verify/:id`}>
        <UserVerify />
      </Route>
    </Switch>
  );
}

function Account() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/verify/:id`}>
        <AccountVerify />
      </Route>

      <Route path={`${path}/reset/pwd`}>
        <NewPassword />
      </Route>

      <Route path={`${path}/reset`}>
        <ResetPassword />
      </Route>
    </Switch>
  );
}

function Order() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/confirm`}>
        <Confirm />
      </Route>

      <Route path={`${path}/:id`}>
        <OrderItem />
      </Route>
    </Switch>
  );
}
