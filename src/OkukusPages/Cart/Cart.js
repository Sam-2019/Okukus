import React from "react";
import { useHistory } from "react-router-dom";
import Item from "./Item";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Button from '../Button/Button'
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID } = useAuthentication();
  let history = useHistory();

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
    <div className="cart_wrapper ">
      <div className="page_title"> Cart</div>

      {/* <div className="cart_itemwrapper item ">
        <div className="imagewrapper item ">Item</div>
        <div className="cart_itemdetail item">
     
          <div className="cart_item_qty">Qty</div>

          <div className="cart_item_price item">Unit Price</div>

          <div className="cart_item_subtotal">Subtotal</div>
        </div>

        <div className="cart_actions" >
   
        </div>
         || resource.message === "cart is empty" 
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

            <div className="right_button_wrapper ">
              <Button name="Check Out" class_name="primary" />

              <Button
                name="Continue Shopping"
                class_name="secondary"
                action={() => {
                  history.push("/");
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
