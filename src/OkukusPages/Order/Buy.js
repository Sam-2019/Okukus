import React, { useState } from "react";
import Primary from "../Button/Primary";

import { useAuthentication } from "../Auth/Context";
import "./order.css";

const Buy = ({ doneShopping, id }) => {

  const { createOrder, uniqueID } = useAuthentication();
  
  const [momo, setMomo] = useState(false);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const [product_unique_id, setProductUniqueID] = useState(id);
  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

  const cashCheck = () => {
    setMomo(false);
    setPaymentMethod("cash");
    show();
  };

  const momoCheck = () => {
    setMomo(true);
    setPaymentMethod("momo");
    show();
  };

  const clearCheckOut = () => {
    setProductUniqueID("");
    setLocation("");
    setDigitalAddress("");
    setPhoneNumber("");
    setPaymentMethod("");
    setMomoName("");
    setMomoNumber("");
    setMomoTransactionID("");
  };

  const buy = async (event) => {
    hide();
    event.preventDefault();
    var formData = new FormData();


    if (payment_method === "cash") {
      let empty = location && digital_address && phone_number && payment_method;
      if (empty !== "") {
        formData.set("buyer_unique_id", uniqueID);
        formData.set("product_unique_id", product_unique_id);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", payment_method);

        const data = await createOrder(formData);
        localStorage.setItem("orderID", data.data.order_number);

        clearCheckOut();
        doneShopping();
      } else setMessage("Please fill above");
    } else if (payment_method === "momo") {
      let empty =
        location &&
        digital_address &&
        phone_number &&
        payment_method &&
        momo_name &&
        momo_number &&
        momo_transaction_id;

      if (empty !== "") {
        formData.set("buyer_unique_id", uniqueID);
        formData.set("product_unique_id", product_unique_id);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", payment_method);
        formData.set("momo_name", momo_name);
        formData.set("momo_number", momo_number);
        formData.set("momo_transaction_id", momo_transaction_id);

        const data = await createOrder(formData);
        localStorage.setItem("orderID", data.data.order_number);


        clearCheckOut();
        doneShopping();
      } else {
        setMessage("Please fill below");
        setDisplay(!display);
      }
    } else {
      setMessage("Please fill all fields");
      show();
    }
  };

  const show = () => {
    setDisplay(true);
  };

  const hide = () => {
    setDisplay(false);
  };

  return (
    <div className="buy_wrapper ">
      <div>
        <div className="buy_form">
          <h2>Order</h2>

          <input
            type="text"
            placeholder="Location"
            className="input"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />

          <input
            type="text"
            placeholder="Digital Address"
            className="input"
            onChange={(e) => setDigitalAddress(e.target.value)}
            value={digital_address}
            required
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="input"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {display && (
          <div className="message_wrapper ">
            {message === "Please fill all fields" ? (
              <div className="user_message"> {message} </div>
            ) : null}
          </div>
        )}

        <h4 className="">Billing</h4>
        <div>Choose an option below</div>

        <div className="payment_wrapper">
          <div className="   radio">
            <label>
              <input
                type="radio"
                id="cash"
                name="payment_option"
                value={payment_method}
                onClick={cashCheck}
              />{" "}
              Cash on Delivery
            </label>
          </div>

          <div className="  radio">
            <label>
              <input
                type="radio"
                id="momo"
                name="payment_option"
                value={payment_method}
                onClick={momoCheck}
              />{" "}
              Mobile Money
            </label>
          </div>
        </div>
      </div>

      {momo && (
        <div>
          <h5>HOW TO MAKE PAYMENT</h5>

          <div className="payment_instruction">
            <ol>
              <li>Dial *170# on your phone</li>
              <li>Select MoMoPay &amp; PayBill</li>
              <li>Select MoMoPay</li>
              <li>
                Enter <strong>283051 </strong>
                as the Merchant ID
              </li>
              <li>Enter Reference</li>
              <li>Enter Your Pin to confirm payment</li>
            </ol>
          </div>

          <div>
            Upon successful payment, please use the details of the payment to
            fill the fields below
          </div>

          <div className="">
            <h5>MOMO</h5>

            {display && (
              <div className="message_wrapper">
                {message === "Please fill below" ? (
                  <div className="user_message "> {message} </div>
                ) : null}
              </div>
            )}

            <div className="momo_form ">
              <input
                type="text"
                placeholder="Name "
                className="input"
                onChange={(e) => setMomoName(e.target.value)}
                value={momo_name}
              />

              <input
                type="number"
                placeholder="Number"
                className="input"
                onChange={(e) => setMomoNumber(e.target.value)}
                value={momo_number}
              />

              <input
                type="number"
                placeholder="Transaction ID"
                className="input"
                onChange={(e) => setMomoTransactionID(e.target.value)}
                value={momo_transaction_id}
              />
            </div>
          </div>
        </div>
      )}

      <div className="button_wrapper ">
        <Primary name="Check Out" action={buy} />
      </div>
    </div>
  );
};

export default Buy;
