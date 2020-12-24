import React from "react";
import "./view.css";
import book1 from "../../files/book1.png";
import spinner from "../../files/spinner.gif";

const View = () => {
  return (
    <div className="view_wrapper">
      <div className="item_wrapper ">
        <div className=" item_image_wrapper  ">
          <img src={spinner} className="picLoad  " />
        </div>
        <div className="name_price ">
          <div className="item_name_wrapper">
            <span className="item_name">Loading...</span>
          </div>

          <div className=" item_price_wrapper ">
            <span className="item_price ">Loading...</span>

            {/* <span className="discount item">-5%</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
