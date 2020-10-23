import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import "./checkout.css";
import Summary from "./Summary";

const Checkout = () => {
  const { uniqueID } = useAuthentication();
  let history = useHistory();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const [active, setActive] = useState("");
  const [address, setAddress] = useState(false);
  const [momoDetails, setMomoDetails] = useState(false);
  const [addMomo, setAddMomo] = useState(false);

  const [location, setLocation] = useState("");
  const [digital_address, setDigitalAddress] = useState("");

  const [momo_name, setMomoName] = useState("");
  const [momo_number, setMomoNumber] = useState("");
  const [momo_transaction_id, setMomoTransactionID] = useState("");

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
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
