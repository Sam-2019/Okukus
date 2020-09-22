import React, { useState } from "react";
import products from "../files/products";
import Spinner from "../Spinner/Spinner";
import EmptyCart from "./Empty Cart";
import "./cart.css";

const Cart = () => {
  // const [state, setstate] = useState(true);

  // const handler = () => {
  //   setstate(!state);
  // };

  let cart_list;
  if (products === null) {
    cart_list = <Spinner />;
  } else if (products.length > 0) {
    cart_list = <NotEmpty />;
  } else {
    cart_list = <EmptyCart />;
  }

  return (
    <div>
      <h2 className="text-center "> Cart</h2>
      <NotEmpty />
    </div>
  );
};

export default Cart;

const NotEmpty = (props) => {
  return (
    <div className="not_empty">
      <List />
    </div>
  );
};

const List = () => {
  const [items] = useState(products);

  let content = items.map(
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
    <div>
      <div className="cart_list_wrapper">
        <div className="cart_item  ">Item</div>

        <div className="cart_qty">Qty</div>

        <div className="cart_unit_price">Unit Price</div>

        <div className="cart_subtotal  ">Sub-Total</div>
      </div>

      {content}

      <div className="cart_total_wrapper  ">
        <div className="cart_total">Total</div>
        <div className="cart_total_amount ">Total</div>
      </div>
    </div>
  );
};

const Item = ({ unit_price, product_name, cover_photo_url, stock }) => {
  const live = stock;
  const unit = unit_price;
  const subtotal = live * unit;

  return (
    <div className=" cart_item_wrapper ">
      <div className=" cart_image_wrapper ">
        <div>
          <img
            src={`https://okukus.com/${cover_photo_url}`}
            className=" cart_image "
            alt=" slide"
          />
        </div>

        <div className=" cart_item_name  ">{product_name}</div>
      </div>

      <div className=" cart_item_qty  ">{stock}</div>

      <div className=" cart_item_unit_price ">{unit_price}</div>

      <div className=" cart_item_subtotal ">{subtotal}</div>
    </div>
  );
};
