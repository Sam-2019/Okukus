import React, { useState } from "react";
import products from "../files/products";
import Spinner from "../Spinner/Spinner";
import "./cart.css";

const Cart = () => {
  const [state, setstate] = useState(true);

  const handler = () => {
    setstate(!state);
  };

  let cart_list;
  console.log(products.length);
  if (products === null) {
    cart_list = <Spinner />;
  } else if (products.length > 0) {
    cart_list = <NotEmpty />;
  } else {
    cart_list = <Empty />;
  }

  return (
    <div className="cart-background  text-center ">
      <div className="  cart  col-md-9 ">{cart_list}</div>
    </div>
  );
};

export default Cart;

const NotEmpty = (props) => {
  return (
    <div className="cart-container shadow">
      <h2 className="">Cart</h2>
      <List />
    </div>
  );
};

const Empty = (props) => {
  return (
    <div className="cart-container shadow">
      <div className="">
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
    <div className="container">
      <div className="d-none d-sm-block">
        <div className="row card_item">
          <div className="col-12 col-md  ">
            <div className="cart_detail ">Item</div>
          </div>

          <div className="col-4 col-md-1  ">
            <div className="cart_detail ">Qty</div>
          </div>

          <div className="col-4 col-md-2 ">
            <div className="cart_detail ">Unit Price</div>
          </div>

          <div className="col-4 col-md-2  ">
            <div className="cart_detail ">Sub-Total</div>
          </div>
        </div>
      </div>

      {content}

      <div className="inline  justify-content-end ">
        <div className="col-4 col-md-2">
          <div className="cart_detail">Total</div>
        </div>

        <div className="col-4 col-md-2 card_item ">
          <div className="cart_detail ">Sub-Total</div>
        </div>
      </div>
    </div>

<div className="cart_detail ">



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
      <div className=" my-3 ">
        <div className="row  card_item ">
          <div className="col-12 col-md   inline ">
            <img src="" className=" cart_image" alt=" slide" />
            <div className="cart_detail ">{props.product_name}</div>
          </div>

          <div className="col-4 col-md-1  ">
            <div className="cart_detail ">{props.stock}</div>
          </div>

          <div className="col-4 col-md-2  ">
            <div className="cart_detail ">{props.unit_price}</div>
          </div>

          <div className="col-4 col-md-2 ">
            <div className="cart_detail  ">{subtotal}</div>
          </div>
        </div>
      </div>
    </>
  );
};
