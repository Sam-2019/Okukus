import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../Auth/Context";
import { useAsync } from "../../helpers";
import Vhistory from "../../Container/View/V-history";
import Spinner from "../../Spinner/Spinner";
import Button from "../../Button/Button";
import "./history.css";

const OrderHistory = () => {
  const { historyOrder, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(historyOrder, formData);
  console.log(resource);

  let content;

  if (resource.value) {
    content = resource.value.map(
      ({
        cover_photo_url,
        amount,
        datetime_ordered,
        id,
        order_number,
        product_author,
        product_name,
        product_unique_id,
        status,
        unique_id,
      }) => (
        <Vhistory
          key={id}
          id={unique_id}
          amount={amount}
          cover_photo_url={cover_photo_url}
          product_name={product_name}
          datetime_ordered={datetime_ordered}
          order_number={order_number}
          product_author={product_author}
          product_unique_id={product_unique_id}
          status={status}
        />
      )
    );
  }

  return (
    <div>
      {resource.loading ? (
        <Spinner />
      ) : resource.message === "no orders found" ? (
        <NoContent />
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default OrderHistory;

const NoContent = () => {
  let history = useHistory();
  return (
    <div className="empty_cart">
      <div className="cart_stack">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart3 "
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
      </div>

      <div className=" empty_cart_message">
        <div>You have no items in your order history!</div>
        <div>Please visit the homepage to make a purchase.</div>
      </div>

      <Button
        name="Go Shopping"
        class_name="primary"
        action={() => {
          history.push("/");
        }}
      />
    </div>
  );
};
