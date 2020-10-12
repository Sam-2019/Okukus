import React from "react";
import { useAuthentication } from "../../Auth/Context";
import { useAsync } from "../../helpers";
import Vhistory from "../../Container/View/V-history";
import Spinner from "../../Spinner/Spinner";
import "./history.css";

const OrderHistory = () => {
  const { historyOrder, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(historyOrder, formData);

  let content;

  if (resource.value) {
    content = resource.value.map(
      ({
        id,
        unique_id,
        product_name,
        cover_photo_url,
        unit_price,
        datetime_created,
      }) => (
        <Vhistory
          key={id}
          id={unique_id}
          unit_price={unit_price}
          cover_photo_url={cover_photo_url}
          product_name={product_name}
          datetime_created={datetime_created}
        />
      )
    );
  }

  return (
    <div>
      {resource.loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : resource.message === "no orders found" ? (
        <div>No orders found</div>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default OrderHistory;
