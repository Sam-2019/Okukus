import React, { useState } from "react";
import Buy from './Buy'
import Confirm from "../Confirmation/Confirm";
import "./order.css";

const Order = (props) => {
  const [state, setState] = useState(false);
  const [confirm, setConfirm] = useState();
  let id = props.match.params.id;

  const doneShopping = () => {
    setState(true);
  };

  return (
    <div className="order_">
      {state ? <Confirm confirm={confirm} /> : <Buy doneShopping={doneShopping} id={id} />}
    </div>
  );
};

export default Order;

