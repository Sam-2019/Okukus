import React from "react";
import Item from "./Item2";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";
import Summary from "../Checkout/Summary";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(getCart, formData);

  let content;

  if (resource.value) {
    content = resource.value.map(
      ({
        unique_id,
        unit_price,
        product_name,
        cover_photo_url,
        quantity,
        product_unique_id,
        stock,
        price_change,
        buyer_unique_id,
        existence,
        availablity,
      }) => (
        <Item
          key={unique_id}
          id={unique_id}
          unit_price={unit_price}
          cover_photo_url={cover_photo_url}
          product_name={product_name}
          quantity={quantity}
        />
      )
    );
  }

  return (
    <div className="cart  ">
      <div className=" ">
        {resource.loading ? (
          <Spinner />
        ) : resource.error || resource.message === "cart is empty" ? (
          //   <span className="text-danger">{resource.message}</span>//
          <Empty />
        ) : (
          <div className=" cart_wrapper ">
            <div className="content ">
              <div className="page_title"> Cart</div>

              <div>{content}</div>
            </div>

            <div className="summary_wrapper  ">
              <Summary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
