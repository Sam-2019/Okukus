import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import User from "./User/User";
import Product from './Product/Product'

export default class Okukus extends Component {
  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Route exact path="/" component={Body} />
          <Route path="/login" component={User} />
          <Route path='/product' component={Product} />
        </Router>
        <Footer />
      </>
    );
  }
}
