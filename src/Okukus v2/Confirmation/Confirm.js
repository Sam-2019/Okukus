import React from "react";
import {  useHistory } from "react-router-dom";
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

      <div className=" _confirm">
        <div>
          Hi{" "}
          <span className="confirm_name">
            {firstName} {lastName}
          </span>
          ,
        </div>{" "}
        Thank you for shopping with us! Your order{" "}
        <span className="orderID">{orderID}</span> has been placed,
        pending confirmation. We will call you within 24 hours (calling hours:
        Mon-Fri 8:30am-5:30pm) to confirm your order. You will also receive
        confirmation messages through your email. Once the order is confirmed,
        you will not be able to change your order details (e.g recipient,
        delivery address). If required, please let us know during the
        confirmation call.
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
