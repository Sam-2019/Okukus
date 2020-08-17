import React, { useState, useEffect } from "react";
import axios from "axios";
import Confirm from "./Confirm";
import "./order.css";

const Order = () => {
  const [state, setState] = useState(false);

  const doneShopping = () => {
    setState(true);
  };

  return (
    <div className="order  ">
      <div className="order-container shadow">
        {state ? <Confirm /> : <Buy doneShopping={doneShopping} />}
      </div>
    </div>
  );
};

export default Order;

const Buy = ({ doneShopping }) => {
  const [momo, setMomo] = useState(false);

  const [buyer_unique_id, setBuyerUniqueID] = useState(
    "5f36a061590599.86077024"
  );
  const [product_unique_id, setProductUniqueID] = useState("");
  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

  const MomoCheck = () => {
    setMomo(true);
  };



  const MomoUncheck = () => {
    setMomo(false);
  };

  const clearCheckOut = () => {
    setBuyerUniqueID("");
    setProductUniqueID("");
    setLocation("");
    setDigitalAddress("");
    setPhoneNumber("");
    setPaymentMethod("");
    setMomoName("");
    setMomoNumber("");
    setMomoTransactionID("");
  };

  const CheckOut = (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", buyer_unique_id);
    formData.set("product_unique_id", product_unique_id);
    formData.set("location", location);
    formData.set("digital_address", digital_address);
    formData.set("phone_number", phone_number);
    formData.set("payment_method", payment_method);
    formData.set("momo_name", momo_name);
    formData.set("momo_number", momo_number);
    formData.set("momo_transaction_id", momo_transaction_id);

    const uri = "https://okukus.com/api_call/user_register.php";
    axios({
      method: "post",
      url: uri,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(
  
      payment_method
    );
    clearCheckOut();
    doneShopping();
  };

  const submit = () => {
    let empty = location && digital_address && phone_number && payment_method;

    if (empty === "") {
      alert("Please fill below");
    } 
  };

  return (
    <div className="">
      <h2 className="text-center">Order</h2>
      <div className="order_form ">
        <div className="order_text" hidden>
          or use your account
        </div>
        <input
          type="text"
          placeholder="Location"
          className="user_input"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          required
        />
        <input
          type="text"
          placeholder="Digital Address"
          className="user_input"
          onChange={(e) => setDigitalAddress(e.target.value)}
          value={digital_address}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="user_input"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
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
                value="cash"
                onClick={MomoUncheck}
                checked={MomoUncheck && payment_method === 'cash'}
       
              />{" "}
              Cash on Delivery
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="payment_option"
                value={payment_method === 'momo'}
                onClick={MomoCheck}
            
              />{" "}
              Mobile Money
            </label>
          </div>
        </div>

        {momo && (
          <>
            <div>HOW TO MAKE PAYMENT</div>

            <ol>
              <li>Dial *170# on your phone</li>
              <li>Select Option 2: MoMoPay &amp; PayBill</li>
              <li>Select Option 1: MoMoPay</li>
              <li>
                Enter <strong>283051</strong> as the Merchant ID
              </li>
              <li>Enter Reference</li>
              <li>Enter Your Pin to confirm payment</li>
            </ol>

            <div>
              After making successful payment, please use the details of the
              payment to fill the fields below
            </div>

            <div>MOMO</div>
            <input
              type="text"
              placeholder="Name "
              className="user_input"
              onChange={(e) => setMomoName(e.target.value)}
              value={momo_name}
        
            />
            <input
              type="number"
              placeholder="Number"
              className="user_input"
              onChange={(e) => setMomoNumber(e.target.value)}
              value={momo_number}
         
            />
            <input
              type="number"
              placeholder="Transaction ID"
              className="user_input"
              onChange={(e) => setMomoTransactionID(e.target.value)}
              value={momo_transaction_id}
       
            />
          </>
        )}

        <div>
          <button className="order_button" onClick={CheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};
