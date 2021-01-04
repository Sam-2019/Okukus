import React from "react";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";
import NotEmpty from "./NotEmpty";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const cartData = useAsync(getCart, formData);

  return (
    <div className="cart  ">
      <div className=" ">
        {cartData.loading ? (
          <Spinner />
        ) : cartData.error || cartData.message === "cart is empty" ? (
          <Empty />
        ) : (
          <NotEmpty cart={cartData.value}  />
        )}
      </div>
    </div>
  );
};

export default Cart;
