import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Button from "../Button/Button";
import Message from '../Message/Message'

const Summary = ({ submit, message, display  }) => {
  const { uniqueID, summaryCart} = useAuthentication();
  let history = useHistory();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);
  const cartSummary = useAsync(summaryCart, formData);

  return (
    <div>
      <div className="page_title"> Summary</div>
      <div className="new_wrapper">
        {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Subtotal</div>
                  <div className="summary_amount ">2,000,000</div>
                </div> */}

        <div className="summary_item_wrapper  ">
          <div className="summary_item">Quantity</div>
          <div className="summary_amount ">
            {/* {cartSummary.value.total_quantity} */}
          </div>
        </div>

        {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Order Total</div>
                  <div className="summary_amount ">Total</div>
                </div> */}

        <div className="summary_item_wrapper  ">
          <div className="summary_item">Total (Ghc)</div>
          <div className="summary_amount">
            {/* {cartSummary.value.total_amount} */}
            </div>
        </div>

 
            {message ? (
              <Message message={message} class_name="message" />
            ) : null}
 

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
  );
};

export default Summary;
