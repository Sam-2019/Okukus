import React, { useState } from "react";
import Item from "./Item";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";

const NotEmpty = () => {
  return <List />;
};

const List = () => {
  const { getCart, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(getCart, formData);
  console.log(resource);
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
    <div>
      {/* <div className="cart_itemwrapper item ">
        <div className="imagewrapper item ">Item</div>
        <div className="cart_itemdetail item">
     
          <div className="cart_item_qty">Qty</div>

          <div className="cart_item_price item">Unit Price</div>

          <div className="cart_item_subtotal">Subtotal</div>
        </div>

        <div className="cart_actions" >
   
        </div>
      </div> */}
      <div>
        {resource.loading ? (
          <Spinner />
        ) : resource.error || resource.message === "cart is empty" ? (
          //   <span className="text-danger">{resource.message}</span>//
          <Empty />
        ) : (
          <>
            {content}
            <div className="cart_total_wrapper  ">
              <div className="cart_total">Total</div>
              <div className="cart_total_amount  ">Total</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotEmpty;
