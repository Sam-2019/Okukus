import React, { useState, useEffect, useCallback } from "react";
import { useAuthentication } from "../Auth/Context";
import PropTypes from "prop-types";
import Message from "../Message/Message";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useAsync } from "../helpers";
import "./checkout.css";
import Spinner from "../Spinner/Spinner";

const Main = ({ main_state }) => {
  const [loading, setLoading] = useState(false);
  const { uniqueID, summaryCart, checkoutCart } = useAuthentication();

  const [tQty, setTQty] = useState(0);
  const [tValue, setTValue] = useState(0);

  const [message, setMessage] = useState("");

  const [active, setActive] = useState("");
  // const [address, setAddress] = useState(false);
  const [momoDetails, setMomoDetails] = useState(false);
  // const [addMomo, setAddMomo] = useState(false);

  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

  const [promo_code, setPromoCode] = useState("");

  // const cash = active === "Cash";
  // const momo = active === "Momo";

  function cashActivate() {
    setActive("Cash");
    setMomoDetails(false);
  }

  function momoActivate() {
    setActive("Momo");
    setMomoDetails(true);
  }

  // function showAddress() {
  //   setAddress(!address);
  // }

  // function addMomoAccount() {
  //   setAddMomo(!addMomo);
  // }

  const clear = () => {
    setLocation("");
    setDigitalAddress("");
    setPhoneNumber("");
    setMomoName("");
    setMomoNumber("");
    setMomoTransactionID("");
  };

  // const confirm = () => {
  //   history.push("/checkout/confirm");
  // };

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);
  const cartSummary = useAsync(summaryCart, formData);


  const load = useCallback(() => {
    if (cartSummary.loading === true) {
      return;
    } else if (cartSummary.loading === false) {
      setTQty(cartSummary.value.total_quantity);
      setTValue(cartSummary.value.total_amount);
    }

    // if (cartSummary.value) {
    //   setTQty(cartSummary.value.total_quantity);
    //   setTValue(cartSummary.value.total_amount);
    // } else return;
  }, [cartSummary.value, cartSummary.loading]);

  useEffect(() => {
    load();
  }, [load]);

  // orders placed, payment made

  const submit = async (event) => {
    setMessage();

    var formData = new FormData();

    if (active === "Cash") {
      setMessage();
      let empty = location && digital_address && phone_number;
      if (empty !== "") {
        setLoading(true);
        formData.set("buyer_unique_id", uniqueID);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", active);

        const data = await checkoutCart(formData);

        if (data.error === true) {
          setLoading(false);
          setMessage(data.message);
        } else if (data.error === false) {
          clear();
          setLoading(false);
          main_state(false);
        } else return;

        // if (data.error) {
        //   return;
        // } else if (data.data.order_number !== "") {

        //              setMessage(data.message);
        //  clear();
        //   main_state(false);

        //   clear();
        //   confirm();
        // } else return;
      } else setMessage("Please fill all fields");
    } else if (active === "Momo") {
      setMessage();
      let empty =
        location &&
        digital_address &&
        phone_number &&
        momo_name &&
        momo_number &&
        momo_transaction_id;

      if (empty !== "") {
        setLoading(true);
        formData.set("buyer_unique_id", uniqueID);
        formData.set("location", location);
        formData.set("digital_address", digital_address);
        formData.set("phone_number", phone_number);
        formData.set("payment_method", active);
        formData.set("momo_name", momo_name);
        formData.set("momo_number", momo_number);
        formData.set("momo_transaction_id", momo_transaction_id);

        const data = await checkoutCart(formData);

        if (data.error === true) {
          setMessage(data.message);
          setLoading(false);
        } else if (data.error === false) {
          setMessage(data.message);
          clear();
          setLoading(false);
          main_state(false);
        } else return;
      } else {
        setMessage("Please fill all fields");
      }
    } else {
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
              <div className="payment_select ">
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
              <div className="payment_select ">
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
                    placeholder="Momo Number"
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
                  {cartSummary.value.total_quantity === tQty ? (
                    <Spinner small="spinner-border-sm" />
                  ) : (
                    tQty
                  )}
                </div>
              </div>

              {/* <div className="summary_item_wrapper  ">
                    <div className="summary_item">Order Total</div>
                    <div className="summary_amount ">Total</div>
                  </div> */}

              <div className="summary_item_wrapper  ">
                <div className="summary_item">Total (Ghc)</div>
                <div className="summary_amount">
                  {/* {cartSummary.loading ? (
                    <Spinner small="spinner-border-sm" />
                  ) : (
                    tValue
                  )}  */}{" "}
                  {tValue}
                </div>
              </div>

              <div className="promo_code_wrapper  ">
                {/* <div className="promo_code">Promo Code</div> */}
                <Input
                  type="text"
                  placeholder="Promo code"
                  class_name="promo_code_input"
                  action={(e) => setPromoCode(e.target.value)}
                  content={promo_code}
                  required
                />
              </div>

              {message ? (
                <Message message={message} class_name="message" />
              ) : null}

              <div className="button_wrapper ">
                <Button
                  name="Check Out"
                  class_name="primary"
                  loading={loading}
                  action={() => {
                    submit();
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

export default Main;

Main.propTypes = {
  main_state: PropTypes.func,
};
