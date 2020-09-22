import React, { useState } from "react";
import products from "../files/products";
import Item from "./Item";
import {  useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";

const NotEmpty = () => {
  return <List />;
};

const List = () => {
  const { getCart, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(getCart, formData);
  console.log(resource);

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

      {content}

      <div className="cart_total_wrapper  ">
        <div className="cart_total">Total</div>
        <div className="cart_total_amount  ">Total</div>
      </div>
    </div>
  );
};

export default NotEmpty;
