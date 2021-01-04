import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Button from "../Button/Button";

const Summary = () => {
  const { uniqueID, summaryCart } = useAuthentication();

  let history = useHistory();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);
  const cartSummary = useAsync(summaryCart, formData);

  let totalA;
  let totalQ;

  if (cartSummary.value) {
    totalA = cartSummary.value.total_amount;
    totalQ = cartSummary.value.total_quantity;
  } else {
    totalA = 0;
    totalQ = 0;
  }

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
          <div className="summary_amount ">{totalQ}</div>
        </div>

        {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Order Total</div>
                  <div className="summary_amount ">Total</div>
                </div> */}

        <div className="summary_item_wrapper  ">
          <div className="summary_item">Total (Ghc)</div>
          <div className="summary_amount">{totalA}</div>
        </div>

        <div className="button_wrapper ">
          <Button
            name="Check Out"
            class_name="primary"
            action={() => {
              history.push("/confirm_orders");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
