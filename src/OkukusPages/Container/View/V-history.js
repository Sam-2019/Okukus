import React from "react";
import { okukus } from "../../apis";

const Vhistory = ({
  product_name,
  cover_photo_url,
  unit_price,
  datetime_created,
}) => {
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
            <span> $40</span>
          </div>

          <div className="order_price">
            <span>${unit_price}</span>
          </div>
        </div>

        <div className="order_date_status">
          <div className=" date">
            <small className="">{datetime_created}</small>
          </div>

          <div className="order_status">
            <small className="bg-warning">pending</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vhistory;
