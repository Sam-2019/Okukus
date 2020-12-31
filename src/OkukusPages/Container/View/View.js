import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { okukus } from "../../endpoints";
import "./view.css";

const View = ({ cover_photo_url, product_name, unit_price, unique_id }) => {
  return (
    <NavLink to={`/product/${unique_id}`} className="view_wrapper">
      <div className="item_wrapper ">
        <div className=" item_image_wrapper  ">
          <img
            src={`${okukus}/${cover_photo_url}`}
            alt=""
            className="item_image"
          />
        </div>
        <div className="name_price ">
          <div className="item_name_wrapper">
            <span className="item_name">{product_name}</span>
          </div>

          <div className=" item_price_wrapper ">
            <span className="item_price ">₵{unit_price}</span>

            {/* <span className="discount item">-5%</span> */}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default View;

View.propTypes = {
  cover_photo_url: PropTypes.string,
  product_name: PropTypes.string,
  unit_price: PropTypes.number,
  unique_id: PropTypes.number,
};
