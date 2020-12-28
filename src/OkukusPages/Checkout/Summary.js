import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

const Summary = () => {
  const { uniqueID, summaryCart } = useAuthentication();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [TA, setTA] = useState(0);
  const [TQ, setTQ] = useState(0);
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

  // const load = useCallback(() => {
  //   if (cartSummary.loading === true) {
  //     return;
  //   } else if (cartSummary.loading === false) {
  //     setTQ(cartSummary.value.total_quantity);
  //     setTA(cartSummary.value.total_amount);
  //   }

  //   // if (cartSummary.value) {
  //   //   setTQty(cartSummary.value.total_quantity);
  //   //   setTValue(cartSummary.value.total_amount);
  //   // } else return;
  // }, [cartSummary.value]);

  // useEffect(() => {
  //   load();
  // }, [load]);

  const next = () => {
    setLoading1(true);
    let empty = totalA && totalQ;

    if (empty !== "") {
      setLoading1(false);
      history.push("/checkout/confirm");
    } else {
      setLoading1(false);
    }
  };

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
            loading={loading1}
            action={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
