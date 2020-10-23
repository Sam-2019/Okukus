import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Message from '../Message/Message'
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useAsync } from "../helpers";
import "./checkout.css";


const Checkout = () => {
  const { uniqueID,summaryCart, checkoutCart } = useAuthentication();
  let history = useHistory();

  const [tQty, setTQty] = useState("");
  const [tValue, setTValue] = useState("");




  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const [momoDisplay, setMomoDisplay] = useState(false);

  const [active, setActive] = useState("");
  const [address, setAddress] = useState(false);
  const [momoDetails, setMomoDetails] = useState(false);
  const [addMomo, setAddMomo] = useState(false);

  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const [payment_method, setPaymentMethod] = useState("");

  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const cash = active === "Cash";
  const momo = active === "Momo";

  function cashActivate() {
    setActive("Cash");
    setMomoDetails(false);
  }

  function momoActivate() {
    setActive("Momo");
    setMomoDetails(true);
  }

  function showAddress() {
    setAddress(!address);
  }

  function addMomoAccount() {
    setAddMomo(!addMomo);
  }

  const clear = () => {
    setLocation("");
    setDigitalAddress("");
    setPhoneNumber("");
    setPaymentMethod("");
    setMomoName("");
    setMomoNumber("");
    setMomoTransactionID("");
  };

    var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);
  const cartSummary = useAsync(summaryCart, formData);

  const load =()=>{
  
    if (cartSummary.value) {
setTQty(cartSummary.value.total_quantity)
setTValue(cartSummary.value.total_amount)
    } else return
}


  useEffect(() => {
    load();
  }, [load]);



  const submit = async (event) => {
    setMessage();

    var formData = new FormData();

    if (active === "Cash") {
      let empty = location && digital_address && phone_number;
      if (empty !== "") {
        formData.set("buyer_unique_id", uniqueID);

        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);

        formData.set("payment_method", active);

        const data = await checkoutCart(formData);
        console.log(data)

        if (data.data) {
          setMessage(data.data.message)
          clear();
        } else return;
      } else setMessage("Please all fields");
    }  else if (active === "momo") {
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
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", active);
        formData.set("momo_name", momo_name);
        formData.set("momo_number", momo_number);
        formData.set("momo_transaction_id", momo_transaction_id);

        const data = await checkoutCart(formData);
        if (data.data) {
  setMessage(data.data.message)
          clear();
        } else return;

      } else {
        setMessage("Please all fields");
      }
    }else {
      setMessage("Please fill all fields");
    }
  };

  return (
    <div className="checkout ">
      <div className="checktout_wrapper ">
        <div className="shippingxpayment">
          <div className="page_title"> Shipping Information</div>

          <div className="section shipping">
            <div className="shipping_selection">
              <div className="shipping_new  ">
                <Input
                  type="text"
                  placeholder="Location"
                  class_name="checkout_input"
                  action={(e) => setLocation(e.target.value)}
                  content={location}
                  required
                />

                <Input
                  type="text"
                  placeholder="Digital Address"
                  class_name="checkout_input"
                  action={(e) => setDigitalAddress(e.target.value)}
                  content={digital_address}
                  required
                />

                <Input
                  type="number"
                  placeholder="Phone Number"
                  class_name="checkout_input"
                  content={phone_number}
                  action={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="page_title">Payment Method</div>

          <div className="section payment">
            <div className="payment_method  ">
              <div className="payment_select  ">
                <div
                  onClick={cashActivate}
                  className={
                    active === "Cash"
                      ? "payment_mode payment_mode-view"
                      : "payment_mode"
                  }
                >
                  Cash
                </div>
              </div>
              <div className="payment_select">
                <div
                  onClick={momoActivate}
                  className={
                    active === "Momo"
                      ? "payment_mode payment_mode-view"
                      : "payment_mode"
                  }
                >
                  Momo
                </div>
              </div>
            </div>

            {momoDetails ? (
              <div className=" momo_selected ">
                <div className="momo_new  ">
                  <Input
                    type="text"
                    placeholder="Name "
                    class_name="checkout_input"
                    action={(e) => setMomoName(e.target.value)}
                    content={momo_name}
                  />

                  <Input
                    type="number"
                    placeholder="Number"
                    class_name="checkout_input"
                    action={(e) => setMomoNumber(e.target.value)}
                    content={momo_number}
                  />

                  <Input
                    type="number"
                    placeholder="Transaction ID"
                    class_name="checkout_input"
                    action={(e) => setMomoTransactionID(e.target.value)}
                    content={momo_transaction_id}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="summary_wrapper  ">
           <div>
      <div className="page_title"> Summary</div>
      <div className="new_wrapper">
        {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Subtotal</div>
                  <div className="summary_amount ">2,000,000</div>
                </div> */}

        <div className="summary_item_wrapper  ">
          <div className="summary_item">Quantity</div>
          <div className="summary_amount ">
             {tQty}
          </div>
        </div>

        {/* <div className="summary_item_wrapper  ">
                  <div className="summary_item">Order Total</div>
                  <div className="summary_amount ">Total</div>
                </div> */}

        <div className="summary_item_wrapper  ">
          <div className="summary_item">Total (Ghc)</div>
          <div className="summary_amount">
            {tValue}
            </div>
        </div>

 
            {message ? (
              <Message message={message} class_name="message" />
            ) : null}
 

        <div className="button_wrapper ">
          <Button
            name="Check Out"
            class_name="primary"
            action={() => {
              submit();
              history.push("/checkout");
            }}
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
