import React, { useState, useCallback, useEffect } from "react";
import { useAuthentication } from "../Auth/Context";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";
import "./neworder.css";

const Order = () => {
  let { id } = useParams();

  return (
    <div className="order_">
      <Buy id={id} />
    </div>
  );
};

export default Order;

const Buy = ({ id }) => {
  const { createOrder, uniqueID } = useAuthentication();

  const [momo, setMomo] = useState(false);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const [momoDisplay, setMomoDisplay] = useState(false);

  const [product_unique_id, setProductUniqueID] = useState(id);

  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const [payment_method, setPaymentMethod] = useState("");

  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  let history = useHistory();

  const clear = () => {
    setProductUniqueID("");
    setLocation("");
    setDigitalAddress("");
    setPhoneNumber("");
    setPaymentMethod("");
    setMomoName("");
    setMomoNumber("");
    setMomoTransactionID("");
  };

  const confirm = () => {
    history.push("/confirm");
  };

  const submit = async (event) => {
    setDisplay(false);
    setMomoDisplay(false);
    setMessage("");
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
        console.log(data);

        if (data.data.error) {
          return;
        } else if (data.data.order_number !== "") {
          localStorage.setItem("orderID", data.data.order_number);

          clear();
          confirm();
        } else return;
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
        console.log(data);

        if (data.data.error) {
          return;
        } else if (data.data.order_number !== "") {
          localStorage.setItem("orderID", data.data.order_number);

          clear();
          confirm();
        } else return;

   
      } else {
        setMessage("Please fill below");
        setMomoDisplay(!momoDisplay);
      }
    } else {
      setMessage("Please fill all fields");
      setDisplay(true);
    }
  };

  const dodo = useCallback(() => {
    if (selectedOption === "Momo") {
      setPaymentMethod(null);
      setMomo(true);
      setPaymentMethod("momo");
    } else if (selectedOption === "Cash") {
      setPaymentMethod(null);
      setMomo(false);
      setPaymentMethod("cash");
    } else return;
  }, [selectedOption]);

  useEffect(() => {
    dodo();
  }, [dodo]);

  // console.log(selectedOption);

  return (
    <div className="buy_wrapper ">
      <div>
        <div className="page_title">Order</div>
        <div className="buy_form">
          <Input
            type="text"
            placeholder="Location"
            class_name="input"
            action={(e) => setLocation(e.target.value)}
            content={location}
            required
          />

          <Input
            type="text"
            placeholder="Digital Address"
            class_name="input"
            action={(e) => setDigitalAddress(e.target.value)}
            content={digital_address}
            required
          />

          <Input
            type="number"
            placeholder="Phone Number"
            class_name="input"
            content={phone_number}
            action={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {display && (
          <>
            {message ? (
              <Message message={message} class_name="message" />
            ) : null}
          </>
        )}

        <h4 className="_billing">Billing</h4>
        {/* <div>Choose a payment method below</div> */}

        {/* <div className="payment_wrapper">
          <div className="   radio">
            <label>
              <input
                type="radio"
                id="cash"
                name="payment_option"
                content={payment_method}
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
                content={payment_method}
                onClick={momoCheck}
              />{" "}
              Mobile Money
            </label>
          </div>
        </div> */}

        <div className="payment_wrapper ">
          <select
            className="input"
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              dodo();
            }}
          >
            <option value="" disabled defaultValue>
              Select a payment method
            </option>
            <option value="Cash" className="option">
              Cash
            </option>
            <option value="Momo">Momo</option>
          </select>

          {/* <div>Selected option: {selectedOption}</div>
          <div>Payment method: {payment_method}</div> */}
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

          {momoDisplay && (
            <>
              {message === "Please fill below" ? (
                <Message message={message} class_name="message" />
              ) : null}
            </>
          )}
        </div>
      )}

      {momo && (
        <div className="momo_form ">
          <Input
            type="text"
            placeholder="Name "
            class_name="input"
            action={(e) => setMomoName(e.target.value)}
            content={momo_name}
          />

          <Input
            type="number"
            placeholder="Number"
            class_name="input"
            action={(e) => setMomoNumber(e.target.value)}
            content={momo_number}
          />

          <Input
            type="number"
            placeholder="Transaction ID"
            class_name="input"
            action={(e) => setMomoTransactionID(e.target.value)}
            content={momo_transaction_id}
          />
        </div>
      )}

      <Button name="Check Out" class_name="primary" action={submit} />
    </div>
  );
};
