import React from "react";
import products from "../files/products";
import Item from "./Item2";
import "./cart2.css";

const Cart = () => {
  let content = products.map(
    ({ unique_id, unit_price, product_name, cover_photo_url, stock }) => (
      <Item
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
        stock={stock}
      />
    )
  );

  return (
    <div className="cart_wrapper">
      <h2 className="text-center "> Cart</h2>

      <div className="not_empty">
        <div>
          {content}
          <div className="cart_total_wrapper  ">
            <div className="cart_total">Total</div>
            <div className="cart_total_amount ">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
