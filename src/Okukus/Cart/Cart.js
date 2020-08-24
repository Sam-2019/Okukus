import React, { useState } from "react";
import products from "../files/products";
import Spinner from "../Spinner/Spinner";
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
    cart_list = <Empty />;
  }

  return (
    <div className=" text-center  ">
      <div className="  cart   ">{cart_list}</div>
    </div>
  );
};

export default Cart;

const NotEmpty = (props) => {
  return (
    <div className="cart-container shadow ">
      <h2 className="">Cart</h2>
      <List />
    </div>
  );
};

const Empty = (props) => {
  return (
    <div className="cart-container shadow">
      <h2>Cart</h2>
      <span className="cart_stack  ">
        <i className="fas fa-shopping-cart  fa-flip-horizontal"></i>
      </span>
      <div className="m-2">Your cart is empty!</div>
      <div className="m-2">
        Already have an account? Login to see items in your cart.
      </div>
      <button className="cart_button m-2">Start Shopping</button>
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
    <>
      <div className="">
        <div className="d-none d-sm-block card_header">
          <div className="row">
            <div className="col-12 col-md  ">Item</div>

            <div className="col-4 col-md-1  ">Qty</div>

            <div className="col-4 col-md-2 ">Unit Price</div>

            <div className="col-4 col-md-2  ">Sub-Total</div>
          </div>
        </div>

        {content}

        <div className="inline  justify-content-end">
          <div className="col-4 col-md-2">
            <div className="">Total</div>
          </div>

          <div className="col-4 col-md-2 card_item ">Sub-Total</div>
        </div>
      </div>
    </>
  );
};

const Item = (props) => {
  const live = props.stock;
  const unit = props.unit_price;
  const subtotal = live * unit;

  return (
    <>
      <div className="mb-3 card_item ">
        <div className="row ">
          <div className="col-12 col-md-1  ">
            <img
              src={`https://okukus.com/${props.cover_photo_url}`}
              className=" cart_image "
              alt=" slide"
            />
          </div>

          <div className="col-12 col-md  ">{props.product_name}</div>

          <div className="col-4 col-md-1  ">{props.stock}</div>

          <div className="col-4 col-md-2  ">{props.unit_price}</div>

          <div className="col-4 col-md-2 ">{subtotal}</div>
        </div>
      </div>
    </>
  );
};
