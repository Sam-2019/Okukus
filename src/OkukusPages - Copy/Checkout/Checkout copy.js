import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./checkout.css";
import Button from "../Button/Button";

const addressData = [
  {
    id: "1",
    name: "Dan Doe",
    tel: "+233240506040",
    box: " P.O.Box sk 1950",
    community: " Comm 1",
    city: "Tema",
    town: "Tema",
    region: "Greaater Accra",
    country: "Ghana",
    country_code: "00233",
  },
  {
    id: "2",
    name: "Gerrad Loeb",
    tel: "+233240506040",
    box: " P.O.Box sk 1940",
    community: " Comm 2",
    city: "Tema",
    town: "Tema",
    region: "Greaater Accra",
    country: "Ghana",
    country_code: "00233",
  },
];

const momoData = [
  {
    id: "1.0",
    name: "Dan Doe",
    tel: "+233240506040",
    transactionID: " 32145698752",
  },
];

const Checkout = () => {
  let history = useHistory();

  const [active, setActive] = useState("");
  const [address, setAddress] = useState(false);
  const [momoDetails, setMomoDetails] = useState(false);
  const [addMomo, setAddMomo] = useState(false);

  const cash = active === "Cash";
  const momo = active === "Momo";
  console.log(active);

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

          <div className="section shipping ">
            <div className="shipping_selection">
              <div className="shipping_radio">
                {addressData.map((item) => (
                  <div className=" select item">
                    <input
                      type="radio"
                      className="  "
                      id={item.id}
                      name="shipping"
                      value={item.id}
                      required
                    />

                    <label className="label-size" htmlFor={item.id}>
                      <div>{item.name},</div>
                      <div>{item.tel},</div>
                      <div>
                        {item.box}, {item.community},
                      </div>
                      <div>
                        {item.town}, {item.region},
                      </div>
                      <div>
                        {item.country}, {""}
                        {item.country_code}.
                      </div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="shipping_new ">
                {address ? (
                  <>
                    <div className="address_input_wrapper ">
                      <div className="input_group1 ">
                        <input
                          placeholder="P.O.Box"
                          type="text"
                          className="address_input"
                        />
                        <input
                          placeholder="Town"
                          type="text"
                          className="address_input "
                        />
                      </div>

                      <div className="input_group1 ">
                        <input
                          placeholder="City"
                          type="text"
                          className="address_input"
                        />
                        <input
                          placeholder="Region"
                          type="text"
                          className="address_input"
                        />
                      </div>

                      <div className="input_group1 ">
                        <input
                          placeholder="Country"
                          type="text"
                          className="address_input"
                        />
                        <input
                          placeholder="Country code"
                          type="text"
                          className="address_input"
                        />
                      </div>
                    </div>

                    <div className="right_button_wrapper">
                      <button onClick={showAddress}>Cancel</button>

                      <button onClick={showAddress}>Save</button>
                    </div>
                  </>
                ) : (
                  <div className="right_button_wrapper">
                    <button onClick={showAddress}>Add new address</button>
                  </div>
                )}
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

              {/* <div className="page_title">
                {cash ? "Cash" : momo ? "Momo" : null}
              </div> */}
            </div>

            {momoDetails ? (
              <div className=" momo_selected ">
                <div className="momo_radio ">
                  {momoData.map((momo) => (
                    <div className="">
                      <label className="label-size" htmlFor={momo.id}>
                        <div>{momo.name},</div>

                        <div>{momo.tel}</div>

                        <div>{momo.transactionID}</div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="momo_new ">
                  {addMomo ? (
                    <>
                      <div className="momo_input_wrapper  ">
                        <input
                          placeholder="Name"
                          type="text"
                          className="momo_input"
                        />
                        <input
                          placeholder="Number"
                          type="number"
                          className="momo_input"
                        />

                        <input
                          placeholder="TransactionID"
                          type="number"
                          className="momo_input"
                        />
                      </div>

                      <div className="right_button_wrapper">
                        <button onClick={addMomoAccount}>Cancel</button>

                        <button>Save</button>
                      </div>
                    </>
                  ) : (
                    <div className="right_button_wrapper">
                      <button onClick={addMomoAccount}>
                        Add new Momo Account
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="summary_wrapper  ">
          <div className="page_title"> Summary</div>
          <div className="new_wrapper">
            <div className="summary_item_wrapper  ">
              <div className="summary_item">Subtotal</div>
              <div className="summary_amount ">2,000,000</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Shipping</div>
              <div className="summary_amount ">2,000</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Order Total</div>
              <div className="summary_amount ">Total</div>
            </div>

            <div className="summary_item_wrapper  ">
              <div className="summary_item">Total (Ghc)</div>
              <div className="summary_amount ">Total</div>
            </div>

            <div className="button_wrapper ">
              <Button
                name="Check Out"
                class_name="primary"
                action={() => {
                  history.push("/checkout");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
