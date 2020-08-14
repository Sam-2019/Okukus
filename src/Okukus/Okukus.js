import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import User from "./User/User";
import Product from './Product/Product'
import Cart from './Cart/Cart'
import Tag from './Product/Tags'
import Profile from './User/Profile'

export default class Okukus extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <div className="contain">
          <Route exact path="/" component={Body} />
          <Route path="/login" component={User} />
          <Route path='/product/:id' component={Product} />
          <Route path='/tag/:id' component={Tag} />
          <Route path='/cart' component={Cart} />
          <Route path='/profile' component={Profile} />
          </div>
          <Footer />
        </Router>

      </>
    );
  }
}
