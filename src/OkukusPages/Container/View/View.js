import React from "react";
import { NavLink } from "react-router-dom";
import { okukus } from "../../apis";
import "./view.css";

const View = ({ id, cover_photo_url, product_name, unit_price }) => {
  return (
    <NavLink to={/product/ + id} className="view_wrapper ">
      <div className="item_wrapper ">
        <div className=" item_image_wrapper">
          <img
            src={`${okukus}/${cover_photo_url}`}
            alt=""
            className="item_image"
          />
        </div>

        <div className="item_name_wrapper">

          <span className="item_name">{product_name}</span>
        </div>

        <div className=" item_price_wrapper ">
          <span className="item_price item">₵{unit_price}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default View;
