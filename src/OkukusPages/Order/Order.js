import React, { useState } from "react";
import Buy from './Buy'
import Confirm from "../Confirmation/Confirm";
import "./order.css";

const Order = (props) => {
  let id = props.match.params.id;

  const [state, setState] = useState(false);

  const doneShopping = () => {
    setState(true);
  };

  return (
    <div className="order_">
      {state ? <Confirm /> : <Buy doneShopping={doneShopping} id={id} />}
    </div>
  );
};

export default Order;
