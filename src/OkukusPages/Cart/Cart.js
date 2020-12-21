import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";
import NotEmpty from "./NotEmpty";
import products from "../files/products";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID } = useAuthentication();
  // const [data] = useState(products);

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const cartData = useAsync(getCart, formData);
  console.log(cartData.value)

  return (
    <div className="cart  ">
      <div className=" ">
        {cartData.loading ? (
          <Spinner size="big" />
        ) : cartData.error || cartData.message === "cart is empty" ? (
          <Empty />
        ) : (
          <NotEmpty cart={cartData.value} />
        )}

        {/* <NotEmpty cart={data} /> */}
      </div>
    </div>
  );
};

export default Cart;
