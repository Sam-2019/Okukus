import React from "react";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Empty from "./Empty Cart";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(getCart, formData);
  console.log(resource);

  return (
    <div className="cart  ">
      <div className=" ">
        <Empty />
      </div>
    </div>
  );
};

export default Cart;
