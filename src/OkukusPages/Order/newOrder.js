import React, { useState } from "react";
import Confirm from "../Confirmation/Confirm";
import PrimaryButton from "../Button/Primary";
import "./neworder.css";

const Order = (props) => {
  let id = props.match.params.id;

  const [state, setState] = useState(false);

  const doneShopping = () => {
    setState(true);
  };

  return (
    <div className="order_">
      {state ? <Confirm /> : <Buy doneShopping={doneShopping} id={id} />}
    </div>
  );
};

export default Order;

const Buy = ({ doneShopping, id }) => {
  const [momo, setMomo] = useState(false);
  const [message, setMessage] = useState("Please fill all fields");
  const [display, setDisplay] = useState(false);

  const [buyer_unique_id, setBuyerUniqueID] = useState("");
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

  const submit = async (event) => {
    hide();
    event.preventDefault();
    var formData = new FormData();
    console.log(payment_method);

    if (payment_method === "cash") {
      let empty = location && digital_address && phone_number && payment_method;
      if (empty !== "") {
        formData.set("buyer_unique_id", buyer_unique_id);
        formData.set("product_unique_id", product_unique_id);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", payment_method);

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
        formData.set("buyer_unique_id", buyer_unique_id);
        formData.set("product_unique_id", product_unique_id);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", payment_method);
        formData.set("momo_name", momo_name);
        formData.set("momo_number", momo_number);
        formData.set("momo_transaction_id", momo_transaction_id);

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
    <div className="buy_wrapper item">
      <div>
        <h2>Order</h2>
        <div className="buy_form">
          <div>
            <input
              type="text"
              placeholder="Location"
              className="user_input"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Digital Address"
              className="user_input"
              onChange={(e) => setDigitalAddress(e.target.value)}
              value={digital_address}
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Phone Number"
              className="user_input"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        {momo && (   <div className="momo_form item">
        <h5>MOMO</h5>
              <div>
                <input
                  type="text"
                  placeholder="Name "
                  className="user_input"
                  onChange={(e) => setMomoName(e.target.value)}
                  value={momo_name}
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Number"
                  className="user_input"
                  onChange={(e) => setMomoNumber(e.target.value)}
                  value={momo_number}
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Transaction ID"
                  className="user_input"
                  onChange={(e) => setMomoTransactionID(e.target.value)}
                  value={momo_transaction_id}
                />
              </div>
            </div>
      )}
      
        {display && (
          <div className="message_output">
            {message === "Please fill all fields" ? (
              <span className="message"> {message} </span>
            ) : null}
          </div>
        )}
        <h4 className="_billing">Billing</h4>
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
    

            {display && (
              <div className="message_output">
                {message === "Please fill below" ? (
                  <span className="message "> {message} </span>
                ) : null}
              </div>
            )}

        
            
          </div>
        </div>
      )}

      <PrimaryButton name="Check Out" />
    </div>
  );
};
