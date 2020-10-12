import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
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

  
  const [selectedOption, setSelectedOption] = useState("Choose");

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

  return (
    <div className="buy_wrapper ">
      <div>
        <div className="buy_form">
          <h2>Order</h2>

          <Input
            type="text"
            placeholder="Location"
            classname="input"
            action={(e) => setLocation(e.target.value)}
            value={location}
            required
          />

          <Input
            type="text"
            placeholder="Digital Address"
            classname="input"
            action={(e) => setDigitalAddress(e.target.value)}
            value={digital_address}
            required
          />

          <Input
            type="number"
            placeholder="Phone Number"
            classname="input"
            value={phone_number}
            action={(e) => setPhoneNumber(e.target.value)}
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
          <div className="radio">
            <label>
              <Input
                type="radio"
                id="cash"
                name="payment_option"
                value={payment_method}
                click={cashCheck}
              />{" "}
              Cash on Delivery
            </label>
          </div>

          <div className="  radio">
            <label>
              <Input
                type="radio"
                id="momo"
                name="payment_option"
                value={payment_method}
                click={momoCheck}
              />{" "}
              Mobile Money
            </label>
          </div>
        </div>
     
        <div className="payment_wrapper">
        <select
          className="input"
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            dodo();
          }}
        >
          <option value="Choose" disabled="disabled">
            Choose
          </option>
          <option value="Cash" className='option'>Cash</option>
          <option value="Momo">Momo</option>
        </select>
        <br />
        <div>Selected option: {selectedOption}</div>
        <div>Payment method: {payment_method}</div>

 
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
              <Input
                type="text"
                placeholder="Name "
                classname="input"
                aciton={(e) => setMomoName(e.target.value)}
                value={momo_name}
              />

              <Input
                type="number"
                placeholder="Number"
                classname="input"
                action={(e) => setMomoNumber(e.target.value)}
                value={momo_number}
              />

              <Input
                type="number"
                placeholder="Transaction ID"
                classname="input"
                action={(e) => setMomoTransactionID(e.target.value)}
                value={momo_transaction_id}
              />
            </div>
          </div>
        </div>
      )}

      <div className="button_wrapper ">
        <Button name="Check Out" action={buy} classname="primary" />
      </div>
    </div>
  );
};

export default Buy;
