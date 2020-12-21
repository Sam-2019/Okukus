import React from "react";
import { okukus } from "../../endpoints";

const Vhistory = ({
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
}) => {
  let statusColor;

  if (status === "pending") {
    statusColor = <small className="_status pending">{status}</small>;
  } else if (status === "processed" || "shipped") {
    statusColor = <small className="_status processed_shipped">{status}</small>;
  } else if (status === "fulfilled") {
    statusColor = <small className="_status fulfilled">{status}</small>;
  } else if (status === "cancelled") {
    statusColor = <small className="_status cancelled">{status}</small>;
  } else {
    statusColor = <small className="">{status}</small>;
  }

  let statusColorX;
  switch (status) {
    case 'pending':
      statusColorX = "pending";
      break;
    case 'processed' || 'shipped':
      statusColorX = "processed_shipped";
      break;
    case 'fulfilled':
      statusColorX = "fulfilled";
      break;
    case 'cancelled':
      statusColorX = "cancelled";
      break;
    case 'unknown':
      statusColorX = "unknown";
  }

  return (
    <div className="order_wrapper ">
      <div className=" image_wrapper  ">
        <img
          src={`${okukus}/${cover_photo_url}`}
          className="order_image"
          alt="..."
        />
      </div>

      <div className="order_details  ">
        <div className="order_name">
          <span>{product_name}</span>
        </div>

        <div className="  ">
          <div className=" " hidden>
            <span className="order-qty">1 x </span>
            <span> ₵40</span>
          </div>

          <div className="order_price">
            <span>₵{amount}</span>
          </div>
        </div>

        <div className="order_date_status">
          <div className=" date">
            <small className="">{datetime_ordered}</small>
          </div>

          <div className="order_status">{statusColor}</div>

          <div className="order_status">
            <small className={`_status  ${statusColorX}`}>{status}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vhistory;
