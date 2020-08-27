import React from "react";
import { NavLink } from "react-router-dom";

const View = (props) => {
  return (
    <div className=" product ">
      <NavLink to={/product/ + props.id } className='product_link'>
        <div className=" text-center">
          <img
            src={`https://okukus.com/${props.cover_photo_url}`}
            alt=""
            className="product-image"
          />
        </div>

        <div className="product-name">{props.product_name}</div>

        <div className='buy_button'>
        <button className="price">₵{props.unit_price}</button>
        </div>

       
      </NavLink>
    </div>
  );
};

export default View;
