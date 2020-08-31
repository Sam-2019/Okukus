import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "../Context/authContext";
import "./confirm.css";

const Confirm = () => {
  const { rootState } = useContext(auth);
  const { firstName, lastName } = rootState;
  const orderID = localStorage.getItem("orderID");

  let history = useHistory();
  function purchaseDone() {
    localStorage.removeItem("orderID");
    history.push(`/`);
  }

  return (
    <div className=" confirm-container">
      <div className="confirm_form">
        <NavLink to="/">
          <img
            className="logo"
            src="img/okuku-logo.png"
            alt="Okukus"
            title="Okukus"
          />
        </NavLink>
        <h2>Your Order Has Been Placed</h2>
        <h5>
          Hi{" "}
          <code>
            {firstName} {lastName}
          </code>
        </h5>
        <p>
          Thank you for shopping with us! Your order <code>{orderID}</code> has
          been placed, pending confirmation.
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

        <button className="confirm_button" onClick={purchaseDone}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Confirm;
