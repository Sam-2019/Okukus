import React, { useState, useCallback, useEffect } from "react";
import { useAuthentication } from "../Auth/Context";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Message from "../Message/Message";

const Buy = ({ id }) => {
  const { createOrder, uniqueID } = useAuthentication();

  const [loading, setLoading] = useState(false);

  const [momo, setMomo] = useState(false);
  const [message, setMessage] = useState("");

  const [display, setDisplay] = useState("");
  const [momoDisplay, setMomoDisplay] = useState("");

  const [cashMessage, setCashMessage] = useState("");
  const [momoMessage, setMomoMessage] = useState("");

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
    history.push("/order/confirm");
  };

  const submit = async (event) => {
    setDisplay(false);
    setMomoDisplay(false);
    setMessage("");

    setCashMessage("");
    setMomoMessage("");

    event.preventDefault();
    var formData = new FormData();

    if (payment_method === "cash") {
      let empty = location && digital_address && phone_number && payment_method;
      if (empty !== "") {
        setLoading(true);
        formData.set("buyer_unique_id", uniqueID);
        formData.set("product_unique_id", product_unique_id);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", payment_method);

        const data = await createOrder(formData);
        console.log(data);

        if (data.error) {
          setCashMessage(data.error);
        } else if (data.order_number !== "") {
          localStorage.setItem("orderID", data.order_number);

          clear();

          confirm();
        } else {
          setLoading(false);
        }
      } else setCashMessage("Please fill above");
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
        setLoading(true);
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

        if (data.error) {
          setLoading(false);
          setMomoMessage(data.error);
        } else if (data.order_number !== "") {
          localStorage.setItem("orderID", data.order_number);

          clear();
          confirm();
        } else {
          setLoading(false);
        }
      } else {
        setMomoMessage("Please fill below");
      }
    } else {
      setMomoMessage("Please fill all fields");
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

        {cashMessage ? (
          <Message message={cashMessage} class_name="message" />
        ) : null}

        {display && (
          <>
            {message ? (
              <Message message={message} class_name="message" />
            ) : null}
          </>
        )}

        <h4 className="_billing ">Billing</h4>
        {/* <div>Choose a payment method below</div> */}

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

          {momoMessage === "Please fill below" ? (
            <Message message={momoMessage} class_name="message" />
          ) : null}

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

      <Button
        name="Check Out"
        class_name="primary"
        action={submit}
        loading={loading}
      />
    </div>
  );
};

export default Buy;
