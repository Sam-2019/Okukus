import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import { useAuthentication } from "../Auth/Context";
import "./confirm.css";

const Confirm = () => {
  const { firstName, lastName } = useAuthentication();

  let history = useHistory();

  const orderID = localStorage.getItem("orderID");

  return (
    <div className="confirm_wrapper">
      <div className="page_title">Order Placed!</div>
      <div className="order_placed"></div>

      <i className="bi bi-check-circle">
  
      </i>

      <div className="cart_stack2">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-check-circle-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
 
<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
     
      </svg>

      <svg
        viewBox="0 0 16 16"
        className="bi bi-check-circle"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >

<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg>
      </div>

      <div className=" _confirm">
        <div>
          Hi{" "}
          <span className="confirm_name">
            {firstName} {lastName}
          </span>
          ,
        </div>{" "}
        Thank you for shopping with us! Your order{" "}
        <span className="orderID">{orderID}</span> has been placed, pending
        confirmation. We will call you within 24 hours (calling hours: Mon-Fri
        8:30am-5:30pm) to confirm your order. You will also receive confirmation
        messages through your email. Once the order is confirmed, you will not
        be able to change your order details (e.g recipient, delivery address).
        If required, please let us know during the confirmation call.
      </div>

      <Button
        name="Continue Shopping"
        class_name="primary"
        action={() => {
          history.push("/");
          localStorage.removeItem("orderID");
        }}
      />

      {/* <p className="confirm">
        Hi <span className="confirm_name">{firstName} {lastName}</span>,
      </p>
      <p>
        Thank you for shopping with us! Your order{" "}
        <span className="orderID">{orderID}</span> has been placed, pending
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
      </p> */}
    </div>
  );
};

export default Confirm;
