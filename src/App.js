import React, { Component } from "react";

import Okukus from "./Okukus/Okukus";
import Appie from './User2/App2'
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  render() {
    return(
      <div className='body-background'>
         <Okukus />
      </div>
    )
  }
}
