import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { auth } from "./Context/authContext";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Tag from "./Product/Tags";
import Profile from "./User/Profile";
import Order from "./Order/Order";
import Search from "./Search/Search";
import Login from "./User/Login";
import SignUp from "./User/Signup";

const Okukus = () => {
  const { rootState } = useContext(auth);
  const { isAuth } = rootState;
  return (
    <Router>
      <Navigation />
      <div className="contain">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/product/:id" component={Product} />
        <Route path="/tags/:id" component={Tag} />
        <Route path="/search/:id" component={Search} />
        {isAuth && <Route path="/order/:id" component={Order} />}
        {isAuth && <Route path="/cart" component={Cart} />}
        {isAuth && <Route path="/profile" component={Profile} />}
        {isAuth && <Redirect from="/login" to="/" component={Body} />}

        {!isAuth && <Redirect from="/order/:id" to="/" component={Body} />}
        {!isAuth && <Redirect from="/profile" to="/" component={Body} />}
        <Route exact path="/" component={Body} />
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
