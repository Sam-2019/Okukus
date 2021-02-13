import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { ScrollToTop } from "./helpers";
import { useAuthentication } from "./Auth/Context";

import "./okukus.css";

import Navigation from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Body = lazy(() => import("./Body/Body"));
const Search = lazy(() => import("./Search/Content"));
const Product = lazy(() => import("./Product/Product"));
const OrderItem = lazy(() => import("./Order/Order"));
const Confirm = lazy(() => import("./Confirmation/Confirm"));
const Cart = lazy(() => import("./Cart/Cart"));
const Checkout = lazy(() => import("./Checkout/Checkout"));
const Login = lazy(() => import("./User/Login"));
const SignUp = lazy(() => import("./User/Signup"));
const Profile = lazy(() => import("./User/Profile"));
const TagContent = lazy(() => import("./Tag/Content"));
const UserVerify = lazy(() => import("./User/UserVerify"));
const NewPassword = lazy(() => import("./User/NewPassword"));
const NotFound = lazy(() => import("./404/404"));
const ResetPassword = lazy(() => import("./User/AccountReset"));
const AccountVerify = lazy(() => import("./User/AccountVerify"));

const Okukus = () => {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="contain ">
          <Content />
        </div>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Okukus;

const Content = () => {
  const { Auth2 } = useAuthentication();
  return (
    <Switch>
      <Route exact path="/">
        <Body />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      {/* <Route path="/checkout/confirm">
        {!Auth2 ? <Redirect to="/" /> : <Checkout />}
      </Route> */}

      <Route path="/checkout/confirm">
        <Checkout />
      </Route>

      <Route path="/login">{Auth2 ? <Redirect to="/" /> : <Login />}</Route>

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

      <Route path="/order/confirm">
        <Confirm />
      </Route>

      <Route path="/order">{!Auth2 ? <Redirect to="/" /> : <Order />}</Route>

      <Route path="/user">{!Auth2 ? <Redirect to="/" /> : <User />}</Route>

      <Route path="/account">
        <Account />
      </Route>

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
