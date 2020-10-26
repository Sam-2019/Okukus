import React from "react";
import Item from "./Item2";
import Summary from "../Checkout/Summary";
import "./cart.css";

const NotEmpty = ({ cart }) => {
  let content;

  content = cart.map(
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

  return (
    <div className=" cart_wrapper ">
      <div className="content ">
        <div className="page_title"> Cart</div>

        <div>{content}</div>
      </div>

      <div className="summary_wrapper  ">
        <Summary />
      </div>
    </div>
  );
};

export default NotEmpty;
