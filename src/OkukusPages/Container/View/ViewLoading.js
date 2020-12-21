import React from "react";
import "./view.css";
import book1 from "../../files/book1.png";

const View = () => {
  return (
    <div className="view_wrapper">
      <div className="item_wrapper ">
        <div className=" item_image_wrapper ">
          <img
            src={book1}
            alt=""
            className="picLoad"
          />
        </div>
        <div className="name_price ">
          <div className="item_name_wrapper">
            <span className="item_name">product_name</span>
          </div>

          <div className=" item_price_wrapper ">
            <span className="item_price ">₵420</span>

            {/* <span className="discount item">-5%</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
