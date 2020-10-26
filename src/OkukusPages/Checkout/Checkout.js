import React, { useState } from "react";
import Main from "./Main";
import Complete from "./Complete";
import "./checkout.css";

const CheckOut = () => {
  const [state, setState] = useState(true);

  const changeState = () => {
    setState(false);
  };

  return <div>{state ? <Main main_state={changeState} /> : <Complete />}</div>;
};

export default CheckOut;
