import React from "react";
import NotEmpty from "./NotEmpty";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart_wrapper">
      <h2> Cart</h2>
      <NotEmpty />
    </div>
  );
};

export default Cart;
