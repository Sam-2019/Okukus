import React, {  } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import User from "./User/User";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Tag from "./Product/Tags";
import Profile from "./User/Profile";
import Order from "./Order/Order";
import Search from './Search/Search'


const Okukus = () => {

  return (
    <Router>
      <Navigation />
      <div className="contain">
        <Route path="/login" component={User} />
        <Route path="/cart" component={Cart} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:id" component={Product} />
        <Route path="/tags/:id" component={Tag} />
        <Route path="/order/:id" component={Order} />
        <Route path="/search/:id" component={Search} />
        <Route exact path="/" component={Body} />
      </div>
      <Footer />
    </Router>
  );
};

export default Okukus;
