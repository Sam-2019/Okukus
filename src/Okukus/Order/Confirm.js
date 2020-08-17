import React, { useState, useEffect } from "react";
import "./confirm.css";
import { NavLink } from "react-router-dom";

const Confirm = () => {
  return (
    <div className=" ">
      <div className="confirm_form">
        <NavLink to="/">
          <img
            class="logo"
            src="img/okuku-logo.png"
            alt="Okukus"
            title="Okukus"
          />
        </NavLink>
        <h2>Your Order Has Been Placed</h2>
        <h5>
          Hi <code>username</code>
        </h5>
        <p>
          Thank you for shopping with us! Your order <code>order number</code>{" "}
          has been placed, pending confirmation.
        </p>
        <p>
          We will call you within 24 hours (calling hours: Mon-Fri
          8:30am-5:30pm) to confirm your order. You will also receive
          confirmation messages through your email.
        </p>
        <p>
          Once the order is confirmed, you will not be able to change your order
          details (e.g recipient, delivery address). If required, please let us
          know during the confirmation call.
        </p>

        <NavLink to="/" className="confirm_button link">
          Contiue Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default Confirm;
