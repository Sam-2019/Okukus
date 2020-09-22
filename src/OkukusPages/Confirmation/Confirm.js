import React from "react";
import { useHistory } from "react-router-dom";
import Primary from "../Button/Primary";
import "./confirm.css";

const Confirm = () => {
  let history = useHistory();
  return (
    <div className="confirm_wrapper">
      <div className="order_placed">Your Order Has Been Placed</div>
      <p className="confirm">
        Hi <span className="confirm_name">Dave Jone</span>,
      </p>
      <p>
        Thank you for shopping with us! Your order{" "}
        <span className="orderID">4vb4g4f848</span> has been placed, pending
        confirmation.
      </p>
      <p>
        We will call you within 24 hours (calling hours: Mon-Fri 8:30am-5:30pm)
        to confirm your order. You will also receive confirmation messages
        through your email.
      </p>
      <p>
        Once the order is confirmed, you will not be able to change your order
        details (e.g recipient, delivery address). If required, please let us
        know during the confirmation call.
      </p>

      <Primary
        name="Continue Shopping"
        action={() => {
          history.push("/");
        }}
      />
    </div>
  );
};

export default Confirm;
