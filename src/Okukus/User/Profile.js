import React, { useState, useContext, useEffect } from "react";
import { auth } from "../Context/authContext";
import { okukus } from "../apis";
import "./profile.css";

const User = () => {
  const [active, setActive] = useState("account");

  const account = active === "account";
  // const order = active === "order";

  function okukus_account() {
    setActive("account");
  }

  function order_history() {
    setActive("order");
  }

  return (

      <div className="account-container shadow">
        <h2 className="text-center "> {account ? "Account" : "Order"}</h2>

        <div className="row  ">
          <div className="col-12 col-md-4   ">
            <Sidebar
              okukus_account={okukus_account}
              order_history={order_history}
            />
          </div>

          <div className="col-12 col-md-8  ">
            {account ? <OkukusAccount /> : <OrderHistory />}
          </div>
        </div>
      </div>
  );
};

export default User;

const Sidebar = ({ okukus_account, order_history }) => {
  return (
    <div className="">
      <div className="row sidey no-gutters">
        <div className="col-6 col-md-12 mb-2">
          <button onClick={okukus_account} className="selector2">
            Account
          </button>
        </div>

        <div className="col-6 col-md-12 ">
          <button onClick={order_history} className="selector2">
            Order History
          </button>
        </div>
      </div>
    </div>
  );
};

const OkukusAccount = () => {
  const { rootState } = useContext(auth);
  const { firstName, lastName, email } = rootState;

  return (
    <>
      <div className=" mt-3 ">
        <div className="profile-header">
          <div className=" d-flex justify-content-between ">
            <div className="bd-highlight">Account Details</div>
            <div className="bd-highlight  ">
              <svg
                width="0.6em"
                height="0.6em"
                viewBox="0 0 16 16"
                className="bi bi-pencil-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="profile-body">
          <div className="">
            {firstName} {lastName}
          </div>

          <div className="px-2 profile-text">{email}</div>
        </div>
      </div>

      <div className=" mt-3 mb-3" hidden>
        <div className="profile-header">
          <div className=" d-flex justify-content-between ">
            <div className="bd-highlight">Address Book</div>
            <div className="bd-highlight  ">
              <svg
                width="0.6em"
                height="0.6em"
                viewBox="0 0 16 16"
                className="bi bi-pencil-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="">Your default shipping address:</div>

          <div className="px-2 profile-text">
            <div>ken kay</div>
            <div>
              kenjoe@gmail.comkenjoe@gmail.comkenjoe@gmail.comkenjoe@gmail.com
            </div>
            <div>Tel: +233 254 23564 </div>
            <div>Tel: +233 254 23564 </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OrderHistory = () => {
  const [order, setOrder] = useState([]);
  const { rootState, orderHistory } = useContext(auth);
  const { uniqueID } = rootState;

  useEffect(() => {
    var formData = new FormData();
    formData.set("buyer_unique_id", uniqueID);

    const fetchData = async () => {
      const data = await orderHistory(formData);
      setOrder(data.order_history);
    };
    fetchData();
  }, [uniqueID, orderHistory]);

  let content = order.map(
    ({
      id,
      unique_id,
      status,
      product_name,
      cover_photo_url,
      amount,
      datetime_ordered,
    }) => (
      <View
        key={id}
        id={unique_id}
        amount={amount}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
        status={status}
        datetime_ordered={datetime_ordered}
      />
    )
  );

  let view;

  if (content.length === 0) {
    view = <div className="text-center">Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return <div className="px-3">{view}</div>;
};

const View = ({
  product_name,
  cover_photo_url,
  amount,
  status,
  datetime_ordered,
}) => {

  return (
    <div className="  my-3 card">
      <div className="row no-gutters  p-2 ">
        <div className="col-md-2 col-3  ">
          <img
            src={`${okukus}/${cover_photo_url}`}
            className="order-img"
            alt="..."
          />
        </div>
        <div className="col-md col ">
          <div className="order-body">
            <div className="">{product_name}</div>

            <div className=" d-flex justify-content-between ">
              <div className="bd-highlight " hidden>
                <span className="order-qty">1 x </span>
                <span> $40</span>
              </div>

              <div className="bd-highlight ">
                <span>${amount}</span>
              </div>
            </div>

            <div className="">
              <div className="bd-highlight">
                <small className="">
                  <span>{datetime_ordered}</span>
                </small>
              </div>

              <div className="bd-highlight   text-right">
                <small className="bg-warning">{status}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
