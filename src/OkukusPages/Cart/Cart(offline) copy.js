import React from "react";
import { useHistory } from "react-router-dom";
import products from "../files/products";
import Item from "./Item2";
import "./cart.css";
import Button from "../Button/Button";

const Cart = () => {
  let history = useHistory();

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
    <div className="cart ">


      <div className=" cart_wrapper">

        <div className="content">
        <div className="page_title"> Cart</div>
          <div>{content}</div>
        </div>

        <div className="summary_wrapper  ">
        <div className="page_title"> Summary</div>
          <div className="new_wrapper">
       

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Subtotal</div>
              <div className="summary_amount ">2,000,000</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Shipping</div>
              <div className="summary_amount ">2,000</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Order Total</div>
              <div className="summary_amount ">Total</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Total (Ghc)</div>
              <div className="summary_amount ">Total</div>
            </div>

            <div className="button_wrapper ">
              <Button
                name="Check Out"
                classname="primary"
                action={() => {
                  history.push("/checkout");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
