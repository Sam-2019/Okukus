import React, { useState } from "react";
import "./order.css";

const Order = () => {
  return (
    <div className="order  ">
      <div className="order-container shadow">
        <Buy />
      </div>
    </div>
  );
};

export default Order;

const Buy = (props) => {
  return (
    <div className="">
      <form action="#" className="order_form ">
        <div className="order_text" hidden>
          or use your account
        </div>
        <input type="text" placeholder="Location" className="user_input" />
        <input
          type="text"
          placeholder="Digital Address"
          className="user_input"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="user_input"
        />
        <h2>Billing</h2>
        <p>Choose an option here.</p>
        <p>
          Note: If u choose mobile money, you have to fill out the form below
        </p>

        <div className="">
          <div>
            <label>
              <input
                type="radio"
                name="payment_option"
                id="cash"
                value="cash"
              />
              Cash on Delivery
            </label>
          </div>

          <div>
            <label>
              <input type="radio" name="payment_option" value="mobile_money" />{" "}
              Mobile Money
            </label>
          </div>
        </div>

        <div>HOW TO MAKE PAYMENT</div>

        <ul>
          <li>1. Dial *170# on your phone</li>
          <li>2. Select Option 2: MoMoPay &amp; PayBill</li>
          <li>3. Select Option 1: MoMoPay</li>
          <li>
            4. Enter <strong>283051</strong> as the Merchant ID
          </li>
          <li>5. Enter Reference</li>
          <li>6. Enter Your Pin to confirm payment</li>
        </ul>

        <div>
          After making successful payment, please use the details of the payment
          to fill the fields below
        </div>

        <div>MOMO</div>
        <input type="text" placeholder="Name " className="user_input" />
        <input type="number" placeholder="Number" className="user_input" />
        <input
          type="number"
          placeholder="Transaction ID"
          className="user_input"
        />

        <div>
          <button className="order_button">Check Out</button>
        </div>
      </form>
    </div>
  );
};
