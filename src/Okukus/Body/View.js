import React from "react";
import { NavLink } from "react-router-dom";

const View = (props) => {
  return (
    <div className=" product">
      <NavLink to={/product/ + props.id}>
        <div>
          <img src="" alt="" className="" />
        </div>

        <div className="product-name">{props.product_name}</div>

        <button className="price">₵{props.unit_price}</button>
      </NavLink>
    </div>
  );
};

export default View;
