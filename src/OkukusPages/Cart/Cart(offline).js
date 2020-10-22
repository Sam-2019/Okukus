import React from "react";
import { useHistory } from "react-router-dom";
import Item from "./Item2";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";
import "./cart.css";

const Cart = () => {
  const { getCart, uniqueID, summaryCart } = useAuthentication();
  let history = useHistory();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(getCart, formData);

  const cartSummary = useAsync(summaryCart, formData);
  console.log(cartSummary);

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
              <div className="page_title"> Summary</div>
              <div className="new_wrapper">
                {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Subtotal</div>
                  <div className="summary_amount ">2,000,000</div>
                </div> */}

                <div className="summary_item_wrapper  ">
                  <div className="summary_item">Quantity</div>
                  <div className="summary_amount ">2,000</div>
                </div>

                {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Order Total</div>
                  <div className="summary_amount ">Total</div>
                </div> */}

                <div className="summary_item_wrapper  ">
                  <div className="summary_item">Total (Ghc)</div>
                  <div className="summary_amount ">Total</div>
                </div>

                <div className="button_wrapper ">
                  <Button
                    name="Check Out"
                    class_name="primary"
                    action={() => {
                      history.push("/checkout");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
